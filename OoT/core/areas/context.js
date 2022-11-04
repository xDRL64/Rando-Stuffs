window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Area ??= {};

// arbitrary area context properties

window.RandoStuffs.OoT.core.Area.context = {

	overworld : 'Overworld Area',
	dungeon   : 'Dungeon Area',

	north     : 'North Direction',
	south     : 'South Direction',
	west      : 'West Direction',
	east      : 'East Direction',
	center    : 'Center Direction',
};

/* window.RandoStuffs.OoT.core.Area.defaultContextObject = {
	overworld : false,
	dungeon   : false,

	north     : false,
	south     : false,
	west      : false,
	east      : false,
	center    : false,
}; */

// context to areas
window.RandoStuffs.OoT.core.Area.byContext = {
	overworld : [
		'KokiriForest',
		'LostWoods',
		'ScaredForestMeadow',
		'HyruleField',
		'LonLonRanch',
		'Market',
		'TempleTime',
		'HyruleCastle',
		'KakarikoVillage',
		'Graveyard',
		'DeathMountainTrail',
		'GoronCity',
		'DeathMountainCrater',
		'ZoraRiver',
		'ZoraDomain',
		'ZoraFountain',
		'LakeHylia',
		'GerudoValley',
		'GerudoFortress',
		'HauntedWasteland',
		'DesertColossus',
	],
	dungeon : [
		'DekuTree',
		'DodongoCavern',
		'JabuJabu',
		'ForestTemple',
		'FireTemple',
		'WaterTemple',
		'SpiritTemple',
		'ShadowTemple',
		'BottomWell',
		'IceCavern',
		'ThievesHideout',
		'GerudoTrainingGround',
		'GanonCastle',
	],

	north : [
		'Market',
		'TempleTime',
		'HyruleCastle',
		'KakarikoVillage',
		'Graveyard',
		'DeathMountainTrail',
		'GoronCity',
		'DeathMountainCrater',
		'ZoraRiver',
		'ZoraDomain',
		'ZoraFountain',

		'JabuJabu',
		'DodongoCavern',
		'FireTemple',
		'ShadowTemple',
		'BottomWell',
		'IceCavern',
		'GanonCastle',
	],
	south : [
		'LakeHylia',
		'WaterTemple',
	],
	west : [
		'GerudoValley',
		'GerudoFortress',
		'HauntedWasteland',
		'DesertColossus',

		'SpiritTemple',
		'ThievesHideout',
		'GerudoTrainingGround',
	],
	east : [
		'KokiriForest',
		'LostWoods',
		'ScaredForestMeadow',
		'ZoraRiver',
		'ZoraDomain',
		'ZoraFountain',

		'DekuTree',
		'JabuJabu',
		'ForestTemple',
		'IceCavern',
	],
	center : [
		'HyruleField',
		'LonLonRanch',
	],

};