window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Area ??= {};

window.RandoStuffs.OoT.core.Area.Data = null;

// area list { areaNameAsProp:'true OoT name', ... }
window.RandoStuffs.OoT.core.Area.list = {
	KokiriForest         : 'Kokiri Forest',
	LostWoods            : 'Lost Woods',
	ScaredForestMeadow   : 'Scared Forest Meadow',
	HyruleField          : 'Hyrule Field',
	LonLonRanch          : 'Lon Lon Ranch',
	Market               : 'Market',
	TempleTime           : 'Temple of Time',
	HyruleCastle         : 'Hyrule Castle',
	KakarikoVillage      : 'Kakariko Village',
	Graveyard            : 'Graveyard',
	DeathMountainTrail   : 'Death Mountain Trail',
	GoronCity            : 'Goron City',
	DeathMountainCrater  : 'Death Mountain Crater',
	ZoraRiver            : 'Zora\'s River',
	ZoraDomain           : 'Zora\'s Domain',
	ZoraFountain         : 'Zora\'s Fountain',
	LakeHylia            : 'Lake Hylia',
	GerudoValley         : 'Gerudo Valley',
	GerudoFortress       : 'Gerudo\'s Fortress',
	HauntedWasteland     : 'Haunted Wasteland',
	DesertColossus       : 'Desert Colossus',
	DekuTree             : 'Inside the Deku Tree',
	DodongoCavern        : 'Dodongo\' Cavern',
	JabuJabu             : 'inside Jabu-Jabu\'s Belly',
	ForestTemple         : 'Forest Temple',
	FireTemple           : 'Fire Temple',
	WaterTemple          : 'Water Temple',
	SpiritTemple         : 'Spirit Temple',
	ShadowTemple         : 'Shadow Temple',
	BottomWell           : 'Bottom of the Well',
	IceCavern            : 'Ice Cavern',
	ThievesHideout       : 'Thieves\' Hideout',
	GerudoTrainingGround : 'Gerudo Training Ground',
	GanonCastle          : 'Inside Ganon\'s Castle',
};

window.RandoStuffs.OoT.core.Area.make = function(){
	
	let theObject = null; // output obj

	// init areas with name prop
	let areaList = window.RandoStuffs.OoT.core.Area.list;
	let defCtxObj = window.RandoStuffs.OoT.core.Area.defaultContextObject;
	theObject = {};
	for(let a in areaList)
		theObject[a] = { name:areaList[a], map:'', context:{...defCtxObj} };

	// link mapPos with areas
	/////////////////////////
	let byMapPos = window.RandoStuffs.OoT.core.Area.byMapPos;
	let mapPos   = window.RandoStuffs.OoT.core.Area.mapPos;
	for(let k in byMapPos)
		for(let a of byMapPos[k])
			theObject[a].map = mapPos[k];

	// link context with areas
	///////////////////////////
	let byContext = window.RandoStuffs.OoT.core.Area.byContext;
	//let context   = window.RandoStuffs.OoT.core.Area.context;
	for(let k in byContext)
		for(let a of byContext[k])
			theObject[a].context[k] = true;


	window.RandoStuffs.OoT.core.Area.Data = theObject;
};





