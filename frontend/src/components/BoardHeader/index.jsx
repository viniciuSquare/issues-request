import { StyledBoardHeader } from "./styled";

export function BoardHeader({ children, ...rest }) {
  return (
    <StyledBoardHeader className="board-title" {...rest}>
      { children }
    </StyledBoardHeader>
  )
}