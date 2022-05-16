const { PrismaClient } = require("@prisma/client");
const { isTodayOverDeadline } = require("../helpers/getAnalytics");

const prisma = new PrismaClient();

function getIssueFromRequestBody(requestBody) {
  const { 
    deadline, 
    description, 
    responsible, 
    isDone
  } = requestBody;

  const issue = {
    deadline,
    description,
    responsible,
    isDone,
  };

  return issue;
}

function getIssueActionFromRequestBody(requestBody) {
  const { 
    date, 
    description, 
    isResolution, 
    issueId, 
    author 
  } = requestBody;

  const issue = {
    date,
    description,
    isResolution,
    issueId,
    author,
  };

  return issue;
}

class IssuesServices {
  async getIssues(request, response) {
    const allIssues = await prisma.issue.findMany({
      include: {
        responsible: true,
        issueActions: true,
      },
    });

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
            id: Number(responsibleId),
          },
        },
      },
    });

    return response.status(201).json(issueCreated);
  }

  async getIssueData(request, response) {
    const { id } = request.params;

    const issueData = await prisma.issue.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        responsible: true,
        issueActions: true,
      },
    });
    response.json(issueData);
  }

  async setIssueAsDone(issueId) {
    await prisma.issue.update({
      where: {
        id: issueId,
      },
      data: {
        isDone: true,
      },
    });
  }

  async createIssueAction(request, response) {
    const issueAction = getIssueActionFromRequestBody(request.body);
    const { date, author: userId } = issueAction;

    delete issueAction.date;
    delete issueAction.author;

    const createdIssueAction = await prisma.issueAction.create({
      data: {
        ...issueAction,
        userId,
        date: new Date(date),
      },
    });

    if (issueAction.isResolution)
      new IssuesServices().setIssueAsDone(issueAction.issueId);

    response.status(201).json(createdIssueAction);
  }
}

module.exports = IssuesServices;
