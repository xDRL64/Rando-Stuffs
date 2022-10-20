window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Area ??= {};

// kind of area
window.RandoStuffs.OoT.core.Area.kind = {
	overworld : 'Overworld',
	dungeon   : 'Dungeon',
	other     : 'Other',
};

// kind to areas
window.RandoStuffs.OoT.core.Area.byKind = {
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
};