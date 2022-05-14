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