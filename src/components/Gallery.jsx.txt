import images from './galleryImages';

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((src, idx) => (
        <div key={idx} className="gallery-item">
          <img src={src} alt={`Photo ${idx + 1}`} className="gallery-photo" />
        </div>
      ))}
    </div>
  );
}