import Message from '../layout/Message'
import { useNavigate } from 'react-router-dom'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

export default function Projects() {

  const navigate = useNavigate()
  let message = ''
  if(navigate.state) {
    message = navigate.state.message
  }
  

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"/>
      </div>

      {message && <Message type="success" msg={message} />}

      <Container customClass="start">
          <p>Projetos...</p>
      </Container>
    </div>
  )
}
