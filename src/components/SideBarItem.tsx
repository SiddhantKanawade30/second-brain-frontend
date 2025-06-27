export const SideBarItem = ({ title, icon, className = "", onClick }) => {
  return (
    <div
      className={`flex gap-3 items-center ml-4 px-4 py-2 my-1 transition-colors rounded-lg cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <div className="p-2 text-gray-600 group-hover:text-blue-700 transition-colors text-xl">
        {icon}
      </div>
      <div className="text-base font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
        {title}
      </div>
    </div>
  );
};