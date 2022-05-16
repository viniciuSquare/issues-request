import { CheckCircle, HouseSimple, Plus } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CreatedFeedbackModalStyled } from './styled'

export default function CreatedFeedbackModal({ toggleVisibility, feedbackText = "Criado com sucesso" }) {
  
  const handleToggleVisibility = (event) => {
    if(event.target == event.currentTarget) 
      toggleVisibility()
    else return
  }

  return( 
    <CreatedFeedbackModalStyled onClick={handleToggleVisibility}>
      <div className="modal-content">
        <CheckCircle size='25rem' color='#19d316'/>
        <h1>{feedbackText}</h1>
        <div className="buttons-wrapper">
          <Link to='/'><HouseSimple size='1.5rem'/>Voltar à Dashboard</Link>
          <Link to='/issue/create'><Plus size='1.5rem'/>Criar outro</Link>
        </div>
      </div>
    </CreatedFeedbackModalStyled>

  )
}