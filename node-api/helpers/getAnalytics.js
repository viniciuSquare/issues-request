const getTodayDate= () => "" + new Date().getFullYear() +"-"+ (new Date().getMonth()+1) +"-"+ new Date().getDate()

const isTodayOverDeadline = (deadline) => new Date(getTodayDate()) > new Date(deadline)

// function filterSolvedIssues ;
function getDoneIssues(issuesList) {
  return issuesList.filter( issue => issue.isDone )
}

function getLateIssues(issuesList) {
  // FILTER WHERE ISSUE DEADLINE IS LESS THEN TODAY`S DATE
  return issuesList.filter( isTodayOverDeadline ) ;
}


module.exports = {  
  getDoneIssues,
  getLateIssues,
  isTodayOverDeadline
}