import { StyledPageHeader } from "./styled";

export function PageHeader({title}) {
  return (
    <StyledPageHeader className="header-title">
      <h1>{title}</h1>
    </StyledPageHeader>
  )
}