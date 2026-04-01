import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button