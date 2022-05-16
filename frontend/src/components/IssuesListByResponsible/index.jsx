import { useData } from "../../hooks/useData"

import { StyledIssuesList } from "./styled"

import { IssuesList } from '../IssuesList'

export function IssuesListByResponsible() {
  const { responsibleList } = useData();
  return(
    <StyledIssuesList>
      <h2>Chamados por responsável</h2>
      {
        responsibleList.map ( (responsible,idx) => {
          console.log(responsible)
          return (
            <div key={idx} className="responsible-issues" >
              <h3 >{responsible.name}</h3>
              <IssuesList list={responsible.issues} headless/>
            </div>
          ) 
        }
        )
      }
    </StyledIssuesList>
  )

}