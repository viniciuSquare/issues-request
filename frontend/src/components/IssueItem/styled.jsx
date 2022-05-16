import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledIssue = styled.div`
  display: grid ;
  grid-template-rows: 2rem auto ;
  width: 100% ;
  
  background-color: lightgray ;
  box-shadow: 0px 8px 8px 2px rgba(0,0,0,0.1);

  padding: 0.5rem 1.5rem 0.8rem;
  margin-bottom: 1rem ;

  border-radius: 4px;

  color: inherit;

  gap: 0.4rem ;

  &.solved {
    .issue-description, .details {
      color: #004a00 ;
    }
    background-color: #009f0014;
  }

  div.issue-head {
    width: 100% ;

    border-bottom: 1px solid #adadadba;
    margin-bottom: 0.5rem;
    .wrapper {
      column-gap: 0.2rem;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    align-items: center;
    .details {
      column-gap: 0.8rem;
      .wrapper {
        column-gap: 0.3rem;
      }
    }

  }
`