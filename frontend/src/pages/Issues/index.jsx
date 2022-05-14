import { useEffect } from "react";

import { useData } from "../../hooks/useData";

import { PageHeader } from "../../components/PageHeader";
import { StyledIssuesPage } from "./styled";

export function Issues() {

  const { 
    issuesList, fetchIssuesList,
    isLoading
   } = useData();

  useEffect(()=>{
    if(!issuesList?.length) 
      fetchIssuesList();

  },[])

  const getSimpleDate = (date) => {
    return new Date(date).getDate() +"/"+ (new Date(date).getMonth()+1) +"/"+ new Date(date).getFullYear()
  }

  return(
    <StyledIssuesPage className="container">
      <PageHeader title="Chamados"/>
      <div className="issues-list">
        { !isLoading &&
          issuesList.map ( (issue,idx) => {
            return(
              <div key={idx}>
                <h2>{issue.id}</h2>
                <p><strong>{issue.description}</strong></p>
                <div className="responsible-wrapper">
                  <legend>Responsável</legend>
                  <span>{issue.responsible.name}</span>
                </div>
                <div className="deadline-wrapper">
                  <legend>Deadline</legend>
                  <span>{getSimpleDate(issue.deadline)}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </StyledIssuesPage>
  )
}