import { StyledAction } from "./styled";

import {CalendarBlank} from 'phosphor-react'
import { useData } from "../../hooks/useData";

export function IssueAction({action}) {
  const {getSimpleDate} = useData()
  return (
    <StyledAction className={ action.isResolution && "solved" }>
      <p>{action.description}</p>

      <div className="wrapper">
        <CalendarBlank size='1.2rem' />
        <p>{getSimpleDate(action.date)}</p>
      </div>
    </StyledAction>
  )
}