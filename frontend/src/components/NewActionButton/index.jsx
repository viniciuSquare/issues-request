import { Plus } from 'phosphor-react'
import { StyledNewActionButton } from './styled'


export function NewActionButton() {

  return (
    <StyledNewActionButton to="/issue/create">
      <Plus size='1.5rem'/>
      <span className='hidden-span-container'>
        <span>Novo chamado</span>
      </span>
    </StyledNewActionButton>
  )
}