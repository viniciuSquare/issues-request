import styled from "styled-components";

export const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;

  width: 180px;
  height: 100vh ;
  padding: 2rem 1rem; 
  
  a {
    height: 2.5rem;
    
    display: flex ;
    align-items: center ;
    
    margin-bottom: 1rem ;
    padding-left: 0.5rem ;

    background-color: lightblue;
    border-radius: 4px ;
  }

  button {
     align-self: flex-end ;
  }
`