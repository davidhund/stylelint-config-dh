module.exports = {
  "rules": {
    "indentation": "tab",
    "max-empty-lines": 2,
    "color-hex-case": "upper",
    "no-invalid-double-slash-comments": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-linear-gradient-no-nonstandard-direction": true,
    "number-leading-zero": "never",
    "length-zero-no-unit": true,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
    "value-list-comma-space-after": "always-single-line",
    "property-case": "lower",
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": [
          "/^font-smooth/"
        ]
      }
    ],
    "property-no-vendor-prefix": true,
    "declaration-no-important": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "block-no-empty": true,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-query-list-comma-newline-after": "never-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "comment-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "stylelint-commands"
        ]
      }
    ]
  }
}
