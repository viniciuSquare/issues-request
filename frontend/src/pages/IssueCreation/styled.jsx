import styled from "styled-components";

export const StyledIssueCreation = styled.div`
  width: 100%;

`

export const StyledForm = styled.form`
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

  input[type='checkbox'] {
    height: 1.2rem ;
  }

  .checkbox-wrapper {
    display: flex ;
    justify-content: space-between ;
    input {
      width: 2rem;
    }

  }
  .input-wrapper {
    margin-bottom: 1rem;
  }
  
  .wrapper-side {
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
`