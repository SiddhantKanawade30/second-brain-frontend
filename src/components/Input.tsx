export const Input = ({onChange , placeholder , type}) => {
    return <div>
        <input type={type} placeholder={placeholder}  className="px-4 py-2 border rounded m-2" onChange={onChange}/>
    </div>
}