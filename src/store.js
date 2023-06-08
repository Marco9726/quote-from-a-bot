import { reactive } from 'vue';

export const store = reactive({
	imgPath: '../assets/characters-images/',
	characters: [
		{
			characterName: 'Ash Ketchum',
			nameKebabCase: 'ash-ketchum',
		},
		{
			characterName: 'Barbie',
			nameKebabCase: 'barbie',
		},
		{
			characterName: 'Batman',
			nameKebabCase: 'batman',
		},
		{
			characterName: 'Gandalf',
			nameKebabCase: 'gandalf',
		},
		{
			characterName: 'Harley Quinn',
			nameKebabCase: 'harley-quinn',
		},
		{
			characterName: 'Hermione Granger',
			nameKebabCase: 'hermione-granger',
		},
		{
			characterName: 'Homer Simpsion',
			nameKebabCase: 'homer-simpson',
		},
		{
			characterName: 'Minion',
			nameKebabCase: 'minion',
		},
		{
			characterName: 'Shrek',
			nameKebabCase: 'shrek',
		},
	],
});