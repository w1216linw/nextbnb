import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer rounded-lg hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-in-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          fill
          sizes="33vw"
          alt="cartoon place icon"
          className="rounded-md "
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h2>{distance}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
