import { PageHeader } from "../../components/PageHeader";

import { useData } from "../../hooks/useData";

import { GeneralIssuesAnalytics } from "../../components/GeneralIssuesAnalytics";
import { ResponsibleAnalytics } from "../../components/ResponsibleUsersAnalytics";

import { StyledDashboard } from "./styled";

export function Dashboard() {
  const { 
    issuesList,
    isLoading 
  } = useData();

  return(
    <StyledDashboard className="container" >
      <PageHeader title="Dashboard" />
      { !isLoading &&
        <main>
          <GeneralIssuesAnalytics />
          <ResponsibleAnalytics />
        </main>
      }

    </StyledDashboard>
  )
}