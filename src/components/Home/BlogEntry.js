import Link from "next/link";
import React from 'react';

const BlogEntry = ( {heading, text, date} ) => {
  return (
    <div className="mb-6 md:mb-24">
      <span className="text-orange-light text-base">{heading}</span>
      <Link href="/">
        <a className="block font-medium md:text-2xl sm:text-3xl mt-2 mb-4">{text}</a>
      </Link>
      <span className="text-gray-date">{date}</span>
    </div>
  );
}

export default BlogEntry
