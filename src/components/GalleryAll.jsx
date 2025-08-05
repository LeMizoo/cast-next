import React from "react";

const GalleryAll = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Aucune image à afficher pour le moment 🖼️
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, idx) => {
        if (!img?.src) return null; // ⚠️ ignore les entrées invalides
        return (
          <img
            key={idx}
            src={img.src}
            alt={img.alt || `Image ${idx + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition duration-300"
          />
        );
      })}
    </div>
  );
};

export default GalleryAll;