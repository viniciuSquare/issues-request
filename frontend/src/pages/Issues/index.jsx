import { NavLink } from "react-router-dom";

import { useData } from "../../hooks/useData";

import { StyledIssuesPage } from "./styled";

import { PageHeader } from "../../components/PageHeader";


export function Issues({children}) {

  const { isLoading } = useData();

  return(
    <StyledIssuesPage className="container">
      <PageHeader title="Chamados"/>
      <main>
        <div className="filters">
          <legend>Filtros</legend>
          <NavLink to="/issues" className="button">
            Todos
          </NavLink>
          <NavLink to="/issues/by-responsible" className="button">
            Por responsável
          </NavLink>
        </div>
        <div className="issues-list">
          { !isLoading && children }
        </div>
      </main>
    </StyledIssuesPage>
  )
}