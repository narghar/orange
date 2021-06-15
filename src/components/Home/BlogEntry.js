import React from 'react'

const BlogEntry = ( {heading, text, date} ) => {
  return (
    <div>
        {heading}
        {text}
        {date}
    </div>
  )
}

export default BlogEntry
