import { NavLink } from "react-router-dom";
import { StyledSideBar } from "./styled";

export function SideBar() {

  return(
    <StyledSideBar>
      <h1>Square Calls</h1>
      <div className="nav">
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/issues'>Chamados</NavLink>
        <NavLink to='/users'>Usuários</NavLink>
      </div>

      <button>Hide  </button>
    </StyledSideBar>
  )

}