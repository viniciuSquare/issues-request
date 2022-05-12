import { StyledDashboard } from "./styled";

export function Dashboard() {
  return(
    <StyledDashboard>
      <h1 className="page-title">Dashboard</h1>

      <PeriodAnalytics/>
      <ResponsibleAnalytics/>

    </StyledDashboard>
  )
}

function PeriodAnalytics() {
  return(
    <div className="analytics">
      <h2>Chamados por período</h2>
      <table>
        <tbody>
          <tr>
            <td>Total de chamados do período</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Chamados concluídos</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Chamados atrasados</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function ResponsibleAnalytics() {
  return(
    <div className="analytics">
      <h2>Chamados por responsável</h2>
      <table>
        <tbody>
          <tr>
            <th>Responsável</th>
            <th>Total</th>
            <th>Concluídos</th>
            <th>Atrasados</th>
          </tr>

          <tr>
            <td>Vinícius</td>
            <td>7</td>
            <td>2</td>
            <td>1</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}