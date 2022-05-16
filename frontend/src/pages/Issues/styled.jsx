import styled from 'styled-components'

export const StyledIssuesPage = styled.div`
  /* height: 100% ; */
  main {
    display: grid;
    grid-template-columns: 15rem auto;
  
    overflow-y: auto ;

  }

  .filters {
    width: 80%;
    display: flex;
    flex-direction: column;
    
    gap: 0.4rem ;
    &:hover {
      legend {
        color: #5568fe ;
      }
    }

    legend {
      color: #8c9aff ;
      font-size: 1.05rem ;
    }
    
    a {
      width: 90%;
      height: 2.4rem ;
      padding: 0.5rem;
      font-size: 1rem;

    }
  }

`