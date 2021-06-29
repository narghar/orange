import CrownIcon from "../../../public/assets/offer/crown.svg";

const AdvantageItem = ({ heading, text }) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <CrownIcon />
      <h4 className="text-2xl font-semibold mt-3 mb-5">{heading}</h4>
      <p className="leading-6 text-center sm:text-left">{text}</p>
    </div>
  );
}

export default AdvantageItem
