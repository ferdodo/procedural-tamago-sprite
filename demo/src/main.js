import init, { generatetamago } from "../public/procedural_tamago_sprite";
import { generateImageFromHexString } from "./generate-image-from-hexstring";

init().then(function() {
	window.addEventListener('wheel', (event) => {
		const seed = Math.floor(Math.random() * 999999999999999).toString();
		const buf = generatetamago(seed);
		const img = generateImageFromHexString(buf, 16);
		document.body.appendChild(img);
	});
});
