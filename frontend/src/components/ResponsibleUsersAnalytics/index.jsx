import { AnalyticsBoardStyled } from "../AnalysticsBoardStyled";

import { useData } from "../../hooks/useData";

export function ResponsibleAnalytics() {
  const { responsibleList: responsibleUsersList } = useData();
  return(
    <AnalyticsBoardStyled className="analytics">
      <h2 className="board-title" >Chamados por responsável</h2>
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
                  <td>2</td>
                  <td>1</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </AnalyticsBoardStyled>
  )
}