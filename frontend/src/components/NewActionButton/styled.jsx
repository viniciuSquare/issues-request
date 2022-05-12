import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNewActionButton = styled(Link)`
  position: absolute ;
  bottom: 4rem;
  right: 5rem;

  height: 3rem ;
  padding: 0 0.6rem ;

  border: none ;
  border-radius: 4px;

  background-color: blue;
  color: white;
  font-size: 1.2rem;

  display: flex ;
  align-items: center ;

  svg {
    margin-right: 0.5rem ;
  }
`