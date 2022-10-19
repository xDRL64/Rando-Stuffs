window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Area ??= {};

// arbitrary cardinal positions
window.RandoStuffs.OoT.core.Area.cardinal = {
	N:'North',
	S:'South',
	W:'West',
	E:'East',
	C:'Center',
	NW:'North-West',
	NE:'North-East',
	SW:'South-West',
	SE:'South-East',
	CN:'Center-North',
	CS:'Center-South',
	CW:'Center-West',
	CE:'Center-East',
	CNW:'Center-North-West',
	CNE:'Center-North-East',
	CSW:'Center-South-West',
	CSE:'Center-South-East'
};

// cardinal to areas
window.RandoStuffs.OoT.core.Area.byCardinal = {
	N : [
		'Market',
		'TempleTime',
		'HyruleCastle',
		'KakarikoVillage',
		'Graveyard',
		'DeathMountainTrail',
		'GoronCity',
		'DeathMountainCrater',

		'DodongoCavern',
		'FireTemple',
		'ShadowTemple',
		'BottomWell',
		'GanonCastle',
	],
	S : [
		'LakeHylia',
		'WaterTemple',
	],
	W : [
		'GerudoValley',
		'GerudoFortress',
		'HauntedWasteland',
		'DesertColossus',

		'SpiritTemple',
		'ThievesHideout',
		'GerudoTrainingGround',
	],
	E : [
		'KokiriForest',
		'LostWoods',
		'ScaredForestMeadow',
		
		'DekuTree',
		'ForestTemple',
	],
	C : [
		'HyruleField',
		'LonLonRanch',
	],
	NE : [
		'ZoraRiver',
		'ZoraDomain',
		'ZoraFountain',

		'JabuJabu',
		'IceCavern',
	],
};
