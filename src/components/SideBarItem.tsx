


export const SideBarItem = ({title,icon}) => { 

    return <div className="flex gap-1 items-center ml-5 pl-15 hover:bg-gray-300 transition-colors rounded">
     <div className="p-1  text-gray-700 cursor-pointer">
        {icon}
    </div>
     <div className="text-lg p-1 text-gray-700 cursor-pointer  ">
         {title}
    </div>   

    </div>

 }