import { AnalyticsBoardStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

import { BoardHeader } from "../BoardHeader";

import { Link as LinkIcon } from "phosphor-react";
import { Link } from "react-router-dom";

export function ResponsibleAnalytics() {
  const { 
    responsibleList: responsibleUsersList,
    getDoneIssues, getLateIssues
  } = useData();
  return(
    <AnalyticsBoardStyled className="analytics">
      <BoardHeader BoardHeader to='issues/by-responsible' className="board-title" >
        Chamados por responsável 
        <Link to="/issues/by-responsible" ><LinkIcon size="1.6rem" /></Link>
      </BoardHeader>
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