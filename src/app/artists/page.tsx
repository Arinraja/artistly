'use client';
import { useState } from 'react';
import ArtistCard from '@/components/ArtistCard';
import FilterBlock from '@/components/FilterBlock';
import allArtists from '@/data/artists.json';

export default function ArtistListPage() {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    price: '',
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filtered = allArtists.filter((artist) => {
    const matchesCategory = filters.category ? artist.category === filters.category : true;
    const matchesLocation = filters.location ? artist.location === filters.location : true;

    const priceValue = parseInt(artist.price.replace(/[₹,]/g, '').split(' - ')[0]);
    let matchesPrice = true;
    if (filters.price === 'under20') matchesPrice = priceValue < 20000;
    else if (filters.price === '20to30') matchesPrice = priceValue >= 20000 && priceValue <= 30000;
    else if (filters.price === '30plus') matchesPrice = priceValue > 30000;

    return matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Artists</h1>

      <FilterBlock filters={filters} onChange={handleFilterChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
        {filtered.length === 0 && <p>No artists match your filters.</p>}
      </div>
    </section>
  );
}
