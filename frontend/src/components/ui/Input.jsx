function Input({type="text",placeholder,value,onChange})
{
    return(
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400" />
    )
}
export default Input