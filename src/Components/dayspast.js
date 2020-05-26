export default function dayspast(createdAt) {
  return Math.round(
    Math.abs((Date.now() - Date.parse(createdAt)) / (24 * 60 * 60 * 1000))
  );
}
