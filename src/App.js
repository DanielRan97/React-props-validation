import { useState } from 'react';
import ValidationComponent from './components/validation/validation'
import CharComponent from './components/char/char'
import './App.css';


function App() {

  const [state,setState] = useState({
    text:'',

  });



const getTextLenght = (event) => {
setState({
    ...state,
    text: event.target.value
  })

}

const deleteChar = ( index ) => {
    const text = state.text.split('');
    text.splice(index,1);
    const update = text.join('');
    setState({...state,text: update});
}

let charList = state.text.split('').map((char, index) => {
    return <CharComponent 
            charter={char} 
            key={index}
            clicked={() => deleteChar(index)}/>
});

  return (
    <div className="App">

      <h1>Practice 2</h1>
     
     <label>Text: 
     <input className="appInput" 
     onChange={getTextLenght} 
     value={state.text}/>
     </label>

     <div className="pDiv">
      <p>{state.text}</p>
     </div>

     <div className="validation">
      <ValidationComponent textLenght={state.text.length}/>
     </div>

     <div className="char">
     {charList}
     </div>
  
    </div>
  );
}

export default App;
