import { SideBarItem } from "./SideBarItem"
import { Twitter } from "../icons/Twitter"
import { Youtube } from "../icons/Youtube"
import { Brain } from "../icons/Brain"

export const SideBar = () => {
  return (
    <div className="h-screen w-72 border-r left-0 top-0 fixed bg-gradient-to-b from-white via-blue-50 to-purple-50 p-4 font-serif shadow-lg">
      <div className="flex items-center justify-center mb-8 text-2xl font-bold tracking-wide text-blue-700">
        <Brain size="lg" className="mr-3" />
        <h1>SecondBrain</h1>
      </div>
      <div className="flex flex-col gap-2">
        <SideBarItem title="Twitter" icon={<Twitter size="md" />} />
        <SideBarItem title="Youtube" icon={<Youtube size="md" />} />
      </div>
    </div>
  );
}