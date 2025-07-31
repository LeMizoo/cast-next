import { useState } from 'react';
import { db, storage } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function MediaUploader() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `slides/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, 'media'), {
      title,
      imageUrl: url,
      author,
      createdAt: new Date()
    });

    setFile(null);
    setTitle('');
    setAuthor('');
    alert('Image ajoutée avec succès 🎉');
  };

  return (
    <div className="media-uploader">
      <h2 className="text-xl font-bold mb-4">Ajouter une image au slide</h2>

      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Auteur" value={author} onChange={(e) => setAuthor(e.target.value)} />
      
      <button onClick={handleUpload}>Uploader 🪶</button>
    </div>
  );
}