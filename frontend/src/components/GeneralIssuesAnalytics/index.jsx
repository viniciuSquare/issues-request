import { AnalyticsBoardStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

import { Link as LinkIcon } from 'phosphor-react'
import { BoardHeader } from "../BoardHeader";
import { Link } from "react-router-dom";

export function GeneralIssuesAnalytics() {
  const { 
    issuesList, 
    getDoneIssues, getLateIssues } = useData();

  return(
    <AnalyticsBoardStyled className="analytics">
      <BoardHeader to='/issues' className="board-title" >
        Total de chamados
        <Link to="/issues" ><LinkIcon size="1.6rem" /></Link>
      </BoardHeader>
      <table>
        <tbody>
          <tr>
            <td>Total de chamados</td>
            <td>{ issuesList.length }</td>
          </tr>
          <tr>
            <td>Chamados concluídos</td>
            <td>{ getDoneIssues()?.length || 0}</td>
          </tr>
          <tr>
            <td>Chamados atrasados</td>
            <td>{ getLateIssues()?.length || 0 }</td>
          </tr>
        </tbody>
      </table>
    </AnalyticsBoardStyled>
  )
}