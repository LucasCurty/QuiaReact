import {Link} from 'react-router-dom'

function Start(){
return (
    <div className="Start">
        <h1>Bem vindo ao Quiz!</h1>
        <Link to="/questions"><button>Começar</button></Link>
    </div>
)   
}
export default Start;   