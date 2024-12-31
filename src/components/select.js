import React from 'react'
import { ChevronDown } from 'lucide-react'

const Select = ({
  label,
  id,
  className = '',
  error,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-2 text-md text-white">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={`
            bg-dgreen text-white w-full text-md font-normal shadow-lg 
            rounded-lg outline-none px-2 py-2 
            placeholder-muted/80 placeholder:text-md decoration-white
            focus:ring-[1px] focus:ring-white focus:border-transparent
            transition-all duration-200 ease-in-out
            appearance-none
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Select

