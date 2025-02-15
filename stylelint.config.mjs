export default {
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-declaration-strict-value',
	],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
		'stylelint-config-standard-scss',
		'stylelint-config-prettier-scss',
	],
	files: ['**/*.css', '**/*.scss', '**/*.less'],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'selector-class-pattern':
			'^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)|(([A-Z][a-z]+)+(_([A-Z][a-z]+)+)*((_[a-z]*))*)$',
		'scss/percent-placeholder-pattern': '^(v-(.*))$',
		'scss/at-extend-no-missing-placeholder': null,
		'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
		'selector-pseudo-class-no-unknown': [
			true,
			{ ignorePseudoClasses: ['global'] },
		],
		'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
		'scale-unlimited/declaration-strict-value': [
			[
				'color',
				'background-color',
				'font-size',
				'font-weight',
				'font-family',
				'filter',
			],
			{
				ignoreValues: [
					'currentColor',
					'unset',
					'inherit',
					'initial',
					'transparent',
					'rem',
				],
			},
		],
		'declaration-property-value-no-unknown': null,
	},
};
