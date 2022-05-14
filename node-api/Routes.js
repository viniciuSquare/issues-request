const { Router } = require('express')

const issuesRouter = require("./controller/IssueController");
const usersRouter = require('./controller/UsersController');

const routes = Router();

routes.use('/issues', issuesRouter);
routes.use('/responsibles', usersRouter);

module.exports = routes