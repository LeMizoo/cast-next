import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

const mediaItems = [
  {
    title: 'Brume céleste',
    author: 'Tovoniaina',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    title: 'Arbre éternel',
    author: 'Tovoniaina',
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-8f709d14db2b',
  },
  {
    title: 'Onde spirituelle',
    author: 'Tovoniaina',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
  },
  {
    title: 'Reflets d’Anosiala',
    author: 'Tovoniaina',
    imageUrl: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3',
  },
  {
    title: 'Passage silencieux',
    author: 'Tovoniaina',
    imageUrl: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4',
  }
];

const seedMediaCollection = async () => {
  const mediaRef = collection(db, 'media');

  for (const item of mediaItems) {
    await addDoc(mediaRef, item);
    console.log(`Ajouté : ${item.title}`);
  }
};

seedMediaCollection().then(() => {
  console.log('🎉 Tous les documents ont été ajoutés à Firestore');
});