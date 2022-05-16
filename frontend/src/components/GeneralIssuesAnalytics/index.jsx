import { AnalyticsBoardStyled, BoardTitleStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

import { Link as LinkIcon } from 'phosphor-react'

export function GeneralIssuesAnalytics() {
  const { 
    issuesList, 
    getDoneIssues, getLateIssues } = useData();

  return(
    <AnalyticsBoardStyled className="analytics">
      <BoardTitleStyled to='/issues' className="board-title" >
        Total de chamados
        <LinkIcon size="1.6rem" />

      </BoardTitleStyled>
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