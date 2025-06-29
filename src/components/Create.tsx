import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { useRef, useState } from "react";
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
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      { link, title, type },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <>
      
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white/80 backdrop-blur-lg border border-slate-200/60 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 scale-100 animate-in fade-in slide-in-from-bottom-6"
            style={{ animationDuration: "300ms" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-2xl font-bold text-slate-800 tracking-wide">
                Create New Item
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 group"
              >
                <Cross
                  size="lg"
                  className="text-slate-500 group-hover:text-slate-700"
                />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 space-y-5">
              <Input
                placeholder="Enter title"
                icon="📝"
                onChange={() => {}}
                ref={titleRef}
              />
              <Input
                placeholder="Paste link here"
                icon="🔗"
                onChange={() => {}}
                ref={linkRef}
              />

              {/* Type selector */}
              <div className="flex gap-3 items-center pt-1">
                <h3 className="text-sm font-medium text-slate-700">Type:</h3>
                <Button
                  text="YouTube"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  size="md"
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  text="Twitter"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  size="md"
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>

              {/* Action Buttons */}
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
                  onClick={addContent}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Styled Input
const Input = forwardRef<HTMLInputElement, {
  onChange: () => void;
  placeholder: string;
  icon?: string;
}>(({ onChange, placeholder, icon }, ref) => (
  <div className="relative">
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-4 text-slate-400 text-lg pointer-events-none">
          {icon}
        </span>
      )}
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full px-4 py-3 border border-slate-200 rounded-xl text-sm
          bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-slate-400 text-slate-700 transition-all duration-200
          shadow-sm hover:border-slate-300
          ${icon ? "pl-12" : "pl-4"}
        `}
      />
    </div>
  </div>
));
