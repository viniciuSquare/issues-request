const getTodayDate= () => "" + new Date().getFullYear() +"-"+ (new Date().getMonth()+1) +"-"+ new Date().getDate()
const isTodayOverDeadline = (issue) => {  
  new Date(getTodayDate()) > new Date(issue.deadline);
}

function getDoneIssues(issuesList) {
  return issuesList.filter( issue => issue.isItDone )
}

function getLateIssues(issuesList) {
  // FILTER WHERE ISSUE DEADLINE IS LESS THEN TODAY`S DATE
  return issuesList.filter( isTodayOverDeadline ) ;
}

module.exports = {  
  getDoneIssues,
  getLateIssues
}