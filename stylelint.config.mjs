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
	],
	files: ['**/*.css', '**/*.scss', '**/*.less'],
	rules: {
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': null,
		'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
		'scss/at-rule-no-unknown': true,
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
				],
			},
		],
	},
};
