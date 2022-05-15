import styled from "styled-components";

export const StyledIssueCreation = styled.div`
 
  width: 100%;

  form {
    display: grid;
    grid-template-columns: auto 15rem;
    grid-template-areas: "description-input side-wrapper"
                         ". submit-button";
    column-gap: 1rem;

    & > div {
      padding: 0 0.5rem ;
    }

    input, select, textarea {
      padding: 0.2rem ;
      text-overflow: ellipsis;
      
      width: 100% ;
      height: 80%;
    }

    input, select {

    }

    .input-wrapper {
      margin-bottom: 0.5rem;
    }
    
    .wrapper-side {
      height: 100%;
      /* background-color: #80808036 ; */
  
      /* color: white; */

      grid-area: side-wrapper;
    }
    
    & > .input-wrapper {
      grid-area: description-input;
    }

    button {
      grid-area: submit-button;
      padding: 0.4rem ;
      margin: 1rem 0.4rem ;
    }

    

  }




`