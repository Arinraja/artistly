'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">Artistly</Link>
      <div className="space-x-4">
        <Link href="/artists" className="text-gray-700 hover:text-blue-500">Artists</Link>
        <Link href="/onboard" className="text-gray-700 hover:text-blue-500">Onboard Artist</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
      </div>
    </nav>
  );
}
