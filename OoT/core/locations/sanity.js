window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

// randomizer sanity categories
window.RandoStuffs.OoT.core.Location.sanity = {
    common            : 'Common',
    song              : 'Song',
    smallKey          : 'Small Key',
    mapCompass        : 'Map & Compass',
    bossKey           : 'Boss Key',
    bossHeart         : 'Boss Heart',
    dungeonReward     : 'Dungeon Reward',
	songDungeonReward : 'Songs as Dungeon Reward',
	stonesMedallions  : 'Stones & Medallions',
    cow               : 'Cow',
    scrub             : 'Scrub',
    shop              : 'Shop',
    token             : 'Token',
    tokenReward       : 'GS Token Reward',
    minigame          : 'Minigame',
};
//let sanity = window.RandoStuffs.OoT.core.Location.sanity;

window.RandoStuffs.OoT.core.Location.bySanity = {
	// contains : kokiri sword, ocarinas, weird egg,
	//            magic beans, gerudo card, medigoron/salesman,
	common : [
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
		// KF
		"KF Midos Top Left Chest",
		"KF Midos Top Right Chest",
		"KF Midos Bottom Left Chest",
		"KF Midos Bottom Right Chest",
		"KF Kokiri Sword Chest",
		"KF Storms Grotto Chest",
		// LW
		"LW Gift from Saria",
		"LW Ocarina Memory Game", // minigame
		"LW Target in Woods",
		"LW Near Shortcuts Grotto Chest",
		"Deku Theater Skull Mask",
		"Deku Theater Mask of Truth",
		"LW Skull Kid",
		// LW scrub (2 x $40)
		"LW Deku Scrub Near Bridge",
		"LW Deku Scrub Grotto Front",
		// SFM
		"SFM Wolfos Grotto Chest",
		// HF
		"HF Ocarina of Time Item",
		"HF Near Market Grotto Chest",
		"HF Tektite Grotto Freestanding PoH",
		"HF Southeast Grotto Chest",
		"HF Open Grotto Chest",
		// HF scrub (1 x $10)
		"HF Deku Scrub Grotto",
		// Market
		"Market Shooting Gallery Reward", // minigame
		"Market Bombchu Bowling First Prize", // minigame
		"Market Bombchu Bowling Second Prize", // minigame
		"Market Lost Dog",
		"Market Treasure Chest Game Reward", // minigame
		"Market 10 Big Poes",
		// ToT
		"ToT Light Arrows Cutscene",
		// HC
		"HC Malon Egg",
		"HC Great Fairy Reward",
		// LLR
		"LLR Talons Chickens", // minigame
		"LLR Freestanding PoH",
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
		// Graveyard
		"Graveyard Shield Grave Chest",
		"Graveyard Heart Piece Grave Chest",
		"Graveyard Composers Grave Chest",
		"Graveyard Freestanding PoH",
		"Graveyard Dampe Gravedigging Tour", // minigame
		"Graveyard Hookshot Chest",
		"Graveyard Dampe Race Freestanding PoH",
		// DMT
		"DMT Freestanding PoH",
		"DMT Chest",
		"DMT Storms Grotto Chest",
		"DMT Great Fairy Reward",
		"DMT Biggoron",
		// GC
		"GC Darunias Joy",
		"GC Pot Freestanding PoH",
		"GC Rolling Goron as Child",
		"GC Rolling Goron as Adult",
		"GC Medigoron",
		"GC Maze Left Chest",
		"GC Maze Right Chest",
		"GC Maze Center Chest",
		// DMC
		"DMC Volcano Freestanding PoH",
		"DMC Wall Freestanding PoH",
		"DMC Upper Grotto Chest",
		"DMC Great Fairy Reward",
		// ZR
		"ZR Magic Bean Salesman",
		"ZR Open Grotto Chest",
		"ZR Frogs in the Rain",
		"ZR Frogs Ocarina Game", // minigame
		"ZR Near Open Grotto Freestanding PoH",
		"ZR Near Domain Freestanding PoH",
		// ZD
		"ZD Diving Minigame", // minigame
		"ZD Chest",
		"ZD King Zora Thawed",
		// ZF
		"ZF Great Fairy Reward",
		"ZF Iceberg Freestanding PoH",
		"ZF Bottom Freestanding PoH",
		// LH
		"LH Underwater Item",
		"LH Child Fishing", // minigame
		"LH Adult Fishing", // minigame
		"LH Lab Dive",
		"LH Freestanding PoH",
		"LH Sun",
		// GV
		"GV Crate Freestanding PoH",
		"GV Waterfall Freestanding PoH",
		"GV Chest",
		// GF
		"GF North F1 Carpenter", // (RED)
		"GF North F2 Carpenter", // (GREEN)
		"GF South F1 Carpenter", // (YELLOW)
		"GF South F2 Carpenter", // (BLUE)
		"GF Gerudo Membership Card",
		"GF Chest",
		"GF HBA 1000 Points", // minigame
		"GF HBA 1500 Points", // minigame
		// Wasteland
		"Wasteland Bombchu Salesman",
		"Wasteland Chest",
		// Colossus
		"Colossus Great Fairy Reward",
		"Colossus Freestanding PoH",
		// OGC
		"OGC Great Fairy Reward",

		// Deku Tree
		"Deku Tree Map Chest",
		"Deku Tree Slingshot Room Side Chest",
		"Deku Tree Slingshot Chest",
		"Deku Tree Compass Chest",
		"Deku Tree Compass Room Side Chest",
		"Deku Tree Basement Chest",
		// Deku Tree boss heart
		"Deku Tree Queen Gohma Heart",
		// Dodongos Cavern
		"Dodongos Cavern Map Chest",
		"Dodongos Cavern Compass Chest",
		"Dodongos Cavern Bomb Flower Platform Chest",
		"Dodongos Cavern Bomb Bag Chest",
		"Dodongos Cavern End of Bridge Chest",
		// Dodongos Cavern boss room
		"Dodongos Cavern Boss Room Chest",
		// Dodongos Cavern boss heart
		"Dodongos Cavern King Dodongo Heart",
		// Jabu Jabus Belly
		"Jabu Jabus Belly Boomerang Chest",
		"Jabu Jabus Belly Map Chest",
		"Jabu Jabus Belly Compass Chest",
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
		// Spirit Temple boss heart
		"Spirit Temple Twinrova Heart",
		// Ice Cavern
		"Ice Cavern Map Chest",
		"Ice Cavern Compass Chest",
		"Ice Cavern Freestanding PoH",
		"Ice Cavern Iron Boots Chest",
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
		// Ganons Tower
		"Ganons Tower Boss Key Chest",
	],
	song : [
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
	],
	smallKey : [
		// GF
		"GF North F1 Carpenter", // (RED)
		"GF North F2 Carpenter", // (GREEN)
		"GF South F1 Carpenter", // (YELLOW)
		"GF South F2 Carpenter", // (BLUE)
		// Forest Temple
		"Forest Temple First Room Chest",
		"Forest Temple First Stalfos Chest",
		"Forest Temple Well Chest",
		"Forest Temple Floormaster Chest",
		"Forest Temple Red Poe Chest",
		// Fire Temple
		"Fire Temple Near Boss Chest",
		"Fire Temple Big Lava Room Lower Open Door Chest",
		"Fire Temple Big Lava Room Blocked Door Chest",
		"Fire Temple Boulder Maze Lower Chest",
		"Fire Temple Boulder Maze Side Room Chest",
		"Fire Temple Boulder Maze Shortcut Chest",
		"Fire Temple Boulder Maze Upper Chest",
		"Fire Temple Highest Goron Chest",
		// Water Temple
		"Water Temple Cracked Wall Chest",
		"Water Temple Torches Chest",
		"Water Temple Central Pillar Chest",
		"Water Temple Central Bow Target Chest",
		"Water Temple River Chest",
		"Water Temple Dragon Chest",
		// Shadow Temple
		"Shadow Temple Early Silver Rupee Chest",
		"Shadow Temple Falling Spikes Switch Chest",
		"Shadow Temple Freestanding Key",
		"Shadow Temple After Wind Hidden Chest",
		"Shadow Temple Invisible Floormaster Chest",
		// Spirit Temple
		"Spirit Temple Child Early Torches Chest",
		"Spirit Temple Sun Block Room Chest",
		"Spirit Temple Early Adult Right Chest",
		"Spirit Temple Statue Room Hand Chest",
		"Spirit Temple Near Four Armos Chest",
		// Bottom of the Well
		"Bottom of the Well Front Left Fake Wall Chest",
		"Bottom of the Well Freestanding Key",
		"Bottom of the Well Right Bottom Fake Wall Chest",
		// Gerudo Training Grounds
		"Gerudo Training Grounds Stalfos Chest",
		"Gerudo Training Grounds Heavy Block Third Chest",
		"Gerudo Training Grounds Eye Statue Chest",
		"Gerudo Training Grounds Near Scarecrow Chest",
		"Gerudo Training Grounds Hammer Room Switch Chest",
		"Gerudo Training Grounds Freestanding Key",
		"Gerudo Training Grounds Underwater Silver Rupee Chest",
		"Gerudo Training Grounds Beamos Chest",
		"Gerudo Training Grounds Hidden Ceiling Chest",
		// Ganons Castle
		"Ganons Castle Light Trial Invisible Enemies Chest",
		"Ganons Castle Light Trial Lullaby Chest",
	],
	mapCompass : [
		// Deku Tree
		"Deku Tree Map Chest",
		"Deku Tree Compass Chest",
		// Dodongos Cavern
		"Dodongos Cavern Map Chest",
		"Dodongos Cavern Compass Chest",
		// Jabu Jabus Belly
		"Jabu Jabus Belly Map Chest",
		"Jabu Jabus Belly Compass Chest",
		// Bottom of the Well
		"Bottom of the Well Map Chest",
		"Bottom of the Well Compass Chest",
		// Forest Temple
		"Forest Temple Map Chest",
		"Forest Temple Blue Poe Chest",
		// Fire Temple
		"Fire Temple Map Chest",
		"Fire Temple Compass Chest",
		// Water Temple
		"Water Temple Map Chest",
		"Water Temple Compass Chest",
		// Shadow Temple
		"Shadow Temple Map Chest",
		"Shadow Temple Compass Chest",
		// Spirit Temple
		"Spirit Temple Map Chest",
		"Spirit Temple Compass Chest",
		// Ice Cavern
		"Ice Cavern Map Chest",
		"Ice Cavern Compass Chest",
	],
	bossKey : [
		// Forest Temple
		"Forest Temple Boss Key Chest",
		// Fire Temple
		"Fire Temple Boss Key Chest",
		// Water Temple
		"Water Temple Boss Key Chest",
		// Shadow Temple
		"Shadow Temple Boss Key Chest",
		// Spirit Temple
		"Spirit Temple Boss Key Chest",
		// Ganons Tower
		"Ganons Tower Boss Key Chest",
	],
	bossHeart : [
		// Deku Tree boss heart
		"Deku Tree Queen Gohma Heart",
		// Dodongos Cavern boss heart
		"Dodongos Cavern King Dodongo Heart",
		// Jabu Jabus Belly boss heart
		"Jabu Jabus Belly Barinade Heart",
		// Forest Temple boss heart
		"Forest Temple Phantom Ganon Heart",
		// Fire Temple boss heart
		"Fire Temple Volvagia Heart",
		// Water Temple boss heart
		"Water Temple Morpha Heart",
		// Shadow Temple boss heart
		"Shadow Temple Bongo Bongo Heart",
		// Spirit Temple boss heart
		"Spirit Temple Twinrova Heart",
	],
	dungeonReward : [
		// boss reward
		"Deku Tree Queen Gohma Heart",
		"Dodongos Cavern King Dodongo Heart",
		"Jabu Jabus Belly Barinade Heart",
		"Forest Temple Phantom Ganon Heart",
		"Fire Temple Volvagia Heart",
		"Water Temple Morpha Heart",
		"Shadow Temple Bongo Bongo Heart",
		"Spirit Temple Twinrova Heart",
		// minidungeon reward
		"Bottom of the Well Lens of Truth Chest",
		"Ice Cavern Iron Boots Chest",
		"Gerudo Training Grounds Maze Path Final Chest",
	],
	songDungeonReward : [
		// boss reward
		"Deku Tree Queen Gohma Heart",
		"Dodongos Cavern King Dodongo Heart",
		"Jabu Jabus Belly Barinade Heart",
		"Forest Temple Phantom Ganon Heart",
		"Fire Temple Volvagia Heart",
		"Water Temple Morpha Heart",
		"Shadow Temple Bongo Bongo Heart",
		"Spirit Temple Twinrova Heart",
		// minidungeon reward
		"Bottom of the Well Lens of Truth Chest",
		"Ice Cavern Iron Boots Chest",
		"Gerudo Training Grounds Maze Path Final Chest",
		// + zelda's lullaby location
		"Song from Impa",
	],
	stonesMedallions : [
		"Links Pocket",
		"Queen Gohma",
		"King Dodongo",
		"Barinade",
		"Phantom Ganon",
		"Volvagia",
		"Morpha",
		"Bongo Bongo",
		"Twinrova",
	],
	cow : [
		// KF cow
		"KF Links House Cow",
		// HF cow
		"HF Cow Grotto Cow",
		// LLR cow
		"LLR Stables Left Cow",
		"LLR Stables Right Cow",
		"LLR Tower Left Cow",
		"LLR Tower Right Cow",
		// Kak cow
		"Kak Impas House Cow",
		// DMT cow
		"DMT Cow Grotto Cow",
		// GV cow
		"GV Cow",
	],
	scrub : [
		// LW scrub
		"LW Deku Scrub Near Bridge",
		"LW Deku Scrub Near Deku Theater Left",
		"LW Deku Scrub Near Deku Theater Right",
		"LW Deku Scrub Grotto Front",
		"LW Deku Scrub Grotto Rear",
		// SFM scrub
		"SFM Deku Scrub Grotto Front",
		"SFM Deku Scrub Grotto Rear",
		// HF scrub
		"HF Deku Scrub Grotto",
		// LLR scrub
		"LLR Deku Scrub Grotto Left",
		"LLR Deku Scrub Grotto Center",
		"LLR Deku Scrub Grotto Right",
		// GC scrub
		"GC Deku Scrub Grotto Left",
		"GC Deku Scrub Grotto Center",
		"GC Deku Scrub Grotto Right",
		// DMC scrub
		"DMC Deku Scrub",
		"DMC Deku Scrub Grotto Left",
		"DMC Deku Scrub Grotto Center",
		"DMC Deku Scrub Grotto Right",
		// ZR scrub
		"ZR Deku Scrub Grotto Front",
		"ZR Deku Scrub Grotto Rear",
		// LH scrub
		"LH Deku Scrub Grotto Left",
		"LH Deku Scrub Grotto Center",
		"LH Deku Scrub Grotto Right",
		// GV scrub
		"GV Deku Scrub Grotto Front",
		"GV Deku Scrub Grotto Rear",
		// Colossus scrub
		"Colossus Deku Scrub Grotto Front",
		"Colossus Deku Scrub Grotto Rear",
		// Dodongos Cavern scrub
		"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
		"Dodongos Cavern Deku Scrub Lobby",
		"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
		"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
		// Jabu Jabus Belly scrub
		"Jabu Jabus Belly Deku Scrub",
		// Ganons Castle scrub
		"Ganons Castle Deku Scrub Left",
		"Ganons Castle Deku Scrub Center-Left",
		"Ganons Castle Deku Scrub Center-Right",
		"Ganons Castle Deku Scrub Right",
	],
	shop : [
		// KF shop
		"KF Shop Item 1",
		"KF Shop Item 2",
		"KF Shop Item 3",
		"KF Shop Item 4",
		"KF Shop Item 5",
		"KF Shop Item 6",
		"KF Shop Item 7",
		"KF Shop Item 8",
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
		// GC shop
		"GC Shop Item 1",
		"GC Shop Item 2",
		"GC Shop Item 3",
		"GC Shop Item 4",
		"GC Shop Item 5",
		"GC Shop Item 6",
		"GC Shop Item 7",
		"GC Shop Item 8",
		// ZD shop
		"ZD Shop Item 1",
		"ZD Shop Item 2",
		"ZD Shop Item 3",
		"ZD Shop Item 4",
		"ZD Shop Item 5",
		"ZD Shop Item 6",
		"ZD Shop Item 7",
		"ZD Shop Item 8",
	],
	token : [
		// KF GS
		"KF GS Know It All House",
		"KF GS Bean Patch",
		"KF GS House of Twins",
		// LW GS
		"LW GS Bean Patch Near Bridge",
		"LW GS Bean Patch Near Theater",
		"LW GS Above Theater",
		// SFM GS
		"SFM GS",
		// HF GS
		"HF GS Cow Grotto",
		"HF GS Near Kak Grotto",
		// Market GS
		"Market GS Guard House",
		// HC GS
		"HC GS Tree",
		"HC GS Storms Grotto",
		// LLR GS
		"LLR GS House Window",
		"LLR GS Tree",
		"LLR GS Rain Shed",
		"LLR GS Back Wall",
		// Kak GS
		"Kak GS Tree",
		"Kak GS Guards House",
		"Kak GS Watchtower",
		"Kak GS Skulltula House",
		"Kak GS House Under Construction",
		"Kak GS Above Impas House",
		// Graveyard GS
		"Graveyard GS Bean Patch",
		"Graveyard GS Wall",
		// DMT GS
		"DMT GS Near Kak",
		"DMT GS Bean Patch",
		"DMT GS Above Dodongos Cavern",
		"DMT GS Falling Rocks Path",
		// GC GS
		"GC GS Center Platform",
		"GC GS Boulder Maze",
		// DMC GS
		"DMC GS Crate",
		"DMC GS Bean Patch",
		// ZR GS
		"ZR GS Tree",
		"ZR GS Ladder",
		"ZR GS Near Raised Grottos",
		"ZR GS Above Bridge",
		// ZD GS
		"ZD GS Frozen Waterfall",
		// ZF GS
		"ZF GS Above the Log",
		"ZF GS Tree",
		"ZF GS Hidden Cave",
		// LH GS
		"LH GS Bean Patch",
		"LH GS Lab Wall",
		"LH GS Small Island",
		"LH GS Lab Crate",
		"LH GS Tree",
		// GV GS
		"GV GS Small Bridge",
		"GV GS Bean Patch",
		"GV GS Behind Tent",
		"GV GS Pillar",
		// GF GS
		"GF GS Top Floor",
		"GF GS Archery Range",
		// Wasteland GS
		"Wasteland GS",
		// Colossus GS
		"Colossus GS Bean Patch",
		"Colossus GS Tree",
		"Colossus GS Hill",
		// OGC GS
		"OGC GS",
		// Deku Tree GS
		"Deku Tree GS Compass Room",
		"Deku Tree GS Basement Vines",
		"Deku Tree GS Basement Gate",
		"Deku Tree GS Basement Back Room",
		// Dodongos Cavern GS
		"Dodongos Cavern GS Side Room Near Lower Lizalfos",
		"Dodongos Cavern GS Scarecrow",
		"Dodongos Cavern GS Alcove Above Stairs",
		"Dodongos Cavern GS Vines Above Stairs",
		"Dodongos Cavern GS Back Room",
		// Jabu Jabus Belly GS
		"Jabu Jabus Belly GS Water Switch Room",
		"Jabu Jabus Belly GS Lobby Basement Lower",
		"Jabu Jabus Belly GS Lobby Basement Upper",
		"Jabu Jabus Belly GS Near Boss",
		// Bottom of the Well GS
		"Bottom of the Well GS West Inner Room",
		"Bottom of the Well GS East Inner Room",
		"Bottom of the Well GS Like Like Cage",
		// Forest Temple GS
		"Forest Temple GS First Room",
		"Forest Temple GS Lobby",
		"Forest Temple GS Raised Island Courtyard",
		"Forest Temple GS Level Island Courtyard",
		"Forest Temple GS Basement",
		// Fire Temple GS
		"Fire Temple GS Boss Key Loop",
		"Fire Temple GS Song of Time Room",
		"Fire Temple GS Boulder Maze",
		"Fire Temple GS Scarecrow Climb",
		"Fire Temple GS Scarecrow Top",
		// Water Temple GS
		"Water Temple GS Behind Gate",
		"Water Temple GS Near Boss Key Chest",
		"Water Temple GS Central Pillar",
		"Water Temple GS Falling Platform Room",
		"Water Temple GS River",
		// Shadow Temple GS
		"Shadow Temple GS Like Like Room",
		"Shadow Temple GS Falling Spikes Room",
		"Shadow Temple GS Single Giant Pot",
		"Shadow Temple GS Near Ship",
		"Shadow Temple GS Triple Giant Pot",
		// Spirit Temple GS
		"Spirit Temple GS Metal Fence",
		"Spirit Temple GS Sun on Floor Room",
		"Spirit Temple GS Hall After Sun Block Room",
		"Spirit Temple GS Lobby",
		"Spirit Temple GS Boulder Room",
		// Ice Cavern GS
		"Ice Cavern GS Spinning Scythe Room",
		"Ice Cavern GS Heart Piece Room",
		"Ice Cavern GS Push Block Room",
	],
	tokenReward : [
		// Kak GS reward
		"Kak 10 Gold Skulltula Reward",
		"Kak 20 Gold Skulltula Reward",
		"Kak 30 Gold Skulltula Reward",
		"Kak 40 Gold Skulltula Reward",
		"Kak 50 Gold Skulltula Reward",
	],
	minigame : [
		// LW
		"LW Ocarina Memory Game", // minigame
		// Market
		"Market Shooting Gallery Reward", // minigame
		"Market Bombchu Bowling First Prize", // minigame
		"Market Bombchu Bowling Second Prize", // minigame
		"Market Treasure Chest Game Reward", // minigame
		// LLR
		"LLR Talons Chickens", // minigame
		// Kak
		"Kak Shooting Gallery Reward", // minigame
		// Graveyard
		"Graveyard Dampe Gravedigging Tour", // minigame
		// ZR
		"ZR Frogs Ocarina Game", // minigame
		// ZD
		"ZD Diving Minigame", // minigame
		// LH
		"LH Child Fishing", // minigame
		"LH Adult Fishing", // minigame
		// GF
		"GF HBA 1000 Points", // minigame
		"GF HBA 1500 Points", // minigame
	],
};
//let SANITY = window.RandoStuffs.OoT.core.Location.bySanity;