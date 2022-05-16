import { StyledIssue } from "./styled";

import {CalendarBlank, PaperPlaneTilt, User} from 'phosphor-react'
import { useData } from "../../hooks/useData";

export function Issue({issue}) {
  const {getSimpleDate} = useData()
  return (
    <StyledIssue className={ issue.isDone && "solved" }>
      <div className="issue-head wrapper">
        <div className="wrapper">
          <legend>Nº </legend>
          <p>{issue.id}</p>
        </div>
        <div className="wrapper">
          <legend><User size="1.2rem"/></legend>
          { issue.responsible?.name &&
            <p>{issue.responsible.name}</p>
          }
        </div>
      </div>
      <div className="wrapper">
        <div className="issue-description">
          <p><strong>{issue.description}</strong></p>
        </div>
        <div className="wrapper details">
          <div className="wrapper">
            <PaperPlaneTilt size="1.2rem" />
            <p>{issue.issueActions?.length}</p>
          </div>
          <div className="wrapper">
            <CalendarBlank size='1.2rem' />
            <p>{getSimpleDate(issue.deadline)}</p>
          </div>
        </div>
      </div>

    </StyledIssue>
  )
}