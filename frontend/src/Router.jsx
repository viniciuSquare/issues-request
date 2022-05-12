import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewActionButton } from './components/NewActionButton';
import { SideBar } from './components/Sidebar';

import { StyledApp } from './styled'

import { Dashboard } from './pages/Dashboard';
import { IssueCreation } from './pages/IssueCreation/';

export function Router() {
  return (
    <StyledApp>
      <BrowserRouter>
        <SideBar/>

        <Routes>
          <Route path='/' element={<Dashboard/>} exact/>
          <Route path='/users' element={<h1>CREATE</h1>} />

          <Route path='/issues' element={<h1>Listagem</h1>} exact/>
          <Route path='/issue/:id' element={<h1>Chamado</h1>} />
          <Route path='/issue/create' element={<IssueCreation/>} exact/>
        </Routes>

        <NewActionButton/>
      </BrowserRouter>
    </StyledApp>
  )

}