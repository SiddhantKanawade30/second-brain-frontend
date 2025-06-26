import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { useRef , useState} from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";  
import React, { forwardRef } from "react";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export const Create = ({ open, onClose }) => {
  const titleRef = useRef(null);
  const linkRef = useRef(null);
  const typeRef = useRef(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "token": localStorage.getItem("token")
      }
    });
    onClose()
  }

  return (
    <div>
      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
          onClick={onClose}
        />
      )}

      
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out scale-100 animate-in fade-in slide-in-from-bottom-4">
          
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Create New Item
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              >
                <Cross
                  size="lg"
                  className="text-gray-500 group-hover:text-gray-700"
                />
              </button>
            </div>

           
            <div className="px-6 pb-6 space-y-4">
                <Input
                placeholder="Title"
                onChange={() => {}}
                icon="📝"
                ref={titleRef}
              />
              <Input
                placeholder="Link"
                onChange={() => {}}
                icon="🔗"
                ref={linkRef}
              />
              
            <div className="flex gap-1 items-center">  
                <h3>Type : </h3>
                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary":"secondary"} size="md" onClick={()=>{setType(ContentType.Youtube)}}/>
                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary":"secondary"} size="md" onClick={()=>{setType(ContentType.Twitter)}}/>
            </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="secondary"
                  size="md"
                  text="Cancel"
                  onClick={onClose}
                  className="flex-1"
                />
                <Button
                  variant="primary"
                  size="md"
                  text="Create"
                  onClick={() => {
                    addContent();
                  }}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, {
  onChange: () => void;
  placeholder: string;
  icon?: string;
}>(({ onChange, placeholder, icon }, ref) => (
  <div className="relative">
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-4 text-gray-400 text-lg pointer-events-none">
          {icon}
        </span>
      )}
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full px-4 py-3 border border-gray-200 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200 ease-in-out
          placeholder:text-gray-500
          hover:border-gray-300
          ${icon ? "pl-12" : "pl-4"}
        `}
      />
    </div>
  </div>
));
