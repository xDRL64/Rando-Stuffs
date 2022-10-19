window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

window.RandoStuffs.OoT.core.Location.environment = {
	'water'       : 'Water',
	'immersed'    : 'Immersed',
	'forest'      : 'Forest',
	'grass'       : 'Grass',
	'wood'        : 'Wood',
	'rock'        : 'Rock',
	'mountain'    : 'Mountain',
	'underground' : 'Underground',
	'sandy'       : 'Sandy',
	'earthy'      : 'Earthy',
	'people'      : 'People',
	'building'    : 'Building',
	'town'        : 'Town',
	'desert'      : 'Desert',
	'hot'         : 'Hot',
	'fire'        : 'Fire',
	'cold'        : 'Cold',
	'ice'         : 'Ice',
	'magic'       : 'Magic',
	'explosive'   : 'Explosive',
	'song'        : 'Song',
	'reward'      : 'Reward',
	'enemy'       : 'Enemy',
};
//let environmentList = window.RandoStuffs.OoT.core.Location.environment;

// ENVIRONMENT_SETS is segmented not for technical reason but only for
// comfortable reading purpose

// eggs as gift are considered as reward, right ?
// DC and FIRE are considered 'underground'
// GC and DMC and greatFairy are not considered 'underground'
// boxes or chests are not considered 'wood' on their own location itself
// boxes or chests are considered 'wood' for locations which are around them
// tree is always considered 'wood'
// grotto chests are not 'reward'
// gifts from npc are 'reward'
// to buy something is not 'reward'
// grave/tomb/greatFairy are 'building'
// 'forest' : KF LW SFM
// 'mountain' : DMT GC DMC
// 'desert' : GF Wasteland Colossus


