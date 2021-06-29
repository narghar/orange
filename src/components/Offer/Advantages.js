import AdvantageItem from "./AdvantageItem";

const items = [
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
];


const Advantages = () => {
  return (
    <section className="bg-gray-light">
      <div className="max-w-base mx-auto px-2 base:px-0 pt-14 pb-20 lg:pt-36 lg:pb-48">
        <h2 className="text-3xl sm:text-5xl font-bold text-center lg:text-left">Mocne strony</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-24 gap-x-20 gap-y-10 sm:gap-y-20">
          {items.map((item, i) => (
            <AdvantageItem key={i} heading={item.heading} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages
