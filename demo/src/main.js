import "crumbs-design-system";
import init, { generatetamago } from "../public/procedural_tamago_sprite";

function generateImageFromHexString(buffer, width) {
  if (buffer.length % 8 !== 0) {
    throw new Error("Le buffer doit avoir une longueur multiple de 8.");
  }

  const height = Math.ceil(buffer.length / (width * 8));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(width, height);

  for (let i = 0; i < buffer.length; i += 8) {
    const r = parseInt(buffer.slice(i, i + 2), 16);
    const g = parseInt(buffer.slice(i + 2, i + 4), 16);
    const b = parseInt(buffer.slice(i + 4, i + 6), 16);
    const a = parseInt(buffer.slice(i + 6, i + 8), 16);
    const x = (i / 8) % width;
    const y = Math.floor((i / 8) / width);
    const index = (y * width + x) * 4;
    imageData.data[index] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  const img = document.createElement("img");
  img.src = canvas.toDataURL();
  return img;
}

init().then(function() {
	window.addEventListener('wheel', (event) => {
		const seed = Math.floor(Math.random() * 999999999999999).toString();
		const buf = generatetamago(seed);
		const img = generateImageFromHexString(buf, 16);
		document.body.appendChild(img);
	});
});
