use sprite_gen::{gen_sprite, Options};
use sprite_gen::MaskValue::{Solid, Empty, Body1, Body2};
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn generatetamago (seed: u64) -> String {
	let mask = vec![
		Empty, Empty, Body2, Body2, Empty, Empty, Empty, Empty,
		Empty, Body2, Body2, Solid, Solid, Solid, Solid, Solid,
		Body2, Body1, Body1, Empty, Empty, Empty, Empty, Empty,
		Empty, Solid, Empty, Empty, Empty, Empty, Empty, Empty,
		Empty, Solid, Empty, Empty, Body1, Solid, Empty, Empty,
		Empty, Solid, Empty, Empty, Empty, Empty, Empty, Empty,
		Empty, Body2, Empty, Empty, Empty, Solid, Solid, Solid,
		Empty, Solid, Empty, Empty, Empty, Empty, Body1, Body1,
		Empty, Solid, Empty, Empty, Empty, Empty, Empty, Empty,
		Empty, Body2, Empty, Empty, Empty, Empty, Empty, Empty,
		Empty, Body2, Body2, Empty, Empty, Empty, Empty, Empty,
		Empty, Body2, Body2, Body2, Body2, Solid, Solid, Solid,
		Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty,
	];

	let mut options = Options {
		mirror_y: false,
		mirror_x: true,
		brightness_noise: 0.0,
		color_variations: 0.0,
		edge_brightness: 0.0,
		saturation: 0.0,
		seed: seed,
		colored: false
	};

	let sprite = gen_sprite(&mask, 8, options);
	let hex: String = sprite.iter().map(|b| format!("{:08X}", b)).collect();
	return hex;
}
