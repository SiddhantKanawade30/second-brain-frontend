import { SideBarItem } from "./SideBarItem"
import {Twitter} from "../icons/Twitter"
import { Youtube } from "../icons/Youtube"
import { Brain } from "../icons/Brain"

export const SideBar = () =>{
    return <div className="h-screen w-72 border-r left-0 top-0 fixed bg-white p-2 font-serif">

        <div className="flex items-center justify-center mb-4 text-2xl ">
        <Brain size="lg" className=" mr-2" />
        <h1>SecondBrain</h1>
        </div>
        <SideBarItem title="Twitter" icon={<Twitter size="md" />} />
        <SideBarItem title="Youtube" icon={<Youtube size="md" />} />
        
        </div>
}