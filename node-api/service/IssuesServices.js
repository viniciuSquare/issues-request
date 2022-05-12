function getIssueFromRequestBody( requestBody ) {
  const { 
    deadline,
    description,
    responsible
  } = requestBody;

  const issue =  { 
    deadline,
    description,
    responsible
  } 

  return issue;
}

class IssuesServices {
  async getIssues(request, reponse) {
    const allIssues = await prisma.issues.findMany({
      include: {
        responsible: true
      }
    })
    response.json(allIssues);
  }

  async createIssue(request, response) {
    const issue = getIssueFromRequestBody(request.body);
    const { responsible: responsibleId } = issue;
    delete issue.responsible;

    const issueCreated = await prisma.issue.create({
      data: {
        ...issue,
        responsibleId
      }
    })
    
    return response.status(201).json(issueCreated);
  }
}