window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

window.RandoStuffs.OoT.core.Location.context = {
	// ENVIRONMENT CONTEXTS
	water             : 'Water',
	immersed          : 'Immersed',
	forest            : 'Forest',
	grass             : 'Grass',
	wood              : 'Wood',
	rock              : 'Rock',
	mountain          : 'Mountain',
	underground       : 'Underground',
	sandy             : 'Sandy',
	earthy            : 'Earthy',
	people            : 'People',
	building          : 'Building',
	town              : 'Town',
	desert            : 'Desert',
	hot               : 'Hot',
	fire              : 'Fire',
	cold              : 'Cold',
	ice               : 'Ice',
	magic             : 'Magic',
	explosive         : 'Explosive',
	song              : 'Song',
	reward            : 'Reward',
	enemy             : 'Enemy',
	// wet
	// lava
	// metal
	// fromEnemy
	// nearEnemy
	// paving
	// relief motif
	// boulder

	// SANITY CONTEXTS
	common            : 'Common',
	songQuest         : 'Song Quest',
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
	chest             : 'Chest',
	// pot
	// crate
	// NPC            // scrub / cow / people
	// kill           // GS / boss heart / kill them all
	// container      // crate / chest / dampe race chest
	// freestanding   // fire arrow / dampe race PoH

	




	//treslongetchiantnomaecrir2xtreslongetchiantnomaecrir2x : 'treslongetchiantnomaecrir2xtreslongetchiantnomaecrir2x',
};


// CONTEXT_SETS is segmented not for technical reason but only for
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


/* ALL STANDARD COMMON CRATE LOCATIONS

	"Market GS Guard House",      // child only / does not drop rupee

	"Graveyard Freestanding PoH", // (adult only) / does not drop rupee

	"GC GS Boulder Maze",         // child only // ALSO CRATE SANITY as "GC Boulder Maze Crate" any age

	"DMC GS Crate",               // child only / does not drop rupee

	"LH GS Lab Crate",            // (adult only) / does not drop rupee

	"GV Crate Freestanding PoH",  // any age // ALSO CRATE SANITY as "GV Freestanding PoH Crate" any age
*/


