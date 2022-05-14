import { AnalyticsBoardStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

export function GeneralIssuesAnalytics({total}) {
  const { getDoneIssues, getLateIssues } = useData();

  return(
    <AnalyticsBoardStyled className="analytics">
      <h2 className="board-title" >Total de chamados</h2>
      <table>
        <tbody>
          <tr>
            <td>Total de chamados</td>
            <td>{ total }</td>
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