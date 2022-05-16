import styled from "styled-components";

export const StyledApp = styled.div`
  max-height: 100vh;
  max-width: 100vw;

  display: grid;

  grid-template-columns: 15rem auto ;

  .container {
    padding: 0 5%;
    
    display: flex ;
    flex-direction: column;
  }

  .header-title {
    padding: 1rem 0;
    height: 5rem;

    align-items: center;
  
    margin-bottom: 0.2rem ;

  }

  .board-title {
    margin-bottom: 0.4rem ;
  }

  button, a.button {
    background-color: blue;
    color: white;
    
    font-size: 1.2rem;

    border: none ;
    border-radius: 4px;
  }
  

`