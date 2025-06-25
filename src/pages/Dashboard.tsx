import '../App.css'
import { Button  } from '../components/Button'
import { Card  } from '../components/Card'
import { PlusIcon } from '../icons/Plus'
import { Share } from "../icons/Share"
import { Create } from "../components/Create"
import { useState } from 'react'
import { SideBar } from '../components/SideBar'

function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <SideBar />
    <div className="ml-70 p-4 h-screen bg-slate-50">
    <Create open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
    <div className='flex justify-end'>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add" onClick={()=>{setModalOpen(true)}} />
      <Button startIcon={<Share size="md"/>} variant="secondary" size="lg" text="share" onClick={()=>{}} />
      </div>
      <div className='flex gap-2 m-2'>
        <div>
     <Card link={'https://x.com/JDVance/status/1937471780660154738'} title={"hello"} type='twitter'/>
     </div>
     <div>
     <Card link={'https://www.youtube.com/watch?v=tysDxjfgLMg'} title={"hello"} type='youtube'/>
     </div>
</div>
      </div>
    </>
  )
}

export default Dashboard
