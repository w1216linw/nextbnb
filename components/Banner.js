import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[25em] md:h-[35em] lg:h-[45em]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button className="text-purple-500 font-semibold bg-gray-100 bg-opacity-50 px-10 py-3 rounded-3xl shadow-md hover:shadow-lg active:scale-90 transition duration-100">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
