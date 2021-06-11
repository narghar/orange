import AdvantageItem from "./AdvantageItem";

const items = [
  {
    id: 1,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    id: 2,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    id: 3,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    id: 4,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    id: 5,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
  {
    id: 6,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  },
];


const Advantages = () => {
  return (
    <section className="bg-gray-light">
      <div className="max-w-base mx-auto pt-36 pb-48">
        <h2 className="text-5xl font-bold">Mocne strony</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-24 gap-x-20 gap-y-20">
          {items.map( item => (
            <AdvantageItem key={item.id} heading={item.heading} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages
