import { Share } from "../icons/Share"
import { PlusIcon } from "../icons/Plus"
import { Delete } from "../icons/delete"

export function Card() {
    return (
        <div className="flex w-[300px] h-[200px] border p-4 justify-between items-center bg-gray-200">
            <div>
                <span className="text-black w-8 h-8 inline-block"><PlusIcon /></span>
            </div>
            <div className="flex gap-2">
                <span className="text-black w-8 h-8 inline-block"><Share /></span>
                <span className="text-black w-8 h-8 inline-block"><Delete /></span>
            </div>
        </div>
    );
}