import Message from '../layout/Message'
import { useNavigate } from 'react-router-dom'


export default function Projects() {

  const navigate = useNavigate()
  let message = ''
  if(navigate.state) {
    message = navigate.state.message
  }
  

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  )
}
