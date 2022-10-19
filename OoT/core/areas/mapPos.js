window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Area ??= {};

// official OoT map point positions
window.RandoStuffs.OoT.core.Area.mapPos = {
	KokiriForest     : 'Kokiri Forest',
	LostWoods        : 'Lost Woods',
	HyruleField      : 'Hyrule Field',
	LonLonRanch      : 'Lon Lon Ranch',
	Market           : 'Market',
	KakarikoVillage  : 'Kakariko Village',
	DeathMountain    : 'Death Mountain',
	ZoraDomain       : 'Zora\'s Domain',
	LakeHylia        : 'Lake Hylia',
	GerudoValley     : 'Gerudo Valley',
	GerudoFortress   : 'Gerudo\'s Fortress',
	HauntedWasteland : 'Haunted Wasteland',
};

// mapPos to areas
window.RandoStuffs.OoT.core.Area.byMapPos = {
	KokiriForest : [
		'KokiriForest',
		'DekuTree',
	],
	LostWoods : [
		'LostWoods',
		'ScaredForestMeadow',
		'ForestTemple',
	],
	HyruleField : [
		'HyruleField',
	],
	LonLonRanch : [
		'LonLonRanch',
	],
	Market : [
		'Market',
		'TempleTime',
		'HyruleCastle',
		'GanonCastle',
	],
	KakarikoVillage : [
		'KakarikoVillage',
		'Graveyard',
		'ShadowTemple',
		'BottomWell',
	],
	DeathMountain : [
		'DeathMountainTrail',
		'GoronCity',
		'DeathMountainCrater',
		'DodongoCavern',
		'FireTemple',
	],
	ZoraDomain : [
		'ZoraRiver',
		'ZoraDomain',
		'ZoraFountain',
		'JabuJabu',
		'IceCavern',
	],
	LakeHylia : [
		'LakeHylia',
		'WaterTemple',
	],
	GerudoValley : [
		'GerudoValley',
	],
	GerudoFortress : [
		'GerudoFortress',
		'ThievesHideout',
		'GerudoTrainingGround',
	],
	HauntedWasteland : [
		'HauntedWasteland',
		'DesertColossus',
		'SpiritTemple',
	],
};