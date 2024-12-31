const Input = ({
  label,
  id,
  type = 'text',
  className = '',
  error,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-2 text-md text-white">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`
          bg-dgreen text-white w-full text-md font-normal shadow-lg 
          rounded-lg outline-none px-2 py-2 placeholder:text-slate-300 placeholder:text-md decoration-white
          focus:ring-[1px] focus:ring-white focus:border-transparent
          transition-all duration-200 ease-in-out
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input

