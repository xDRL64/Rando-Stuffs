window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

window.RandoStuffs.OoT.core.Location.Data = null;

window.RandoStuffs.OoT.core.Location.list = [
	
	// boss reward
	"Links Pocket",
	"Queen Gohma",
	"King Dodongo",
	"Barinade",
	"Phantom Ganon",
	"Volvagia",
	"Morpha",
	"Bongo Bongo",
	"Twinrova",

	// song
	"Song from Impa",
	"Song from Malon",
	"Song from Saria",
	"Song from Composers Grave",
	"Song from Ocarina of Time",
	"Song from Windmill",

	// teleport song
	"Sheik in Forest",
	"Sheik in Crater",
	"Sheik in Ice Cavern",
	"Sheik at Colossus",
	"Sheik in Kakariko",
	"Sheik at Temple",

	// KF
	"KF Midos Top Left Chest",
	"KF Midos Top Right Chest",
	"KF Midos Bottom Left Chest",
	"KF Midos Bottom Right Chest",
	"KF Kokiri Sword Chest",
	"KF Storms Grotto Chest",

	// KF cow
	"KF Links House Cow",

	// KF GS
	"KF GS Know It All House",
	"KF GS Bean Patch",
	"KF GS House of Twins",

	// KF shop
	"KF Shop Item 1",
	"KF Shop Item 2",
	"KF Shop Item 3",
	"KF Shop Item 4",
	"KF Shop Item 5",
	"KF Shop Item 6",
	"KF Shop Item 7",
	"KF Shop Item 8",

	// LW
	"LW Gift from Saria",
	"LW Ocarina Memory Game", // minigame
	"LW Target in Woods",
	"LW Near Shortcuts Grotto Chest",
	"Deku Theater Skull Mask",
	"Deku Theater Mask of Truth",
	"LW Skull Kid",

	// LW scrub
	"LW Deku Scrub Near Bridge",
	"LW Deku Scrub Near Deku Theater Left",
	"LW Deku Scrub Near Deku Theater Right",
	"LW Deku Scrub Grotto Front",
	"LW Deku Scrub Grotto Rear",

	// LW GS
	"LW GS Bean Patch Near Bridge",
	"LW GS Bean Patch Near Theater",
	"LW GS Above Theater",

	// SFM
	"SFM Wolfos Grotto Chest",

	// SFM scrub
	"SFM Deku Scrub Grotto Front",
	"SFM Deku Scrub Grotto Rear",

	// SFM GS
	"SFM GS",

	// HF
	"HF Ocarina of Time Item",
	"HF Near Market Grotto Chest",
	"HF Tektite Grotto Freestanding PoH",
	"HF Southeast Grotto Chest",
	"HF Open Grotto Chest",

	// HF scrub
	"HF Deku Scrub Grotto",

	// HF cow
	"HF Cow Grotto Cow",

	// HF GS
	"HF GS Cow Grotto",
	"HF GS Near Kak Grotto",

	// Market
	"Market Shooting Gallery Reward", // minigame
	"Market Bombchu Bowling First Prize", // minigame
	"Market Bombchu Bowling Second Prize", // minigame
	"Market Lost Dog",
	"Market Treasure Chest Game Reward", // minigame
	"Market 10 Big Poes",
	
	// Market GS
	"Market GS Guard House",
	
	// Market shop
	"Market Bazaar Item 1",
	"Market Bazaar Item 2",
	"Market Bazaar Item 3",
	"Market Bazaar Item 4",
	"Market Bazaar Item 5",
	"Market Bazaar Item 6",
	"Market Bazaar Item 7",
	"Market Bazaar Item 8",
	
	// Market shop
	"Market Potion Shop Item 1",
	"Market Potion Shop Item 2",
	"Market Potion Shop Item 3",
	"Market Potion Shop Item 4",
	"Market Potion Shop Item 5",
	"Market Potion Shop Item 6",
	"Market Potion Shop Item 7",
	"Market Potion Shop Item 8",
	
	// Market shop
	"Market Bombchu Shop Item 1",
	"Market Bombchu Shop Item 2",
	"Market Bombchu Shop Item 3",
	"Market Bombchu Shop Item 4",
	"Market Bombchu Shop Item 5",
	"Market Bombchu Shop Item 6",
	"Market Bombchu Shop Item 7",
	"Market Bombchu Shop Item 8",

	// ToT
	"ToT Light Arrows Cutscene",

	// HC
	"HC Malon Egg",
	"HC Great Fairy Reward",

	// HC GS
	"HC GS Tree",
	"HC GS Storms Grotto",

	// LLR
	"LLR Talons Chickens", // minigame
	"LLR Freestanding PoH",

	// LLR scrub
	"LLR Deku Scrub Grotto Left",
	"LLR Deku Scrub Grotto Center",
	"LLR Deku Scrub Grotto Right",

	// LLR cow
	"LLR Stables Left Cow",
	"LLR Stables Right Cow",
	"LLR Tower Left Cow",
	"LLR Tower Right Cow",
	
	// LLR GS
	"LLR GS House Window",
	"LLR GS Tree",
	"LLR GS Rain Shed",
	"LLR GS Back Wall",

	// Kak
	"Kak Anju as Child",
	"Kak Anju as Adult",
	"Kak Impas House Freestanding PoH",
	"Kak Windmill Freestanding PoH",
	"Kak Man on Roof",
	"Kak Open Grotto Chest",
	"Kak Redead Grotto Chest",
	"Kak Shooting Gallery Reward", // minigame

	// Kak GS reward
	"Kak 10 Gold Skulltula Reward",
	"Kak 20 Gold Skulltula Reward",
	"Kak 30 Gold Skulltula Reward",
	"Kak 40 Gold Skulltula Reward",
	"Kak 50 Gold Skulltula Reward",

	// Kak cow
	"Kak Impas House Cow",

	// Kak GS
	"Kak GS Tree",
	"Kak GS Guards House",
	"Kak GS Watchtower",
	"Kak GS Skulltula House",
	"Kak GS House Under Construction",
	"Kak GS Above Impas House",
	
	// Kak shop
	"Kak Bazaar Item 1",
	"Kak Bazaar Item 2",
	"Kak Bazaar Item 3",
	"Kak Bazaar Item 4",
	"Kak Bazaar Item 5",
	"Kak Bazaar Item 6",
	"Kak Bazaar Item 7",
	"Kak Bazaar Item 8",
	
	// Kak shop
	"Kak Potion Shop Item 1",
	"Kak Potion Shop Item 2",
	"Kak Potion Shop Item 3",
	"Kak Potion Shop Item 4",
	"Kak Potion Shop Item 5",
	"Kak Potion Shop Item 6",
	"Kak Potion Shop Item 7",
	"Kak Potion Shop Item 8",

	// Graveyard
	"Graveyard Shield Grave Chest",
	"Graveyard Heart Piece Grave Chest",
	"Graveyard Composers Grave Chest",
	"Graveyard Freestanding PoH",
	"Graveyard Dampe Gravedigging Tour", // minigame
	"Graveyard Hookshot Chest",
	"Graveyard Dampe Race Freestanding PoH",
	
	// Graveyard GS
	"Graveyard GS Bean Patch",
	"Graveyard GS Wall",

	// DMT
	"DMT Freestanding PoH",
	"DMT Chest",
	"DMT Storms Grotto Chest",
	"DMT Great Fairy Reward",
	"DMT Biggoron",

	// DMT cow
	"DMT Cow Grotto Cow",

	// DMT GS
	"DMT GS Near Kak",
	"DMT GS Bean Patch",
	"DMT GS Above Dodongos Cavern",
	"DMT GS Falling Rocks Path",

	// GC
	"GC Darunias Joy",
	"GC Pot Freestanding PoH",
	"GC Rolling Goron as Child",
	"GC Rolling Goron as Adult",
	"GC Medigoron",
	"GC Maze Left Chest",
	"GC Maze Right Chest",
	"GC Maze Center Chest",
	
	// GC scrub
	"GC Deku Scrub Grotto Left",
	"GC Deku Scrub Grotto Center",
	"GC Deku Scrub Grotto Right",
	
	// GC GS
	"GC GS Center Platform",
	"GC GS Boulder Maze",
	
	// GC shop
	"GC Shop Item 1",
	"GC Shop Item 2",
	"GC Shop Item 3",
	"GC Shop Item 4",
	"GC Shop Item 5",
	"GC Shop Item 6",
	"GC Shop Item 7",
	"GC Shop Item 8",

	// DMC
	"DMC Volcano Freestanding PoH",
	"DMC Wall Freestanding PoH",
	"DMC Upper Grotto Chest",
	"DMC Great Fairy Reward",
	
	// DMC scrub
	"DMC Deku Scrub",
	"DMC Deku Scrub Grotto Left",
	"DMC Deku Scrub Grotto Center",
	"DMC Deku Scrub Grotto Right",
	
	// DMC GS
	"DMC GS Crate",
	"DMC GS Bean Patch",

	// ZR
	"ZR Magic Bean Salesman",
	"ZR Open Grotto Chest",
	"ZR Frogs in the Rain",
	"ZR Frogs Ocarina Game", // minigame
	"ZR Near Open Grotto Freestanding PoH",
	"ZR Near Domain Freestanding PoH",
	
	// ZR scrub
	"ZR Deku Scrub Grotto Front",
	"ZR Deku Scrub Grotto Rear",
	
	// ZR GS
	"ZR GS Tree",
	"ZR GS Ladder",
	"ZR GS Near Raised Grottos",
	"ZR GS Above Bridge",

	// ZD
	"ZD Diving Minigame", // minigame
	"ZD Chest",
	"ZD King Zora Thawed",
	
	// ZD GS
	"ZD GS Frozen Waterfall",

	// ZD shop
	"ZD Shop Item 1",
	"ZD Shop Item 2",
	"ZD Shop Item 3",
	"ZD Shop Item 4",
	"ZD Shop Item 5",
	"ZD Shop Item 6",
	"ZD Shop Item 7",
	"ZD Shop Item 8",

	// ZF
	"ZF Great Fairy Reward",
	"ZF Iceberg Freestanding PoH",
	"ZF Bottom Freestanding PoH",

	// ZF GS
	"ZF GS Above the Log",
	"ZF GS Tree",
	"ZF GS Hidden Cave",

	// LH
	"LH Underwater Item",
	"LH Child Fishing", // minigame
	"LH Adult Fishing", // minigame
	"LH Lab Dive",
	"LH Freestanding PoH",
	"LH Sun",
	
	// LH scrub
	"LH Deku Scrub Grotto Left",
	"LH Deku Scrub Grotto Center",
	"LH Deku Scrub Grotto Right",
	
	// LH GS
	"LH GS Bean Patch",
	"LH GS Lab Wall",
	"LH GS Small Island",
	"LH GS Lab Crate",
	"LH GS Tree",

	// GV
	"GV Crate Freestanding PoH",
	"GV Waterfall Freestanding PoH",
	"GV Chest",
	
	// GV scrub
	"GV Deku Scrub Grotto Front",
	"GV Deku Scrub Grotto Rear",
	
	// GV cow
	"GV Cow",
	
	// GV GS
	"GV GS Small Bridge",
	"GV GS Bean Patch",
	"GV GS Behind Tent",
	"GV GS Pillar",

	// GF
	"GF North F1 Carpenter", // (RED)
	"GF North F2 Carpenter", // (GREEN)
	"GF South F1 Carpenter", // (YELLOW)
	"GF South F2 Carpenter", // (BLUE)
	"GF Gerudo Membership Card",
	"GF Chest",
	"GF HBA 1000 Points", // minigame
	"GF HBA 1500 Points", // minigame
	
	// GF GS
	"GF GS Top Floor",
	"GF GS Archery Range",

	// Wasteland
	"Wasteland Bombchu Salesman",
	"Wasteland Chest",
	
	// Wasteland GS
	"Wasteland GS",

	// Colossus
	"Colossus Great Fairy Reward",
	"Colossus Freestanding PoH",
	
	// Colossus scrub
	"Colossus Deku Scrub Grotto Front",
	"Colossus Deku Scrub Grotto Rear",
	
	// Colossus GS
	"Colossus GS Bean Patch",
	"Colossus GS Tree",
	"Colossus GS Hill",

	// OGC
	"OGC Great Fairy Reward",

	// OGC GS
	"OGC GS",

	// Deku Tree
	"Deku Tree Map Chest",
	"Deku Tree Slingshot Room Side Chest",
	"Deku Tree Slingshot Chest",
	"Deku Tree Compass Chest",
	"Deku Tree Compass Room Side Chest",
	"Deku Tree Basement Chest",

	// Deku Tree GS
	"Deku Tree GS Compass Room",
	"Deku Tree GS Basement Vines",
	"Deku Tree GS Basement Gate",
	"Deku Tree GS Basement Back Room",

	// Deku Tree boss heart
	"Deku Tree Queen Gohma Heart",

	// Dodongos Cavern
	"Dodongos Cavern Map Chest",
	"Dodongos Cavern Compass Chest",
	"Dodongos Cavern Bomb Flower Platform Chest",
	"Dodongos Cavern Bomb Bag Chest",
	"Dodongos Cavern End of Bridge Chest",
	
	// Dodongos Cavern scrub
	"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
	"Dodongos Cavern Deku Scrub Lobby",
	"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
	"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
	
	// Dodongos Cavern GS
	"Dodongos Cavern GS Side Room Near Lower Lizalfos",
	"Dodongos Cavern GS Scarecrow",
	"Dodongos Cavern GS Alcove Above Stairs",
	"Dodongos Cavern GS Vines Above Stairs",
	"Dodongos Cavern GS Back Room",
	
	// Dodongos Cavern boss room
	"Dodongos Cavern Boss Room Chest",
	
	// Dodongos Cavern boss heart
	"Dodongos Cavern King Dodongo Heart",

	// Jabu Jabus Belly
	"Jabu Jabus Belly Boomerang Chest",
	"Jabu Jabus Belly Map Chest",
	"Jabu Jabus Belly Compass Chest",
	
	// Jabu Jabus Belly scrub
	"Jabu Jabus Belly Deku Scrub",
	
	// Jabu Jabus Belly GS
	"Jabu Jabus Belly GS Water Switch Room",
	"Jabu Jabus Belly GS Lobby Basement Lower",
	"Jabu Jabus Belly GS Lobby Basement Upper",
	"Jabu Jabus Belly GS Near Boss",
	
	// Jabu Jabus Belly boss heart
	"Jabu Jabus Belly Barinade Heart",

	// Bottom of the Well
	"Bottom of the Well Front Left Fake Wall Chest",
	"Bottom of the Well Front Center Bombable Chest",
	"Bottom of the Well Back Left Bombable Chest",
	"Bottom of the Well Underwater Left Chest",
	"Bottom of the Well Freestanding Key",
	"Bottom of the Well Compass Chest",
	"Bottom of the Well Center Skulltula Chest",
	"Bottom of the Well Right Bottom Fake Wall Chest",
	"Bottom of the Well Fire Keese Chest",
	"Bottom of the Well Like Like Chest",
	"Bottom of the Well Map Chest",
	"Bottom of the Well Underwater Front Chest",
	"Bottom of the Well Invisible Chest",
	"Bottom of the Well Lens of Truth Chest",
	
	// Bottom of the Well GS
	"Bottom of the Well GS West Inner Room",
	"Bottom of the Well GS East Inner Room",
	"Bottom of the Well GS Like Like Cage",

	// Forest Temple
	"Forest Temple First Room Chest",
	"Forest Temple First Stalfos Chest",
	"Forest Temple Raised Island Courtyard Chest",
	"Forest Temple Map Chest",
	"Forest Temple Well Chest",
	"Forest Temple Eye Switch Chest",
	"Forest Temple Boss Key Chest",
	"Forest Temple Floormaster Chest",
	"Forest Temple Red Poe Chest",
	"Forest Temple Bow Chest",
	"Forest Temple Blue Poe Chest",
	"Forest Temple Falling Ceiling Room Chest",
	"Forest Temple Basement Chest",

	// Forest Temple GS
	"Forest Temple GS First Room",
	"Forest Temple GS Lobby",
	"Forest Temple GS Raised Island Courtyard",
	"Forest Temple GS Level Island Courtyard",
	"Forest Temple GS Basement",

	// Forest Temple boss heart
	"Forest Temple Phantom Ganon Heart",

	// Fire Temple
	"Fire Temple Near Boss Chest",
	"Fire Temple Flare Dancer Chest",
	"Fire Temple Boss Key Chest",
	"Fire Temple Big Lava Room Lower Open Door Chest",
	"Fire Temple Big Lava Room Blocked Door Chest",
	"Fire Temple Boulder Maze Lower Chest",
	"Fire Temple Boulder Maze Side Room Chest",
	"Fire Temple Map Chest",
	"Fire Temple Boulder Maze Shortcut Chest",
	"Fire Temple Boulder Maze Upper Chest",
	"Fire Temple Scarecrow Chest",
	"Fire Temple Compass Chest",
	"Fire Temple Megaton Hammer Chest",
	"Fire Temple Highest Goron Chest",
	
	// Fire Temple GS
	"Fire Temple GS Boss Key Loop",
	"Fire Temple GS Song of Time Room",
	"Fire Temple GS Boulder Maze",
	"Fire Temple GS Scarecrow Climb",
	"Fire Temple GS Scarecrow Top",
	
	// Fire Temple boss heart
	"Fire Temple Volvagia Heart",

	// Water Temple
	"Water Temple Compass Chest",
	"Water Temple Map Chest",
	"Water Temple Cracked Wall Chest",
	"Water Temple Torches Chest",
	"Water Temple Boss Key Chest",
	"Water Temple Central Pillar Chest",
	"Water Temple Central Bow Target Chest",
	"Water Temple Longshot Chest",
	"Water Temple River Chest",
	"Water Temple Dragon Chest",
	
	// Water Temple GS
	"Water Temple GS Behind Gate",
	"Water Temple GS Near Boss Key Chest",
	"Water Temple GS Central Pillar",
	"Water Temple GS Falling Platform Room",
	"Water Temple GS River",
	
	// Water Temple boss heart
	"Water Temple Morpha Heart",

	// Shadow Temple
	"Shadow Temple Map Chest",
	"Shadow Temple Hover Boots Chest",
	"Shadow Temple Compass Chest",
	"Shadow Temple Early Silver Rupee Chest",
	"Shadow Temple Invisible Blades Visible Chest",
	"Shadow Temple Invisible Blades Invisible Chest",
	"Shadow Temple Falling Spikes Lower Chest",
	"Shadow Temple Falling Spikes Upper Chest",
	"Shadow Temple Falling Spikes Switch Chest",
	"Shadow Temple Invisible Spikes Chest",
	"Shadow Temple Freestanding Key",
	"Shadow Temple Wind Hint Chest",
	"Shadow Temple After Wind Enemy Chest",
	"Shadow Temple After Wind Hidden Chest",
	"Shadow Temple Spike Walls Left Chest",
	"Shadow Temple Boss Key Chest",
	"Shadow Temple Invisible Floormaster Chest",

	// Shadow Temple GS
	"Shadow Temple GS Like Like Room",
	"Shadow Temple GS Falling Spikes Room",
	"Shadow Temple GS Single Giant Pot",
	"Shadow Temple GS Near Ship",
	"Shadow Temple GS Triple Giant Pot",

	// Shadow Temple boss heart
	"Shadow Temple Bongo Bongo Heart",

	// Spirit Temple
	"Spirit Temple Child Bridge Chest",
	"Spirit Temple Child Early Torches Chest",
	"Spirit Temple Child Climb North Chest",
	"Spirit Temple Child Climb East Chest",
	"Spirit Temple Map Chest",
	"Spirit Temple Sun Block Room Chest",
	"Spirit Temple Silver Gauntlets Chest",
	"Spirit Temple Compass Chest",
	"Spirit Temple Early Adult Right Chest",
	"Spirit Temple First Mirror Left Chest",
	"Spirit Temple First Mirror Right Chest",
	"Spirit Temple Statue Room Northeast Chest",
	"Spirit Temple Statue Room Hand Chest",
	"Spirit Temple Near Four Armos Chest",
	"Spirit Temple Hallway Right Invisible Chest",
	"Spirit Temple Hallway Left Invisible Chest",
	"Spirit Temple Mirror Shield Chest",
	"Spirit Temple Boss Key Chest",
	"Spirit Temple Topmost Chest",
	
	// Spirit Temple GS
	"Spirit Temple GS Metal Fence",
	"Spirit Temple GS Sun on Floor Room",
	"Spirit Temple GS Hall After Sun Block Room",
	"Spirit Temple GS Lobby",
	"Spirit Temple GS Boulder Room",
	
	// Spirit Temple boss heart
	"Spirit Temple Twinrova Heart",

	// Ice Cavern
	"Ice Cavern Map Chest",
	"Ice Cavern Compass Chest",
	"Ice Cavern Freestanding PoH",
	"Ice Cavern Iron Boots Chest",

	// Ice Cavern GS
	"Ice Cavern GS Spinning Scythe Room",
	"Ice Cavern GS Heart Piece Room",
	"Ice Cavern GS Push Block Room",

	// Gerudo Training Grounds
	"Gerudo Training Grounds Lobby Left Chest",
	"Gerudo Training Grounds Lobby Right Chest",
	"Gerudo Training Grounds Stalfos Chest",
	"Gerudo Training Grounds Before Heavy Block Chest",
	"Gerudo Training Grounds Heavy Block First Chest",  // near
	"Gerudo Training Grounds Heavy Block Second Chest", // left
	"Gerudo Training Grounds Heavy Block Third Chest",  // right (invisible)
	"Gerudo Training Grounds Heavy Block Fourth Chest", // far
	"Gerudo Training Grounds Eye Statue Chest",
	"Gerudo Training Grounds Near Scarecrow Chest",
	"Gerudo Training Grounds Hammer Room Clear Chest",
	"Gerudo Training Grounds Hammer Room Switch Chest",
	"Gerudo Training Grounds Freestanding Key",
	"Gerudo Training Grounds Maze Right Central Chest",
	"Gerudo Training Grounds Maze Right Side Chest",
	"Gerudo Training Grounds Underwater Silver Rupee Chest",
	"Gerudo Training Grounds Beamos Chest",
	"Gerudo Training Grounds Hidden Ceiling Chest",
	"Gerudo Training Grounds Maze Path First Chest",
	"Gerudo Training Grounds Maze Path Second Chest",
	"Gerudo Training Grounds Maze Path Third Chest",
	"Gerudo Training Grounds Maze Path Final Chest",

	// Ganons Castle
	"Ganons Castle Forest Trial Chest",
	"Ganons Castle Water Trial Left Chest",
	"Ganons Castle Water Trial Right Chest",
	"Ganons Castle Shadow Trial Front Chest",
	"Ganons Castle Shadow Trial Golden Gauntlets Chest",
	"Ganons Castle Light Trial First Left Chest",
	"Ganons Castle Light Trial Second Left Chest",
	"Ganons Castle Light Trial Third Left Chest",
	"Ganons Castle Light Trial First Right Chest",
	"Ganons Castle Light Trial Second Right Chest",
	"Ganons Castle Light Trial Third Right Chest",
	"Ganons Castle Light Trial Invisible Enemies Chest",
	"Ganons Castle Light Trial Lullaby Chest",
	"Ganons Castle Spirit Trial Crystal Switch Chest",
	"Ganons Castle Spirit Trial Invisible Chest",
	
	// Ganons Castle scrub
	"Ganons Castle Deku Scrub Left",
	"Ganons Castle Deku Scrub Center-Left",
	"Ganons Castle Deku Scrub Center-Right",
	"Ganons Castle Deku Scrub Right",

	// Ganons Tower
	"Ganons Tower Boss Key Chest",

];


