import { Cross } from "../icons/Cross";
import { Button } from "./Button";

export const Create = ({ open, onClose }) => {
  return (
    <div>
      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
          onClick={onClose}
        />
      )}
      
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out scale-100 animate-in fade-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">Create New Item</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              >
                <Cross size="lg" className="text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>
            
            {/* Form */}
            <div className="px-6 pb-6 space-y-4">
              <Input 
                placeholder="Type" 
                onChange={() => {}}
                icon="📂"
              />
              <Input 
                placeholder="Link" 
                onChange={() => {}}
                icon="🔗"
              />
              <Input 
                placeholder="Title" 
                onChange={() => {}}
                icon="📝"
              />
              
              {/* Actions */}
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
                  onClick={() => {}}
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

function Input({
  onChange,
  placeholder,
  icon,
}: {
  onChange: () => void;
  placeholder: string;
  icon?: string;
}) {
  return (
    <div className="relative">
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-4 text-gray-400 text-lg pointer-events-none">
            {icon}
          </span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={`
            w-full px-4 py-3 border border-gray-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 ease-in-out
            placeholder:text-gray-500
            hover:border-gray-300
            ${icon ? 'pl-12' : 'pl-4'}
          `}
        />
      </div>
    </div>
  );
}