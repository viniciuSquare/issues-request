import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const DataContext = createContext({});

export function DataContextProvider(props) {
  const [issuesList, setIssuesList] = useState([]);
  const [issue, setIssue] = useState({});

  const [responsibleList, setResponsibleList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const getTodayDate= () => "" + new Date().getFullYear() +"-"+ (new Date().getMonth()+1) +"-"+ new Date().getDate()
  const isTodayOverDeadline = (issue) => new Date(getTodayDate()) > new Date(issue.deadline);

  async function fetchIssuesList() {
    setIsLoading(true)

    const { data: issues } = await api.get('/issues');

    setIssuesList(issues);
    isLoading && setIsLoading(false);
  }

  async function fetchIssueById( issueId ){ 
    setIsLoading(true)

    const { data: issue } = await api.get(`/issues/${issueId}`);

    setIssue(issue);
    isLoading && setIsLoading(false);
  }

  function getDoneIssues() {
    console.log("GET ISSUES DONE",issuesList)
    return issuesList.filter( issue => issue.isItDone )
  }

  function getLateIssues() {
    // FILTER WHERE ISSUE DEADLINE IS LESS THEN TODAY`S DATE
    return issuesList.filter( isTodayOverDeadline ) ;
  }

  async function fetchResponsibleUsersList() {
    setIsLoading(true)

    const { data: responsibles } = await api.get('/responsibles');

    setResponsibleList(responsibles);
    isLoading && setIsLoading(false);
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
        getDoneIssues, getLateIssues
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}