import Image from "next/image";
const OurWork = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-base mx-auto mt-32  px-2 xl:px-0 items-center justify-items-center md:justify-items-start">
      <div>
        <p className="font-bold text-orange text-3xl">01</p>
        <h2 className="font-bold text-5xl mt-1">Do dzisiaj wyprodukowaliśmy</h2>
        <p className="mt-14">
          ponad 600 odcinków animowanych seriali telewizyjnych o łącznej
          długości 5.600 minut oraz 7 pełnometrażowych filmów animowanych
        </p>
      </div>
      <div>
        <Image src="/assets/contact/01.png" alt="" width={427} height={526} />
      </div>
      <div>
        <p className="font-bold text-orange text-3xl">02</p>
        <h2 className="font-bold text-5xl mt-1">Dla producentów z krajów</h2>
        <p className="mt-14">
          Belgia, Francja, Niemcy, Włochy, Kanada, Wielka Brytania, Hiszpania,
          Słowacja, Czechy, Indie, Iran, Luksemburg, Izrael i Polska.
        </p>
      </div>
      <div>
        <Image src="/assets/contact/02.png" alt="" width={434} height={349} />
      </div>
      <div>
        <p className="font-bold text-orange text-3xl">03</p>
        <h2 className="font-bold text-5xl mt-1">Liderzy naszych zespołów</h2>
        <p className="mt-14">
          Belgia, Francja, Niemcy, Włochy, Kanada, Wielka Brytania, Hiszpania,
          Słowacja, Czechy, Indie, Iran, Luksemburg, Izrael i Polska.
        </p>
      </div>
      <div>
        <Image src="/assets/contact/03.png" alt="" width={434} height={349} />
      </div>
      <div className="xl:col-span-2 order-last md:order-none">
        <Image src="/assets/contact/04.png" alt="" width={912} height={412} />
      </div>
      <div>
        <p className="font-bold text-orange text-3xl">04</p>
        <h2 className="font-bold text-5xl mt-1">Z reżyserami m.in.</h2>
        <p className="mt-14">
          Od Ariego Folmana, Kena Loacha, Romana Polańskiego, Wojtka
          Smarzowskiego i Witka Adamka
        </p>
      </div>
    </section>
  );
};

export default OurWork;
