type Props = {
  filters: {
    category: string;
    location: string;
    price: string;
  };
  onChange: (name: string, value: string) => void;
};

export default function FilterBlock({ filters, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <select
        value={filters.category}
        onChange={(e) => onChange('category', e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) => onChange('location', e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        value={filters.price}
        onChange={(e) => onChange('price', e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Price Ranges</option>
        <option value="under20">Under ₹20,000</option>
        <option value="20to30">₹20,000 - ₹30,000</option>
        <option value="30plus">Above ₹30,000</option>
      </select>
    </div>
  );
}
