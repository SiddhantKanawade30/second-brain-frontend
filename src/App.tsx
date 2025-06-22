import './App.css'
import { Button  } from './components/Button'
import { Card  } from './components/Card'
import { PlusIcon } from './icons/Plus'
import { Share } from "./icons/Share"

function App() {


  return (
    <>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add" onClick={()=>{}} />
      <Button startIcon={<Share size="md"/>} variant="secondary" size="lg" text="share" onClick={()=>{}} />
     <Card />

      
    </>
  )
}

export default App
