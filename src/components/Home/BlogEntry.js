import React from 'react'

const BlogEntry = ( {heading, text, date} ) => {
  return (
    <div className="mb-24">
        <span className="text-orange-light text-base">{heading}</span>
        <p className="font-medium text-3xl mt-2 mb-4">{text}</p>
        <span className="text-gray-date">{date}</span>
    </div>
  )
}

export default BlogEntry
