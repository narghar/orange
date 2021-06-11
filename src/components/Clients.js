import Image from "next/image";
const Clients = () => {
  return (
    <section className="max-w-base mx-auto flex flex-col sm:flex-row gap-y-8  sm:justify-evenly xl:justify-between items-center flex-wrap my-36">
      <figure className="sm:pr-10">
        <Image
          src="/assets/career/netflix.png"
          alt="Netflix"
          width={195}
          height={43}
        />
      </figure>
      <figure className="sm:pr-10">
        <Image
          src="/assets/career/pixar.png"
          alt="Netflix"
          width={245}
          height={39}
        />
      </figure>
      <figure className="sm:pr-10">
        <Image
          src="/assets/career/disney.png"
          alt="Netflix"
          width={180}
          height={77}
        />
      </figure>
      <figure className="sm:pr-10">
        <Image
          src="/assets/career/warner-bros.png"
          alt="Netflix"
          width={95}
          height={89}
        />
      </figure>
      <figure>
        <Image
          src="/assets/career/delma.png"
          alt="Netflix"
          width={166}
          height={71}
        />
      </figure>
    </section>
  );
};

export default Clients;
