import Banner from "@/components/Banner";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import Navbar from "@/components/Navbar";
import SmallCard from "@/components/SmallCard";
import anywhereData from "../data/anywhereData.json";
import exploreData from "../data/nearbyData.json";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="max-w-7xl mx-auto">
        <section className="p-5">
          <h2 className="text-4xl font-semibold mb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {exploreData.map((elem, idx) => (
              <SmallCard key={idx} {...elem} />
            ))}
          </div>
        </section>
        <section className="p-5">
          <h2 className="text-4xl font-semibold mb-5">Live Anywhere</h2>
          <div className="flex gap-3 overflow-x-auto p-4 scrollbar-hide">
            {anywhereData.map((elem, idx) => (
              <MediumCard key={idx} {...elem} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="get inspired"
        />
      </main>
    </div>
  );
}
