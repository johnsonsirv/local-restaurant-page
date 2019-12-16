
export default function importAll(r) {
  const images = {};
  r.keys().map((image) => {
    return images[image.replace('./', '')] = r(image);
  });
  return images;
}
