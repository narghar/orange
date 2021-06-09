import Image from "next/image";
const Career = () => {
  return (
    <div className="max-w-base mx-auto mt-32  px-2 xl:px-0">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="tracking-wide font-bold text-4xl">
          <h2 className="md:mr-8">
            Jeśli jesteś utalentowanym artystą, ilustratorem, producentem,
            reżyserem lub animatorem i chciałbyś pracować z nami nad pięknymi
            produkcjami, napisz do nas!
          </h2>
          <p className="text-2xl sm:text-4xl text-orange mt-8">
            cv@orangeanimation.com{" "}
          </p>
        </div>
        <p className="md:ml-8 self-center lg:place-self-start ">
          W przypadku, gdy nie otrzymasz od nas odpowiedzi - przyjmij nasze
          przeprosiny! Nawet wtedy gorąco zachęcamy do ponownego złożenia
          aplikacji w przyszłości. Szczerze mówiąc, bardzo chcielibyśmy spotkać
          się i porozmawiać z każdym, ale czasami jest to dość trudne zadanie...
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-y-8  sm:justify-evenly xl:justify-between items-center flex-wrap my-36">
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

      <section>
        <article className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-full">
            <h3 className="uppercase text-2xl font-bold">
              Lead Lighthing Artist
            </h3>
            <p className="mt-3 text-sm uppercase">
              Bielsko-Biała, Polska<span className="mx-3">|</span>Animation
              <span className="mx-3">|</span>Pełen Wymiar
            </p>
            <p className="mt-2 capitalize text-sm">Opublikowany: 22.02.2020</p>
          </div>
          <p className="mt-7 md:mr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel nunc efficitur, mattis leo a, lobortis massa. Proin fringilla
            velit a metus egestas, in porttitor nisi gravida. Vivamus iaculis
            nunc urna, vitae ultrices ligula ultricies nec. Phasellus blandit
            sagittis lacinia. Morbi ac fermentum dolor. Quisque id nisl in nibh
            fringilla tincidunt sit amet eu purus. Integer luctus, nibh et
            rutrum blandit, lectus leo efficitur ligula, id sollicitudin orci
            justo et turpis. Donec congue id ligula nec suscipit. Nulla at elit
            in eros dictum mollis. Morbi ac malesuada ligula, eget fermentum
            diam. Quisque ornare egestas posuere. Aenean in sapien eleifend,
            posuere velit ac, imperdiet metus.
          </p>
          <p className="mt-7 md:ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel nunc efficitur, mattis leo a, lobortis massa. Proin fringilla
            velit a metus egestas, in porttitor nisi gravida. Vivamus iaculis
            nunc urna, vitae ultrices ligula ultricies nec. Phasellus blandit
            sagittis lacinia. Morbi ac fermentum dolor. Quisque id nisl in nibh
            fringilla tincidunt sit amet eu purus. Integer luctus, nibh et
            rutrum blandit, lectus leo efficitur ligula, id sollicitudin orci
            justo et turpis. Donec congue id ligula nec suscipit. Nulla at elit
            in eros dictum mollis. Morbi ac malesuada ligula, eget fermentum
            diam. Quisque ornare egestas posuere. Aenean in sapien eleifend,
            posuere velit ac, imperdiet metus.
          </p>
          <footer className="col-span-full mt-11">
            <p className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vel nunc, lobortis massa. Proin fringilla velit a
              metus egest
              <span className="text-orange"> cv@orangeanimation.com</span>
            </p>
            <button
              className="text-orange border border-solid rounded-[20px]
            border-orange pl-12 pr-9 py-2 mt-11"
            >
              Wyślij aplikację
            </button>
          </footer>
        </article>
        <div className="relative uppercase text-2xl mt-24 mb-32">
          <h3 className="font-bold">
            MID & SENIOR LEVEL VFX ANIMATOR
            <span className="ml-5">
              <Image
                className="mr-10"
                src="/assets/career/arrow-r.svg"
                alt="MID & SENIOR LEVEL VFX ANIMATOR"
                width={23}
                height={18}
              />
            </span>
          </h3>
          <h3 className="font-bold my-7">
            MID & SENIOR COMPOSITING ARTISTS
            <span className="ml-5">
              <Image
                className="mr-10"
                src="/assets/career/arrow-r.svg"
                alt="MID & SENIOR COMPOSITING ARTISTS"
                width={23}
                height={18}
              />
            </span>
          </h3>
          <h3 className="font-bold">
            SENIOR MODELING ARTIST
            <span className="ml-5">
              <Image
                className="mr-10"
                src="/assets/career/arrow-r.svg"
                alt="SENIOR MODELING ARTIST"
                width={23}
                height={18}
              />
            </span>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Career;
