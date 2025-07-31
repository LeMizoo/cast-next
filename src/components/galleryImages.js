const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

export default images;