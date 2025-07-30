// src/components/Slideshow.jsx
export default function Slideshow() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex transition-all duration-700">
        <div className="min-w-full h-64 bg-cover bg-center bg-[url('/assets/slide1.jpg')] flex items-center justify-center">
          <p className="text-white text-2xl font-semibold bg-black/60 px-4 py-2 rounded">Chanter, c’est résister avec grâce.</p>
        </div>
        {/* Add more slides here */}
      </div>
    </div>
  );
}