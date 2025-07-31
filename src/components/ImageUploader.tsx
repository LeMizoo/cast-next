// components/StorageUploader.tsx
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const StorageUploader = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `slides/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Sauvegarde dans Firestore
    const db = getFirestore();
    const docRef = doc(db, 'slides', 'YOUR_DOC_ID'); // ⚠️ À adapter
    await updateDoc(docRef, { imageUrl: url });

    alert('Image téléversée et Firestore mis à jour 🎉');
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '400px' }} />}
      <button onClick={handleUpload}>Envoyer vers Firebase Storage</button>
    </div>
  );
};

export default StorageUploader;