import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative p-5 cursor-pointer">
      <div className="relative h-96 min-w-[25em]">
        <Image
          src={img}
          fill
          sizes="100vw"
          alt="picture of people in outdoor"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 font-bold">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <h2>{description}</h2>
        <button className="text-sm text-white bg-gray-950 px-4 py-2 rounded-md mt-4 capitalize">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
