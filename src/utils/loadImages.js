// utils/loadImages.js
export async function loadImages() {
  const modules = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png}');
  const images = {};

  // Create an array of promises for all image imports
  const importPromises = Object.keys(modules).map(async (path) => {
    const module = await modules[path]();
    const imageName = path.split('/').pop();
    images[imageName] = module.default;
  });

  // Wait for all imports to complete
  await Promise.all(importPromises);

  return images;
}
