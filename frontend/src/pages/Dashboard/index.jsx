import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";

import { useData } from "../../hooks/useData";

import { GeneralIssuesAnalytics } from "../../components/GeneralIssuesAnalytics";
import { ResponsibleAnalytics } from "../../components/ResponsibleUsersAnalytics";

import { StyledDashboard } from "./styled";

export function Dashboard() {
  const { 
    issuesList,
    fetchIssuesList, fetchResponsibleUsersList,  
    isLoading 
  } = useData();

  useEffect(() =>{
    fetchIssuesList();
    fetchResponsibleUsersList()
  },[])
  return(
    <StyledDashboard className="container">
      <PageHeader title="Dashboard" />
      { !isLoading &&
        <>
          <GeneralIssuesAnalytics total={issuesList?.length} />
          <ResponsibleAnalytics />
        </>
      }

    </StyledDashboard>
  )
}