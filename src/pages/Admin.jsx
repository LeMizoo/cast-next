import MediaUploader from '../components/MediaUploader';

export default function Admin() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl mb-6">🎛️ Panneau Admin</h1>
      <MediaUploader />
    </main>
  );
}