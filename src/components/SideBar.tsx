import { SideBarItem } from "./SideBarItem"
import {Twitter} from "../icons/Twitter"

export const SideBar = () =>{
    return <div className="h-screen w-72 border-r left-0 top-0 fixed bg-white p-2 ">

        <SideBarItem title="Twitter" icon={<Twitter />} />
        
        </div>
}