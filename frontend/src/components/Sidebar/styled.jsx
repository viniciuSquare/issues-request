import styled from "styled-components";

export const StyledSideBar = styled.aside`
  /* background-color: #0d2d6c; */
  background-color: #24244d;

  display: flex;
  flex-direction: column;

  height: 100vh ;
  padding: .5rem 1rem 1.5rem; 
  
  .header-title {
    color: whitesmoke;
  }
  
  a {
    height: 2.5rem;
    
    display: flex ;
    align-items: center ;
    
    margin-bottom: 1rem ;
    padding-left: 1rem ;

    background-color: #669bfe95;
    border-radius: 4px ;

    color: #ffffff;
    font-size: 1.1rem;
  }

  button {
     align-self: flex-end ;
  }
`