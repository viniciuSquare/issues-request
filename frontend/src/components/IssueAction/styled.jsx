import styled from 'styled-components'

export const StyledAction = styled.div`
  padding: 0.5rem 1.5rem 0.8rem;

  height: 3rem ;
  background-color: whitesmoke ;
  margin: 0.2rem ;

  display: flex ;
  justify-content: space-between ;
  align-items:center ;

  border-radius: 4px;

  &.solved {
    color: #004a00 ;
    background-color: #009f0014;
  }
  
  .wrapper {
    display: flex;
    justify-content: space-between; 

    column-gap: 0.2rem;
  }
`