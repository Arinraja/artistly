type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{artist.name}</h3>
      <p className="text-gray-600">{artist.category}</p>
      <p className="text-gray-500">{artist.price}</p>
      <p className="text-gray-400">{artist.location}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
