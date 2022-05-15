import { StyledIssue } from "./styled";

export function Issue({issue}) {

  const getSimpleDate = (date) => {
    return new Date(date).getDate() +"/"+ (new Date(date).getMonth()+1) +"/"+ new Date(date).getFullYear()
  }
  console.log("ISSUE ITEM", issue)
  return (
    <StyledIssue to={`/issue/${issue.id}`}>
      <div>
        <div className="wrapper">
          <legend>Nº </legend>
          <p>{issue.id}</p>
        </div>
        <div>
          <legend>Descrição</legend>
          <p>{issue.description}</p>
        </div>
      </div>
      <div className="details-wrapper">
        <div>
          <legend>Responsável</legend>
          <p>{issue.responsible.name}</p>
        </div>
        <div>
          <legend>Deadline</legend>
          <p>{getSimpleDate(issue.deadline)}</p>
        </div>
      </div>

    </StyledIssue>
  )
}