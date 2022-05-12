import { StyledPageHeader } from "./styled";

export function PageHeader({title}) {
  return (
    <StyledPageHeader>
      <h1>{title}</h1>
    </StyledPageHeader>
  )
}