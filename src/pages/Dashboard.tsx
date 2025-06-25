import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { PlusIcon } from '../icons/Plus'
import { Share } from "../icons/Share"
import { Create } from "../components/Create"
import { useState } from 'react'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'

function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);
const content = useContent();   

  return (
    <>
      <SideBar />
      <div className="ml-72 p-8 min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-pink-50 transition-all">
        <Create open={modalOpen} onClose={() => { setModalOpen(false) }} />
        <div className='flex justify-end gap-3 mb-6'>
          <Button
            startIcon={<PlusIcon size="md" />}
            variant="primary"
            size="md"
            text="Add"
            onClick={() => { setModalOpen(true) }}
          />
          <Button
            startIcon={<Share size="md" />}
            variant="secondary"
            size="lg"
            text="Share"
            onClick={() => { }}
          />
        </div>
        <div className='flex flex-wrap gap-6 m-2 justify-start'>
            {
                content.map(({type , link , title})=> <div>
                    <Card type={type} link={link} title={title} />
                </div>)
            }
          
        </div>
      </div>
    </>
  )
}

export default Dashboard
