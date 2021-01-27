import './char.css'
const CharComponent = (props) => {

const charTemplat = (
    <div className="charTemlate">
        <p>{props.charter}</p>  
    </div>
)


    return(
        <div className="charComponent" onClick={props.clicked}>
            {charTemplat}
        </div>
        
    )
    
    }
    
    export default CharComponent;