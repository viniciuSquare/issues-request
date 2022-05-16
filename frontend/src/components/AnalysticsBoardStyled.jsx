import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnalyticsBoardStyled = styled.div`
  /* APPLIED TO PARTIALS */
  table {
    border: 1px solid black ;

    margin-bottom: 2rem ;
    tr {
      height: 2rem;
      
      td:not(:first-child) {
        text-align: center;
      }

      td:first-child {
        font-weight: bold;
      }
      
      td, th {
        border: 1px solid black ;
        text-align: left ;
        padding: 0.4rem 0.2rem;
        min-width: 80px ;
      }
    }
  }
`
export const BoardTitleStyled = styled(Link)`
  display: flex ;
  justify-content: space-between;
  
  font-size: 1.5rem;

  height: 2.5rem;
  padding: 0 0.8rem;

  border-radius: 4px;

  background-color: #71a3ff79;
`