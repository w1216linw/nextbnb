import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          fill
          sizes="33vw"
          alt="picture of specific house"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
