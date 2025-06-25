'use client';
import { useEffect, useState } from 'react';

type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  price: string;
};

export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Load submitted artists from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('submittedArtists');
    const parsed = stored ? JSON.parse(stored) : [];
    setArtists(parsed);
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = confirm('Delete this artist?');
    if (confirmed) {
      const updated = artists.filter((a) => a.id !== id);
      setArtists(updated);
      localStorage.setItem('submittedArtists', JSON.stringify(updated));
    }
  };

  const handleSort = () => {
    const sorted = [...artists].sort((a, b) => {
      const aPrice = parseInt(a.price.replace(/[₹,]/g, ''));
      const bPrice = parseInt(b.price.replace(/[₹,]/g, ''));
      return sortOrder === 'asc' ? aPrice - bPrice : bPrice - aPrice;
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setArtists(sorted);
  };

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

      <div className="mb-4 flex justify-end">
        <button
          onClick={handleSort}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sort by Fee ({sortOrder === 'asc' ? 'Low → High' : 'High → Low'})
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left border">Name</th>
            <th className="p-2 text-left border">Category</th>
            <th className="p-2 text-left border">Location</th>
            <th className="p-2 text-left border">Fee</th>
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id} className="hover:bg-gray-50">
              <td className="p-2 border">{artist.name}</td>
              <td className="p-2 border">{Array.isArray(artist.category) ? artist.category.join(', ') : artist.category}</td>
              <td className="p-2 border">{artist.location}</td>
              <td className="p-2 border">{artist.price}</td>
              <td className="p-2 border flex gap-2">
                <button
                  onClick={() => alert(`Viewing ${artist.name}`)}
                  className="text-blue-600 hover:underline"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(artist.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {artists.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No artists to show. Submit one from the onboarding form.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
