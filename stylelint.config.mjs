export default {
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-declaration-strict-value',
	],
	files: ['**/*.css', '**/*.scss', '**/*.less'],
	rules: {
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
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
	],
};
