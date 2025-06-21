import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/Plus'
import { Share } from "./icons/Share"

function App() {


  return (
    <>
      <Button startIcon={<PlusIcon size="lg"/>} variant="primary" size="md" text="share" onClick={()=>{}} />
      <Button startIcon={<Share size="md"/>} variant="secondary" size="lg" text="share" onClick={()=>{}} />
      <Button startIcon={<PlusIcon size="sm"/>} variant="primary" size="md" text="share" onClick={()=>{}} />
      <Button startIcon={<PlusIcon size="lg"/>} variant="primary" size="md" text="share" onClick={()=>{}} />
      
    </>
  )
}

export default App
