const { prisma } = require("@prisma/client");

function getOccurrenceFromRequestBody(requestBody) {
  const {

  } = requestBody;
}

class OccurrenceServices {
  async getIssueOccurrences(request,response) {
    await prisma.issueOccurrence.findMany({
      
    })
  }
}