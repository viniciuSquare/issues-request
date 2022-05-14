const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

function getIssueFromRequestBody( requestBody ) {
  const { 
    deadline,
    description,
    responsible,
    isItDone
  } = requestBody;

  const issue =  { 
    deadline,
    description,
    responsible,
    isItDone
  } 

  return issue;
}

function getIssueActionFromRequestBody( requestBody ) {
  const { 
    date,
    description,
    author,
    isItResolution
  } = requestBody;

  const issue =  { 
    date,
    description,
    author,
    isItResolution
  } 

  return issue;
}

class IssuesServices {
  async getIssues(request, response) {
    const allIssues = await prisma.issue.findMany({
      include: {
        responsible: true,
        issueActions: true
      }
    });

    // TODO - ADD ANALYTICS HEADER
    
    response.json(allIssues);
  }

  async createIssue(request, response) {
    const issue = getIssueFromRequestBody(request.body);
    const { responsible: responsibleId, deadline } = issue;
    delete issue.responsible;

    const issueCreated = await prisma.issue.create({
      data: {
        ...issue,
        deadline: new Date(deadline),
        responsible: {
          connect: {
            id: Number(responsibleId)
          }
        }
      }
    })
    
    return response.status(201).json(issueCreated);
  }

  async getIssueData(request, response) {
    const {id} = request.params;

    const issueData = await prisma.issue.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        responsible: true,
        issueActions: true
      }
    })
    response.json(issueData);
  }

  async updateIssueWithAction(request, response) {

  }

}

module.exports = IssuesServices