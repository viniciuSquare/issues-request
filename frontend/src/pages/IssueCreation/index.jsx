import { useState } from 'react'
import api from '../../api/api';
import CreatedFeedbackModal from '../../components/CreatedFeedbackModal';

import { PageHeader } from '../../components/PageHeader';
import { useData } from '../../hooks/useData';
import { StyledIssueCreation } from './styled'

export function IssueCreation() {

  const [formData, setFormData] = useState({})
  const [isCreationFeedbackOn, setIsCreationFeedbackOn] = useState(false)

  const toggleCreationFeedbackState= () => setIsCreationFeedbackOn(!isCreationFeedbackOn);
  
  const { responsibleList } = useData();

  function handleFormChange(event) {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormData({ ...formData, [fieldName] : fieldValue })
  }

  function handleSubmission(event) {
    event.preventDefault();
    if(formData.responsible == undefined || formData.responsible == "")
      alert("Defina um responsável");
    else{
      api.post('/issues', formData)
        .then( ({data: createdIssue}) => {
          toggleCreationFeedbackState()
          
          console.log(`Chamado ${createdIssue.id} criado.`, createdIssue)
        })
    }
    console.log(formData)

  }

  return(
    <StyledIssueCreation className='container' >
      <PageHeader title="Criar chamado"/>
      <form onChange={handleFormChange} onSubmit={handleSubmission}>
        <div className="input-wrapper">
          <legend htmlFor="issue-description">Descrição</legend>
          <textarea type="text" id="issue-description" name="description" />
        </div>
        <div className="wrapper-side">
          <div className="input-wrapper">
            <legend htmlFor="issue-responsible">Responsável</legend>
            <select name="responsible" id="issue-responsible">
              <option value="">Selecione o responsável</option>
              {
                responsibleList?.map( responsible => {
                  return <option key={responsible.id} value={responsible.id}>{responsible.name} - {responsible.role}</option>
                } )
              }
            </select>
            {/* <input type="text" id="issue-responsible" name="responsible" /> */}
          </div>
          <div className="input-wrapper">
            <legend htmlFor="issue-deadline">Deadline</legend>
            <input type="date" id="issue-deadline" name="deadline" />
          </div>
        </div>
        <button >Enviar</button>
      </form>
      { isCreationFeedbackOn &&
        <CreatedFeedbackModal toggleVisibility={toggleCreationFeedbackState}/>
       }
    </StyledIssueCreation>
  )  
}