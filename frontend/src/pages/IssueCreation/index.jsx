import { useState } from 'react'

import { PageHeader } from '../../components/PageHeader';
import { StyledIssueCreation } from './styled'

export function IssueCreation() {

  const [formData, setFormData] = useState({})

  function handleFormChange(event) {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormData({ ...formData, [fieldName] : fieldValue })
  }

  function handleSubmittion(event) {
    event.preventDefault();
    
    console.log(formData)

    // TODO -> SEND TO API

  }

  return(
    <StyledIssueCreation >
      <PageHeader title="Criar chamado"/>
      <form onChange={handleFormChange} onSubmit={handleSubmittion}>
        <div className="wrapper-side">
          <div className="input-wrapper">
            <legend htmlFor="issue-responsible">Responsável</legend>
            <input type="text" id="issue-responsible" name="responsible" />
          </div>
          <div className="input-wrapper">
            <legend htmlFor="issue-deadline">Deadline</legend>
            <input type="date" id="issue-deadline" name="deadline" />
          </div>
        </div>
        <div className="input-wrapper">
          <legend htmlFor="issue-description">Descrição</legend>
          <textarea type="text" id="issue-description" name="description" />
        </div>
        <button >Enviar</button>
      </form>
    </StyledIssueCreation>
  )  
}