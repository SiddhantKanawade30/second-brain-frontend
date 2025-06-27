import { SideBarItem } from "./SideBarItem";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";
import { Brain } from "../icons/Brain";
import { Button } from "./Button";

export const SideBar = ({ setPlatform, platform }) => {

async function logout() { 
  await localStorage.removeItem("token");
  window.location.href = "/signin";

}

  return (
    <div className="h-screen w-80 fixed left-0 top-0 bg-gradient-to-br from-slate-50 via-white to-indigo-100/40 backdrop-blur-md border-r border-slate-200/50 shadow-xl flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-slate-200/30">
          <div className="flex items-center justify-center mb-3">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md">
              <Brain size="lg" className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            SecondBrain
          </h1>
          <p className="text-center text-sm text-slate-500 mt-1">
            Your Knowledge Hub
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Platforms
          </h2>
          <div className="space-y-2">
            <SideBarItem
              title="All"
              icon={<Brain size="md" />}
              className={`hover:bg-gray-100 ${
                platform === "all" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setPlatform("all")}
            />
            <SideBarItem
              title="Twitter"
              icon={<Twitter size="md" />}
              className={`hover:bg-blue-50 hover:border-blue-200 ${
                platform === "twitter" ? "bg-blue-100 font-bold" : ""
              }`}
              onClick={() => setPlatform("twitter")}
            />
            <SideBarItem
              title="Youtube"
              icon={<Youtube size="md" />}
              className={`hover:bg-red-50 hover:border-red-200 ${
                platform === "youtube" ? "bg-red-100 font-bold" : ""
              }`}
              onClick={() => setPlatform("youtube")}
            />
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-slate-200/30 bg-gradient-to-t from-slate-50/60 to-transparent">
<div className="flex items-center justify-center">
    <Button variant="secondary" size="lg" text="Logout" onClick={logout}/>
</div>
      </div>
    </div>
  );
};
