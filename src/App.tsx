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
     <Card link={'https://x.com/Kawsar_Ai/status/1937376044333629587'} title={"hello"} type='twitter'/>
     <Card link={'https://www.youtube.com/watch?v=RbTkR5iTaC8&list=PLwBgkDjcfBZTNpDv2gqwFuLj7vXeRP5gt'} title={"hello"} type='youtube'/>

      
    </>
  )
}

export default App
