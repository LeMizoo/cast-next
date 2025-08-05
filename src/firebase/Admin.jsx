import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/index';
import MediaUploader from './components/MediaUploader';
import { Navigate } from 'react-router-dom';

export default function Admin() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center mt-8 text-gray-500">Chargement...</div>;
  if (!user) return <Navigate to="/login" />;

  const isAdmin = user.email === 'admin@tondomaine.com'; // à adapter

  if (!isAdmin) return <Navigate to="/unauthorized" />;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">Espace Administrateur</h1>
      <MediaUploader user={user} />
    </div>
  );
}