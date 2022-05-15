import { useData } from "../../hooks/useData";

import { StyledIssuesPage } from "./styled";

import { PageHeader } from "../../components/PageHeader";
import { Issue } from "../../components/Issue";

export function Issues() {

  const { 
    issuesList,
    isLoading
   } = useData();

  return(
    <StyledIssuesPage className="container">
      <PageHeader title="Chamados"/>
      <div className="issues-list">
        { !isLoading &&
          issuesList.map ( (issue,idx) => <Issue key={idx} issue={issue} />)
        }
      </div>
    </StyledIssuesPage>
  )
}