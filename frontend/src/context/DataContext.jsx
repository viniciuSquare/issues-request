import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const DataContext = createContext({});

export function DataContextProvider(props) {
  const [issuesList, setIssuesList] = useState([]);
  const [issue, setIssue] = useState({});

  const [responsibleList, setResponsibleList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchIssuesList() {
    setIsLoading(true)

    const { data: issues } = await api.get('/issues');

    setIssuesList(issues);
    setIsLoading(false);
  }

  async function fetchIssueById( issueId ){ 
    setIsLoading(true)

    const { data: issue } = await api.get(`/issues/${issueId}`);

    setIssue(issue);
    setIsLoading(false);
  }

  // TODO -> REFACTOR DATA HANDLERS
  const getTodayDate= () => "" + new Date().getFullYear() +"-"+ (new Date().getMonth()+1) +"-"+ new Date().getDate()
  const isTodayOverDeadline = (issue) => new Date(getTodayDate()) > new Date(issue.deadline);
  const getSimpleDate = (date) => {
    let formattedDate = new Date(date).getDate() +"/"+ (new Date(date).getMonth()+1) +"/"+ new Date(date).getFullYear();
    formattedDate = formattedDate.split("/");
    
    const simpleDate = formattedDate.map( number => number.padStart(2,'0') ).join("/")

    return simpleDate
  }

  function getDoneIssues(list = issuesList) {
    const doneIssues = list.filter( issue => issue.isDone )
    console.log("DONE ISSUES", doneIssues)
    return doneIssues
  }

  function getLateIssues(list = issuesList) {
    // FILTER WHERE ISSUE DEADLINE IS LESS THEN TODAY`S DATE
    const undoneIssues = list.filter( issue => !issue.isDone )
    const lateIssues = undoneIssues.filter( isTodayOverDeadline ) ;
    console.log("RESPONSIBLE ISSUES", lateIssues)
    return lateIssues
  }

  async function fetchResponsibleUsersList() {
    setIsLoading(true)

    const { data: responsibles } = await api.get('/responsibles');

    setResponsibleList(responsibles);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchIssuesList()
    fetchResponsibleUsersList()
  }, [])

  return(
    <DataContext.Provider
      value={{
        isLoading,
        responsibleList, issuesList, issue,
        fetchResponsibleUsersList, fetchIssuesList, fetchIssueById,
        getDoneIssues, getLateIssues, getSimpleDate
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}