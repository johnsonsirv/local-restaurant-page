
export default function importAll(r) {
  // r.keys().forEach(r);
  console.log('rkeys', r.keys());
  // console.log('abachaXX', r.resolve('./abacha.jpg'));
  // console.log('mapped', r.keys().map(r));
  const images = {};
  r.keys().map((image) => {
    images[image.replace('./', '')] = r(image);
  });
  return images;
}
