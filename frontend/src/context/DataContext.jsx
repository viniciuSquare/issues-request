import { createContext, useState } from "react";
import api from "../api/api";

export const DataContext = createContext({});

export function DataContextProvider(props) {
  const [issuesList, setIssuesList] = useState([]);
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

  function getDoneIssues() {
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

  return(
    <DataContext.Provider
      value={{
        isLoading,
        responsibleList, issuesList,
        fetchResponsibleUsersList, fetchIssuesList,
        getDoneIssues, getLateIssues
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}