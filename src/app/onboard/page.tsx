import ArtistForm from '@/components/ArtistForm';

export default function OnboardPage() {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Onboard a New Artist</h1>
      <ArtistForm />
    </section>
  );
}
