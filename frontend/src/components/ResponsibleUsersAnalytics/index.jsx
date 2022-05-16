import { AnalyticsBoardStyled, BoardTitleStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

import { Link as LinkIcon } from "phosphor-react";

export function ResponsibleAnalytics() {
  const { 
    responsibleList: responsibleUsersList,
    getDoneIssues, getLateIssues
  } = useData();
  return(
    <AnalyticsBoardStyled className="analytics">
      <BoardTitleStyled to='issues/by-responsible' className="board-title" >
        Chamados por responsável 
        <LinkIcon size="1.6rem" />
      </BoardTitleStyled>
      <table>
        <tbody>
          <tr>
            <th>Responsável</th>
            <th>Total</th>
            <th>Concluídos</th>
            <th>Atrasados</th>
          </tr>
          {
            responsibleUsersList.map( (responsible, idx) => {
              return (
                <tr key={idx}>
                  <td>{responsible.name}</td>
                  <td>{responsible.issuesCount}</td>
                  <td>{getDoneIssues(responsible.issues).length || 0}</td>
                  <td>{getLateIssues(responsible.issues).length || 0}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </AnalyticsBoardStyled>
  )
}