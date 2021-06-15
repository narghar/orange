import Link from "next/link";
import BlogEntry from "./BlogEntry";

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
    <section className="max-w-base mx-auto px-2 base:px-0 flex mt-32">
      <h2 className="text-5xl">Dowiedz się więcej o naszej działalności</h2>
      <div>
        {entries.map((entry, i) => (
          <BlogEntry
            key={i}
            heading={entry.heading}
            text={entry.text}
            date={entry.date}
          />
        ))}
        <Link href="/">
          <a className="inline-block text-3xl font-bold mt-3">Przeglądaj blog</a>
        </Link>
      </div>
    </section>
  );
}

export default Blog
