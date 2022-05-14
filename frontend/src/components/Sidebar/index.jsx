import { NavLink } from "react-router-dom";
import { StyledSideBar } from "./styled";

export function SideBar() {

  return(
    <StyledSideBar>
      <h1 className="header-title">Square Calls</h1>
      <div className="nav">
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/issues'>Chamados</NavLink>
      </div>

      <button>Hide  </button>
    </StyledSideBar>
  )

}