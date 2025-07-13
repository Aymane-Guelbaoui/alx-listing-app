import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{`Welcome to ALX Listing App`}</h1>

      <Card
        title="Cozy Apartment"
        description="A nice and cozy apartment in the city center."
        imageUrl="/assets/house1.jpg"
      />

      <div className="mt-4">
        <Button
          label="Book Now"
          onClick={() => alert('Booking confirmed!')}
        />
      </div>
    </main>
  );
};

export default Home;
