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
    const users = usersWithIssues.map( user => {
      return {
        id: user.id,
        name: user.name,
        role: user.role,
        issuesCount: user.Issue?.length || 0
      }
    })
    response.json(users);
  }

}

module.exports = UserServices