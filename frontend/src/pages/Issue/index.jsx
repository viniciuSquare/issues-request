import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
import { useParams } from "react-router-dom";

import { Issue as IssueItem } from '../../components/Issue'
import { PageHeader } from "../../components/PageHeader";

import { StyledForm } from "../IssueCreation/styled";
import { StyledIssuePage } from "./styled";
import api from "../../api/api";

export function Issue() {
  const { 
    isLoading, 
    fetchIssueById, 
    issue
  } = useData()
  
  const [formData, setFormData] = useState({})
  const [isCreationFeedbackOn, setIsCreationFeedbackOn] = useState(false)

  const toggleCreationFeedbackState= () => setIsCreationFeedbackOn(!isCreationFeedbackOn);
  
  const { responsibleList, getSimpleDate } = useData();

  const {id: issueId} = useParams();

  useEffect(()=>{
    fetchIssueById(issueId);
  },[])

  console.log(issue)

  function handleFormChange(event) {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    
    setFormData({ ...formData, [fieldName] : fieldValue })
  }

  function handleSubmission(event) {
    event.preventDefault();
    
    formData.issueId = Number(issueId);

    if (formData.isResolution == 'on')
      formData.isResolution = true
    else 
      formData.isResolution = false

    if(formData.author == undefined || formData.author == "")
      alert("Defina um responsável");
    else{
      formData.author = Number(formData.author)
      api.post(`/issues/${issueId}`, formData)
        .then( ({data: createdIssueAction}) => {
          toggleCreationFeedbackState()
          
          console.log(`Chamado ${createdIssueAction.id} criado.`, createdIssueAction)
        })
    }
    console.log(formData)

  }

  return(
    <StyledIssuePage className="container">
      <PageHeader title={`Detalhes chamado Nº${issueId}`}/>
      <main>
        <StyledForm onChange={handleFormChange} onSubmit={handleSubmission}>
          <div className="input-wrapper">
            <legend htmlFor="action-description">Descreva a atualização do chamado</legend>
            <textarea type="text" id="action-description" name="description" />
          </div>
          <div className="wrapper-side">
            <div className="input-wrapper">
              <legend htmlFor="action-author">Responsável</legend>
              <select name="author" id="action-author">
                <option value="">Selecione o autor</option>
                {
                  responsibleList?.map( user => {
                    return <option key={user.id} value={user.id}>{user.name} - {user.role}</option>
                  } )
                }
              </select>
            </div>
            <div className="input-wrapper">
              <legend htmlFor="action-date">Data</legend>
              <input type="date" id="action-date" name="date" />
            </div>
            <div className="checkbox-wrapper">
              <legend>Resolução</legend>
              <input type="checkbox" name="isResolution" id="action-is-resolution" />
            </div>
          </div>
          <button >Atualizar</button>
        </StyledForm>
        { !isLoading &&
          <>
            { issue.issueActions.map( (action,idx ) => {
              return(
                <div key={idx}>
                  <p>{action.description}</p>
                  <p>{getSimpleDate(action.date)}</p>
                  <p>Responsável</p>
                </div>
              )
            })}
            <IssueItem issue={issue} />
          </>
        }
      </main>
    </StyledIssuePage>
  )
}