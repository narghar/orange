import Arrow from "../public/assets/career/arrow-r.svg";
import Clients from "../src/components/Clients";

const Career = () => {
  return (
    <div className="max-w-base mx-auto mt-32  px-2 base:px-0">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="tracking-wide font-bold text-4xl">
          <h2 className="md:mr-8">
            Jeśli jesteś utalentowanym artystą, ilustratorem, producentem,
            reżyserem lub animatorem i chciałbyś pracować z nami nad pięknymi
            produkcjami, napisz do nas!
          </h2>
          <p className="text-2xl sm:text-4xl text-orange mt-8">
            cv@orangeanimation.com
          </p>
        </div>
        <p className="md:ml-8 self-center lg:place-self-start ">
          W przypadku, gdy nie otrzymasz od nas odpowiedzi - przyjmij nasze
          przeprosiny! Nawet wtedy gorąco zachęcamy do ponownego złożenia
          aplikacji w przyszłości. Szczerze mówiąc, bardzo chcielibyśmy spotkać
          się i porozmawiać z każdym, ale czasami jest to dość trudne zadanie...
        </p>
      </section>

      <Clients />
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
              className="text-orange border border-solid font-semibold rounded-[20px]
            border-orange pl-12 pr-9 py-2 mt-11"
            >
              Wyślij aplikację
            </button>
          </footer>
        </article>
        <div className="relative uppercase text-2xl mt-24 mb-32">
          <h3 className="font-bold flex items-center">
            MID & SENIOR LEVEL VFX ANIMATOR
              <Arrow className="ml-5"/>
          </h3>
          <h3 className="font-bold my-7 flex items-center">
            MID & SENIOR COMPOSITING ARTISTS
             <Arrow className="ml-5"/>
          </h3>
          <h3 className="font-bold flex items-center">
            SENIOR MODELING ARTIST
              <Arrow className="ml-5"/>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Career;
