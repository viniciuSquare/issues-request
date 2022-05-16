const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

function getUserFromRequestBody(requestBody) {
  const {
    id,
    name,
    role
  } = requestBody;

  const responsible = {
    id,
    name,
    role
  }

  return responsible;
}

class UserServices {
  async getUsers(request, response) {
    const usersWithIssues = await prisma.user.findMany({
      include: {
        Issue: true
      }
    });

    usersWithIssues.forEach( (user, idx) => {
      usersWithIssues[idx].issuesCount = usersWithIssues[idx].Issue?.length || 0;
      usersWithIssues[idx].issues = usersWithIssues[idx].Issue
      
      delete usersWithIssues[idx].Issue

    } )

    response.json(usersWithIssues);
  }

  async createUser( request, response ) {
    const { user: userToCreate } = getUserFromRequestBody(request.body);

    const newUser = await prisma.user.create({
      data: {
        ...userToCreate
      }
    }).then( user => response.status(201).json(user) )
    .catch( error => response.status(403) )

  }

}

module.exports = UserServices