window.RandoStuffs.OoT.core.Location.CONTEXT_SETS = [

	// template (ENVIRONMENT CONTEXTS)
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

	// ENVIRONMENT CONTEXTS

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
			"Song from Royal Familys Tomb",
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
			"Song from Royal Familys Tomb",
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
			"Song from Royal Familys Tomb",
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
			"Song from Royal Familys Tomb",
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
		enemy : [

		],
	},

	// KF & LW & SFM
	{
		water : [
			"KF Storms Grotto Chest",
			"KF GS Bean Patch",
			"KF GS House of Twins",
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
			"LW Ocarina Memory Game",
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
			"LW Ocarina Memory Game",
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
			"KF Storms Grotto Chest",
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
			"LW Ocarina Memory Game",
			"LW Target in Woods",
			"LW Near Shortcuts Grotto Chest",
			"LW Skull Kid",
			"SFM Wolfos Grotto Chest",
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
			"LW Ocarina Memory Game",
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

	// HF & Market & ToT & HC & OGC
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
			"HF Near Market Grotto Chest",
			"HF Southeast Grotto Chest",
			"HF Open Grotto Chest",
			"HF GS Near Kak Grotto",
			"Market Treasure Chest Game Reward",
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
			"HC GS Tree",
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
			"Market Shooting Gallery Reward",
			"Market Bombchu Bowling First Prize",
			"Market Bombchu Bowling Second Prize",
			"Market Lost Dog",
			"Market Treasure Chest Game Reward",
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
			"Market Shooting Gallery Reward",
			"Market Bombchu Bowling First Prize",
			"Market Bombchu Bowling Second Prize",
			"Market Lost Dog",
			"Market Treasure Chest Game Reward",
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
			"Market Shooting Gallery Reward",
			"Market Bombchu Bowling First Prize",
			"Market Bombchu Bowling Second Prize",
			"Market Lost Dog",
			"Market Treasure Chest Game Reward",
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
			"Market Bombchu Bowling First Prize",
			"Market Bombchu Bowling Second Prize",
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
			"Market Shooting Gallery Reward",
			"Market Bombchu Bowling First Prize",
			"Market Bombchu Bowling Second Prize",
			"Market Lost Dog",
			"Market Treasure Chest Game Reward",
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
			"Kak GS Near Gate Guard",
			"Kak GS Skulltula House",
			"Kak GS House Under Construction",
			"Graveyard Freestanding PoH",
			"Graveyard Dampe Gravedigging Tour",
			"Graveyard GS Bean Patch",
			"Graveyard GS Wall",
		],
		wood : [
			"LLR Talons Chickens",
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
			"Kak Open Grotto Chest",
			"Kak Redead Grotto Chest",
			"Kak Shooting Gallery Reward",
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
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Freestanding PoH",
			"Graveyard Dampe Gravedigging Tour",
			"Graveyard Dampe Race Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
			"Graveyard GS Bean Patch",
		],
		rock : [
			"LLR GS Back Wall",
			"Kak Redead Grotto Chest",
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Gravedigging Tour",
			"Graveyard Dampe Race Hookshot Chest",
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
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Race Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		sandy : [
			"Kak Open Grotto Chest",
			"Graveyard GS Bean Patch",
		],
		earthy : [
			"Graveyard Dampe Gravedigging Tour",
		],
		people : [
			"LLR Talons Chickens",
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Man on Roof",
			"Kak Shooting Gallery Reward",
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak GS Tree",
			"Kak GS Near Gate Guard",
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
			"Graveyard Dampe Gravedigging Tour",
			"Graveyard Dampe Race Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		building : [
			"LLR Talons Chickens",
			"LLR Freestanding PoH",
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"LLR Tower Left Cow",
			"LLR Tower Right Cow",
			"Kak Impas House Freestanding PoH",
			"Kak Windmill Freestanding PoH",
			"Kak Shooting Gallery Reward",
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
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Race Hookshot Chest",
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
			"Kak Shooting Gallery Reward",
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Kak GS Tree",
			"Kak GS Near Gate Guard",
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
			"Graveyard Dampe Race Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		cold : [
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Race Hookshot Chest",
			"Graveyard Dampe Race Freestanding PoH",
		],
		ice : [

		],
		magic : [
			"Graveyard Royal Familys Tomb Chest",
		],
		explosive : [
			"Kak Redead Grotto Chest",
		],
		song : [
			"Kak Impas House Cow",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
		],
		reward : [
			"LLR Talons Chickens",
			"LLR Stables Left Cow",
			"LLR Stables Right Cow",
			"LLR Tower Left Cow",
			"LLR Tower Right Cow",
			"Kak Anju as Child",
			"Kak Anju as Adult",
			"Kak Man on Roof",
			"Kak Redead Grotto Chest",
			"Kak Shooting Gallery Reward",
			"Kak 10 Gold Skulltula Reward",
			"Kak 20 Gold Skulltula Reward",
			"Kak 30 Gold Skulltula Reward",
			"Kak 40 Gold Skulltula Reward",
			"Kak 50 Gold Skulltula Reward",
			"Kak Impas House Cow",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Gravedigging Tour",
			"Graveyard Dampe Race Hookshot Chest",
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
			"Kak GS Near Gate Guard",
			"Kak GS Watchtower",
			"Kak GS Skulltula House",
			"Kak GS House Under Construction",
			"Kak GS Above Impas House",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
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
			"DMT Chest",
			"DMT Storms Grotto Chest",
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
			"DMC Wall Freestanding PoH",
			"DMC Upper Grotto Chest",
			"DMC GS Crate",
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
			"ZR Frogs Ocarina Game",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZD Diving Minigame",
			"ZD Chest",
			"ZF Great Fairy Reward",
			"ZF Iceberg Freestanding PoH",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"LH Child Fishing",
			"LH Adult Fishing",
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
			"ZR Open Grotto Chest",
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZD Chest",
			"ZF GS Above the Log",
			"ZF GS Tree",
			"LH Child Fishing",
			"LH Adult Fishing",
			"LH Lab Dive",
			"LH Freestanding PoH",
			"LH GS Lab Wall",
			"LH GS Lab Crate",
			"LH GS Tree",
		],
		rock : [
			"ZR GS Near Raised Grottos",
			"ZR GS Above Bridge",
			"ZD Diving Minigame",
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
			"LH Child Fishing",
			"LH Adult Fishing",
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
			"LH Child Fishing",
			"LH Adult Fishing",
			"LH GS Bean Patch",
		],
		earthy : [
			"LH Underwater Item",
		],
		people : [
			"ZR Magic Bean Salesman",
			"ZD Diving Minigame",
			"ZD King Zora Thawed",
			"ZD Shop Item 1",
			"ZD Shop Item 2",
			"ZD Shop Item 3",
			"ZD Shop Item 4",
			"ZD Shop Item 5",
			"ZD Shop Item 6",
			"ZD Shop Item 7",
			"ZD Shop Item 8",
			"LH Child Fishing",
			"LH Adult Fishing",
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
			"LH Child Fishing",
			"LH Adult Fishing",
			"LH Lab Dive",
			"LH GS Lab Crate",
		],
		town : [
			"ZD Diving Minigame",
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
			"ZR Frogs Ocarina Game",
			"ZR Near Open Grotto Freestanding PoH",
			"ZR Near Domain Freestanding PoH",
			"ZR GS Tree",
			"ZR GS Ladder",
			"ZD Diving Minigame",
			"ZF Great Fairy Reward",
			"ZF GS Hidden Cave",
		],
		song : [
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game",
			"ZR Deku Scrub Grotto Front",
			"ZR Deku Scrub Grotto Rear",
			"ZD Diving Minigame",
			"ZF Great Fairy Reward",
			"LH Freestanding PoH",
		],
		reward : [
			"ZR Frogs in the Rain",
			"ZR Frogs Ocarina Game",
			"ZD Diving Minigame",
			"ZD Chest",
			"ZD King Zora Thawed",
			"ZF Great Fairy Reward",
			"LH Child Fishing",
			"LH Adult Fishing",
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
			"GV Crate Freestanding PoH",
			"GV Waterfall Freestanding PoH",
			"GV Chest",
			"GV Cow",
			"GV GS Small Bridge",
			"GV GS Bean Patch",
			"GV GS Behind Tent",
			"GF Chest",
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
			"Wasteland Bombchu Salesman",
			"Wasteland Chest",
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
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
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
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
			"Wasteland Bombchu Salesman",
		],
		building : [
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
			"Colossus Great Fairy Reward",
		],
		town : [
			"GF Chest",
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
		],
		desert : [
			"GF Chest",
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
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
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
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
			"GF Chest",
			"GF HBA 1000 Points",
			"GF HBA 1500 Points",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
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
			"GF GS Top Floor",
			"GF GS Archery Range",
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
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
			"Deku Tree Basement Chest",
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
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern Boss Room Chest",
		],
		rock : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		mountain : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Scarecrow",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern GS Back Room",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		underground : [
			"Dodongos Cavern King Dodongo Heart",
		],
		sandy : [
			
		],
		earthy : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Scarecrow",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern GS Back Room",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		people : [
			
		],
		building : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Scarecrow",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern GS Back Room",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		town : [
			
		],
		desert : [
			
		],
		hot : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		fire : [
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
		],
		cold : [
			
		],
		ice : [
			
		],
		magic : [
			
		],
		explosive : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Scarecrow",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern GS Back Room",
			"Dodongos Cavern Boss Room Chest",
			"Dodongos Cavern King Dodongo Heart",
		],
		song : [
			
		],
		reward : [
			"Dodongos Cavern King Dodongo Heart",
		],
		enemy : [
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Deku Scrub Side Room Near Dodongos",
			"Dodongos Cavern Deku Scrub Lobby",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Left",
			"Dodongos Cavern Deku Scrub Near Bomb Bag Right",
			"Dodongos Cavern GS Side Room Near Lower Lizalfos",
			"Dodongos Cavern GS Scarecrow",
			"Dodongos Cavern GS Alcove Above Stairs",
			"Dodongos Cavern GS Vines Above Stairs",
			"Dodongos Cavern GS Back Room",
			"Dodongos Cavern King Dodongo Heart",
		],
	},






	// Jabu
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
			"Jabu Jabus Belly Boomerang Chest",
			"Jabu Jabus Belly Map Chest",
			"Jabu Jabus Belly Compass Chest",
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

	// Well
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
			"Bottom of the Well Front Left Fake Wall Chest",
			"Bottom of the Well Front Center Bombable Chest",
			"Bottom of the Well Back Left Bombable Chest",
			"Bottom of the Well Underwater Left Chest",
			"Bottom of the Well Compass Chest",
			"Bottom of the Well Center Skulltula Chest",
			"Bottom of the Well Right Bottom Fake Wall Chest",
			"Bottom of the Well Fire Keese Chest",
			"Bottom of the Well Like Like Chest",
			"Bottom of the Well Map Chest",
			"Bottom of the Well Underwater Front Chest",
			"Bottom of the Well Invisible Chest",
			"Bottom of the Well Lens of Truth Chest",
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

	// Forest
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
			"Forest Temple First Room Chest",
			"Forest Temple First Stalfos Chest",
			"Forest Temple Raised Island Courtyard Chest",
			"Forest Temple Map Chest",
			"Forest Temple Well Chest",
			"Forest Temple Eye Switch Chest",
			"Forest Temple Floormaster Chest",
			"Forest Temple Red Poe Chest",
			"Forest Temple Bow Chest",
			"Forest Temple Blue Poe Chest",
			"Forest Temple Falling Ceiling Room Chest",
			"Forest Temple Basement Chest",
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

	// Fire
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
			"Fire Temple Near Boss Chest",
			"Fire Temple Flare Dancer Chest",
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

	// Water
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
			"Water Temple Compass Chest",
			"Water Temple Map Chest",
			"Water Temple Cracked Wall Chest",
			"Water Temple Torches Chest",
			"Water Temple Central Pillar Chest",
			"Water Temple Central Bow Target Chest",
			"Water Temple Longshot Chest",
			"Water Temple River Chest",
			"Water Temple Dragon Chest",
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

	// Shadow
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
			"Shadow Temple Wind Hint Chest",
			"Shadow Temple After Wind Enemy Chest",
			"Shadow Temple After Wind Hidden Chest",
			"Shadow Temple Spike Walls Left Chest",
			"Shadow Temple Invisible Floormaster Chest",
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

	// Spirit
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
			"Spirit Temple Topmost Chest",
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

	// Ice
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
			"Ice Cavern Map Chest",
			"Ice Cavern Compass Chest",
			"Ice Cavern Iron Boots Chest",
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

	// GTG
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
			"Gerudo Training Ground Lobby Left Chest",
			"Gerudo Training Ground Lobby Right Chest",
			"Gerudo Training Ground Stalfos Chest",
			"Gerudo Training Ground Before Heavy Block Chest",
			"Gerudo Training Ground Heavy Block First Chest",  // near
			"Gerudo Training Ground Heavy Block Second Chest", // left
			"Gerudo Training Ground Heavy Block Third Chest",  // right (invisible)
			"Gerudo Training Ground Heavy Block Fourth Chest", // far
			"Gerudo Training Ground Eye Statue Chest",
			"Gerudo Training Ground Near Scarecrow Chest",
			"Gerudo Training Ground Hammer Room Clear Chest",
			"Gerudo Training Ground Hammer Room Switch Chest",
			"Gerudo Training Ground Maze Right Central Chest",
			"Gerudo Training Ground Maze Right Side Chest",
			"Gerudo Training Ground Underwater Silver Rupee Chest",
			"Gerudo Training Ground Beamos Chest",
			"Gerudo Training Ground Hidden Ceiling Chest",
			"Gerudo Training Ground Maze Path First Chest",
			"Gerudo Training Ground Maze Path Second Chest",
			"Gerudo Training Ground Maze Path Third Chest",
			"Gerudo Training Ground Maze Path Final Chest",
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

	// Ganon
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




	// SANITY CONTEXTS
	{
		// contains : kokiri sword, ocarinas, weird egg,
		//            magic beans, gerudo card, medigoron/salesman,
		// includes : chests, NPC gifts/rewards/minigames, boss reward(stoneMed)
		// (+)        extended frog songs 
		// exculdes : GS sanity, extended scrubs, cows, shops, song learning spots,
		// (+)        freestanding sanity, pots, crates, beehive
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
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Freestanding PoH",
			"Graveyard Dampe Gravedigging Tour", // minigame
			"Graveyard Dampe Race Hookshot Chest",
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
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			// Hideout
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
			"Hideout Gerudo Membership Card",
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
			// Gerudo Training Ground
			"Gerudo Training Ground Lobby Left Chest",
			"Gerudo Training Ground Lobby Right Chest",
			"Gerudo Training Ground Stalfos Chest",
			"Gerudo Training Ground Before Heavy Block Chest",
			"Gerudo Training Ground Heavy Block First Chest",  // near
			"Gerudo Training Ground Heavy Block Second Chest", // left
			"Gerudo Training Ground Heavy Block Third Chest",  // right (invisible)
			"Gerudo Training Ground Heavy Block Fourth Chest", // far
			"Gerudo Training Ground Eye Statue Chest",
			"Gerudo Training Ground Near Scarecrow Chest",
			"Gerudo Training Ground Hammer Room Clear Chest",
			"Gerudo Training Ground Hammer Room Switch Chest",
			"Gerudo Training Ground Freestanding Key",
			"Gerudo Training Ground Maze Right Central Chest",
			"Gerudo Training Ground Maze Right Side Chest",
			"Gerudo Training Ground Underwater Silver Rupee Chest",
			"Gerudo Training Ground Beamos Chest",
			"Gerudo Training Ground Hidden Ceiling Chest",
			"Gerudo Training Ground Maze Path First Chest",
			"Gerudo Training Ground Maze Path Second Chest",
			"Gerudo Training Ground Maze Path Third Chest",
			"Gerudo Training Ground Maze Path Final Chest",
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
		songQuest : [
			// song
			"Song from Impa",
			"Song from Malon",
			"Song from Saria",
			"Song from Royal Familys Tomb",
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
			// Hideout
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
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
			// Gerudo Training Ground
			"Gerudo Training Ground Stalfos Chest",
			"Gerudo Training Ground Heavy Block Third Chest",
			"Gerudo Training Ground Eye Statue Chest",
			"Gerudo Training Ground Near Scarecrow Chest",
			"Gerudo Training Ground Hammer Room Switch Chest",
			"Gerudo Training Ground Freestanding Key",
			"Gerudo Training Ground Underwater Silver Rupee Chest",
			"Gerudo Training Ground Beamos Chest",
			"Gerudo Training Ground Hidden Ceiling Chest",
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
			"Gerudo Training Ground Maze Path Final Chest",
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
			"Gerudo Training Ground Maze Path Final Chest",
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
			"Kak GS Near Gate Guard",
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
			"Shadow Temple GS Invisible Blades Room",
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
		chest : [
			// KF
			"KF Midos Top Left Chest",
			"KF Midos Top Right Chest",
			"KF Midos Bottom Left Chest",
			"KF Midos Bottom Right Chest",
			"KF Kokiri Sword Chest",
			"KF Storms Grotto Chest",
			// LW
			"LW Near Shortcuts Grotto Chest",
			// SFM
			"SFM Wolfos Grotto Chest",
			// HF
			"HF Near Market Grotto Chest",
			"HF Southeast Grotto Chest",
			"HF Open Grotto Chest",
			// Market
			"Market Treasure Chest Game Reward", // minigame
			// Kak
			"Kak Open Grotto Chest",
			"Kak Redead Grotto Chest",
			// Graveyard
			"Graveyard Shield Grave Chest",
			"Graveyard Heart Piece Grave Chest",
			"Graveyard Royal Familys Tomb Chest",
			"Graveyard Dampe Race Hookshot Chest",
			// DMT
			"DMT Chest",
			"DMT Storms Grotto Chest",
			// GC
			"GC Maze Left Chest",
			"GC Maze Right Chest",
			"GC Maze Center Chest",
			// DMC
			"DMC Upper Grotto Chest",
			// ZR
			"ZR Open Grotto Chest",
			// ZD
			"ZD Chest",
			// GV
			"GV Chest",
			// GF
			"GF Chest",
			// Wasteland
			"Wasteland Chest",
			// Deku Tree
			"Deku Tree Map Chest",
			"Deku Tree Slingshot Room Side Chest",
			"Deku Tree Slingshot Chest",
			"Deku Tree Compass Chest",
			"Deku Tree Compass Room Side Chest",
			"Deku Tree Basement Chest",
			// Dodongos Cavern
			"Dodongos Cavern Map Chest",
			"Dodongos Cavern Compass Chest",
			"Dodongos Cavern Bomb Flower Platform Chest",
			"Dodongos Cavern Bomb Bag Chest",
			"Dodongos Cavern End of Bridge Chest",
			// Dodongos Cavern boss room
			"Dodongos Cavern Boss Room Chest",
			// Jabu Jabus Belly
			"Jabu Jabus Belly Boomerang Chest",
			"Jabu Jabus Belly Map Chest",
			"Jabu Jabus Belly Compass Chest",
			// Bottom of the Well
			"Bottom of the Well Front Left Fake Wall Chest",
			"Bottom of the Well Front Center Bombable Chest",
			"Bottom of the Well Back Left Bombable Chest",
			"Bottom of the Well Underwater Left Chest",
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
			"Shadow Temple Wind Hint Chest",
			"Shadow Temple After Wind Enemy Chest",
			"Shadow Temple After Wind Hidden Chest",
			"Shadow Temple Spike Walls Left Chest",
			"Shadow Temple Boss Key Chest",
			"Shadow Temple Invisible Floormaster Chest",
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
			// Ice Cavern
			"Ice Cavern Map Chest",
			"Ice Cavern Compass Chest",
			"Ice Cavern Iron Boots Chest",
			// Gerudo Training Ground
			"Gerudo Training Ground Lobby Left Chest",
			"Gerudo Training Ground Lobby Right Chest",
			"Gerudo Training Ground Stalfos Chest",
			"Gerudo Training Ground Before Heavy Block Chest",
			"Gerudo Training Ground Heavy Block First Chest",  // near
			"Gerudo Training Ground Heavy Block Second Chest", // left
			"Gerudo Training Ground Heavy Block Third Chest",  // right (invisible)
			"Gerudo Training Ground Heavy Block Fourth Chest", // far
			"Gerudo Training Ground Eye Statue Chest",
			"Gerudo Training Ground Near Scarecrow Chest",
			"Gerudo Training Ground Hammer Room Clear Chest",
			"Gerudo Training Ground Hammer Room Switch Chest",
			"Gerudo Training Ground Maze Right Central Chest",
			"Gerudo Training Ground Maze Right Side Chest",
			"Gerudo Training Ground Underwater Silver Rupee Chest",
			"Gerudo Training Ground Beamos Chest",
			"Gerudo Training Ground Hidden Ceiling Chest",
			"Gerudo Training Ground Maze Path First Chest",
			"Gerudo Training Ground Maze Path Second Chest",
			"Gerudo Training Ground Maze Path Third Chest",
			"Gerudo Training Ground Maze Path Final Chest",
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
	}
];



window.RandoStuffs.OoT.core.Location.byContext = {};

// make_ctxToLoc (convert CONTEXT_SETS to byContext)
(()=>{
	// short name
	let Loc = window.RandoStuffs.OoT.core.Location;
	let ctx = Loc.context;
	let CTXSET = Loc.CONTEXT_SETS;
	let byCtx = Loc.byContext;
	// alloc mem
	for(let k in ctx)
		byCtx[k] = [];
	// fill mem
	for(let C of CTXSET){
		for(let k in C){ // k=ctxName
			let a = C[k]
			for(let loc of a){
				byCtx[k].push(loc);
			}
		}
	}

})();


// sort location by context (follow location order)
window.RandoStuffs.OoT.core.Location.sortUpdate_byContext = ()=>{
	// short name
	let Loc = window.RandoStuffs.OoT.core.Location;
	let locList = Loc.list;
	let ctx = Loc.context;
	let byCtx = Loc.byContext;
	for(let k in ctx){
		let o = [];
		for(let l of locList){
			if( byCtx[k].includes(l) )
				o.push(l);
		}
		byCtx[k] = o;
	}
}

// build back the ENVIRONMENT CONTEXTS of CONTEXT_SETS
// includes the empty 'template' of ENVIRONMENT CONTEXTS
// but does not the SANITY CONTEXTS of CONTEXT_SETS
// (output web page text contains some not raw text chars
// which make some bug in vscode when foldable code is used.
// copy/past in a notepad to loose the weird data, and copy from notepad)
window.RandoStuffs.OoT.core.Location.buildback_CONTEXT_SETS = ()=>{
	let locData = window.RandoStuffs.OoT.core.Location.Data;
	let allCtxID = Object.keys(window.RandoStuffs.OoT.core.Location.context);
	let envCtxID = Object.keys(window.RandoStuffs.OoT.core.Location.CONTEXT_SETS[0]);
	// ENVIRONMENT CONTEXTS

	let groupedLoc_struct = [
		{	name : '// dungeon rewards & songs',
			locs : [
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
				"Song from Royal Familys Tomb",
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
		},
		{	name : '// KF & LW & SFM',
			locs : [
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
			],
		},
		{	name : '// HF & Market & ToT & HC & OGC',
			locs : [
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
				// OGC
				"OGC Great Fairy Reward",
				// OGC GS
				"OGC GS",
			],
		},
		{	name : '// LLR & Kak & Graveyard',
			locs : [
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
				"Kak GS Near Gate Guard",
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
				"Graveyard Royal Familys Tomb Chest",
				"Graveyard Freestanding PoH",
				"Graveyard Dampe Gravedigging Tour", // minigame
				"Graveyard Dampe Race Hookshot Chest",
				"Graveyard Dampe Race Freestanding PoH",
				// Graveyard GS
				"Graveyard GS Bean Patch",
				"Graveyard GS Wall",
			],
		},
		{	name : '// DMT & GC & DMC',
			locs : [
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
			],
		},
		{	name : '// ZR & ZD & ZF & LH',
			locs : [
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
			],
		},
		{	name : '// GV & GF & Wasteland & Colossus',
			locs : [
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
				"GF Chest",
				"GF HBA 1000 Points", // minigame
				"GF HBA 1500 Points", // minigame
				// GF GS
				"GF GS Top Floor",
				"GF GS Archery Range",
				// Hideout
				"Hideout 1 Torch Jail Gerudo Key",   // (RED)
				"Hideout 2 Torches Jail Gerudo Key", // (BLUE)
				"Hideout 3 Torches Jail Gerudo Key", // (GREEN)
				"Hideout 4 Torches Jail Gerudo Key", // (YELLOW)
				"Hideout Gerudo Membership Card",
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
			],
		},
		{	name : '// Deku',
			locs : [
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
			],
		},
		{	name : '// Dodongo',
			locs : [
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
			],
		},
		{	name : '// Jabu',
			locs : [
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
			],
		},
		{	name : '// Well',
			locs : [
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
			],
		},
		{	name : '// Forest',
			locs : [
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
			],
		},
		{	name : '// Fire',
			locs : [
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
			],
		},
		{	name : '// Water',
			locs : [
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
			],
		},
		{	name : '// Shadow',
			locs : [
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
				"Shadow Temple GS Invisible Blades Room",
				"Shadow Temple GS Falling Spikes Room",
				"Shadow Temple GS Single Giant Pot",
				"Shadow Temple GS Near Ship",
				"Shadow Temple GS Triple Giant Pot",
				// Shadow Temple boss heart
				"Shadow Temple Bongo Bongo Heart",
			],
		},
		{	name : '// Spirit',
			locs : [
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
			],
		},
		{	name : '// Ice',
			locs : [
				// Ice Cavern
				"Ice Cavern Map Chest",
				"Ice Cavern Compass Chest",
				"Ice Cavern Freestanding PoH",
				"Ice Cavern Iron Boots Chest",
				// Ice Cavern GS
				"Ice Cavern GS Spinning Scythe Room",
				"Ice Cavern GS Heart Piece Room",
				"Ice Cavern GS Push Block Room",
			],
		},
		{	name : '// GTG',
			locs : [
				// Gerudo Training Ground
				"Gerudo Training Ground Lobby Left Chest",
				"Gerudo Training Ground Lobby Right Chest",
				"Gerudo Training Ground Stalfos Chest",
				"Gerudo Training Ground Before Heavy Block Chest",
				"Gerudo Training Ground Heavy Block First Chest",  // near
				"Gerudo Training Ground Heavy Block Second Chest", // left
				"Gerudo Training Ground Heavy Block Third Chest",  // right (invisible)
				"Gerudo Training Ground Heavy Block Fourth Chest", // far
				"Gerudo Training Ground Eye Statue Chest",
				"Gerudo Training Ground Near Scarecrow Chest",
				"Gerudo Training Ground Hammer Room Clear Chest",
				"Gerudo Training Ground Hammer Room Switch Chest",
				"Gerudo Training Ground Freestanding Key",
				"Gerudo Training Ground Maze Right Central Chest",
				"Gerudo Training Ground Maze Right Side Chest",
				"Gerudo Training Ground Underwater Silver Rupee Chest",
				"Gerudo Training Ground Beamos Chest",
				"Gerudo Training Ground Hidden Ceiling Chest",
				"Gerudo Training Ground Maze Path First Chest",
				"Gerudo Training Ground Maze Path Second Chest",
				"Gerudo Training Ground Maze Path Third Chest",
				"Gerudo Training Ground Maze Path Final Chest",
			],
		},
		{	name : '// Ganon',
			locs : [
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
			],
		},
		{	name : '// template (ENVIRONMENT CONTEXTS)',
			locs : [
			],
		},
		/* {	name : '// ',
			locs : [

			],
		}, */

	];

	let str_title = '// ENVIRONMENT CONTEXTS';

	let obj_output = [];

	// build obj_output
	groupedLoc_struct.forEach((locSet)=>{
		let current = {};
			current.name = locSet.name;
			current.obj = {};
			for(let name of envCtxID) current.obj[name] = [];
			locSet.locs.forEach((loc)=>{
				envCtxID.forEach((ctx)=>{
					if(locData[loc].context[ctx]) current.obj[ctx].push(loc);
				});
			});
		obj_output.push(current);
	});

	// print result
	// 

	// open a new page to display result
	let win = open();
	let body = win.document.body;
	body.style.whiteSpace = 'pre';

	// build the text content
	let str = str_title;
	obj_output.forEach((e)=>{str+=`\n\n${e.name}\n${JSON.stringify(e.obj, null, '\t')},`});

	// format the native JSON syntax to my personal JS Object syntax
	(()=>{
		// - open emtpy arrays
		let occ = '": []';
		if(envCtxID.reduce((o,e)=>(o||e.includes(occ)),false))
			console.warn(`OCCURENCE ${occ} is present in a Context Name !`);
		str = str.replaceAll(occ, '": [\n\n\t]');
	
			// - remove "" on prop name (ctx name ID)
			// - add a space between 'ctx name ID' and '[' opening
			envCtxID.forEach((ctx)=>{
				occ = `"${ctx}": [\n`;
				if(envCtxID.reduce((o,e)=>(o||e.includes(occ)),false))
					console.warn(`OCCURENCE ${occ} is present in a Context Name !`);
				str = str.replaceAll(occ, `${ctx} : [\n`);
			});
		
		// - add comma at last context in a set
		occ = `\n\t]\n},`;
		if(envCtxID.reduce((o,e)=>(o||e.includes(occ)),false))
			console.warn(`OCCURENCE ${occ} is present in a Context Name !`);
		str = str.replaceAll(occ, `\n\t],\n},`);
	
			// - add comma at last value in a context
			occ = `"\n\t],\n`;
			if(envCtxID.reduce((o,e)=>(o||e.includes(occ)),false))
				console.warn(`OCCURENCE ${occ} is present in a Context Name !`);
			str = str.replaceAll(occ, `",\n\t],\n`);
	})();

	

	// add comments to locations
	let commentLocList = [
		// GF Hideout
		{ loc : `"Hideout 1 Torch Jail Gerudo Key",\n`, comment : `   // (RED)\n`},
		{ loc : `"Hideout 2 Torches Jail Gerudo Key",\n`, comment : ` // (BLUE)\n`},
		{ loc : `"Hideout 3 Torches Jail Gerudo Key",\n`, comment : ` // (GREEN)\n`},
		{ loc : `"Hideout 4 Torches Jail Gerudo Key",\n`, comment : ` // (YELLOW)\n`},
		// GTG
		{ loc : `"Gerudo Training Ground Heavy Block First Chest",\n`,  comment : `  // near\n`},
		{ loc : `"Gerudo Training Ground Heavy Block Second Chest",\n`, comment : ` // left\n`},
		{ loc : `"Gerudo Training Ground Heavy Block Third Chest",\n`,  comment : `  // right (invisible)\n`},
		{ loc : `"Gerudo Training Ground Heavy Block Fourth Chest",\n`, comment : ` // far\n`},
	];
	commentLocList.forEach((e)=>{str=str.replaceAll(e.loc, e.loc.slice(0,-1)+e.comment);});

	// display result
	body.textContent = str;

};


// CONTEXT_SETS direct to Location.Data[].context
/* for(let C of byCtx){
	for(let k in C){ // k=ctxName
		let a = C[k]
		for(let loc of a){
			this.theObject[loc].context[k] = true;
		}
	}
} */



/* let get_LocByCtx = function(){
	let o = {};
	for(let k in contextList)
		o[k] = [];
	for(let k in core.Location.Data){
		let locCtx = core.Location.Data[k].context;
		for(let k2 in locCtx)
			if(locCtx[k2])
				o[k2].push(k);
	}
	return o;
}; */


var debug_filterByContext = (htmlGrid, ctxFltrList)=>{
	let rowLen = Object.keys(window.RandoStuffs.OoT.core.Location.context).length + 1;
	let data = window.RandoStuffs.OoT.core.Location.Data;

	let hideNextOne = false;
	let elems = [...htmlGrid.children];

	elems.forEach((elem,index)=>{
		if( !(index<rowLen) ){
			if(elem.tagName==='DIV'){
				hideNextOne = false;
				ctxFltrList.forEach((ctx)=>{
					if(data[elem.textContent].context[ctx])
						hideNextOne = true;
				});
			}
			if(hideNextOne){
				elem.style.display = 'none';
			}
		}
	});

	// example :
	// remove all that are not 'chest' 100% sure
	// debug_filterByContext(temp1, ['songQuest','cow','scrub','shop','token'])

};