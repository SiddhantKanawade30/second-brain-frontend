export const Input = ({ref , placeholder , type}) => {
    return <div>
        <input type={type} placeholder={placeholder}  className="px-4 py-2 border rounded m-2" ref={ref}/>
    </div>
}