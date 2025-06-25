import { Cross } from "../icons/Cross";


export const Create = ({open , onClose}) =>{
    return <div>
       {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex flex-col justify-center items-center align-center">
            <span className="bg-white p-3 rounded-md opacity-100 text-black ">
                <div className="flex justify-end"><Cross size="lg"/></div>
                <Input placeholder={"Type"}/>
            </span>
        </div>
       </div> }
    </div>
}


function Input({onChange,placeholder}:{onChange: ()=>void}){
         return <div>
            <input type="text" placeholder={placeholder} onChange={onChange} className="px-4 py-2 border rounded"/>
         </div>
}