import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ children, center, right, pathName, className }) => {
    return (
        <Link to={pathName} className={`bg-white overflow-hidden text-slate-900 text-base md:text-lg font-bold rounded-lg px-3 md:px-3.5 md:py-2 py-1.5 duration-300 after:absolute relative after:w-full after:-top-full after:left-0 after:h-full after:duration-300 hover:after:top-0 after:bg-blue-600 hover:text-white
        ${right ? "mr-0 ml-auto" : center ? "mx-auto flex" : "text-center"} ${className}`}>
            <span className="relative z-30">{children}</span>
        </Link>
    )
}

export default LinkButton
