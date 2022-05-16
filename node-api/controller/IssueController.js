const IssuesServices = require('../service/IssuesServices');

const issuesRouter = require('express').Router()

// GET ALL ISSUES
issuesRouter.get('/', new IssuesServices().getIssues );

// CREATING NEW ISSUE
issuesRouter.post('/', new IssuesServices().createIssue );

// GET SINGLE ISSUE
issuesRouter.get('/:id', new IssuesServices().getIssueData );

// UPDATE AN ISSUE
issuesRouter.post('/:id', new IssuesServices().createIssueAction );

module.exports= issuesRouter