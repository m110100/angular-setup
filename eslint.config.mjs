import eslint from '@eslint/js';
import angular from 'angular-eslint';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
	{
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
		],
		files: ['**/*.ts'],
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/component-class-suffix': 'off',
			'@angular-eslint/directive-class-suffix': 'off',
			'@angular-eslint/no-input-rename': 'off',
			'@angular-eslint/no-output-rename': 'off',
			'@angular-eslint/no-output-on-prefix': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@angular-eslint/component-selector': [
				'error',
				{
					style: 'kebab-case',
					type: 'element',
				},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					style: 'camelCase',
					type: 'attribute',
				},
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '_',
					varsIgnorePattern: '_',
				},
			],
		},
	},
	{
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		files: ['**/*.html'],
		rules: {
			'@angular-eslint/template/elements-content': 'off',
			'@angular-eslint/template/label-has-associated-control': 'off',
		},
	},
	{
		plugins: {
			import: importPlugin,
		},
		settings: {
			'import/resolver': {
				typescript: {
					project: 'tsconfig.json',
				},
			},
		},
		files: ['src/**/*.ts'],
		rules: {
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						['sibling', 'parent'],
						'index',
						'object',
					],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
	prettierConfig
);
