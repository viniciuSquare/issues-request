const UserServices = require('../service/ResponsibleServices')

const usersRouter = require('express').Router()

usersRouter.get('/', new UserServices().getUsers);
// usersRouter.get('/by-responsible', new UserServices().getIssuesByResponsible);

module.exports = usersRouter