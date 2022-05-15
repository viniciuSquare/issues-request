import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewActionButton } from './components/NewActionButton';
import { SideBar } from './components/Sidebar';

import { StyledApp } from './styled'

import { Dashboard } from './pages/Dashboard';
import { IssueCreation } from './pages/IssueCreation/';
import { DataContextProvider } from './context/DataContext';
import { Issues } from './pages/Issues';
import { Issue } from './pages/Issue';

export function Router() {
  return (
    <DataContextProvider>
      <StyledApp>
        <BrowserRouter>
          <SideBar/>

          <Routes>
            <Route path='/' element={<Dashboard/>} exact/>

            <Route path='/issues' element={<Issues/>} exact/>
            <Route path='/issue/create' element={<IssueCreation/>} exact/>
            <Route path='/issue/:id' element={<Issue/>} />
          </Routes>

          <NewActionButton/>
        </BrowserRouter>
      </StyledApp>
    </DataContextProvider>
  )

}