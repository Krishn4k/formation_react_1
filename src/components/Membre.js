//Import du composant react
import React , {Fragment} from 'react'

// Deux façons de faire la seconde est la plus utilisée et la plus moderne 
// function Membre () {
//     return (
//         <h2>Membre</h2>
//     )
// }

//Déclaration sous forme de fonction fléchée plus maintenable si pas besoin de state
//const Membre = (props) => { ... Permet d'accéder aux props via props.val ex : props.nom
const Membre = ({ nom, age, children, handleDelete, handleChange, handleClick }) => {
    return (
        <Fragment>
            <h2 style={{ 
                backgroundColor: 'purple', 
                color: age > 18 ? 'white' : 'red' }}>
                {nom.toUpperCase()} : {age}</h2>
                <input value={ nom } onChange={handleChange} type='text' />
                <button onClick={handleDelete}>X</button>
            { children ? <p>{children}</p> : <Fragment />}
        </Fragment>
        
    )
}

export default Membre