window.RandoStuffs.OoT.core.Location.make = function(){

	let theObject = {}; // output obj

	// init locations with name prop
	////////////////////////////////
	let locList = window.RandoStuffs.OoT.core.Location.list;
	theObject = {};
	/* for(let c of locList)
		theObject[c] = { name:c, nameID:c, area:null, context:null }; */
	for(let index in locList){
		let loc = locList[index];
		theObject[loc] = { name:loc, nameID:index, area:null, context:null };
	}
	
	// make by area
	///////////////
	let byArea = window.RandoStuffs.OoT.core.Location.byArea;
	let area   = window.RandoStuffs.OoT.core.Area.Data;
	for(let k in byArea)
		for(let c of byArea[k])
			theObject[c].area = area[k];

	// make by context
	//////////////////////
	let byCtx = window.RandoStuffs.OoT.core.Location.byContext;
	let ctx   = window.RandoStuffs.OoT.core.Location.context;
	let default_ctxObj = {};
	// alloc mem space
	for(let k in ctx)
		default_ctxObj[k] = false;
	for(let k in theObject)
		theObject[k].context = {...default_ctxObj};
	// fill mem space
	for(let k in byCtx){ // k=ctxName
		let a = byCtx[k]
		for(let loc of a){
			theObject[loc].context[k] = true;
		}
	}
	
	window.RandoStuffs.OoT.core.Location.Data = theObject;

};



