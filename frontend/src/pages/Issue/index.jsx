import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
import { StyledIssuesPage } from "../Issues/styled";
import { Issue as IssueItem } from '../../components/Issue'

export function Issue() {
  const { 
    isLoading, 
    fetchIssueById, 
    issue
  } = useData()

  useEffect(()=>{
    fetchIssueById(1);
  },[])

  return(
    <StyledIssuesPage className="container">
      { !isLoading &&
        <IssueItem issue={issue} />
      }
      <h1>WORKS</h1>
    </StyledIssuesPage>
  )
}