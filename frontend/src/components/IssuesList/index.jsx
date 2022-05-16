import { Link } from "react-router-dom";
import { Issue } from "../IssueItem";

import { useData } from "../../hooks/useData"

import { StyledIssuesList } from "./styled"

export function IssuesList({list, headless}) {
  if(list == undefined) {
    const { issuesList } = useData();
    list = issuesList;
  }
  return(
    <StyledIssuesList>
      {
        !headless &&
        <h2>Todos os chamados</h2>
      }
      {
        list.map ( (issue,idx) => 
          <Link to={`/issue/${issue.id}`} key={idx}>
            <Issue issue={issue}/>
          </Link>
        )
      }
    </StyledIssuesList>
  )

}