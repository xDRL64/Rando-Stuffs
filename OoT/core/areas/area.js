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
	theObject = {};
	for(let a in areaList)
		theObject[a] = { name:areaList[a] };

	// link mapPos with areas
	/////////////////////////
	let byMapPos = window.RandoStuffs.OoT.core.Area.byMapPos;
	let mapPos   = window.RandoStuffs.OoT.core.Area.mapPos;
	for(let k in byMapPos)
		for(let a of byMapPos[k])
			theObject[a].map = mapPos[k];

	// link kind with areas
	///////////////////////
	let byKind = window.RandoStuffs.OoT.core.Area.byKind;
	let kind   = window.RandoStuffs.OoT.core.Area.kind;
	for(let k in byKind)
		for(let a of byKind[k])
			theObject[a].kind = kind[k];

	// link cardinal with areas
	///////////////////////////
	let byCardinal = window.RandoStuffs.OoT.core.Area.byCardinal;
	let cardinal   = window.RandoStuffs.OoT.core.Area.cardinal;
	for(let k in byCardinal)
		for(let a of byCardinal[k])
			theObject[a].crdnl = cardinal[k];

	window.RandoStuffs.OoT.core.Area.Data = theObject;

};







// HARDCODED OBJECTS
//

// main in-game loadable 3D map areas
/* let areas = {
	KokiriForest         : { name:'Kokiri Forest',             map:mapPos.KokiriForest,     kind:kind.overworld, crdnl:undefined },
	LostWoods            : { name:'Lost Woods',                map:mapPos.LostWoods,        kind:kind.overworld, crdnl:undefined },
	ScaredForestMeadow   : { name:'Scared Forest Meadow',      map:mapPos.LostWoods,        kind:kind.overworld, crdnl:undefined },
	HyruleField          : { name:'Hyrule Field',              map:mapPos.HyruleField,      kind:kind.overworld, crdnl:undefined },
	LonLonRanch          : { name:'Lon Lon Ranch',             map:mapPos.LonLonRanch,      kind:kind.overworld, crdnl:undefined },
	Market               : { name:'Market',                    map:mapPos.Market,           kind:kind.overworld, crdnl:undefined },
	TempleTime           : { name:'Temple of Time',            map:mapPos.Market,           kind:kind.overworld, crdnl:undefined },
	HyruleCastle         : { name:'Hyrule Castle',             map:mapPos.Market,           kind:kind.overworld, crdnl:undefined },
	KakarikoVillage      : { name:'Kakariko Village',          map:mapPos.KakarikoVillage,  kind:kind.overworld, crdnl:undefined },
	Graveyard            : { name:'Graveyard',                 map:mapPos.KakarikoVillage,  kind:kind.overworld, crdnl:undefined },
	DeathMountainTrail   : { name:'Death Mountain Trail',      map:mapPos.DeathMountain,    kind:kind.overworld, crdnl:undefined },
	GoronCity            : { name:'Goron City',                map:mapPos.DeathMountain,    kind:kind.overworld, crdnl:undefined },
	DeathMountainCrater  : { name:'Death Mountain Crater',     map:mapPos.DeathMountain,    kind:kind.overworld, crdnl:undefined },
	ZoraRiver            : { name:'Zora\'s River',             map:mapPos.ZoraDomain,       kind:kind.overworld, crdnl:undefined },
	ZoraDomain           : { name:'Zora\'s Domain',            map:mapPos.ZoraDomain,       kind:kind.overworld, crdnl:undefined },
	ZoraFountain         : { name:'Zora\'s Fountain',          map:mapPos.ZoraDomain,       kind:kind.overworld, crdnl:undefined },
	LakeHylia            : { name:'Lake Hylia',                map:mapPos.LakeHylia,        kind:kind.overworld, crdnl:undefined },
	GerudoValley         : { name:'Gerudo Valley',             map:mapPos.GerudoValley,     kind:kind.overworld, crdnl:undefined },
	GerudoFortress       : { name:'Gerudo\'s Fortress',        map:mapPos.GerudoFortress,   kind:kind.overworld, crdnl:undefined },
	HauntedWasteland     : { name:'Haunted Wasteland',         map:mapPos.HauntedWasteland, kind:kind.overworld, crdnl:undefined },
	DesertColossus       : { name:'Desert Colossus',           map:mapPos.HauntedWasteland, kind:kind.overworld, crdnl:undefined },

	DekuTree             : { name:'Inside the Deku Tree',      map:mapPos.KokiriForest,     kind:kind.dungeon,   crdnl:undefined },
	DodongoCavern        : { name:'Dodongo\' Cavern',          map:mapPos.DeathMountain,    kind:kind.dungeon,   crdnl:undefined },
	JabuJabu             : { name:'inside Jabu-Jabu\'s Belly', map:mapPos.ZoraDomain,       kind:kind.dungeon,   crdnl:undefined },

	ForestTemple         : { name:'Forest Temple',             map:mapPos.LostWoods,        kind:kind.dungeon,   crdnl:undefined },
	FireTemple           : { name:'Fire Temple',               map:mapPos.DeathMountain,    kind:kind.dungeon,   crdnl:undefined },
	WaterTemple          : { name:'Water Temple',              map:mapPos.LakeHylia,        kind:kind.dungeon,   crdnl:undefined },
	SpiritTemple         : { name:'Spirit Temple',             map:mapPos.HauntedWasteland, kind:kind.dungeon,   crdnl:undefined },
	ShadowTemple         : { name:'Shadow Temple',             map:mapPos.KakarikoVillage,  kind:kind.dungeon,   crdnl:undefined },

	BottomWell           : { name:'Bottom of the Well',        map:mapPos.KakarikoVillage,  kind:kind.dungeon,   crdnl:undefined },
	IceCavern            : { name:'Ice Cavern',                map:mapPos.ZoraDomain,       kind:kind.dungeon,   crdnl:undefined },

	ThievesHideout       : { name:'Thieves\' Hideout',         map:mapPos.GerudoFortress,   kind:kind.dungeon,   crdnl:undefined },
	GerudoTrainingGround : { name:'Gerudo Training Ground',    map:mapPos.GerudoFortress,   kind:kind.dungeon,   crdnl:undefined },
	GanonCastle          : { name:'Inside Ganon\'s Castle',    map:mapPos.Market,           kind:kind.dungeon,   crdnl:undefined },
}; */