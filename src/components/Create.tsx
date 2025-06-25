import { Cross } from "../icons/Cross";
import { Button } from "./Button";

export const Create = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center z-10"></div>
      )}
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20">
          <span className="bg-white p-3 rounded-md text-black opacity-100 shadow-lg min-w-[300px]">
            <div className="flex justify-end" onClick={onClose}>
              <Cross size="lg" />
            </div>
            <Input placeholder={"Type"} />
            <Input placeholder={"Link"} />
            <Input placeholder={"Title"} />
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="md"
                text="Add"
                onClick={() => {}}
              />
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

function Input({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="px-4 py-2 border rounded m-2"
      />
    </div>
  );
}
