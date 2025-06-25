import './App.css'
import { Button  } from './components/Button'
import { Card  } from './components/Card'
import { PlusIcon } from './icons/Plus'
import { Share } from "./icons/Share"
import { Create } from "./components/Create"

function App() {


  return (
    <>
    <Create open={true}/>
    <div className='flex justify-end'>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add" onClick={()=>{}} />
      <Button startIcon={<Share size="md"/>} variant="secondary" size="lg" text="share" onClick={()=>{}} />
      </div>
      <div className='flex gap-2 m-2'>
        <div>
     <Card link={'https://x.com/JDVance/status/1937471780660154738'} title={"hello"} type='twitter'/>
     </div>
     <div>
     <Card link={'https://www.youtube.com/watch?v=RbTkR5iTaC8&list=PLwBgkDjcfBZTNpDv2gqwFuLj7vXeRP5gt'} title={"hello"} type='youtube'/>
     </div>
</div>
      
    </>
  )
}

export default App
