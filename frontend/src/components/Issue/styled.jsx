import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledIssue = styled(Link)`
  display: flex ;
  
  background-color: lightgray ;

  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem ;

  border-radius: 4px;

  color: inherit;

  div:first-child {
    width: 70% ;
  }

  .details-wrapper {
    width: 30%;
  }

  legend {
    opacity: 0.7 ;
  }

  .wrapper {
    display: flex;
    gap: 0.2rem;

    margin-bottom: 0.5rem;
  }
`