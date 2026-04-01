import React from 'react'

function Logo({width = ''}) {
  return (
    <div className={`flex items-center gap-3 w-fit group cursor-pointer ${width}`}>
      {/* Icon Container with Gradient and Shadow */}
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/30 shrink-0">
        
        {/* Animated Stacked Layers SVG Icon */}
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-white transform transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110"
        >
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>
      
      {/* Gradient Typography */}
      <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 drop-shadow-sm hidden sm:block">
        MetaBlog
      </span>
    </div>
  )
}

export default Logo