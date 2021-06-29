import Link from "next/link";
import BlogEntry from "./BlogEntry";
import ArrowBlack from "../../../public/assets/home/arrow-black.svg";

const entries = [
  {
    heading: "FILM KRÓTKOMETRAŻOWY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus diam, cursus et commodo in, tempor id dolor.",
    date: "Czerwiec 19, 2021",
  },
  {
    heading: "FILM KRÓTKOMETRAŻOWY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus diam, cursus et commodo in, tempor id dolor.",
    date: "Czerwiec 19, 2021",
  },
  {
    heading: "FILM KRÓTKOMETRAŻOWY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus diam, cursus et commodo in, tempor id dolor.",
    date: "Czerwiec 19, 2021",
  },
];

const Blog = () => {
  return (
    <section className="max-w-base mx-auto px-2 base:px-0 flex mt-32 flex-wrap md:flex-nowrap">
      <h2 className="text-3xl sm:text-5xl text-center mx-auto md:text-left font-bold max-w-[340px]">
        Dowiedz się więcej o naszej działalności
      </h2>
      <div className=" md:ml-52 mt-10 md:mt-0">
        {entries.map((entry, i) => (
          <BlogEntry
            key={i}
            heading={entry.heading}
            text={entry.text}
            date={entry.date}
          />
        ))}
        <div className="border-b-2 inline-block border-transparent mt-3 hover:border-orange">
          <Link href="/">
            <a className="text-2xl sm:text-3xl font-bold  hover:text-orange flex items-center">
              Przeglądaj blog
              <ArrowBlack className="ml-2 flex-shrink-0" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog
