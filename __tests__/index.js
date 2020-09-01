const config = require("../");
const stylelint = require("stylelint");
const test = require("ava");

const validCss = `
/**
* Multi-line comment
*/

.selector-1,
.selector-2,
.selector-3[type="text"] {
	background: linear-gradient(#FFF, rgba(0, 0, 0, .8));
	box-sizing: border-box;
	color: #333;
	display: block;
}

.selector-a,
.selector-b {
	top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {

	.selector {
		transform: translate(1, 1) scale(3);
	}

}

@media (min-orientation: portrait), projection and (color) {

	.selector-i + .selector-ii {
		background: color(rgb(0, 0, 0) lightness(50%));
		font-family: helvetica, arial, sans-serif;
	}

}

@media screen and screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx) {

	.selector {
		background-image: repeating-linear-gradient(-45deg, transparent, #FFF 25px, rgba(255, 255, 255, 1) 50px);
		box-shadow: 0 1px 1px #000,
			0 1px 0 #FFF,
			2px 2px 1px 1px #CCC inset;
		height: 10rem;
		margin: 10px;
		margin-bottom: 5px;
	}

	.selector::after {
		background-image: url("x.svg");
		content: "→";
	}

}

`;

const invalidCss = `a {
	top: 0.2em;
	color: #fff;
}

`;

test("no warnings with valid css", (t) => {
	return stylelint
		.lint({
			code: validCss,
			config,
		})
		.then((data) => {
			const { errored, results } = data;
			const { warnings } = results[0];

			t.falsy(errored, "no errored");
			t.is(warnings.length, 0, "flags no warnings");
		});
});

test("two warnings with invalid css", (t) => {
	return stylelint
		.lint({
			code: invalidCss,
			config,
		})
		.then((data) => {
			const { errored, results } = data;
			const { warnings } = results[0];

			t.truthy(errored, "errored");
			t.is(warnings.length, 2, "flags two warnings");
			t.is(warnings[0].text, 'Expected "#fff" to be "#FFF" (color-hex-case)');
			t.is(
				warnings[1].text,
				"Unexpected leading zero (number-leading-zero)",
				"correct warning text"
			);
		});
});
