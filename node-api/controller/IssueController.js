const IssuesServices = require('../service/IssuesServices');

const issuesRouter = require('express').Router()

// GET ALL ISSUES
issuesRouter.get('/', new IssuesServices().getIssues );
// CREATING NEW ISSUE
issuesRouter.post('/', new IssuesServices().createIssue);
// OK --------------

// TODO - QUERY BY PERIOD
// TODO - ADD OCCURRENCE

// GET SINGLE ISSUE
issuesRouter.get('/:id', new IssuesServices().getIssueData);

// UPDATE AN ISSUE
issuesRouter.post('/:id', );

module.exports= issuesRouter