window.RandoStuffs.OoT.core.Location.ENVIRONMENT_SETS = [

	// dungeon rewards & songs
	{
		water : [
			"Barinade",
			"Morpha",
		],
		immersed : [
			"Morpha",
			"Song from Ocarina of Time",
		],
		forest : [
			"Queen Gohma",
			"Phantom Ganon",
			"Song from Saria",
			"Sheik in Forest",
		],
		grass : [
			"Song from Impa",
			"Song from Malon",
			"Song from Saria",
			"Sheik in Forest",
			"Sheik in Kakariko",
		],
		wood : [
			"Song from Saria",
			"Song from Windmill",
			"Sheik in Crater",
		],
		rock : [
			"Queen Gohma",
			"King Dodongo",
			"Volvagia",
			"Sheik in Crater",
			"Sheik at Colossus",
		],
		mountain : [
			"King Dodongo",
			"Volvagia",
			"Sheik in Crater",
		],
		underground : [
			"Queen Gohma",
			"King Dodongo",
			"Phantom Ganon",
			"Morpha",
			"Bongo Bongo",
			"Song from Composers Grave",
			"Sheik in Ice Cavern",
		],
		sandy : [
			"Sheik at Colossus",
		],
		earthy : [
			"Queen Gohma",
			"King Dodongo",
		],
		people : [
			"Song from Impa",
			"Song from Malon",
			"Song from Saria",
			"Song from Windmill",
			"Sheik in Kakariko",
		],
		building : [
			"Phantom Ganon",
			"Morpha",
			"Bongo Bongo",
			"Twinrova",
			"Song from Impa",
			"Song from Malon",
			"Song from Composers Grave",
			"Song from Windmill",
			"Sheik at Temple",
		],
		town : [
			"Sheik in Kakariko",
			"Sheik at Temple",
		],
		desert : [
			"Twinrova",
			"Sheik at Colossus",
		],
		hot : [
			"King Dodongo",
			"Volvagia",
			"Sheik in Crater",
			"Sheik at Colossus",
		],
		fire : [
			"King Dodongo",
			"Volvagia",
			"Sheik in Kakariko",
		],
		cold : [
			"Song from Composers Grave",
			"Sheik in Ice Cavern",
		],
		ice : [
			"Sheik in Ice Cavern",
		],
		magic : [
			"Bongo Bongo",
		],
		explosive : [
			"King Dodongo",
		],
		song : [
			"Song from Composers Grave",
		],
		reward : [
			"Queen Gohma",
			"King Dodongo",
			"Barinade",
			"Phantom Ganon",
			"Volvagia",
			"Morpha",
			"Bongo Bongo",
			"Twinrova",
			"Song from Impa",
			"Song from Malon",
			"Song from Saria",
			"Song from Ocarina of Time",
			"Song from Windmill",
			"Sheik in Forest",
			"Sheik in Crater",
			"Sheik in Ice Cavern",
			"Sheik at Colossus",
			"Sheik in Kakariko",
			"Sheik at Temple",
		],
	},

	// KF & LW & SFM
	{
		water : [
			"KF GS Bean Patch",
			"KF GS House of Twins",
			"KF Storms Grotto Chest",
			"LW Near Shortcuts Grotto Chest",
		],
		immersed : [

		],
		forest : [
			"KF Midos Top Left Chest",
			"KF Midos Top Right Chest",
			"KF Midos Bottom Left Chest",
			"KF Midos Bottom Right Chest",
			"KF Kokiri Sword Chest",
			"KF Storms Grotto Chest",
			"KF Links House Cow",
			"KF GS Know It All House",
			"KF GS Bean Patch",
			"KF GS House of Twins",
			"KF Shop Item 1",
			"KF Shop Item 2",
			"KF Shop Item 3",
			"KF Shop Item 4",
			"KF Shop Item 5",
			"KF Shop Item 6",
			"KF Shop Item 7",
			"KF Shop Item 8",
			"LW Gift from Saria",
			"LW Ocarina Memory Game", // minigame
			"LW Target in Woods",
			"LW Near Shortcuts Grotto Chest",
			"Deku Theater Skull Mask",
			"Deku Theater Mask of Truth",
			"LW Skull Kid",
			"LW Deku Scrub Near Bridge",
			"LW Deku Scrub Near Deku Theater Left",
			"LW Deku Scrub Near Deku Theater Right",
			"LW Deku Scrub Grotto Front",
			"LW Deku Scrub Grotto Rear",
			"LW GS Bean Patch Near Bridge",
			"LW GS Bean Patch Near Theater",
			"LW GS Above Theater",
			"SFM Wolfos Grotto Chest",
			"SFM Deku Scrub Grotto Front",
			"SFM Deku Scrub Grotto Rear",
			"SFM GS",
		],
		grass : [
			"KF Kokiri Sword Chest",
			"KF GS Know It All House",
			"KF GS Bean Patch",
			"LW Ocarina Memory Game", // minigame
			"Deku Theater Skull Mask",
			"Deku Theater Mask of Truth",
			"LW Skull Kid",
			"LW Deku Scrub Near Bridge",
			"LW Deku Scrub Near Deku Theater Left",
			"LW Deku Scrub Near Deku Theater Right",
			"LW Deku Scrub Grotto Front",
			"LW Deku Scrub Grotto Rear",
			"LW GS Bean Patch Near Bridge",
			"LW GS Bean Patch Near Theater",
			"LW GS Above Theater",
			"SFM Deku Scrub Grotto Front",
			"SFM Deku Scrub Grotto Rear",
			"SFM GS",
		],
		wood : [
			"KF Midos Top Left Chest",
			"KF Midos Top Right Chest",
			"KF Midos Bottom Left Chest",
			"KF Midos Bottom Right Chest",
			"KF Kokiri Sword Chest",
			"KF Links House Cow",
			"KF GS Know It All House",
			"KF GS House of Twins",
			"KF Shop Item 1",
			"KF Shop Item 2",
			"KF Shop Item 3",
			"KF Shop Item 4",
			"KF Shop Item 5",
			"KF Shop Item 6",
			"KF Shop Item 7",
			"KF Shop Item 8",
			"LW Gift from Saria",
			"LW Ocarina Memory Game", // minigame
			"LW Target in Woods",
			"LW Skull Kid",
		],
		rock : [
			"SFM Wolfos Grotto Chest",
		],
		mountain : [

		],
		underground : [
			"KF Storms Grotto Chest",
			"LW Near Shortcuts Grotto Chest",
			"Deku Theater Skull Mask",
			"Deku Theater Mask of Truth",
			"LW Deku Scrub Grotto Front",
			"LW Deku Scrub Grotto Rear",
			"SFM Wolfos Grotto Chest",
			"SFM Deku Scrub Grotto Front",
			"SFM Deku Scrub Grotto Rear",
		],
		sandy : [
			"KF Storms Grotto Chest",
			"KF GS Bean Patch",
			"LW Near Shortcuts Grotto Chest",
			"LW GS Bean Patch Near Bridge",
			"LW GS Bean Patch Near Theater",
		],
		earthy : [

		],
		people : [
			"KF GS Bean Patch",
			"KF Shop Item 1",
			"KF Shop Item 2",
			"KF Shop Item 3",
			"KF Shop Item 4",
			"KF Shop Item 5",
			"KF Shop Item 6",
			"KF Shop Item 7",
			"KF Shop Item 8",
		],
		building : [
			"KF Midos Top Left Chest",
			"KF Midos Top Right Chest",
			"KF Midos Bottom Left Chest",
			"KF Midos Bottom Right Chest",
			"KF Links House Cow",
			"KF Shop Item 1",
			"KF Shop Item 2",
			"KF Shop Item 3",
			"KF Shop Item 4",
			"KF Shop Item 5",
			"KF Shop Item 6",
			"KF Shop Item 7",
			"KF Shop Item 8",
		],
		town : [
			"KF Midos Top Left Chest",
			"KF Midos Top Right Chest",
			"KF Midos Bottom Left Chest",
			"KF Midos Bottom Right Chest",
			"KF Kokiri Sword Chest",
			"KF Storms Grotto Chest",
			"KF Links House Cow",
			"KF GS Know It All House",
			"KF GS Bean Patch",
			"KF GS House of Twins",
			"KF Shop Item 1",
			"KF Shop Item 2",
			"KF Shop Item 3",
			"KF Shop Item 4",
			"KF Shop Item 5",
			"KF Shop Item 6",
			"KF Shop Item 7",
			"KF Shop Item 8",
		],
		desert : [

		],
		hot : [

		],
		fire : [

		],
		cold : [

		],
		ice : [

		],
		magic : [

		],
		explosive : [

		],
		song : [
			"KF Storms Grotto Chest",
			"KF Links House Cow",
		],
		reward : [
			"KF Kokiri Sword Chest",
			"KF Links House Cow",
			"LW Gift from Saria",
			"LW Ocarina Memory Game", // minigame
			"LW Target in Woods",
			"Deku Theater Skull Mask",
			"Deku Theater Mask of Truth",
			"SFM Wolfos Grotto Chest",
		],
		enemy : [
			"KF GS Know It All House",
			"KF GS Bean Patch",
			"KF GS House of Twins",
			"LW Target in Woods",
			"Deku Theater Skull Mask",
			"Deku Theater Mask of Truth",
			"LW Deku Scrub Near Bridge",
			"LW Deku Scrub Near Deku Theater Left",
			"LW Deku Scrub Near Deku Theater Right",
			"LW Deku Scrub Grotto Front",
			"LW Deku Scrub Grotto Rear",
			"LW GS Bean Patch Near Bridge",
			"LW GS Bean Patch Near Theater",
			"LW GS Above Theater",
			"SFM Wolfos Grotto Chest",
			"SFM Deku Scrub Grotto Front",
			"SFM Deku Scrub Grotto Rear",
			"SFM GS",
		],
	},

	// HF & Market & HC & ToT & OGC
	{
		water : [
			"HF Near Market Grotto Chest",
			"HF Southeast Grotto Chest",
			"HF Open Grotto Chest",
			"HF Deku Scrub Grotto",
			"HC Great Fairy Reward",
			"OGC Great Fairy Reward",
		],
		immersed : [
			"HF Ocarina of Time Item",
			"HF Tektite Grotto Freestanding PoH",
		],
		forest : [

		],
		grass : [

		],
		wood : [
			"HF GS Near Kak Grotto",
			"HC GS Tree",
			"Market Bazaar Item 1",
			"Market Bazaar Item 2",
			"Market Bazaar Item 3",
			"Market Bazaar Item 4",
			"Market Bazaar Item 5",
			"Market Bazaar Item 6",
			"Market Bazaar Item 7",
			"Market Bazaar Item 8",
			"Market Potion Shop Item 1",
			"Market Potion Shop Item 2",
			"Market Potion Shop Item 3",
			"Market Potion Shop Item 4",
			"Market Potion Shop Item 5",
			"Market Potion Shop Item 6",
			"Market Potion Shop Item 7",
			"Market Potion Shop Item 8",
			"Market Bombchu Shop Item 1",
			"Market Bombchu Shop Item 2",
			"Market Bombchu Shop Item 3",
			"Market Bombchu Shop Item 4",
			"Market Bombchu Shop Item 5",
			"Market Bombchu Shop Item 6",
			"Market Bombchu Shop Item 7",
			"Market Bombchu Shop Item 8",
		],
		rock : [

		],
		mountain : [

		],
		underground : [
			"HF Near Market Grotto Chest",
			"HF Tektite Grotto Freestanding PoH",
			"HF Southeast Grotto Chest",
			"HF Open Grotto Chest",
			"HF Deku Scrub Grotto",
			"HF Cow Grotto Cow",
			"HF GS Cow Grotto",
			"HF GS Near Kak Grotto",
			"HC GS Storms Grotto",
		],
		sandy : [
			"HF Near Market Grotto Chest",
			"HF Tektite Grotto Freestanding PoH",
			"HF Southeast Grotto Chest",
			"HF Open Grotto Chest",
			"HF Deku Scrub Grotto",
			"HF Cow Grotto Cow",
			"HF GS Cow Grotto",
			"HF GS Near Kak Grotto",
			"HC GS Storms Grotto",
		],
		earthy : [
			"HC Malon Egg",
			"HC GS Tree",
		],
		people : [
			"Market Shooting Gallery Reward", // minigame
			"Market Bombchu Bowling First Prize", // minigame
			"Market Bombchu Bowling Second Prize", // minigame
			"Market Lost Dog",
			"Market Treasure Chest Game Reward", // minigame
			"Market 10 Big Poes",
			"Market GS Guard House",
			"Market Bazaar Item 1",
			"Market Bazaar Item 2",
			"Market Bazaar Item 3",
			"Market Bazaar Item 4",
			"Market Bazaar Item 5",
			"Market Bazaar Item 6",
			"Market Bazaar Item 7",
			"Market Bazaar Item 8",
			"Market Potion Shop Item 1",
			"Market Potion Shop Item 2",
			"Market Potion Shop Item 3",
			"Market Potion Shop Item 4",
			"Market Potion Shop Item 5",
			"Market Potion Shop Item 6",
			"Market Potion Shop Item 7",
			"Market Potion Shop Item 8",
			"Market Bombchu Shop Item 1",
			"Market Bombchu Shop Item 2",
			"Market Bombchu Shop Item 3",
			"Market Bombchu Shop Item 4",
			"Market Bombchu Shop Item 5",
			"Market Bombchu Shop Item 6",
			"Market Bombchu Shop Item 7",
			"Market Bombchu Shop Item 8",
			"HC Malon Egg",
			"HC GS Tree",
		],
		building : [
			"Market Shooting Gallery Reward", // minigame
			"Market Bombchu Bowling First Prize", // minigame
			"Market Bombchu Bowling Second Prize", // minigame
			"Market Lost Dog",
			"Market Treasure Chest Game Reward", // minigame
			"Market 10 Big Poes",
			"Market GS Guard House",
			"Market Bazaar Item 1",
			"Market Bazaar Item 2",
			"Market Bazaar Item 3",
			"Market Bazaar Item 4",
			"Market Bazaar Item 5",
			"Market Bazaar Item 6",
			"Market Bazaar Item 7",
			"Market Bazaar Item 8",
			"Market Potion Shop Item 1",
			"Market Potion Shop Item 2",
			"Market Potion Shop Item 3",
			"Market Potion Shop Item 4",
			"Market Potion Shop Item 5",
			"Market Potion Shop Item 6",
			"Market Potion Shop Item 7",
			"Market Potion Shop Item 8",
			"Market Bombchu Shop Item 1",
			"Market Bombchu Shop Item 2",
			"Market Bombchu Shop Item 3",
			"Market Bombchu Shop Item 4",
			"Market Bombchu Shop Item 5",
			"Market Bombchu Shop Item 6",
			"Market Bombchu Shop Item 7",
			"Market Bombchu Shop Item 8",
			"ToT Light Arrows Cutscene",
			"HC Great Fairy Reward",
			"OGC Great Fairy Reward",
		],
		town : [
			"Market Shooting Gallery Reward", // minigame
			"Market Bombchu Bowling First Prize", // minigame
			"Market Bombchu Bowling Second Prize", // minigame
			"Market Lost Dog",
			"Market Treasure Chest Game Reward", // minigame
			"Market 10 Big Poes",
			"Market GS Guard House",
			"Market Bazaar Item 1",
			"Market Bazaar Item 2",
			"Market Bazaar Item 3",
			"Market Bazaar Item 4",
			"Market Bazaar Item 5",
			"Market Bazaar Item 6",
			"Market Bazaar Item 7",
			"Market Bazaar Item 8",
			"Market Potion Shop Item 1",
			"Market Potion Shop Item 2",
			"Market Potion Shop Item 3",
			"Market Potion Shop Item 4",
			"Market Potion Shop Item 5",
			"Market Potion Shop Item 6",
			"Market Potion Shop Item 7",
			"Market Potion Shop Item 8",
			"Market Bombchu Shop Item 1",
			"Market Bombchu Shop Item 2",
			"Market Bombchu Shop Item 3",
			"Market Bombchu Shop Item 4",
			"Market Bombchu Shop Item 5",
			"Market Bombchu Shop Item 6",
			"Market Bombchu Shop Item 7",
			"Market Bombchu Shop Item 8",
		],
		desert : [

		],
		hot : [

		],
		fire : [
			"HC Great Fairy Reward",
			"OGC Great Fairy Reward",
		],
		cold : [

		],
		ice : [

		],
		magic : [
			"HF Cow Grotto Cow",
			"HF GS Cow Grotto",
		],
		explosive : [
			"HF Near Market Grotto Chest",
			"HF Tektite Grotto Freestanding PoH",
			"HF Southeast Grotto Chest",
			"HF Deku Scrub Grotto",
			"HF Cow Grotto Cow",
			"HF GS Cow Grotto",
			"HF GS Near Kak Grotto",
			"Market Bombchu Bowling First Prize", // minigame
			"Market Bombchu Bowling Second Prize", // minigame
			"HC Great Fairy Reward",
			"HC GS Storms Grotto",
		],
		song : [
			"HF Cow Grotto Cow",
			"HC Great Fairy Reward",
			"HC GS Storms Grotto",
			"OGC Great Fairy Reward",
		],
		reward : [
			"HF Ocarina of Time Item",
			"HF Cow Grotto Cow",
			"Market Shooting Gallery Reward", // minigame
			"Market Bombchu Bowling First Prize", // minigame
			"Market Bombchu Bowling Second Prize", // minigame
			"Market Lost Dog",
			"Market Treasure Chest Game Reward", // minigame
			"Market 10 Big Poes",
			"ToT Light Arrows Cutscene",
			"HC Malon Egg",
			"HC Great Fairy Reward",
			"OGC Great Fairy Reward",
		],
		enemy : [
			"HF Tektite Grotto Freestanding PoH",
			"HF Deku Scrub Grotto",
			"HF GS Cow Grotto",
			"HF GS Near Kak Grotto",
			"Market GS Guard House",
			"HC GS Tree",
			"HC GS Storms Grotto",
			"OGC GS",
		],
	},

	// LLR & Kak & Graveyard
	{
		water : [
			"Kak Open Grotto Chest",
			"Kak Redead Grotto Chest",
		],
		immersed : [
			
		],
		forest : [
			
		],
		grass : [
			"LLR Deku Scrub Grotto Left",
			"LLR Deku Scrub Grotto Center",
			"LLR Deku Scrub Grotto Right",
			"LLR GS Tree",
			"LLR GS Rain Shed",
			"LLR GS Back Wall",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak GS Tree",
			"Kak GS Guards House",
			"Kak GS Skulltula House",
			"Kak GS House Under Construction",
			"Graveyard Freestanding PoH",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard GS Bean Patch",
			"Graveyard GS Wall",
		],
		wood : [
			"LLR Talons Chickens", // minigame
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"LLR Tower Left Cow",
			"LLR Tower Right Cow",
			"LLR GS House Window",
			"LLR GS Tree",
			"LLR GS Rain Shed",
			"LLR GS Back Wall",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Shooting Gallery Reward", // minigame
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak GS Tree",
			"Kak GS Watchtower",
			"Kak GS House Under Construction",
			"Kak Bazaar Item 1",
			"Kak Bazaar Item 2",
			"Kak Bazaar Item 3",
			"Kak Bazaar Item 4",
			"Kak Bazaar Item 5",
			"Kak Bazaar Item 6",
			"Kak Bazaar Item 7",
			"Kak Bazaar Item 8",
			"Kak Potion Shop Item 1",
			"Kak Potion Shop Item 2",
			"Kak Potion Shop Item 3",
			"Kak Potion Shop Item 4",
			"Kak Potion Shop Item 5",
			"Kak Potion Shop Item 6",
			"Kak Potion Shop Item 7",
			"Kak Potion Shop Item 8",
			"Graveyard Freestanding PoH",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
			"Graveyard GS Bean Patch",
		],
		rock : [
			"LLR GS Back Wall",
			"Kak Redead Grotto Chest",
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
			"Graveyard GS Bean Patch",
			"Graveyard GS Wall",
		],
		mountain : [
			
		],
		underground : [
			"LLR Deku Scrub Grotto Left",
			"LLR Deku Scrub Grotto Center",
			"LLR Deku Scrub Grotto Right",
			"Kak Open Grotto Chest",
			"Kak Redead Grotto Chest",
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		sandy : [
			"Kak Open Grotto Chest",
			"Graveyard GS Bean Patch",
		],
		earthy : [
			"Graveyard Dampe Gravedigging Tour", // minigame
		],
		people : [
			"LLR Talons Chickens", // minigame
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Man on Roof",
			"Kak Shooting Gallery Reward", // minigame
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak GS Tree",
			"Kak GS Guards House",
			"Kak GS Watchtower",
			"Kak Bazaar Item 1",
			"Kak Bazaar Item 2",
			"Kak Bazaar Item 3",
			"Kak Bazaar Item 4",
			"Kak Bazaar Item 5",
			"Kak Bazaar Item 6",
			"Kak Bazaar Item 7",
			"Kak Bazaar Item 8",
			"Kak Potion Shop Item 1",
			"Kak Potion Shop Item 2",
			"Kak Potion Shop Item 3",
			"Kak Potion Shop Item 4",
			"Kak Potion Shop Item 5",
			"Kak Potion Shop Item 6",
			"Kak Potion Shop Item 7",
			"Kak Potion Shop Item 8",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		building : [
			"LLR Talons Chickens", // minigame
			"LLR Freestanding PoH",
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"LLR Tower Left Cow",
			"LLR Tower Right Cow",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Shooting Gallery Reward", // minigame
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak Bazaar Item 1",
			"Kak Bazaar Item 2",
			"Kak Bazaar Item 3",
			"Kak Bazaar Item 4",
			"Kak Bazaar Item 5",
			"Kak Bazaar Item 6",
			"Kak Bazaar Item 7",
			"Kak Bazaar Item 8",
			"Kak Potion Shop Item 1",
			"Kak Potion Shop Item 2",
			"Kak Potion Shop Item 3",
			"Kak Potion Shop Item 4",
			"Kak Potion Shop Item 5",
			"Kak Potion Shop Item 6",
			"Kak Potion Shop Item 7",
			"Kak Potion Shop Item 8",
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		town : [
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Man on Roof",
			"Kak Open Grotto Chest",
			"Kak Redead Grotto Chest",
			"Kak Shooting Gallery Reward", // minigame
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak GS Tree",
			"Kak GS Guards House",
			"Kak GS Watchtower",
			"Kak GS Skulltula House",
			"Kak GS House Under Construction",
			"Kak GS Above Impas House",
			"Kak Bazaar Item 1",
			"Kak Bazaar Item 2",
			"Kak Bazaar Item 3",
			"Kak Bazaar Item 4",
			"Kak Bazaar Item 5",
			"Kak Bazaar Item 6",
			"Kak Bazaar Item 7",
			"Kak Bazaar Item 8",
			"Kak Potion Shop Item 1",
			"Kak Potion Shop Item 2",
			"Kak Potion Shop Item 3",
			"Kak Potion Shop Item 4",
			"Kak Potion Shop Item 5",
			"Kak Potion Shop Item 6",
			"Kak Potion Shop Item 7",
			"Kak Potion Shop Item 8",
		],
		desert : [
			
		],
		hot : [
			
		],
		fire : [
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		cold : [
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		ice : [
			
		],
		magic : [
			"Graveyard Composers Grave Chest",
		],
		explosive : [
			"Kak Redead Grotto Chest",
		],
		song : [
			"Kak Impas House Cow",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
		],
		reward : [
			"LLR Talons Chickens", // minigame
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"LLR Tower Left Cow",
			"LLR Tower Right Cow",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Man on Roof",
			"Kak Redead Grotto Chest",
			"Kak Shooting Gallery Reward", // minigame
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		enemy : [
			"LLR Deku Scrub Grotto Left",
			"LLR Deku Scrub Grotto Center",
			"LLR Deku Scrub Grotto Right",
			"LLR GS House Window",
			"LLR GS Tree",
			"LLR GS Rain Shed",
			"LLR GS Back Wall",
			"Kak Redead Grotto Chest",
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak GS Tree",
			"Kak GS Guards House",
			"Kak GS Watchtower",
			"Kak GS Skulltula House",
			"Kak GS House Under Construction",
			"Kak GS Above Impas House",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Composers Grave Chest",
			"Graveyard GS Bean Patch",
			"Graveyard GS Wall",
		],
	},
	// DMT & GC & DMC
	{
		water : [
			"DMT Storms Grotto Chest",
			"DMT Great Fairy Reward",
			"DMT Cow Grotto Cow",
			"DMC Upper Grotto Chest",
			"DMC Great Fairy Reward",
		],
		immersed : [

		],
		forest : [

		],
		grass : [
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"DMC Deku Scrub Grotto Left",
			"DMC Deku Scrub Grotto Center",
			"DMC Deku Scrub Grotto Right",

		],
		wood : [
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Medigoron",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC GS Center Platform",
			"GC GS Boulder Maze",
			"DMC Wall Freestanding PoH",
		],
		rock : [
			"DMT Freestanding PoH",
			"DMT Chest",
			"DMT Storms Grotto Chest",
			"DMT Biggoron",
			"DMT Cow Grotto Cow",
			"DMT GS Near Kak",
			"DMT GS Bean Patch",
			"DMT GS Above Dodongos Cavern",
			"DMT GS Falling Rocks Path",
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Medigoron",
			"GC Maze Left Chest",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC GS Center Platform",
			"GC GS Boulder Maze",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
			"DMC Volcano Freestanding PoH",
			"DMC Wall Freestanding PoH",
			"DMC Deku Scrub",
			"DMC GS Crate",
			"DMC GS Bean Patch",
		],
		mountain : [
			"DMT Freestanding PoH",
			"DMT Chest",
			"DMT Storms Grotto Chest",
			"DMT Great Fairy Reward",
			"DMT Biggoron",
			"DMT Cow Grotto Cow",
			"DMT GS Near Kak",
			"DMT GS Bean Patch",
			"DMT GS Above Dodongos Cavern",
			"DMT GS Falling Rocks Path",
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Medigoron",
			"GC Maze Left Chest",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"GC GS Center Platform",
			"GC GS Boulder Maze",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
			"DMC Volcano Freestanding PoH",
			"DMC Wall Freestanding PoH",
			"DMC Upper Grotto Chest",
			"DMC Great Fairy Reward",
			"DMC Deku Scrub",
			"DMC Deku Scrub Grotto Left",
			"DMC Deku Scrub Grotto Center",
			"DMC Deku Scrub Grotto Right",
			"DMC GS Crate",
			"DMC GS Bean Patch",
		],
		underground : [
			"DMT Storms Grotto Chest",
			"DMT Cow Grotto Cow",
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"DMC Upper Grotto Chest",
			"DMC Deku Scrub Grotto Left",
			"DMC Deku Scrub Grotto Center",
			"DMC Deku Scrub Grotto Right",
		],
		sandy : [
			"DMT Storms Grotto Chest",
			"DMT Cow Grotto Cow",
			"DMT GS Bean Patch",
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"DMC Upper Grotto Chest",
			"DMC GS Bean Patch",
		],
		earthy : [

		],
		people : [
			"DMT Chest",
			"DMT Biggoron",
			"DMT GS Bean Patch",
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Medigoron",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
		],
		building : [
			"DMT Great Fairy Reward",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
			"DMC Great Fairy Reward",
		],
		town : [
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Medigoron",
			"GC Maze Left Chest",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"GC GS Center Platform",
			"GC GS Boulder Maze",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
		],
		desert : [

		],
		hot : [
			"DMT GS Falling Rocks Path",
			"DMC Volcano Freestanding PoH",
			"DMC Wall Freestanding PoH",
			"DMC Deku Scrub",
			"DMC GS Crate",
			"DMC GS Bean Patch",
		],
		fire : [
			"DMT Great Fairy Reward",
			"DMT GS Falling Rocks Path",
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Medigoron",
			"DMC Great Fairy Reward",
		],
		cold : [

		],
		ice : [

		],
		magic : [

		],
		explosive : [
			"DMT Chest",
			"DMT Great Fairy Reward",
			"DMT Cow Grotto Cow",
			"DMT GS Near Kak",
			"DMT GS Bean Patch",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Medigoron",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC GS Boulder Maze",
			"GC Shop Item 1",
			"GC Shop Item 2",
			"GC Shop Item 3",
			"GC Shop Item 4",
			"GC Shop Item 5",
			"GC Shop Item 6",
			"GC Shop Item 7",
			"GC Shop Item 8",
			"DMC Upper Grotto Chest",
		],
		song : [
			"DMT Storms Grotto Chest",
			"DMT Great Fairy Reward",
			"DMT Cow Grotto Cow",
			"GC Darunias Joy",
			"DMC Great Fairy Reward",
			"DMC GS Bean Patch",
		],
		reward : [
			"DMT Great Fairy Reward",
			"DMT Biggoron",
			"DMT Cow Grotto Cow",
			"GC Darunias Joy",
			"GC Pot Freestanding PoH",
			"GC Rolling Goron as Child",
			"GC Rolling Goron as Adult",
			"GC Maze Left Chest",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"DMC Great Fairy Reward",
		],
		enemy : [
			"DMT GS Near Kak",
			"DMT GS Bean Patch",
			"DMT GS Above Dodongos Cavern",
			"DMT GS Falling Rocks Path",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			"GC Deku Scrub Grotto Left",
			"GC Deku Scrub Grotto Center",
			"GC Deku Scrub Grotto Right",
			"GC GS Center Platform",
			"GC GS Boulder Maze",
			"DMC Deku Scrub",
			"DMC Deku Scrub Grotto Left",
			"DMC Deku Scrub Grotto Center",
			"DMC Deku Scrub Grotto Right",
			"DMC GS Crate",
			"DMC GS Bean Patch",
		],
	},
	// ZR & ZD & ZF & LH
	{
		water : [
			"ZR Magic Bean Salesman",
			"ZR Open Grotto Chest",
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game", // minigame
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZD Diving Minigame", // minigame
			"ZD Chest",
			"ZF Great Fairy Reward",
			"ZF Iceberg Freestanding PoH",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Lab Dive",
			"LH Sun",
			"LH GS Small Island",
		],
		immersed : [
			"ZF Bottom Freestanding PoH",
			"LH Underwater Item",
			"LH GS Lab Crate",
		],
		forest : [

		],
		grass : [
			"ZR Magic Bean Salesman",
			"ZR Near Open Grotto Freestanding PoH",
			"ZR Near Domain Freestanding PoH",
			"ZR Deku Scrub Grotto Front",
			"ZR Deku Scrub Grotto Rear",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZR GS Near Raised Grottos",
			"LH Sun",
			"LH Deku Scrub Grotto Left",
			"LH Deku Scrub Grotto Center",
			"LH Deku Scrub Grotto Right",
			"LH GS Bean Patch",
			"LH GS Small Island",
		],
		wood : [
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game", // minigame
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Lab Dive",
			"LH Freestanding PoH",
			"LH GS Lab Wall",
			"LH GS Tree",
		],
		rock : [
			"ZR GS Near Raised Grottos",
			"ZR GS Above Bridge",
			"ZD Diving Minigame", // minigame
			"ZD Chest",
			"ZD King Zora Thawed",
			"ZD GS Frozen Waterfall",
			"ZD Shop Item 1",
			"ZD Shop Item 2",
			"ZD Shop Item 3",
			"ZD Shop Item 4",
			"ZD Shop Item 5",
			"ZD Shop Item 6",
			"ZD Shop Item 7",
			"ZD Shop Item 8",
			"ZF Bottom Freestanding PoH",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"ZF GS Hidden Cave",
			"LH Underwater Item",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Sun",
			"LH GS Small Island",
		],
		mountain : [

		],
		underground : [
			"ZR Open Grotto Chest",
			"ZR Deku Scrub Grotto Front",
			"ZR Deku Scrub Grotto Rear",
			"LH Deku Scrub Grotto Left",
			"LH Deku Scrub Grotto Center",
			"LH Deku Scrub Grotto Right",

		],
		sandy : [
			"ZR Magic Bean Salesman",
			"ZR Open Grotto Chest",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH GS Bean Patch",
		],
		earthy : [
			"LH Underwater Item",
		],
		people : [
			"ZR Magic Bean Salesman",
			"ZD Diving Minigame", // minigame
			"ZD King Zora Thawed",
			"ZD Shop Item 1",
			"ZD Shop Item 2",
			"ZD Shop Item 3",
			"ZD Shop Item 4",
			"ZD Shop Item 5",
			"ZD Shop Item 6",
			"ZD Shop Item 7",
			"ZD Shop Item 8",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Lab Dive",
			"LH GS Lab Crate",
		],
		building : [
			"ZD Shop Item 1",
			"ZD Shop Item 2",
			"ZD Shop Item 3",
			"ZD Shop Item 4",
			"ZD Shop Item 5",
			"ZD Shop Item 6",
			"ZD Shop Item 7",
			"ZD Shop Item 8",
			"ZF Great Fairy Reward",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Lab Dive",
			"LH GS Lab Crate",
		],
		town : [
			"ZD Diving Minigame", // minigame
			"ZD Chest",
			"ZD King Zora Thawed",
			"ZD GS Frozen Waterfall",
			"ZD Shop Item 1",
			"ZD Shop Item 2",
			"ZD Shop Item 3",
			"ZD Shop Item 4",
			"ZD Shop Item 5",
			"ZD Shop Item 6",
			"ZD Shop Item 7",
			"ZD Shop Item 8",
		],
		desert : [

		],
		hot : [

		],
		fire : [
			"ZD Chest",
			"ZF Great Fairy Reward",
		],
		cold : [
			"ZD King Zora Thawed",
			"ZD GS Frozen Waterfall",
			"ZF Iceberg Freestanding PoH",
			"ZF Bottom Freestanding PoH",
			"ZF GS Hidden Cave",
		],
		ice : [
			"ZD King Zora Thawed",
			"ZD GS Frozen Waterfall",
			"ZF Iceberg Freestanding PoH",
		],
		magic : [
			"ZF GS Hidden Cave",
		],
		explosive : [
			"ZR Magic Bean Salesman",
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game", // minigame
			"ZR Near Open Grotto Freestanding PoH",
			"ZR Near Domain Freestanding PoH",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZD Diving Minigame", // minigame
			"ZF Great Fairy Reward",
			"ZF GS Hidden Cave",
		],
		song : [
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game", // minigame
			"ZR Deku Scrub Grotto Front",
			"ZR Deku Scrub Grotto Rear",
			"ZD Diving Minigame", // minigame
			"ZF Great Fairy Reward",
			"LH Freestanding PoH",
		],
		reward : [
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game", // minigame
			"ZD Diving Minigame", // minigame
			"ZD Chest",
			"ZD King Zora Thawed",
			"ZF Great Fairy Reward",
			"LH Child Fishing", // minigame
			"LH Adult Fishing", // minigame
			"LH Lab Dive",
			"LH Sun",
		],
		enemy : [
			"ZR Deku Scrub Grotto Front",
			"ZR Deku Scrub Grotto Rear",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZR GS Near Raised Grottos",
			"ZR GS Above Bridge",
			"ZD GS Frozen Waterfall",
			"ZF Iceberg Freestanding PoH",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"ZF GS Hidden Cave",
			"LH Deku Scrub Grotto Left",
			"LH Deku Scrub Grotto Center",
			"LH Deku Scrub Grotto Right",
			"LH GS Bean Patch",
			"LH GS Lab Wall",
			"LH GS Small Island",
			"LH GS Lab Crate",
			"LH GS Tree",
		],
	},
	// GV & GF & Wasteland & Colossus
	{
		water : [
			"GV Waterfall Freestanding PoH",
			"GV Cow",
			"GV GS Small Bridge",
			"GV GS Bean Patch",
			"Colossus Great Fairy Reward",
		],
		immersed : [

		],
		forest : [

		],
		grass : [
			"GV Deku Scrub Grotto Front",
			"GV Deku Scrub Grotto Rear",
			"Colossus Deku Scrub Grotto Front",
			"Colossus Deku Scrub Grotto Rear",
		],
		wood : [
			"GV Waterfall Freestanding PoH",
			"GV Cow",
			"GV GS Small Bridge",
			"GV GS Bean Patch",
			"GV GS Behind Tent",
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Wasteland Bombchu Salesman",
			"Colossus GS Tree",
		],
		rock : [
			"GV Crate Freestanding PoH",
			"GV Waterfall Freestanding PoH",
			"GV Chest",
			"GV Cow",
			"GV GS Small Bridge",
			"GV GS Bean Patch",
			"GV GS Behind Tent",
			"GV GS Pillar",
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"GF GS Top Floor",
			"Colossus Freestanding PoH",
			"Colossus GS Bean Patch",
			"Colossus GS Tree",
			"Colossus GS Hill",
		],
		mountain : [

		],
		underground : [
			"GV Deku Scrub Grotto Front",
			"GV Deku Scrub Grotto Rear",
			"Wasteland Chest",
			"Wasteland GS",
			"Colossus Deku Scrub Grotto Front",
			"Colossus Deku Scrub Grotto Rear",
		],
		sandy : [
			"GV Cow",
			"GV GS Bean Patch",
			"Wasteland Bombchu Salesman",
			"Colossus GS Bean Patch",
			"Colossus GS Tree",
			"Colossus GS Hill",
		],
		earthy : [

		],
		people : [
			"GV Chest",
			"GV Cow",
			"GV GS Bean Patch",
			"GV GS Behind Tent",
			"GV GS Pillar",
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"Wasteland Bombchu Salesman",
		],
		building : [
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"Colossus Great Fairy Reward",
		],
		town : [
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"GF GS Top Floor",
			"GF GS Archery Range",
		],
		desert : [
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Wasteland Bombchu Salesman",
			"Wasteland Chest",
			"Wasteland GS",
			"Colossus Great Fairy Reward",
			"Colossus Freestanding PoH",
			"Colossus Deku Scrub Grotto Front",
			"Colossus Deku Scrub Grotto Rear",
			"Colossus GS Bean Patch",
			"Colossus GS Tree",
			"Colossus GS Hill",
		],
		hot : [
			"Wasteland Bombchu Salesman",
			"Wasteland Chest",
			"Wasteland GS",
			"Colossus Freestanding PoH",
			"Colossus GS Bean Patch",
			"Colossus GS Tree",
			"Colossus GS Hill",
		],
		fire : [
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"Colossus Great Fairy Reward",
		],
		cold : [

		],
		ice : [

		],
		magic : [
			"Wasteland Chest",
		],
		explosive : [
			"Colossus Great Fairy Reward",
		],
		song : [
			"GV Deku Scrub Grotto Front",
			"GV Deku Scrub Grotto Rear",
			"GV Cow",
			"GF Chest",
			"Colossus Great Fairy Reward",
		],
		reward : [
			"GV Cow",
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF Gerudo Membership Card",
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			"Wasteland Chest",
			"Colossus Great Fairy Reward",
		],
		enemy : [
			"GV Deku Scrub Grotto Front",
			"GV Deku Scrub Grotto Rear",
			"GV GS Small Bridge",
			"GV GS Bean Patch",
			"GV GS Behind Tent",
			"GV GS Pillar",
			"GF North F1 Carpenter", // (RED)
			"GF North F2 Carpenter", // (GREEN)
			"GF South F1 Carpenter", // (YELLOW)
			"GF South F2 Carpenter", // (BLUE)
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Wasteland GS",
			"Colossus Freestanding PoH",
			"Colossus Deku Scrub Grotto Front",
			"Colossus Deku Scrub Grotto Rear",
			"Colossus GS Bean Patch",
			"Colossus GS Tree",
			"Colossus GS Hill",
		],
	},

	// Deku
	{
		water : [
			"Deku Tree Basement Chest",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
		],
		immersed : [
			
		],
		forest : [
			"Deku Tree Map Chest",
			"Deku Tree Slingshot Room Side Chest",
			"Deku Tree Slingshot Chest",
			"Deku Tree Compass Chest",
			"Deku Tree Compass Room Side Chest",
			"Deku Tree Basement Chest",
			"Deku Tree GS Compass Room",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
			"Deku Tree GS Basement Back Room",
			"Deku Tree Queen Gohma Heart",
		],
		grass : [
			
		],
		wood : [
			"Deku Tree Map Chest",
			"Deku Tree Slingshot Room Side Chest",
			"Deku Tree Slingshot Chest",
			"Deku Tree Compass Chest",
			"Deku Tree Compass Room Side Chest",
			"Deku Tree GS Compass Room",
			"Deku Tree GS Basement Gate",
		],
		rock : [
			"Deku Tree Basement Chest",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
			"Deku Tree Queen Gohma Heart",
		],
		mountain : [
			
		],
		underground : [
			"Deku Tree Basement Chest",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
			"Deku Tree GS Basement Back Room",
			"Deku Tree Queen Gohma Heart",
		],
		sandy : [
			
		],
		earthy : [
			"Deku Tree Basement Chest",
			"Deku Tree GS Basement Back Room",
			"Deku Tree Queen Gohma Heart",
		],
		people : [
			
		],
		building : [
			"Deku Tree Map Chest",
			"Deku Tree Slingshot Room Side Chest",
			"Deku Tree Slingshot Chest",
			"Deku Tree Compass Chest",
			"Deku Tree Compass Room Side Chest",
			"Deku Tree Basement Chest",
			"Deku Tree GS Compass Room",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
			"Deku Tree GS Basement Back Room",
			"Deku Tree Queen Gohma Heart",
		],
		town : [
			
		],
		desert : [
			
		],
		hot : [
			
		],
		fire : [
			"Deku Tree Basement Chest",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
		],
		cold : [
			
		],
		ice : [
			
		],
		magic : [
			
		],
		explosive : [
			"Deku Tree GS Basement Back Room",
		],
		song : [
			
		],
		reward : [
			"Deku Tree Queen Gohma Heart",
		],
		enemy : [
			"Deku Tree Map Chest",
			"Deku Tree Compass Chest",
			"Deku Tree Compass Room Side Chest",
			"Deku Tree Basement Chest",
			"Deku Tree GS Compass Room",
			"Deku Tree GS Basement Vines",
			"Deku Tree GS Basement Gate",
			"Deku Tree GS Basement Back Room",
			"Deku Tree Queen Gohma Heart",
		],
	},


	// Dodongo
	{
		water : [
			
		],
		immersed : [
			
		],
		forest : [
			
		],
		grass : [
			
		],
		wood : [
			
		],
		rock : [
			
		],
		mountain : [
			
		],
		underground : [
			
		],
		sandy : [
			
		],
		earthy : [
			
		],
		people : [
			
		],
		building : [
			
		],
		town : [
			
		],
		desert : [
			
		],
		hot : [
			
		],
		fire : [
			
		],
		cold : [
			
		],
		ice : [
			
		],
		magic : [
			
		],
		explosive : [
			
		],
		song : [
			
		],
		reward : [
			
		],
		enemy : [
			
		],
	},



	// template
	{
		water : [
			
		],
		immersed : [
			
		],
		forest : [
			
		],
		grass : [
			
		],
		wood : [
			
		],
		rock : [
			
		],
		mountain : [
			
		],
		underground : [
			
		],
		sandy : [
			
		],
		earthy : [
			
		],
		people : [
			
		],
		building : [
			
		],
		town : [
			
		],
		desert : [
			
		],
		hot : [
			
		],
		fire : [
			
		],
		cold : [
			
		],
		ice : [
			
		],
		magic : [
			
		],
		explosive : [
			
		],
		song : [
			
		],
		reward : [
			
		],
		enemy : [
			
		],
	},
];

window.RandoStuffs.OoT.core.Location.byEnvironment = {};

// make_envToLoc
(()=>{
	// short name
	let Loc = window.RandoStuffs.OoT.core.Location;
	let env = Loc.environment;
	let ENVSET = Loc.ENVIRONMENT_SETS;
	let byEnv = Loc.byEnvironment;
	// alloc mem
	for(let k in env)
		byEnv[k] = [];
	// fill mem
	for(let C of ENVSET){
		for(let k in C){ // k=envName
			let a = C[k]
			for(let loc of a){
				byEnv[k].push(loc);
			}
		}
	}

})();



window.RandoStuffs.OoT.core.Location.sortUpdate_byEnv = ()=>{
	// short name
	let Loc = window.RandoStuffs.OoT.core.Location;
	let locList = Loc.list;
	let env = Loc.environment;
	let byEnv = Loc.byEnvironment;
	for(let k in env){
		let o = [];
		for(let l of locList){
			if( byEnv[k].includes(l) )
				o.push(l);
		}
		byEnv[k] = o;
	}
}


// ENVIRONMENT_SETS direct to Location.Data[].environment
/* for(let C of byEnv){
	for(let k in C){ // k=envName
		let a = C[k]
		for(let loc of a){
			this.theObject[loc].environment[k] = true;
		}
	}
} */



/* let get_LocByEnv = function(){
	let o = {};
	for(let k in environmentList)
		o[k] = [];
	for(let k in core.Location.Data){
		let locEnv = core.Location.Data[k].environment;
		for(let k2 in locEnv)
			if(locEnv[k2])
				o[k2].push(k);
	}
	return o;
}; */