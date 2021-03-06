import Head from 'next/head';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
// import Image from 'next/image';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
// import styles from '../styles/Home.module.css';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard key={item.img} image={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide -ml-3">
            {cardsData?.map(card => (
              <Card key={card.img} image={card.img} title={card.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist Curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return {
    props: { exploreData, cardsData }
  };
}
