import React from 'react'
import appwriteService from "../appwrite/confi"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group'>
            <div className='relative w-full justify-center mb-4 overflow-hidden rounded-xl bg-gray-900 flex'>
                <div 
                    className="absolute inset-0 z-0 opacity-50 blur-xl scale-125"
                    style={{
                        backgroundImage: `url(${appwriteService.getFilePreview(featuredImage)})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                ></div>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='relative z-10 w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-105' />
            </div>
            <h2
            className='text-xl font-bold text-gray-800 line-clamp-2 leading-tight'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard