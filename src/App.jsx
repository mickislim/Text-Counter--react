import { useEffect, useState } from 'react'

import './index.css'



function App() {
  const maxLength = 50
 const [textInput,setTextInput]=useState('')
const [totalRemaining,setTotalRemaining]= useState('') 
 const handleText =(e)=>{
const newText = e.target.value
setTextInput(newText)


 }

 

useEffect(()=>{
  const remaining = maxLength - textInput.length
setTotalRemaining(remaining)
},[textInput])
 

  return (
    <div className="container">
    <div className="main">
      
        <div className="section-grid">
    
            <div className="text-area"><textarea value={textInput} onChange={handleText} maxLength={50} placeholder="write text here"></textarea></div>
            <div className="counter">
                <div className="total-text"  ><p> Total Text: <span>{maxLength}</span></p></div>
                <div className="remaining-text"><p>Remaining Text :<span>{totalRemaining}</span></p></div>
            </div>
        </div>

    </div>
</div>
  )
}

export default App
