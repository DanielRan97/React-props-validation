const ValidationComponent = (props) => {

    let validation = 'Text long enough';
  
    if(props.textLenght === 0){
      validation = 'No Text';
      }
    else if(props.textLenght <= 5){
        validation = 'Text too short';
    }
    else if(props.textLenght > 10){
      validation = 'Text too long';
    }
  
    const textMessagetemplat = (
      <div className="textLenghtMessage">
      <p>{validation}</p>
      </div>
  )
  
  return (
     textMessagetemplat
      
  )
  
  }
  
  export default ValidationComponent;