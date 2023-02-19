window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

window.RandoStuffs.OoT.core.Location.context = {
	// ENVIRONMENT CONTEXTS
	//
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
	//
	common            : 'Common',
	songQuest         : 'Song Quest',
	smallKey          : 'Small Key',
	mapCompass        : 'Map & Compass',
	bossKey           : 'Boss Key',
	bossHeart         : 'Boss Heart',
	dungeonReward     : 'Dungeon Reward',
	songDungeonReward : 'Songs as Dungeon Reward',
	stonesMedallions  : 'Stones & Medallions',
	masterquest       : 'Master Quest',
	cow               : 'Cow',
	scrub             : 'Scrub',
	shop              : 'Shop',
	token             : 'Token',
	tokenReward       : 'GS Token Reward',
	minigame          : 'Minigame',
	chest             : 'Chest',
	freestanding      : 'Freestanding',
	pot               : 'Pot',
	crate             : 'Crate',
	beehive           : 'Beehive',
	// NPC            // scrub / cow / people
	// kill           // GS / boss heart / kill them all
	// container      // crate / chest / dampe race chest
	// uncontained    // fire arrow / dampe race PoH

	




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

	// v7 : dungeon rewards & songs
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

	// v7 : KF & LW & SFM
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

	// v7 : HF & Market & ToT & HC & OGC
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
			"Market Night Red Rupee Crate",
			"Market Night Green Rupee Crate 1",
			"Market Night Green Rupee Crate 2",
			"Market Night Green Rupee Crate 3",
			"Market Dog Lady House Crate",
			"Market Guard House Child Crate",
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

	// v7 : LLR & Kak & Graveyard
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
			"LLR Child Crate",
			"Kak Adult Red Rupee Crate",
			"Kak Adult Arrows Crate",
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

	// v7 : DMT & GC & DMC
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
			"GC Boulder Maze Crate",
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

	// v7 : ZR & ZD & ZF & LH
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

	// v7 : GV & GF & Wasteland & Colossus
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
			"GV Crate Near Cow",
			"GV Freestanding PoH Crate",
			"GF Above Jail Crate",
			"Hideout Break Room Crate 1",
			"Hideout Break Room Crate 2",
			"Hideout Break Room Hallway Crate 1",
			"Hideout Break Room Hallway Crate 2",
			"Hideout 3 Torch Jail Crate",
			"Hideout 1 Torch Jail Crate",
			"Hideout Near Kitchen Crate 1",
			"Hideout Near Kitchen Crate 2",
			"Hideout Near Kitchen Crate 3",
			"Hideout Near Kitchen Crate 4",
			"Hideout Near Kitchen Crate 5",
			"Hideout 2 Torch Jail Crate 1",
			"Hideout 2 Torch Jail Crate 2",
			"Wasteland Crate Before Quicksand",
			"Wasteland Crate After Quicksand 1",
			"Wasteland Crate After Quicksand 2",
			"Wasteland Crate After Quicksand 3",
			"Wasteland Crate Near Colossus",
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

	// v7 : Deku
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

	// v7 : Dodongo
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

	// v7 : Jabu
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
			"Jabu Jabus Belly Small Wooden Crate",
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

	// v7 : Well
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

	// v7 : Forest
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

	// v7 : Fire
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

	// v7 : Water
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

	// v7 : Shadow
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

	// v7 : Spirit
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
			"Spirit Temple Before Child Climb Small Wooden Crate 1",
			"Spirit Temple Before Child Climb Small Wooden Crate 2",
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

	// v7 : Ice
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

	// v7 : GTG
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

	// v7 : Ganon
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



	

	// MQ Deku
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
			"Deku Tree MQ Map Chest",
			"Deku Tree MQ Slingshot Chest",
			"Deku Tree MQ Slingshot Room Back Chest",
			"Deku Tree MQ Compass Chest",
			"Deku Tree MQ Basement Chest",
			"Deku Tree MQ Before Spinning Log Chest",
			"Deku Tree MQ After Spinning Log Chest",
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

	// v7 : MQ Deku
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
			"Deku Tree MQ Lobby Crate",
			"Deku Tree MQ Slingshot Room Crate 1",
			"Deku Tree MQ Slingshot Room Crate 2",
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

	// MQ Dodongo
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
			"Dodongos Cavern MQ Map Chest",
			"Dodongos Cavern MQ Bomb Bag Chest",
			"Dodongos Cavern MQ Torch Puzzle Room Chest",
			"Dodongos Cavern MQ Larvae Room Chest",
			"Dodongos Cavern MQ Compass Chest",
			"Dodongos Cavern MQ Under Grave Chest",
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

	// v7 : MQ Dodongo
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
			"Dodongos Cavern MQ Staircase Crate Bottom Left",
			"Dodongos Cavern MQ Staircase Crate Bottom Right",
			"Dodongos Cavern MQ Staircase Crate Mid Left",
			"Dodongos Cavern MQ Staircase Crate Top Left",
			"Dodongos Cavern MQ Staircase Crate Mid Right",
			"Dodongos Cavern MQ Staircase Crate Top Right",
			"Dodongos Cavern MQ Poes Room Crate 5",
			"Dodongos Cavern MQ Poes Room Crate 6",
			"Dodongos Cavern MQ Poes Room Crate 1",
			"Dodongos Cavern MQ Poes Room Crate 2",
			"Dodongos Cavern MQ Poes Room Crate 3",
			"Dodongos Cavern MQ Poes Room Crate 4",
			"Dodongos Cavern MQ Poes Room Crate Near Bomb Flower",
			"Dodongos Cavern MQ Poes Room Crate 7",
			"Dodongos Cavern MQ Larvae Room Crate 1",
			"Dodongos Cavern MQ Larvae Room Crate 2",
			"Dodongos Cavern MQ Larvae Room Crate 3",
			"Dodongos Cavern MQ Larvae Room Crate 4",
			"Dodongos Cavern MQ Larvae Room Crate 5",
			"Dodongos Cavern MQ Larvae Room Crate 6",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 1",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 2",
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

	// MQ Jabu
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
			"Jabu Jabus Belly MQ Map Chest",
			"Jabu Jabus Belly MQ First Room Side Chest",
			"Jabu Jabus Belly MQ Second Room Lower Chest",
			"Jabu Jabus Belly MQ Compass Chest",
			"Jabu Jabus Belly MQ Basement Near Switches Chest",
			"Jabu Jabus Belly MQ Basement Near Vines Chest",
			"Jabu Jabus Belly MQ Boomerang Room Small Chest",
			"Jabu Jabus Belly MQ Boomerang Chest",
			"Jabu Jabus Belly MQ Falling Like Like Room Chest",
			"Jabu Jabus Belly MQ Second Room Upper Chest",
			"Jabu Jabus Belly MQ Near Boss Chest",
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

	// v7 : MQ Jabu
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

	// MQ Well
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
			"Bottom of the Well MQ Map Chest",
			"Bottom of the Well MQ Compass Chest",
			"Bottom of the Well MQ Lens of Truth Chest",
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

	// v7 : MQ Well
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

	// MQ Forest
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
			"Forest Temple MQ First Room Chest",
			"Forest Temple MQ Wolfos Chest",
			"Forest Temple MQ Well Chest",
			"Forest Temple MQ Raised Island Courtyard Lower Chest",
			"Forest Temple MQ Raised Island Courtyard Upper Chest",
			"Forest Temple MQ Redead Chest",
			"Forest Temple MQ Map Chest",
			"Forest Temple MQ Bow Chest",
			"Forest Temple MQ Compass Chest",
			"Forest Temple MQ Falling Ceiling Room Chest",
			"Forest Temple MQ Basement Chest",
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

	// v7 : MQ Forest
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
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 1",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 2",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 3",
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

	// MQ Fire
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
			"Fire Temple MQ Map Room Side Chest",
			"Fire Temple MQ Megaton Hammer Chest",
			"Fire Temple MQ Map Chest",
			"Fire Temple MQ Near Boss Chest",
			"Fire Temple MQ Big Lava Room Blocked Door Chest",
			"Fire Temple MQ Lizalfos Maze Side Room Chest",
			"Fire Temple MQ Compass Chest",
			"Fire Temple MQ Lizalfos Maze Upper Chest",
			"Fire Temple MQ Lizalfos Maze Lower Chest",
			"Fire Temple MQ Chest On Fire",
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

	// v7 : MQ Fire
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
			"Fire Temple MQ Near Boss Left Crate 1",
			"Fire Temple MQ Near Boss Left Crate 2",
			"Fire Temple MQ Near Boss Right Lower Crate 1",
			"Fire Temple MQ Near Boss Right Lower Crate 2",
			"Fire Temple MQ Near Boss Right Mid Crate",
			"Fire Temple MQ Near Boss Right Upper Crate",
			"Fire Temple MQ Shortcut Crate 1",
			"Fire Temple MQ Shortcut Crate 2",
			"Fire Temple MQ Shortcut Crate 3",
			"Fire Temple MQ Shortcut Crate 4",
			"Fire Temple MQ Shortcut Crate 5",
			"Fire Temple MQ Shortcut Crate 6",
			"Fire Temple MQ Lower Lizalfos Maze Crate 1",
			"Fire Temple MQ Lower Lizalfos Maze Crate 2",
			"Fire Temple MQ Lower Lizalfos Maze Crate 3",
			"Fire Temple MQ Upper Lizalfos Maze Crate 1",
			"Fire Temple MQ Upper Lizalfos Maze Crate 2",
			"Fire Temple MQ Upper Lizalfos Maze Crate 3",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 2",
			"Fire Temple MQ Shoot Torch On Wall Room Center Crate",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 2",
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

	// MQ Water
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
			"Water Temple MQ Longshot Chest",
			"Water Temple MQ Map Chest",
			"Water Temple MQ Compass Chest",
			"Water Temple MQ Central Pillar Chest",
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

	// v7 : MQ Water
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
			"Water Temple MQ Central Pillar Upper Crate 1",
			"Water Temple MQ Central Pillar Upper Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 1",
			"Water Temple MQ Central Pillar Lower Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 3",
			"Water Temple MQ Central Pillar Lower Crate 4",
			"Water Temple MQ Central Pillar Lower Crate 5",
			"Water Temple MQ Central Pillar Lower Crate 6",
			"Water Temple MQ Central Pillar Lower Crate 7",
			"Water Temple MQ Central Pillar Lower Crate 8",
			"Water Temple MQ Central Pillar Lower Crate 9",
			"Water Temple MQ Central Pillar Lower Crate 10",
			"Water Temple MQ Central Pillar Lower Crate 11",
			"Water Temple MQ Central Pillar Lower Crate 12",
			"Water Temple MQ Central Pillar Lower Crate 13",
			"Water Temple MQ Central Pillar Lower Crate 14",
			"Water Temple MQ Triple Wall Torch Submerged Crate 1",
			"Water Temple MQ Triple Wall Torch Submerged Crate 2",
			"Water Temple MQ Triple Wall Torch Submerged Crate 3",
			"Water Temple MQ Triple Wall Torch Submerged Crate 4",
			"Water Temple MQ Triple Wall Torch Submerged Crate 5",
			"Water Temple MQ Triple Wall Torch Submerged Crate 6",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 1",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 2",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 3",
			"Water Temple MQ Storage Room Crate 1",
			"Water Temple MQ Storage Room Crate 2",
			"Water Temple MQ Storage Room Crate 3",
			"Water Temple MQ Storage Room Crate 4",
			"Water Temple MQ Storage Room Crate 5",
			"Water Temple MQ Storage Room Crate 6",
			"Water Temple MQ Storage Room Crate 7",
			"Water Temple MQ Dragon Statue By Torches Crate 1",
			"Water Temple MQ Dragon Statue By Torches Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 1",
			"Water Temple MQ Dragon Statue Submerged Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 3",
			"Water Temple MQ Dragon Statue Submerged Crate 4",
			"Water Temple MQ Dragon Statue Near Door Crate 1",
			"Water Temple MQ Dragon Statue Near Door Crate 2",
			"Water Temple MQ Boss Key Chest Room Upper Crate",
			"Water Temple MQ Boss Key Chest Room Lower Crate 1",
			"Water Temple MQ Boss Key Chest Room Lower Crate 2",
			"Water Temple MQ Boss Key Chest Room Lower Crate 3",
			"Water Temple MQ Boss Key Chest Room Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 1",
			"Water Temple MQ Before Upper Water Switch Lower Crate 2",
			"Water Temple MQ Before Upper Water Switch Lower Crate 3",
			"Water Temple MQ Before Upper Water Switch Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 5",
			"Water Temple MQ Before Upper Water Switch Lower Crate 6",
			"Water Temple MQ Before Upper Water Switch Upper Crate 1",
			"Water Temple MQ Before Upper Water Switch Upper Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 1",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 3",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 4",
			"Water Temple MQ Freestanding Key Area Front Crate 1",
			"Water Temple MQ Freestanding Key Area Front Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 1",
			"Water Temple MQ Freestanding Key Area Submerged Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 3",
			"Water Temple MQ Freestanding Key Area Submerged Crate 4",
			"Water Temple MQ Freestanding Key Area Submerged Crate 5",
			"Water Temple MQ Freestanding Key Area Submerged Crate 6",
			"Water Temple MQ Dodongo Room Lower Crate 1",
			"Water Temple MQ Dodongo Room Lower Crate 2",
			"Water Temple MQ Dodongo Room Lower Crate 3",
			"Water Temple MQ Dodongo Room Upper Crate",
			"Water Temple MQ Dodongo Room Hall Crate",
			"Water Temple MQ Freestanding Key Room Crate 1",
			"Water Temple MQ Freestanding Key Room Crate 2",
			"Water Temple MQ Freestanding Key Room Crate 3",
			"Water Temple MQ Freestanding Key Room Crate 4",
			"Water Temple MQ Freestanding Key Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Gate Crate 1",
			"Water Temple MQ Lizalfos Hallway Gate Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 1",
			"Water Temple MQ Lizalfos Hallway Room Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 3",
			"Water Temple MQ Lizalfos Hallway Room Crate 4",
			"Water Temple MQ Lizalfos Hallway Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Hall Crate 1",
			"Water Temple MQ Lizalfos Hallway Hall Crate 2",
			"Water Temple MQ Lizalfos Hallway Hall Crate 3",
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

	// MQ Shadow
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
			"Shadow Temple MQ Early Gibdos Chest",
			"Shadow Temple MQ Map Chest",
			"Shadow Temple MQ Near Ship Invisible Chest",
			"Shadow Temple MQ Compass Chest",
			"Shadow Temple MQ Hover Boots Chest",
			"Shadow Temple MQ Invisible Blades Invisible Chest",
			"Shadow Temple MQ Invisible Blades Visible Chest",
			"Shadow Temple MQ Beamos Silver Rupees Chest",
			"Shadow Temple MQ Falling Spikes Lower Chest",
			"Shadow Temple MQ Falling Spikes Upper Chest",
			"Shadow Temple MQ Falling Spikes Switch Chest",
			"Shadow Temple MQ Invisible Spikes Chest",
			"Shadow Temple MQ Stalfos Room Chest",
			"Shadow Temple MQ Wind Hint Chest",
			"Shadow Temple MQ After Wind Hidden Chest",
			"Shadow Temple MQ After Wind Enemy Chest",
			"Shadow Temple MQ Spike Walls Left Chest",
			"Shadow Temple MQ Bomb Flower Chest",
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

	// v7 : MQ Shadow
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
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 1",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 2",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 3",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 4",
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

	// MQ Spirit
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
			"Spirit Temple MQ Entrance Front Left Chest",
			"Spirit Temple MQ Entrance Back Right Chest",
			"Spirit Temple MQ Entrance Front Right Chest",
			"Spirit Temple MQ Entrance Back Left Chest",
			"Spirit Temple MQ Map Chest",
			"Spirit Temple MQ Map Room Enemy Chest",
			"Spirit Temple MQ Child Climb North Chest",
			"Spirit Temple MQ Child Climb South Chest",
			"Spirit Temple MQ Compass Chest",
			"Spirit Temple MQ Silver Block Hallway Chest",
			"Spirit Temple MQ Sun Block Room Chest",
			"Spirit Temple MQ Child Hammer Switch Chest",
			"Spirit Temple MQ Statue Room Lullaby Chest",
			"Spirit Temple MQ Statue Room Invisible Chest",
			"Spirit Temple MQ Leever Room Chest",
			"Spirit Temple MQ Symphony Room Chest",
			"Spirit Temple MQ Beamos Room Chest",
			"Spirit Temple MQ Chest Switch Chest",
			"Spirit Temple MQ Mirror Puzzle Invisible Chest",
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

	// v7 : MQ Spirit
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
			"Spirit Temple MQ Central Chamber Crate 1",
			"Spirit Temple MQ Central Chamber Crate 2",
			"Spirit Temple MQ Big Mirror Crate 1",
			"Spirit Temple MQ Big Mirror Crate 2",
			"Spirit Temple MQ Big Mirror Crate 3",
			"Spirit Temple MQ Big Mirror Crate 4",
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

	// MQ Ice
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
			"Ice Cavern MQ Map Chest",
			"Ice Cavern MQ Compass Chest",
			"Ice Cavern MQ Iron Boots Chest",
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

	// v7 : MQ Ice
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

	// MQ GTG
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
			"Gerudo Training Ground MQ Lobby Left Chest",
			"Gerudo Training Ground MQ Lobby Right Chest",
			"Gerudo Training Ground MQ First Iron Knuckle Chest",
			"Gerudo Training Ground MQ Before Heavy Block Chest",
			"Gerudo Training Ground MQ Heavy Block Chest",
			"Gerudo Training Ground MQ Eye Statue Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
			"Gerudo Training Ground MQ Second Iron Knuckle Chest",
			"Gerudo Training Ground MQ Flame Circle Chest",
			"Gerudo Training Ground MQ Maze Right Central Chest",
			"Gerudo Training Ground MQ Maze Right Side Chest",
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
			"Gerudo Training Ground MQ Dinolfos Chest",
			"Gerudo Training Ground MQ Hidden Ceiling Chest",
			"Gerudo Training Ground MQ Maze Path First Chest",
			"Gerudo Training Ground MQ Maze Path Third Chest",
			"Gerudo Training Ground MQ Maze Path Second Chest",
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

	// v7 : MQ GTG
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
			"Gerudo Training Ground MQ Maze Crate",
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

	// MQ Ganon
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
			"Ganons Castle MQ Forest Trial Eye Switch Chest",
			"Ganons Castle MQ Forest Trial Frozen Eye Switch Chest",
			"Ganons Castle MQ Water Trial Chest",
			"Ganons Castle MQ Shadow Trial Bomb Flower Chest",
			"Ganons Castle MQ Shadow Trial Eye Switch Chest",
			"Ganons Castle MQ Light Trial Lullaby Chest",
			"Ganons Castle MQ Spirit Trial First Chest",
			"Ganons Castle MQ Spirit Trial Invisible Chest",
			"Ganons Castle MQ Spirit Trial Sun Front Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Right Chest",
			"Ganons Castle MQ Spirit Trial Golden Gauntlets Chest",
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

	// v7 : MQ Ganon
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






	// SANITY CONTEXTS
	{
		// .common precisions :
		// contains : kokiri sword, ocarinas, weird egg,
		//            magic beans, gerudo card, medigoron/salesman,
		// includes : chests, NPC gifts/rewards/minigames, boss reward(stoneMed)
		// (+)        extended frog songs (v7)
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
			"ZR Frogs Zeldas Lullaby", // v7 (frogs)
			"ZR Frogs Eponas Song",    // v7 (frogs)
			"ZR Frogs Sarias Song",    // v7 (frogs)
			"ZR Frogs Suns Song",      // v7 (frogs)
			"ZR Frogs Song of Time",   // v7 (frogs)
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

			// MQ ONLY
			//

			// Deku Tree MQ
			"Deku Tree MQ Map Chest",
			"Deku Tree MQ Slingshot Chest",
			"Deku Tree MQ Slingshot Room Back Chest",
			"Deku Tree MQ Compass Chest",
			"Deku Tree MQ Basement Chest",
			"Deku Tree MQ Before Spinning Log Chest",
			"Deku Tree MQ After Spinning Log Chest",
			// Dodongos Cavern MQ
			"Dodongos Cavern MQ Map Chest",
			"Dodongos Cavern MQ Bomb Bag Chest",
			"Dodongos Cavern MQ Torch Puzzle Room Chest",
			"Dodongos Cavern MQ Larvae Room Chest",
			"Dodongos Cavern MQ Compass Chest",
			"Dodongos Cavern MQ Under Grave Chest",
			// Jabu Jabus Belly MQ
			"Jabu Jabus Belly MQ Map Chest",
			"Jabu Jabus Belly MQ First Room Side Chest",
			"Jabu Jabus Belly MQ Second Room Lower Chest",
			"Jabu Jabus Belly MQ Compass Chest",
			"Jabu Jabus Belly MQ Basement Near Switches Chest",
			"Jabu Jabus Belly MQ Basement Near Vines Chest",
			"Jabu Jabus Belly MQ Boomerang Room Small Chest",
			"Jabu Jabus Belly MQ Boomerang Chest",
			"Jabu Jabus Belly MQ Falling Like Like Room Chest",
			"Jabu Jabus Belly MQ Second Room Upper Chest",
			"Jabu Jabus Belly MQ Near Boss Chest",
			// Bottom of the Well MQ
			"Bottom of the Well MQ Map Chest",
			"Bottom of the Well MQ East Inner Room Freestanding Key",
			"Bottom of the Well MQ Compass Chest",
			"Bottom of the Well MQ Dead Hand Freestanding Key",
			"Bottom of the Well MQ Lens of Truth Chest",

			// Forest Temple MQ
			"Forest Temple MQ First Room Chest",
			"Forest Temple MQ Wolfos Chest",
			"Forest Temple MQ Well Chest",
			"Forest Temple MQ Raised Island Courtyard Lower Chest",
			"Forest Temple MQ Raised Island Courtyard Upper Chest",
			"Forest Temple MQ Boss Key Chest",
			"Forest Temple MQ Redead Chest",
			"Forest Temple MQ Map Chest",
			"Forest Temple MQ Bow Chest",
			"Forest Temple MQ Compass Chest",
			"Forest Temple MQ Falling Ceiling Room Chest",
			"Forest Temple MQ Basement Chest",
			// Fire Temple MQ
			"Fire Temple MQ Map Room Side Chest",
			"Fire Temple MQ Megaton Hammer Chest",
			"Fire Temple MQ Map Chest",
			"Fire Temple MQ Near Boss Chest",
			"Fire Temple MQ Big Lava Room Blocked Door Chest",
			"Fire Temple MQ Boss Key Chest",
			"Fire Temple MQ Lizalfos Maze Side Room Chest",
			"Fire Temple MQ Compass Chest",
			"Fire Temple MQ Lizalfos Maze Upper Chest",
			"Fire Temple MQ Lizalfos Maze Lower Chest",
			"Fire Temple MQ Freestanding Key",
			"Fire Temple MQ Chest On Fire",
			// Water Temple MQ
			"Water Temple MQ Longshot Chest",
			"Water Temple MQ Map Chest",
			"Water Temple MQ Compass Chest",
			"Water Temple MQ Central Pillar Chest",
			"Water Temple MQ Boss Key Chest",
			"Water Temple MQ Freestanding Key",
			// Shadow Temple MQ
			"Shadow Temple MQ Early Gibdos Chest",
			"Shadow Temple MQ Map Chest",
			"Shadow Temple MQ Near Ship Invisible Chest",
			"Shadow Temple MQ Compass Chest",
			"Shadow Temple MQ Hover Boots Chest",
			"Shadow Temple MQ Invisible Blades Invisible Chest",
			"Shadow Temple MQ Invisible Blades Visible Chest",
			"Shadow Temple MQ Beamos Silver Rupees Chest",
			"Shadow Temple MQ Falling Spikes Lower Chest",
			"Shadow Temple MQ Falling Spikes Upper Chest",
			"Shadow Temple MQ Falling Spikes Switch Chest",
			"Shadow Temple MQ Invisible Spikes Chest",
			"Shadow Temple MQ Stalfos Room Chest",
			"Shadow Temple MQ Wind Hint Chest",
			"Shadow Temple MQ After Wind Hidden Chest",
			"Shadow Temple MQ After Wind Enemy Chest",
			"Shadow Temple MQ Boss Key Chest",
			"Shadow Temple MQ Spike Walls Left Chest",
			"Shadow Temple MQ Freestanding Key",
			"Shadow Temple MQ Bomb Flower Chest",
			// Spirit Temple MQ
			"Spirit Temple MQ Entrance Front Left Chest",
			"Spirit Temple MQ Entrance Back Right Chest",
			"Spirit Temple MQ Entrance Front Right Chest",
			"Spirit Temple MQ Entrance Back Left Chest",
			"Spirit Temple MQ Map Chest",
			"Spirit Temple MQ Map Room Enemy Chest",
			"Spirit Temple MQ Child Climb North Chest",
			"Spirit Temple MQ Child Climb South Chest",
			"Spirit Temple MQ Compass Chest",
			"Spirit Temple MQ Silver Block Hallway Chest",
			"Spirit Temple MQ Sun Block Room Chest",
			"Spirit Temple MQ Child Hammer Switch Chest",
			"Spirit Temple MQ Statue Room Lullaby Chest",
			"Spirit Temple MQ Statue Room Invisible Chest",
			"Spirit Temple MQ Leever Room Chest",
			"Spirit Temple MQ Symphony Room Chest",
			"Spirit Temple MQ Beamos Room Chest",
			"Spirit Temple MQ Chest Switch Chest",
			"Spirit Temple MQ Boss Key Chest",
			"Spirit Temple MQ Mirror Puzzle Invisible Chest",
			// Ice Cavern MQ
			"Ice Cavern MQ Map Chest",
			"Ice Cavern MQ Compass Chest",
			"Ice Cavern MQ Freestanding PoH",
			"Ice Cavern MQ Iron Boots Chest",
			// Gerudo Training Ground MQ
			"Gerudo Training Ground MQ Lobby Left Chest",
			"Gerudo Training Ground MQ Lobby Right Chest",
			"Gerudo Training Ground MQ First Iron Knuckle Chest",
			"Gerudo Training Ground MQ Before Heavy Block Chest",
			"Gerudo Training Ground MQ Heavy Block Chest",
			"Gerudo Training Ground MQ Eye Statue Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
			"Gerudo Training Ground MQ Second Iron Knuckle Chest",
			"Gerudo Training Ground MQ Flame Circle Chest",
			"Gerudo Training Ground MQ Maze Right Central Chest",
			"Gerudo Training Ground MQ Maze Right Side Chest",
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
			"Gerudo Training Ground MQ Dinolfos Chest",
			"Gerudo Training Ground MQ Hidden Ceiling Chest",
			"Gerudo Training Ground MQ Maze Path First Chest",
			"Gerudo Training Ground MQ Maze Path Third Chest",
			"Gerudo Training Ground MQ Maze Path Second Chest",
			// Ganons Castle MQ
			"Ganons Castle MQ Forest Trial Freestanding Key",
			"Ganons Castle MQ Forest Trial Eye Switch Chest",
			"Ganons Castle MQ Forest Trial Frozen Eye Switch Chest",
			"Ganons Castle MQ Water Trial Chest",
			"Ganons Castle MQ Shadow Trial Bomb Flower Chest",
			"Ganons Castle MQ Shadow Trial Eye Switch Chest",
			"Ganons Castle MQ Light Trial Lullaby Chest",
			"Ganons Castle MQ Spirit Trial First Chest",
			"Ganons Castle MQ Spirit Trial Invisible Chest",
			"Ganons Castle MQ Spirit Trial Sun Front Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Right Chest",
			"Ganons Castle MQ Spirit Trial Golden Gauntlets Chest",

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

			// MQ ONLY
			//

			// Bottom of the Well MQ
			"Bottom of the Well MQ East Inner Room Freestanding Key",
			"Bottom of the Well MQ Dead Hand Freestanding Key",

			// Forest Temple MQ
			"Forest Temple MQ First Room Chest",
			"Forest Temple MQ Wolfos Chest",
			"Forest Temple MQ Well Chest",
			"Forest Temple MQ Raised Island Courtyard Lower Chest",
			"Forest Temple MQ Raised Island Courtyard Upper Chest",
			"Forest Temple MQ Redead Chest",
			// Fire Temple MQ
			"Fire Temple MQ Near Boss Chest",
			"Fire Temple MQ Big Lava Room Blocked Door Chest",
			"Fire Temple MQ Lizalfos Maze Side Room Chest",
			"Fire Temple MQ Freestanding Key",
			"Fire Temple MQ Chest On Fire",
			// Water Temple MQ
			"Water Temple MQ Central Pillar Chest",
			"Water Temple MQ Freestanding Key",
			// Shadow Temple MQ
			"Shadow Temple MQ Early Gibdos Chest",
			"Shadow Temple MQ Near Ship Invisible Chest",
			"Shadow Temple MQ Invisible Blades Invisible Chest",
			"Shadow Temple MQ Falling Spikes Switch Chest",
			"Shadow Temple MQ Wind Hint Chest",
			"Shadow Temple MQ Freestanding Key",
			// Spirit Temple MQ
			"Spirit Temple MQ Entrance Front Right Chest",
			"Spirit Temple MQ Entrance Back Left Chest",
			"Spirit Temple MQ Map Room Enemy Chest",
			"Spirit Temple MQ Child Climb South Chest",
			"Spirit Temple MQ Silver Block Hallway Chest",
			"Spirit Temple MQ Child Hammer Switch Chest",
			"Spirit Temple MQ Mirror Puzzle Invisible Chest",
			// Gerudo Training Ground MQ
			"Gerudo Training Ground MQ Flame Circle Chest",
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
			"Gerudo Training Ground MQ Dinolfos Chest",
			// Ganons Castle MQ
			"Ganons Castle MQ Forest Trial Freestanding Key",
			"Ganons Castle MQ Shadow Trial Eye Switch Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
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

			// MQ ONLY
			//

			// Deku Tree MQ
			"Deku Tree MQ Map Chest",
			"Deku Tree MQ Compass Chest",
			// Dodongos Cavern MQ
			"Dodongos Cavern MQ Map Chest",
			"Dodongos Cavern MQ Compass Chest",
			// Jabu Jabus Belly MQ
			"Jabu Jabus Belly MQ Map Chest",
			"Jabu Jabus Belly MQ Compass Chest",
			// Bottom of the Well MQ
			"Bottom of the Well MQ Map Chest",
			"Bottom of the Well MQ Compass Chest",

			// Forest Temple MQ
			"Forest Temple MQ Map Chest",
			"Forest Temple MQ Compass Chest",
			// Fire Temple MQ
			"Fire Temple MQ Map Chest",
			"Fire Temple MQ Compass Chest",
			// Water Temple MQ
			"Water Temple MQ Map Chest",
			"Water Temple MQ Compass Chest",
			// Shadow Temple MQ
			"Shadow Temple MQ Map Chest",
			"Shadow Temple MQ Compass Chest",
			// Spirit Temple MQ
			"Spirit Temple MQ Map Chest",
			"Spirit Temple MQ Compass Chest",
			// Ice Cavern MQ
			"Ice Cavern MQ Map Chest",
			"Ice Cavern MQ Compass Chest",
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

			// MQ ONLY
			//

			// Forest Temple MQ
			"Forest Temple MQ Boss Key Chest",
			// Fire Temple MQ
			"Fire Temple MQ Boss Key Chest",
			// Water Temple MQ
			"Water Temple MQ Boss Key Chest",
			// Shadow Temple MQ
			"Shadow Temple MQ Boss Key Chest",
			// Spirit Temple MQ
			"Spirit Temple MQ Boss Key Chest",
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

			// MQ ONLY
			//

			// minidungeon reward
			"Bottom of the Well MQ Lens of Truth Chest",
			"Ice Cavern MQ Iron Boots Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
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

			// MQ ONLY
			//

			// minidungeon reward
			"Bottom of the Well MQ Lens of Truth Chest",
			"Ice Cavern MQ Iron Boots Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
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
		masterquest : [
			// Deku Tree MQ ONLY

			// Deku Tree MQ
			"Deku Tree MQ Map Chest",
			"Deku Tree MQ Slingshot Chest",
			"Deku Tree MQ Slingshot Room Back Chest",
			"Deku Tree MQ Compass Chest",
			"Deku Tree MQ Basement Chest",
			"Deku Tree MQ Before Spinning Log Chest",
			"Deku Tree MQ After Spinning Log Chest",

			// Deku Tree MQ scrub
			"Deku Tree MQ Deku Scrub",

			// Deku Tree MQ GS
			"Deku Tree MQ GS Lobby",
			"Deku Tree MQ GS Compass Room",
			"Deku Tree MQ GS Basement Graves Room",
			"Deku Tree MQ GS Basement Back Room",

			// v7 sanities

			// Deku Tree MQ Freestanding
			"Deku Tree MQ Lower Lobby Recovery Heart",
			"Deku Tree MQ Near Compass Room Recovery Heart",
			"Deku Tree MQ Compass Room Recovery Heart",
			"Deku Tree MQ Basement Recovery Heart 1",
			"Deku Tree MQ Basement Recovery Heart 2",
			"Deku Tree MQ Basement Recovery Heart 3",
			"Deku Tree MQ Slingshot Room Recovery Heart",

			// Deku Tree MQ Crate
			"Deku Tree MQ Lobby Crate",
			"Deku Tree MQ Slingshot Room Crate 1",
			"Deku Tree MQ Slingshot Room Crate 2",


			// Dodongos Cavern MQ ONLY

			// Dodongos Cavern MQ
			"Dodongos Cavern MQ Map Chest",
			"Dodongos Cavern MQ Bomb Bag Chest",
			"Dodongos Cavern MQ Torch Puzzle Room Chest",
			"Dodongos Cavern MQ Larvae Room Chest",
			"Dodongos Cavern MQ Compass Chest",
			"Dodongos Cavern MQ Under Grave Chest",

			// Dodongos Cavern MQ scrub
			"Dodongos Cavern MQ Deku Scrub Lobby Front",
			"Dodongos Cavern MQ Deku Scrub Lobby Rear",
			"Dodongos Cavern MQ Deku Scrub Side Room Near Lower Lizalfos",
			"Dodongos Cavern MQ Deku Scrub Staircase",

			// Dodongos Cavern MQ GS
			"Dodongos Cavern MQ GS Scrub Room",
			"Dodongos Cavern MQ GS Larvae Room",
			"Dodongos Cavern MQ GS Lizalfos Room",
			"Dodongos Cavern MQ GS Song of Time Block Room",
			"Dodongos Cavern MQ GS Back Area",

			// v7 sanities

			// Dodongos Cavern MQ Freestanding
			"Dodongos Cavern MQ Torch Puzzle Room Recovery Heart",

			// Dodongos Cavern MQ Pot
			"Dodongos Cavern MQ Right Side Pot 1",
			"Dodongos Cavern MQ Right Side Pot 2",
			"Dodongos Cavern MQ Right Side Pot 3",
			"Dodongos Cavern MQ Right Side Pot 4",
			"Dodongos Cavern MQ Staircase Pot 1",
			"Dodongos Cavern MQ Staircase Pot 2",
			"Dodongos Cavern MQ Staircase Pot 3",
			"Dodongos Cavern MQ Staircase Pot 4",
			"Dodongos Cavern MQ Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ Upper Lizalfos Pot 3",
			"Dodongos Cavern MQ Upper Lizalfos Pot 4",
			"Dodongos Cavern MQ Poes Room Pot 1",
			"Dodongos Cavern MQ Poes Room Pot 2",
			"Dodongos Cavern MQ Poes Room Pot 3",
			"Dodongos Cavern MQ Poes Room Pot 4",
			"Dodongos Cavern MQ Room Before Boss Pot 1",
			"Dodongos Cavern MQ Room Before Boss Pot 2",
			"Dodongos Cavern MQ Armos Army Room Upper Pot",
			"Dodongos Cavern MQ Armos Army Room Pot 1",
			"Dodongos Cavern MQ Armos Army Room Pot 2",
			"Dodongos Cavern MQ Torch Puzzle Room Pot Pillar",
			"Dodongos Cavern MQ Torch Puzzle Room Pot Corner",
			"Dodongos Cavern MQ Before Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ Before Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ After Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ After Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ Back Poe Room Pot 1",
			"Dodongos Cavern MQ Back Poe Room Pot 2",

			// Dodongos Cavern MQ Crate
			"Dodongos Cavern MQ Staircase Crate Bottom Left",
			"Dodongos Cavern MQ Staircase Crate Bottom Right",
			"Dodongos Cavern MQ Staircase Crate Mid Left",
			"Dodongos Cavern MQ Staircase Crate Top Left",
			"Dodongos Cavern MQ Staircase Crate Mid Right",
			"Dodongos Cavern MQ Staircase Crate Top Right",
			"Dodongos Cavern MQ Poes Room Crate 5",
			"Dodongos Cavern MQ Poes Room Crate 6",
			"Dodongos Cavern MQ Poes Room Crate 1",
			"Dodongos Cavern MQ Poes Room Crate 2",
			"Dodongos Cavern MQ Poes Room Crate 3",
			"Dodongos Cavern MQ Poes Room Crate 4",
			"Dodongos Cavern MQ Poes Room Crate Near Bomb Flower",
			"Dodongos Cavern MQ Poes Room Crate 7",
			"Dodongos Cavern MQ Larvae Room Crate 1",
			"Dodongos Cavern MQ Larvae Room Crate 2",
			"Dodongos Cavern MQ Larvae Room Crate 3",
			"Dodongos Cavern MQ Larvae Room Crate 4",
			"Dodongos Cavern MQ Larvae Room Crate 5",
			"Dodongos Cavern MQ Larvae Room Crate 6",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 1",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 2",


			// Jabu Jabus Belly MQ ONLY

			// Jabu Jabus Belly MQ
			"Jabu Jabus Belly MQ Map Chest",
			"Jabu Jabus Belly MQ First Room Side Chest",
			"Jabu Jabus Belly MQ Second Room Lower Chest",
			"Jabu Jabus Belly MQ Compass Chest",
			"Jabu Jabus Belly MQ Basement Near Switches Chest",
			"Jabu Jabus Belly MQ Basement Near Vines Chest",
			"Jabu Jabus Belly MQ Boomerang Room Small Chest",
			"Jabu Jabus Belly MQ Boomerang Chest",
			"Jabu Jabus Belly MQ Falling Like Like Room Chest",
			"Jabu Jabus Belly MQ Second Room Upper Chest",
			"Jabu Jabus Belly MQ Near Boss Chest",

			// Jabu Jabus Belly MQ cow
			"Jabu Jabus Belly MQ Cow",

			// Jabu Jabus Belly MQ GS
			"Jabu Jabus Belly MQ GS Boomerang Chest Room",
			"Jabu Jabus Belly MQ GS Tailpasaran Room",
			"Jabu Jabus Belly MQ GS Invisible Enemies Room",
			"Jabu Jabus Belly MQ GS Near Boss",

			// v7 sanities

			// Jabu Jabus Belly MQ Freestanding
			"Jabu Jabus Belly MQ Underwater Green Rupee 1",
			"Jabu Jabus Belly MQ Underwater Green Rupee 2",
			"Jabu Jabus Belly MQ Underwater Green Rupee 3",
			"Jabu Jabus Belly MQ Recovery Heart 1",
			"Jabu Jabus Belly MQ Recovery Heart 2",

			// Jabu Jabus Belly MQ Pot
			"Jabu Jabus Belly MQ First Room Pot 1",
			"Jabu Jabus Belly MQ First Room Pot 2",
			"Jabu Jabus Belly MQ Elevator Room Pot 1",
			"Jabu Jabus Belly MQ Elevator Room Pot 2",
			"Jabu Jabus Belly MQ Falling Like Like Room Pot 1",
			"Jabu Jabus Belly MQ Falling Like Like Room Pot 2",
			"Jabu Jabus Belly MQ Boomerang Room Pot 1",
			"Jabu Jabus Belly MQ Boomerang Room Pot 2",


			// Bottom of the Well MQ ONLY

			// Bottom of the Well MQ
			"Bottom of the Well MQ Map Chest",
			"Bottom of the Well MQ East Inner Room Freestanding Key",
			"Bottom of the Well MQ Compass Chest",
			"Bottom of the Well MQ Dead Hand Freestanding Key",
			"Bottom of the Well MQ Lens of Truth Chest",

			// Bottom of the Well MQ GS
			"Bottom of the Well MQ GS Coffin Room",
			"Bottom of the Well MQ GS West Inner Room",
			"Bottom of the Well MQ GS Basement",

			// v7 sanities

			// Bottom of the Well MQ Freestanding
			"Bottom of the Well MQ Bombable Recovery Heart 1",
			"Bottom of the Well MQ Bombable Recovery Heart 2",
			"Bottom of the Well MQ Basement Recovery Heart 1",
			"Bottom of the Well MQ Basement Recovery Heart 2",
			"Bottom of the Well MQ Basement Recovery Heart 3",
			"Bottom of the Well MQ Coffin Recovery Heart 1",
			"Bottom of the Well MQ Coffin Recovery Heart 2",

			// Bottom of the Well MQ Pot
			"Bottom of the Well MQ Center Room Right Pot 1",
			"Bottom of the Well MQ Center Room Right Pot 2",
			"Bottom of the Well MQ Center Room Right Pot 3",
			"Bottom of the Well MQ East Inner Room Pot 1",
			"Bottom of the Well MQ East Inner Room Pot 2",
			"Bottom of the Well MQ East Inner Room Pot 3",


			// Forest Temple MQ ONLY

			// Forest Temple MQ
			"Forest Temple MQ First Room Chest",
			"Forest Temple MQ Wolfos Chest",
			"Forest Temple MQ Well Chest",
			"Forest Temple MQ Raised Island Courtyard Lower Chest",
			"Forest Temple MQ Raised Island Courtyard Upper Chest",
			"Forest Temple MQ Boss Key Chest",
			"Forest Temple MQ Redead Chest",
			"Forest Temple MQ Map Chest",
			"Forest Temple MQ Bow Chest",
			"Forest Temple MQ Compass Chest",
			"Forest Temple MQ Falling Ceiling Room Chest",
			"Forest Temple MQ Basement Chest",

			// Forest Temple MQ GS
			"Forest Temple MQ GS First Hallway",
			"Forest Temple MQ GS Raised Island Courtyard",
			"Forest Temple MQ GS Level Island Courtyard",
			"Forest Temple MQ GS Well",
			"Forest Temple MQ GS Block Push Room",

			// v7 sanities

			// Forest Temple MQ Freestanding
			"Forest Temple MQ Courtyard Recovery Heart 1",
			"Forest Temple MQ Courtyard Recovery Heart 2",
			"Forest Temple MQ Courtyard Recovery Heart 3",
			"Forest Temple MQ Well Recovery Heart 1",
			"Forest Temple MQ Well Recovery Heart 2",
			"Forest Temple MQ Well Recovery Heart 3",

			// Forest Temple MQ Pot
			"Forest Temple MQ Center Room Right Pot 1",
			"Forest Temple MQ Center Room Right Pot 2",
			"Forest Temple MQ Center Room Right Pot 3",
			"Forest Temple MQ Center Room Left Pot 1",
			"Forest Temple MQ Center Room Left Pot 2",
			"Forest Temple MQ Center Room Left Pot 3",
			"Forest Temple MQ Wolfos Room Pot",
			"Forest Temple MQ Upper Stalfos Pot 1",
			"Forest Temple MQ Upper Stalfos Pot 2",
			"Forest Temple MQ Upper Stalfos Pot 3",
			"Forest Temple MQ Upper Stalfos Pot 4",
			"Forest Temple MQ Blue Poe Room Pot 1",
			"Forest Temple MQ Blue Poe Room Pot 2",
			"Forest Temple MQ Blue Poe Room Pot 3",
			"Forest Temple MQ Green Poe Room Pot 1",
			"Forest Temple MQ Green Poe Room Pot 2",
			"Forest Temple MQ Basement Pot 1",
			"Forest Temple MQ Basement Pot 2",
			"Forest Temple MQ Basement Pot 3",
			"Forest Temple MQ Basement Pot 4",

			// Forest Temple MQ Crate
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 1",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 2",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 3",


			// Fire Temple MQ ONLY

			// Fire Temple MQ
			"Fire Temple MQ Map Room Side Chest",
			"Fire Temple MQ Megaton Hammer Chest",
			"Fire Temple MQ Map Chest",
			"Fire Temple MQ Near Boss Chest",
			"Fire Temple MQ Big Lava Room Blocked Door Chest",
			"Fire Temple MQ Boss Key Chest",
			"Fire Temple MQ Lizalfos Maze Side Room Chest",
			"Fire Temple MQ Compass Chest",
			"Fire Temple MQ Lizalfos Maze Upper Chest",
			"Fire Temple MQ Lizalfos Maze Lower Chest",
			"Fire Temple MQ Freestanding Key",
			"Fire Temple MQ Chest On Fire",

			// Fire Temple MQ GS
			"Fire Temple MQ GS Big Lava Room Open Door",
			"Fire Temple MQ GS Skull On Fire",
			"Fire Temple MQ GS Flame Maze Center",
			"Fire Temple MQ GS Flame Maze Side Room",
			"Fire Temple MQ GS Above Flame Maze",

			// v7 sanities

			// Fire Temple MQ Freestanding
			"Fire Temple MQ Elevator Room Recovery Heart 1",
			"Fire Temple MQ Elevator Room Recovery Heart 2",
			"Fire Temple MQ Elevator Room Recovery Heart 3",

			// Fire Temple MQ Pot
			"Fire Temple MQ First Room Pot 1",
			"Fire Temple MQ First Room Pot 2",
			"Fire Temple MQ Big Lava Room Left Pot",
			"Fire Temple MQ Big Lava Room Right Pot",
			"Fire Temple MQ Big Lava Room Alcove Pot",
			"Fire Temple MQ Near Boss Pot 1",
			"Fire Temple MQ Near Boss Pot 2",
			"Fire Temple MQ Narrow Path Room Pot 1",
			"Fire Temple MQ Narrow Path Room Pot 2",
			"Fire Temple MQ Flame Maze Right Upper Pot 1",
			"Fire Temple MQ Flame Maze Right Upper Pot 2",
			"Fire Temple MQ Flame Maze Right Pot 1",
			"Fire Temple MQ Flame Maze Right Pot 2",
			"Fire Temple MQ Flame Maze Left Pot 1",
			"Fire Temple MQ Shoot Torch On Wall Room Pot 1",
			"Fire Temple MQ Shoot Torch On Wall Room Pot 2",
			"Fire Temple MQ Iron Knuckle Room Pot 1",
			"Fire Temple MQ Iron Knuckle Room Pot 2",
			"Fire Temple MQ Iron Knuckle Room Pot 3",
			"Fire Temple MQ Iron Knuckle Room Pot 4",
			"Fire Temple MQ Boss Key Chest Room Pot",

			// Fire Temple MQ Crate
			"Fire Temple MQ Near Boss Left Crate 1",
			"Fire Temple MQ Near Boss Left Crate 2",
			"Fire Temple MQ Near Boss Right Lower Crate 1",
			"Fire Temple MQ Near Boss Right Lower Crate 2",
			"Fire Temple MQ Near Boss Right Mid Crate",
			"Fire Temple MQ Near Boss Right Upper Crate",
			"Fire Temple MQ Shortcut Crate 1",
			"Fire Temple MQ Shortcut Crate 2",
			"Fire Temple MQ Shortcut Crate 3",
			"Fire Temple MQ Shortcut Crate 4",
			"Fire Temple MQ Shortcut Crate 5",
			"Fire Temple MQ Shortcut Crate 6",
			"Fire Temple MQ Lower Lizalfos Maze Crate 1",
			"Fire Temple MQ Lower Lizalfos Maze Crate 2",
			"Fire Temple MQ Lower Lizalfos Maze Crate 3",
			"Fire Temple MQ Upper Lizalfos Maze Crate 1",
			"Fire Temple MQ Upper Lizalfos Maze Crate 2",
			"Fire Temple MQ Upper Lizalfos Maze Crate 3",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 2",
			"Fire Temple MQ Shoot Torch On Wall Room Center Crate",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 2",


			// Water Temple MQ ONLY

			// Water Temple MQ
			"Water Temple MQ Longshot Chest",
			"Water Temple MQ Map Chest",
			"Water Temple MQ Compass Chest",
			"Water Temple MQ Central Pillar Chest",
			"Water Temple MQ Boss Key Chest",
			"Water Temple MQ Freestanding Key",

			// Water Temple MQ GS
			"Water Temple MQ GS Lizalfos Hallway",
			"Water Temple MQ GS Before Upper Water Switch",
			"Water Temple MQ GS River",
			"Water Temple MQ GS Freestanding Key Area",
			"Water Temple MQ GS Triple Wall Torch",

			// v7 sanities

			// Water Temple MQ Pot
			"Water Temple MQ Triple Wall Torch Pot 1",
			"Water Temple MQ Triple Wall Torch Pot 2",
			"Water Temple MQ Triple Wall Torch Pot 3",
			"Water Temple MQ Triple Wall Torch Pot 4",
			"Water Temple MQ Storage Room Pot 1",
			"Water Temple MQ Storage Room Pot 2",
			"Water Temple MQ Storage Room Pot 3",
			"Water Temple MQ Before Dark Link Top Pot 1",
			"Water Temple MQ Before Dark Link Top Pot 2",
			"Water Temple MQ Before Dark Link Lower Pot",
			"Water Temple MQ Room After Dark Link Pot",
			"Water Temple MQ Boss Key Chest Room Pot",
			"Water Temple MQ Before Upper Water Switch Pot 1",
			"Water Temple MQ Before Upper Water Switch Pot 2",
			"Water Temple MQ Before Upper Water Switch Pot 3",
			"Water Temple MQ Dodongo Room Pot 1",
			"Water Temple MQ Dodongo Room Pot 2",
			"Water Temple MQ Freestanding Key Room Pot",
			"Water Temple MQ L1 Torch Pot 1",
			"Water Temple MQ L1 Torch Pot 2",
			"Water Temple MQ Lizalfos Hallway Pot 1",
			"Water Temple MQ Lizalfos Hallway Pot 2",
			"Water Temple MQ Lizalfos Hallway Pot 3",
			"Water Temple MQ Lizalfos Hallway Gate Pot 1",
			"Water Temple MQ Lizalfos Hallway Gate Pot 2",
			"Water Temple MQ River Pot",

			// Water Temple MQ Crate
			"Water Temple MQ Central Pillar Upper Crate 1",
			"Water Temple MQ Central Pillar Upper Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 1",
			"Water Temple MQ Central Pillar Lower Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 3",
			"Water Temple MQ Central Pillar Lower Crate 4",
			"Water Temple MQ Central Pillar Lower Crate 5",
			"Water Temple MQ Central Pillar Lower Crate 6",
			"Water Temple MQ Central Pillar Lower Crate 7",
			"Water Temple MQ Central Pillar Lower Crate 8",
			"Water Temple MQ Central Pillar Lower Crate 9",
			"Water Temple MQ Central Pillar Lower Crate 10",
			"Water Temple MQ Central Pillar Lower Crate 11",
			"Water Temple MQ Central Pillar Lower Crate 12",
			"Water Temple MQ Central Pillar Lower Crate 13",
			"Water Temple MQ Central Pillar Lower Crate 14",
			"Water Temple MQ Triple Wall Torch Submerged Crate 1",
			"Water Temple MQ Triple Wall Torch Submerged Crate 2",
			"Water Temple MQ Triple Wall Torch Submerged Crate 3",
			"Water Temple MQ Triple Wall Torch Submerged Crate 4",
			"Water Temple MQ Triple Wall Torch Submerged Crate 5",
			"Water Temple MQ Triple Wall Torch Submerged Crate 6",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 1",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 2",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 3",
			"Water Temple MQ Storage Room Crate 1",
			"Water Temple MQ Storage Room Crate 2",
			"Water Temple MQ Storage Room Crate 3",
			"Water Temple MQ Storage Room Crate 4",
			"Water Temple MQ Storage Room Crate 5",
			"Water Temple MQ Storage Room Crate 6",
			"Water Temple MQ Storage Room Crate 7",
			"Water Temple MQ Dragon Statue By Torches Crate 1",
			"Water Temple MQ Dragon Statue By Torches Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 1",
			"Water Temple MQ Dragon Statue Submerged Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 3",
			"Water Temple MQ Dragon Statue Submerged Crate 4",
			"Water Temple MQ Dragon Statue Near Door Crate 1",
			"Water Temple MQ Dragon Statue Near Door Crate 2",
			"Water Temple MQ Boss Key Chest Room Upper Crate",
			"Water Temple MQ Boss Key Chest Room Lower Crate 1",
			"Water Temple MQ Boss Key Chest Room Lower Crate 2",
			"Water Temple MQ Boss Key Chest Room Lower Crate 3",
			"Water Temple MQ Boss Key Chest Room Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 1",
			"Water Temple MQ Before Upper Water Switch Lower Crate 2",
			"Water Temple MQ Before Upper Water Switch Lower Crate 3",
			"Water Temple MQ Before Upper Water Switch Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 5",
			"Water Temple MQ Before Upper Water Switch Lower Crate 6",
			"Water Temple MQ Before Upper Water Switch Upper Crate 1",
			"Water Temple MQ Before Upper Water Switch Upper Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 1",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 3",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 4",
			"Water Temple MQ Freestanding Key Area Front Crate 1",
			"Water Temple MQ Freestanding Key Area Front Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 1",
			"Water Temple MQ Freestanding Key Area Submerged Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 3",
			"Water Temple MQ Freestanding Key Area Submerged Crate 4",
			"Water Temple MQ Freestanding Key Area Submerged Crate 5",
			"Water Temple MQ Freestanding Key Area Submerged Crate 6",
			"Water Temple MQ Dodongo Room Lower Crate 1",
			"Water Temple MQ Dodongo Room Lower Crate 2",
			"Water Temple MQ Dodongo Room Lower Crate 3",
			"Water Temple MQ Dodongo Room Upper Crate",
			"Water Temple MQ Dodongo Room Hall Crate",
			"Water Temple MQ Freestanding Key Room Crate 1",
			"Water Temple MQ Freestanding Key Room Crate 2",
			"Water Temple MQ Freestanding Key Room Crate 3",
			"Water Temple MQ Freestanding Key Room Crate 4",
			"Water Temple MQ Freestanding Key Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Gate Crate 1",
			"Water Temple MQ Lizalfos Hallway Gate Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 1",
			"Water Temple MQ Lizalfos Hallway Room Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 3",
			"Water Temple MQ Lizalfos Hallway Room Crate 4",
			"Water Temple MQ Lizalfos Hallway Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Hall Crate 1",
			"Water Temple MQ Lizalfos Hallway Hall Crate 2",
			"Water Temple MQ Lizalfos Hallway Hall Crate 3",


			// Shadow Temple MQ ONLY

			// Shadow Temple MQ
			"Shadow Temple MQ Early Gibdos Chest",
			"Shadow Temple MQ Map Chest",
			"Shadow Temple MQ Near Ship Invisible Chest",
			"Shadow Temple MQ Compass Chest",
			"Shadow Temple MQ Hover Boots Chest",
			"Shadow Temple MQ Invisible Blades Invisible Chest",
			"Shadow Temple MQ Invisible Blades Visible Chest",
			"Shadow Temple MQ Beamos Silver Rupees Chest",
			"Shadow Temple MQ Falling Spikes Lower Chest",
			"Shadow Temple MQ Falling Spikes Upper Chest",
			"Shadow Temple MQ Falling Spikes Switch Chest",
			"Shadow Temple MQ Invisible Spikes Chest",
			"Shadow Temple MQ Stalfos Room Chest",
			"Shadow Temple MQ Wind Hint Chest",
			"Shadow Temple MQ After Wind Hidden Chest",
			"Shadow Temple MQ After Wind Enemy Chest",
			"Shadow Temple MQ Boss Key Chest",
			"Shadow Temple MQ Spike Walls Left Chest",
			"Shadow Temple MQ Freestanding Key",
			"Shadow Temple MQ Bomb Flower Chest",

			// Shadow Temple MQ GS
			"Shadow Temple MQ GS Falling Spikes Room",
			"Shadow Temple MQ GS Wind Hint Room",
			"Shadow Temple MQ GS After Wind",
			"Shadow Temple MQ GS After Ship",
			"Shadow Temple MQ GS Near Boss",

			// v7 sanities

			// Shadow Temple MQ Freestanding
			"Shadow Temple MQ Invisible Blades Recovery Heart 1",
			"Shadow Temple MQ Invisible Blades Recovery Heart 2",
			"Shadow Temple MQ Before Boat Recovery Heart 1",
			"Shadow Temple MQ Before Boat Recovery Heart 2",
			"Shadow Temple MQ After Boat Upper Recovery Heart 1",
			"Shadow Temple MQ After Boat Upper Recovery Heart 2",
			"Shadow Temple MQ After Boat Lower Recovery Heart",
			"Shadow Temple MQ 3 Spinning Pots Rupee 1",
			"Shadow Temple MQ 3 Spinning Pots Rupee 2",
			"Shadow Temple MQ 3 Spinning Pots Rupee 3",
			"Shadow Temple MQ 3 Spinning Pots Rupee 4",
			"Shadow Temple MQ 3 Spinning Pots Rupee 5",
			"Shadow Temple MQ 3 Spinning Pots Rupee 6",
			"Shadow Temple MQ 3 Spinning Pots Rupee 7",
			"Shadow Temple MQ 3 Spinning Pots Rupee 8",
			"Shadow Temple MQ 3 Spinning Pots Rupee 9",

			// Shadow Temple MQ Pot
			"Shadow Temple MQ Whispering Walls Pot 1",
			"Shadow Temple MQ Whispering Walls Pot 2",
			"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 1",
			"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 2",
			"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 1",
			"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 2",
			"Shadow Temple MQ Compass Room Pot 1",
			"Shadow Temple MQ Compass Room Pot 2",
			"Shadow Temple MQ Falling Spikes Lower Pot 1",
			"Shadow Temple MQ Falling Spikes Lower Pot 2",
			"Shadow Temple MQ Falling Spikes Upper Pot 1",
			"Shadow Temple MQ Falling Spikes Upper Pot 2",
			"Shadow Temple MQ After Wind Pot 1",
			"Shadow Temple MQ After Wind Pot 2",
			"Shadow Temple MQ After Wind Flying Pot 1",
			"Shadow Temple MQ After Wind Flying Pot 2",
			"Shadow Temple MQ After Boat Pot 1",
			"Shadow Temple MQ After Boat Pot 2",
			"Shadow Temple MQ Near Boss Pot 1",
			"Shadow Temple MQ Near Boss Pot 2",
			"Shadow Temple MQ Bomb Flower Room Pot 1",
			"Shadow Temple MQ Bomb Flower Room Pot 2",
			"Shadow Temple MQ Spike Walls Pot",

			// Shadow Temple MQ Crate
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 1",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 2",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 3",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 4",


			// Spirit Temple MQ ONLY

			// Spirit Temple MQ
			"Spirit Temple MQ Entrance Front Left Chest",
			"Spirit Temple MQ Entrance Back Right Chest",
			"Spirit Temple MQ Entrance Front Right Chest",
			"Spirit Temple MQ Entrance Back Left Chest",
			"Spirit Temple MQ Map Chest",
			"Spirit Temple MQ Map Room Enemy Chest",
			"Spirit Temple MQ Child Climb North Chest",
			"Spirit Temple MQ Child Climb South Chest",
			"Spirit Temple MQ Compass Chest",
			"Spirit Temple MQ Silver Block Hallway Chest",
			"Spirit Temple MQ Sun Block Room Chest",
			"Spirit Temple MQ Child Hammer Switch Chest",
			"Spirit Temple MQ Statue Room Lullaby Chest",
			"Spirit Temple MQ Statue Room Invisible Chest",
			"Spirit Temple MQ Leever Room Chest",
			"Spirit Temple MQ Symphony Room Chest",
			"Spirit Temple MQ Beamos Room Chest",
			"Spirit Temple MQ Chest Switch Chest",
			"Spirit Temple MQ Boss Key Chest",
			"Spirit Temple MQ Mirror Puzzle Invisible Chest",

			// Spirit Temple MQ GS
			"Spirit Temple MQ GS Sun Block Room",
			"Spirit Temple MQ GS Leever Room",
			"Spirit Temple MQ GS Symphony Room",
			"Spirit Temple MQ GS Nine Thrones Room West",
			"Spirit Temple MQ GS Nine Thrones Room North",

			// v7 sanities

			// Spirit Temple MQ Freestanding
			"Spirit Temple MQ Child Recovery Heart 1",
			"Spirit Temple MQ Child Recovery Heart 2",

			// Spirit Temple MQ Pot
			"Spirit Temple MQ Lobby Pot 1",
			"Spirit Temple MQ Lobby Pot 2",
			"Spirit Temple MQ Lobby Pot 3",
			"Spirit Temple MQ Lobby Pot 4",
			"Spirit Temple MQ Child Torch Slugs Room Pot",
			"Spirit Temple MQ Child 3 Gibdo Room Pot 1",
			"Spirit Temple MQ Child 3 Gibdo Room Pot 2",
			"Spirit Temple MQ Child Stalfos Fight Pot 1",
			"Spirit Temple MQ Child Stalfos Fight Pot 2",
			"Spirit Temple MQ Child Stalfos Fight Pot 3",
			"Spirit Temple MQ Child Climb Pot",
			"Spirit Temple MQ Central Chamber Floor Pot 1",
			"Spirit Temple MQ Central Chamber Floor Pot 2",
			"Spirit Temple MQ Central Chamber Floor Pot 3",
			"Spirit Temple MQ Central Chamber Top Left Pot (Left)",
			"Spirit Temple MQ Central Chamber Top Left Pot (Right)",
			"Spirit Temple MQ Sun Block Room Pot 1",
			"Spirit Temple MQ Sun Block Room Pot 2",
			"Spirit Temple MQ Below 4 Wallmasters Pot 1",
			"Spirit Temple MQ Below 4 Wallmasters Pot 2",
			"Spirit Temple MQ Shifting Wall Pot 1",
			"Spirit Temple MQ Shifting Wall Pot 2",
			"Spirit Temple MQ After Shifting Wall Room Pot 1",
			"Spirit Temple MQ After Shifting Wall Room Pot 2",
			"Spirit Temple MQ Big Mirror Pot 1",
			"Spirit Temple MQ Big Mirror Pot 2",
			"Spirit Temple MQ Big Mirror Pot 3",
			"Spirit Temple MQ Big Mirror Pot 4",

			// Spirit Temple MQ Crate
			"Spirit Temple MQ Central Chamber Crate 1",
			"Spirit Temple MQ Central Chamber Crate 2",
			"Spirit Temple MQ Big Mirror Crate 1",
			"Spirit Temple MQ Big Mirror Crate 2",
			"Spirit Temple MQ Big Mirror Crate 3",
			"Spirit Temple MQ Big Mirror Crate 4",


			// Ice Cavern MQ ONLY

			// Ice Cavern MQ
			"Ice Cavern MQ Map Chest",
			"Ice Cavern MQ Compass Chest",
			"Ice Cavern MQ Freestanding PoH",
			"Ice Cavern MQ Iron Boots Chest",

			// Ice Cavern MQ GS
			"Ice Cavern MQ GS Red Ice",
			"Ice Cavern MQ GS Ice Block",
			"Ice Cavern MQ GS Scarecrow",

			// v7 sanities

			// Ice Cavern MQ Pot
			"Ice Cavern MQ First Hall Pot",
			"Ice Cavern MQ Tektite Room Pot 1",
			"Ice Cavern MQ Tektite Room Pot 2",
			"Ice Cavern MQ Center Room Pot 1",
			"Ice Cavern MQ Center Room Pot 2",
			"Ice Cavern MQ Near End Pot",
			"Ice Cavern MQ Compass Room Pot 1",
			"Ice Cavern MQ Compass Room Pot 2",


			// Gerudo Training Ground MQ ONLY

			// Gerudo Training Ground MQ
			"Gerudo Training Ground MQ Lobby Left Chest",
			"Gerudo Training Ground MQ Lobby Right Chest",
			"Gerudo Training Ground MQ First Iron Knuckle Chest",
			"Gerudo Training Ground MQ Before Heavy Block Chest",
			"Gerudo Training Ground MQ Heavy Block Chest",
			"Gerudo Training Ground MQ Eye Statue Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
			"Gerudo Training Ground MQ Second Iron Knuckle Chest",
			"Gerudo Training Ground MQ Flame Circle Chest",
			"Gerudo Training Ground MQ Maze Right Central Chest",
			"Gerudo Training Ground MQ Maze Right Side Chest",
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
			"Gerudo Training Ground MQ Dinolfos Chest",
			"Gerudo Training Ground MQ Hidden Ceiling Chest",
			"Gerudo Training Ground MQ Maze Path First Chest",
			"Gerudo Training Ground MQ Maze Path Third Chest",
			"Gerudo Training Ground MQ Maze Path Second Chest",

			// v7 sanities

			// Gerudo Training Ground MQ Pot
			"Gerudo Training Ground MQ Lobby Left Pot 1",
			"Gerudo Training Ground MQ Lobby Left Pot 2",
			"Gerudo Training Ground MQ Lobby Right Pot 1",
			"Gerudo Training Ground MQ Lobby Right Pot 2",

			// Gerudo Training Ground MQ Crate
			"Gerudo Training Ground MQ Maze Crate",


			// Ganons Castle MQ ONLY

			// Ganons Castle MQ
			"Ganons Castle MQ Forest Trial Freestanding Key",
			"Ganons Castle MQ Forest Trial Eye Switch Chest",
			"Ganons Castle MQ Forest Trial Frozen Eye Switch Chest",
			"Ganons Castle MQ Water Trial Chest",
			"Ganons Castle MQ Shadow Trial Bomb Flower Chest",
			"Ganons Castle MQ Shadow Trial Eye Switch Chest",
			"Ganons Castle MQ Light Trial Lullaby Chest",
			"Ganons Castle MQ Spirit Trial First Chest",
			"Ganons Castle MQ Spirit Trial Invisible Chest",
			"Ganons Castle MQ Spirit Trial Sun Front Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Right Chest",
			"Ganons Castle MQ Spirit Trial Golden Gauntlets Chest",

			// Ganons Castle MQ scrub
			"Ganons Castle MQ Deku Scrub Left",
			"Ganons Castle MQ Deku Scrub Center-Left",
			"Ganons Castle MQ Deku Scrub Center",
			"Ganons Castle MQ Deku Scrub Center-Right",
			"Ganons Castle MQ Deku Scrub Right",

			// v7 sanities

			// Ganons Castle MQ Freestanding
			"Ganons Castle MQ Water Trial Recovery Heart",
			"Ganons Castle MQ Light Trial Recovery Heart 1",
			"Ganons Castle MQ Light Trial Recovery Heart 2",

			// Ganons Castle MQ Pot
			"Ganons Castle MQ Water Trial Pot 1",
			"Ganons Castle MQ Water Trial Pot 2",
			"Ganons Castle MQ Forest Trial Pot 1",
			"Ganons Castle MQ Forest Trial Pot 2",
			"Ganons Castle MQ Light Trial Pot 1",
			"Ganons Castle MQ Light Trial Pot 2",
			"Ganons Castle MQ Shadow Trial Pot 1",
			"Ganons Castle MQ Shadow Trial Pot 2",
			"Ganons Castle MQ Fire Trial Pot 1",
			"Ganons Castle MQ Fire Trial Pot 2",
			"Ganons Castle MQ Spirit Trial Pot 1",
			"Ganons Castle MQ Spirit Trial Pot 2",
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

			// MQ ONLY
			//

			// Jabu Jabus Belly MQ cow
			"Jabu Jabus Belly MQ Cow",
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

			// MQ ONLY
			//

			// Deku Tree MQ scrub
			"Deku Tree MQ Deku Scrub",
			// Dodongos Cavern MQ scrub
			"Dodongos Cavern MQ Deku Scrub Lobby Front",
			"Dodongos Cavern MQ Deku Scrub Lobby Rear",
			"Dodongos Cavern MQ Deku Scrub Side Room Near Lower Lizalfos",
			"Dodongos Cavern MQ Deku Scrub Staircase",
			// Ganons Castle MQ scrub
			"Ganons Castle MQ Deku Scrub Left",
			"Ganons Castle MQ Deku Scrub Center-Left",
			"Ganons Castle MQ Deku Scrub Center",
			"Ganons Castle MQ Deku Scrub Center-Right",
			"Ganons Castle MQ Deku Scrub Right",
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

			// MQ ONLY
			//

			// Deku Tree MQ GS
			"Deku Tree MQ GS Lobby",
			"Deku Tree MQ GS Compass Room",
			"Deku Tree MQ GS Basement Graves Room",
			"Deku Tree MQ GS Basement Back Room",
			// Dodongos Cavern MQ GS
			"Dodongos Cavern MQ GS Scrub Room",
			"Dodongos Cavern MQ GS Larvae Room",
			"Dodongos Cavern MQ GS Lizalfos Room",
			"Dodongos Cavern MQ GS Song of Time Block Room",
			"Dodongos Cavern MQ GS Back Area",
			// Jabu Jabus Belly MQ GS
			"Jabu Jabus Belly MQ GS Boomerang Chest Room",
			"Jabu Jabus Belly MQ GS Tailpasaran Room",
			"Jabu Jabus Belly MQ GS Invisible Enemies Room",
			"Jabu Jabus Belly MQ GS Near Boss",
			// Bottom of the Well MQ GS
			"Bottom of the Well MQ GS Coffin Room",
			"Bottom of the Well MQ GS West Inner Room",
			"Bottom of the Well MQ GS Basement",
			// Forest Temple MQ GS
			"Forest Temple MQ GS First Hallway",
			"Forest Temple MQ GS Raised Island Courtyard",
			"Forest Temple MQ GS Level Island Courtyard",
			"Forest Temple MQ GS Well",
			"Forest Temple MQ GS Block Push Room",
			// Fire Temple MQ GS
			"Fire Temple MQ GS Big Lava Room Open Door",
			"Fire Temple MQ GS Skull On Fire",
			"Fire Temple MQ GS Flame Maze Center",
			"Fire Temple MQ GS Flame Maze Side Room",
			"Fire Temple MQ GS Above Flame Maze",
			// Water Temple MQ GS
			"Water Temple MQ GS Lizalfos Hallway",
			"Water Temple MQ GS Before Upper Water Switch",
			"Water Temple MQ GS River",
			"Water Temple MQ GS Freestanding Key Area",
			"Water Temple MQ GS Triple Wall Torch",
			// Shadow Temple MQ GS
			"Shadow Temple MQ GS Falling Spikes Room",
			"Shadow Temple MQ GS Wind Hint Room",
			"Shadow Temple MQ GS After Wind",
			"Shadow Temple MQ GS After Ship",
			"Shadow Temple MQ GS Near Boss",
			// Spirit Temple MQ GS
			"Spirit Temple MQ GS Sun Block Room",
			"Spirit Temple MQ GS Leever Room",
			"Spirit Temple MQ GS Symphony Room",
			"Spirit Temple MQ GS Nine Thrones Room West",
			"Spirit Temple MQ GS Nine Thrones Room North",
			// Ice Cavern MQ GS
			"Ice Cavern MQ GS Red Ice",
			"Ice Cavern MQ GS Ice Block",
			"Ice Cavern MQ GS Scarecrow",
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

			// MQ ONLY
			//

			// Deku Tree MQ
			"Deku Tree MQ Map Chest",
			"Deku Tree MQ Slingshot Chest",
			"Deku Tree MQ Slingshot Room Back Chest",
			"Deku Tree MQ Compass Chest",
			"Deku Tree MQ Basement Chest",
			"Deku Tree MQ Before Spinning Log Chest",
			"Deku Tree MQ After Spinning Log Chest",
			// Dodongos Cavern MQ
			"Dodongos Cavern MQ Map Chest",
			"Dodongos Cavern MQ Bomb Bag Chest",
			"Dodongos Cavern MQ Torch Puzzle Room Chest",
			"Dodongos Cavern MQ Larvae Room Chest",
			"Dodongos Cavern MQ Compass Chest",
			"Dodongos Cavern MQ Under Grave Chest",
			// Jabu Jabus Belly MQ
			"Jabu Jabus Belly MQ Map Chest",
			"Jabu Jabus Belly MQ First Room Side Chest",
			"Jabu Jabus Belly MQ Second Room Lower Chest",
			"Jabu Jabus Belly MQ Compass Chest",
			"Jabu Jabus Belly MQ Basement Near Switches Chest",
			"Jabu Jabus Belly MQ Basement Near Vines Chest",
			"Jabu Jabus Belly MQ Boomerang Room Small Chest",
			"Jabu Jabus Belly MQ Boomerang Chest",
			"Jabu Jabus Belly MQ Falling Like Like Room Chest",
			"Jabu Jabus Belly MQ Second Room Upper Chest",
			"Jabu Jabus Belly MQ Near Boss Chest",
			// Bottom of the Well MQ
			"Bottom of the Well MQ Map Chest",
			"Bottom of the Well MQ Compass Chest",
			"Bottom of the Well MQ Lens of Truth Chest",

			// Forest Temple MQ
			"Forest Temple MQ First Room Chest",
			"Forest Temple MQ Wolfos Chest",
			"Forest Temple MQ Well Chest",
			"Forest Temple MQ Raised Island Courtyard Lower Chest",
			"Forest Temple MQ Raised Island Courtyard Upper Chest",
			"Forest Temple MQ Boss Key Chest",
			"Forest Temple MQ Redead Chest",
			"Forest Temple MQ Map Chest",
			"Forest Temple MQ Bow Chest",
			"Forest Temple MQ Compass Chest",
			"Forest Temple MQ Falling Ceiling Room Chest",
			"Forest Temple MQ Basement Chest",
			// Fire Temple MQ
			"Fire Temple MQ Map Room Side Chest",
			"Fire Temple MQ Megaton Hammer Chest",
			"Fire Temple MQ Map Chest",
			"Fire Temple MQ Near Boss Chest",
			"Fire Temple MQ Big Lava Room Blocked Door Chest",
			"Fire Temple MQ Boss Key Chest",
			"Fire Temple MQ Lizalfos Maze Side Room Chest",
			"Fire Temple MQ Compass Chest",
			"Fire Temple MQ Lizalfos Maze Upper Chest",
			"Fire Temple MQ Lizalfos Maze Lower Chest",
			"Fire Temple MQ Chest On Fire",
			// Water Temple MQ
			"Water Temple MQ Longshot Chest",
			"Water Temple MQ Map Chest",
			"Water Temple MQ Compass Chest",
			"Water Temple MQ Central Pillar Chest",
			"Water Temple MQ Boss Key Chest",
			// Shadow Temple MQ
			"Shadow Temple MQ Early Gibdos Chest",
			"Shadow Temple MQ Map Chest",
			"Shadow Temple MQ Near Ship Invisible Chest",
			"Shadow Temple MQ Compass Chest",
			"Shadow Temple MQ Hover Boots Chest",
			"Shadow Temple MQ Invisible Blades Invisible Chest",
			"Shadow Temple MQ Invisible Blades Visible Chest",
			"Shadow Temple MQ Beamos Silver Rupees Chest",
			"Shadow Temple MQ Falling Spikes Lower Chest",
			"Shadow Temple MQ Falling Spikes Upper Chest",
			"Shadow Temple MQ Falling Spikes Switch Chest",
			"Shadow Temple MQ Invisible Spikes Chest",
			"Shadow Temple MQ Stalfos Room Chest",
			"Shadow Temple MQ Wind Hint Chest",
			"Shadow Temple MQ After Wind Hidden Chest",
			"Shadow Temple MQ After Wind Enemy Chest",
			"Shadow Temple MQ Boss Key Chest",
			"Shadow Temple MQ Spike Walls Left Chest",
			"Shadow Temple MQ Bomb Flower Chest",
			// Spirit Temple MQ
			"Spirit Temple MQ Entrance Front Left Chest",
			"Spirit Temple MQ Entrance Back Right Chest",
			"Spirit Temple MQ Entrance Front Right Chest",
			"Spirit Temple MQ Entrance Back Left Chest",
			"Spirit Temple MQ Map Chest",
			"Spirit Temple MQ Map Room Enemy Chest",
			"Spirit Temple MQ Child Climb North Chest",
			"Spirit Temple MQ Child Climb South Chest",
			"Spirit Temple MQ Compass Chest",
			"Spirit Temple MQ Silver Block Hallway Chest",
			"Spirit Temple MQ Sun Block Room Chest",
			"Spirit Temple MQ Child Hammer Switch Chest",
			"Spirit Temple MQ Statue Room Lullaby Chest",
			"Spirit Temple MQ Statue Room Invisible Chest",
			"Spirit Temple MQ Leever Room Chest",
			"Spirit Temple MQ Symphony Room Chest",
			"Spirit Temple MQ Beamos Room Chest",
			"Spirit Temple MQ Chest Switch Chest",
			"Spirit Temple MQ Boss Key Chest",
			"Spirit Temple MQ Mirror Puzzle Invisible Chest",
			// Ice Cavern MQ
			"Ice Cavern MQ Map Chest",
			"Ice Cavern MQ Compass Chest",
			"Ice Cavern MQ Iron Boots Chest",
			// Gerudo Training Ground MQ
			"Gerudo Training Ground MQ Lobby Left Chest",
			"Gerudo Training Ground MQ Lobby Right Chest",
			"Gerudo Training Ground MQ First Iron Knuckle Chest",
			"Gerudo Training Ground MQ Before Heavy Block Chest",
			"Gerudo Training Ground MQ Heavy Block Chest",
			"Gerudo Training Ground MQ Eye Statue Chest",
			"Gerudo Training Ground MQ Ice Arrows Chest",
			"Gerudo Training Ground MQ Second Iron Knuckle Chest",
			"Gerudo Training Ground MQ Flame Circle Chest",
			"Gerudo Training Ground MQ Maze Right Central Chest",
			"Gerudo Training Ground MQ Maze Right Side Chest",
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
			"Gerudo Training Ground MQ Dinolfos Chest",
			"Gerudo Training Ground MQ Hidden Ceiling Chest",
			"Gerudo Training Ground MQ Maze Path First Chest",
			"Gerudo Training Ground MQ Maze Path Third Chest",
			"Gerudo Training Ground MQ Maze Path Second Chest",
			// Ganons Castle MQ
			"Ganons Castle MQ Forest Trial Eye Switch Chest",
			"Ganons Castle MQ Forest Trial Frozen Eye Switch Chest",
			"Ganons Castle MQ Water Trial Chest",
			"Ganons Castle MQ Shadow Trial Bomb Flower Chest",
			"Ganons Castle MQ Shadow Trial Eye Switch Chest",
			"Ganons Castle MQ Light Trial Lullaby Chest",
			"Ganons Castle MQ Spirit Trial First Chest",
			"Ganons Castle MQ Spirit Trial Invisible Chest",
			"Ganons Castle MQ Spirit Trial Sun Front Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
			"Ganons Castle MQ Spirit Trial Sun Back Right Chest",
			"Ganons Castle MQ Spirit Trial Golden Gauntlets Chest",
		],
		freestanding : [
			// OVERWORLD
			//

			// KF Freestanding
			"KF Behind Midos Blue Rupee",
			"KF Boulder Maze Blue Rupee 1",
			"KF Boulder Maze Blue Rupee 2",
			"KF End of Bridge Blue Rupee",
			"KF Top of Sarias Recovery Heart 1",
			"KF Top of Sarias Recovery Heart 2",
			"KF Top of Sarias Recovery Heart 3",
			"KF Bean Platform Green Rupee 1",
			"KF Bean Platform Green Rupee 2",
			"KF Bean Platform Green Rupee 3",
			"KF Bean Platform Green Rupee 4",
			"KF Bean Platform Green Rupee 5",
			"KF Bean Platform Green Rupee 6",
			"KF Bean Platform Red Rupee",
			"KF Grass Near Ramp Green Rupee 1",
			"KF Grass Near Ramp Green Rupee 2",
			"KF Grass Near Midos Green Rupee 1",
			"KF Grass Near Midos Green Rupee 2",
			"KF Sarias House Recovery Heart 1",
			"KF Sarias House Recovery Heart 2",
			"KF Sarias House Recovery Heart 3",
			"KF Sarias House Recovery Heart 4",
			"KF Shop Blue Rupee",
			// LW Freestanding
			"LW Under Boulder Blue Rupee",
			"LW Underwater Green Rupee 1",
			"LW Underwater Green Rupee 2",
			"LW Underwater Shortcut Green Rupee",
			"LW Underwater Green Rupee 3",
			"LW Underwater Green Rupee 4",
			"LW Underwater Green Rupee 5",
			"LW Underwater Green Rupee 6",
			"LW Underwater Green Rupee 7",
			// Graveyard Freestanding
			"Graveyard Dampe Race Rupee 1",
			"Graveyard Dampe Race Rupee 2",
			"Graveyard Dampe Race Rupee 3",
			"Graveyard Dampe Race Rupee 4",
			"Graveyard Dampe Race Rupee 5",
			"Graveyard Dampe Race Rupee 6",
			"Graveyard Dampe Race Rupee 7",
			"Graveyard Dampe Race Rupee 8",
			// DMT Freestanding
			"DMT Rock Red Rupee",
			"DMT Rock Blue Rupee",
			"DMT Cow Grotto Green Rupee 1",
			"DMT Cow Grotto Green Rupee 2",
			"DMT Cow Grotto Green Rupee 3",
			"DMT Cow Grotto Green Rupee 4",
			"DMT Cow Grotto Green Rupee 5",
			"DMT Cow Grotto Green Rupee 6",
			"DMT Cow Grotto Red Rupee",
			"DMT Cow Grotto Recovery Heart 1",
			"DMT Cow Grotto Recovery Heart 2",
			"DMT Cow Grotto Recovery Heart 3",
			"DMT Cow Grotto Recovery Heart 4",
			// GC Freestanding
			"GC Spinning Pot Bomb Drop 1",
			"GC Spinning Pot Bomb Drop 2",
			"GC Spinning Pot Bomb Drop 3",
			"GC Spinning Pot Rupee Drop 1",
			"GC Spinning Pot Rupee Drop 2",
			"GC Spinning Pot Rupee Drop 3",
			"GC Spinning Pot PoH Drop Rupee 1",
			"GC Spinning Pot PoH Drop Rupee 2",
			// DMC Freestanding
			"DMC Adult Green Rupee 1",
			"DMC Adult Green Rupee 2",
			"DMC Adult Green Rupee 3",
			"DMC Adult Green Rupee 4",
			"DMC Adult Green Rupee 5",
			"DMC Adult Green Rupee 6",
			"DMC Adult Red Rupee",
			"DMC Child Red Rupee 1",
			"DMC Child Red Rupee 2",
			"DMC Child Blue Rupee 1",
			"DMC Child Blue Rupee 2",
			"DMC Child Blue Rupee 3",
			"DMC Child Blue Rupee 4",
			"DMC Child Blue Rupee 5",
			"DMC Child Blue Rupee 6",
			// ZR Freestanding
			"ZR Waterfall Red Rupee 1",
			"ZR Waterfall Red Rupee 2",
			"ZR Waterfall Red Rupee 3",
			"ZR Waterfall Red Rupee 4",
			// ZF Freestanding
			"ZF Bottom Green Rupee 1",
			"ZF Bottom Green Rupee 2",
			"ZF Bottom Green Rupee 3",
			"ZF Bottom Green Rupee 4",
			"ZF Bottom Green Rupee 5",
			"ZF Bottom Green Rupee 6",
			"ZF Bottom Green Rupee 7",
			"ZF Bottom Green Rupee 8",
			"ZF Bottom Green Rupee 9",
			"ZF Bottom Green Rupee 10",
			"ZF Bottom Green Rupee 11",
			"ZF Bottom Green Rupee 12",
			"ZF Bottom Green Rupee 13",
			"ZF Bottom Green Rupee 14",
			"ZF Bottom Green Rupee 15",
			"ZF Bottom Green Rupee 16",
			"ZF Bottom Green Rupee 17",
			"ZF Bottom Green Rupee 18",
			// LH Freestanding
			"LH Underwater Near Shore Green Rupee",
			"LH Underwater Green Rupee 1",
			"LH Underwater Green Rupee 2",
			"LH Lab Dive Red Rupee 1",
			"LH Lab Dive Red Rupee 2",
			"LH Lab Dive Red Rupee 3",
			// GV Freestanding
			"GV Octorok Grotto Red Rupee",
			"GV Octorok Grotto Blue Rupee 1",
			"GV Octorok Grotto Blue Rupee 2",
			"GV Octorok Grotto Blue Rupee 3",
			"GV Octorok Grotto Green Rupee 1",
			"GV Octorok Grotto Green Rupee 2",
			"GV Octorok Grotto Green Rupee 3",
			"GV Octorok Grotto Green Rupee 4",

			// DUNGEON
			//

			// Deku Tree Freestanding
			"Deku Tree Lower Lobby Recovery Heart",
			"Deku Tree Upper Lobby Recovery Heart",
			"Deku Tree Basement Recovery Heart 1",
			"Deku Tree Basement Recovery Heart 2",
			"Deku Tree Basement Recovery Heart 3",
			// Dodongos Cavern Freestanding
			"Dodongos Cavern Lizalfos Upper Recovery Heart 1",
			"Dodongos Cavern Lizalfos Upper Recovery Heart 2",
			"Dodongos Cavern Blade Room Behind Block Recovery Heart",
			"Dodongos Cavern Lower Lizalfos Hidden Recovery Heart", // (shared with MQ)
			// Bottom of the Well Freestanding
			"Bottom of the Well Center Room Pit Fall Blue Rupee 1",
			"Bottom of the Well Center Room Pit Fall Blue Rupee 2",
			"Bottom of the Well Center Room Pit Fall Blue Rupee 3",
			"Bottom of the Well Center Room Pit Fall Blue Rupee 4",
			"Bottom of the Well Center Room Pit Fall Blue Rupee 5",
			"Bottom of the Well Coffin Recovery Heart 1",
			"Bottom of the Well Coffin Recovery Heart 2",
			// Forest Temple Freestanding
			"Forest Temple Courtyard Recovery Heart 1",
			"Forest Temple Courtyard Recovery Heart 2",
			"Forest Temple Well Recovery Heart 1",
			"Forest Temple Well Recovery Heart 2",
			// Fire Temple Freestanding
			"Fire Temple Elevator Room Recovery Heart 1",
			"Fire Temple Elevator Room Recovery Heart 2",
			"Fire Temple Elevator Room Recovery Heart 3",
			"Fire Temple Narrow Path Room Recovery Heart 1",
			"Fire Temple Narrow Path Room Recovery Heart 2",
			"Fire Temple Narrow Path Room Recovery Heart 3",
			"Fire Temple Moving Fire Room Recovery Heart 1",
			"Fire Temple Moving Fire Room Recovery Heart 2",
			"Fire Temple Moving Fire Room Recovery Heart 3",
			// Water Temple Freestanding
			"Water Temple River Recovery Heart 1",
			"Water Temple River Recovery Heart 2",
			"Water Temple River Recovery Heart 3",
			"Water Temple River Recovery Heart 4",
			// Shadow Temple Freestanding
			"Shadow Temple Invisible Blades Recovery Heart 1",
			"Shadow Temple Invisible Blades Recovery Heart 2",
			"Shadow Temple Before Boat Recovery Heart 1",
			"Shadow Temple Before Boat Recovery Heart 2",
			"Shadow Temple After Boat Upper Recovery Heart 1",
			"Shadow Temple After Boat Upper Recovery Heart 2",
			"Shadow Temple After Boat Lower Recovery Heart",
			"Shadow Temple 3 Spinning Pots Rupee 1",
			"Shadow Temple 3 Spinning Pots Rupee 2",
			"Shadow Temple 3 Spinning Pots Rupee 3",
			"Shadow Temple 3 Spinning Pots Rupee 4",
			"Shadow Temple 3 Spinning Pots Rupee 5",
			"Shadow Temple 3 Spinning Pots Rupee 6",
			"Shadow Temple 3 Spinning Pots Rupee 7",
			"Shadow Temple 3 Spinning Pots Rupee 8",
			"Shadow Temple 3 Spinning Pots Rupee 9",
			// Spirit Temple Freestanding
			"Spirit Temple Shifting Wall Recovery Heart 1",
			"Spirit Temple Shifting Wall Recovery Heart 2",
			// Ice Cavern Freestanding
			"Ice Cavern Frozen Blue Rupee",
			"Ice Cavern Map Room Recovery Heart 1",
			"Ice Cavern Map Room Recovery Heart 2",
			"Ice Cavern Map Room Recovery Heart 3",
			"Ice Cavern Block Room Red Rupee 1",
			"Ice Cavern Block Room Red Rupee 2",
			"Ice Cavern Block Room Red Rupee 3",
			// Gerudo Training Ground Freestanding
			"Gerudo Training Ground Beamos Recovery Heart 1",
			"Gerudo Training Ground Beamos Recovery Heart 2",
			// Ganons Castle Freestanding
			"Ganons Castle Shadow Trial Recovery Heart 1",
			"Ganons Castle Shadow Trial Recovery Heart 2",
			"Ganons Castle Shadow Trial Recovery Heart 3",
			"Ganons Castle Fire Trial Recovery Heart",
			"Ganons Castle Spirit Trial Recovery Heart",

			// MQ ONLY
			//

			// Deku Tree MQ Freestanding
			"Deku Tree MQ Lower Lobby Recovery Heart",
			"Deku Tree MQ Near Compass Room Recovery Heart",
			"Deku Tree MQ Compass Room Recovery Heart",
			"Deku Tree MQ Basement Recovery Heart 1",
			"Deku Tree MQ Basement Recovery Heart 2",
			"Deku Tree MQ Basement Recovery Heart 3",
			"Deku Tree MQ Slingshot Room Recovery Heart",
			// Dodongos Cavern MQ Freestanding
			"Dodongos Cavern MQ Torch Puzzle Room Recovery Heart",
			// Jabu Jabus Belly MQ Freestanding
			"Jabu Jabus Belly MQ Underwater Green Rupee 1",
			"Jabu Jabus Belly MQ Underwater Green Rupee 2",
			"Jabu Jabus Belly MQ Underwater Green Rupee 3",
			"Jabu Jabus Belly MQ Recovery Heart 1",
			"Jabu Jabus Belly MQ Recovery Heart 2",
			// Bottom of the Well MQ Freestanding
			"Bottom of the Well MQ Bombable Recovery Heart 1",
			"Bottom of the Well MQ Bombable Recovery Heart 2",
			"Bottom of the Well MQ Basement Recovery Heart 1",
			"Bottom of the Well MQ Basement Recovery Heart 2",
			"Bottom of the Well MQ Basement Recovery Heart 3",
			"Bottom of the Well MQ Coffin Recovery Heart 1",
			"Bottom of the Well MQ Coffin Recovery Heart 2",
			// Forest Temple MQ Freestanding
			"Forest Temple MQ Courtyard Recovery Heart 1",
			"Forest Temple MQ Courtyard Recovery Heart 2",
			"Forest Temple MQ Courtyard Recovery Heart 3",
			"Forest Temple MQ Well Recovery Heart 1",
			"Forest Temple MQ Well Recovery Heart 2",
			"Forest Temple MQ Well Recovery Heart 3",
			// Fire Temple MQ Freestanding
			"Fire Temple MQ Elevator Room Recovery Heart 1",
			"Fire Temple MQ Elevator Room Recovery Heart 2",
			"Fire Temple MQ Elevator Room Recovery Heart 3",
			// Shadow Temple MQ Freestanding
			"Shadow Temple MQ Invisible Blades Recovery Heart 1",
			"Shadow Temple MQ Invisible Blades Recovery Heart 2",
			"Shadow Temple MQ Before Boat Recovery Heart 1",
			"Shadow Temple MQ Before Boat Recovery Heart 2",
			"Shadow Temple MQ After Boat Upper Recovery Heart 1",
			"Shadow Temple MQ After Boat Upper Recovery Heart 2",
			"Shadow Temple MQ After Boat Lower Recovery Heart",
			"Shadow Temple MQ 3 Spinning Pots Rupee 1",
			"Shadow Temple MQ 3 Spinning Pots Rupee 2",
			"Shadow Temple MQ 3 Spinning Pots Rupee 3",
			"Shadow Temple MQ 3 Spinning Pots Rupee 4",
			"Shadow Temple MQ 3 Spinning Pots Rupee 5",
			"Shadow Temple MQ 3 Spinning Pots Rupee 6",
			"Shadow Temple MQ 3 Spinning Pots Rupee 7",
			"Shadow Temple MQ 3 Spinning Pots Rupee 8",
			"Shadow Temple MQ 3 Spinning Pots Rupee 9",
			// Spirit Temple MQ Freestanding
			"Spirit Temple MQ Child Recovery Heart 1",
			"Spirit Temple MQ Child Recovery Heart 2",
			// Ganons Castle MQ Freestanding
			"Ganons Castle MQ Water Trial Recovery Heart",
			"Ganons Castle MQ Light Trial Recovery Heart 1",
			"Ganons Castle MQ Light Trial Recovery Heart 2",
		],
		pot : [
			// OVERWORLD
			//

			// KF Pot
			"KF Links House Pot",
			"KF Know it All House Pot 1",
			"KF Know it All House Pot 2",
			"KF House of Twins Pot 1",
			"KF House of Twins Pot 2",
			// HF Pot
			"HF Cow Grotto Pot 1",
			"HF Cow Grotto Pot 2",
			// Market Pot
			"Market Guard House Child Pot 1",
			"Market Guard House Child Pot 2",
			"Market Guard House Child Pot 3",
			"Market Guard House Child Pot 4",
			"Market Guard House Child Pot 5",
			"Market Guard House Child Pot 6",
			"Market Guard House Child Pot 7",
			"Market Guard House Child Pot 8",
			"Market Guard House Child Pot 9",
			"Market Guard House Child Pot 10",
			"Market Guard House Child Pot 11",
			"Market Guard House Child Pot 12",
			"Market Guard House Child Pot 13",
			"Market Guard House Child Pot 14",
			"Market Guard House Child Pot 15",
			"Market Guard House Child Pot 16",
			"Market Guard House Child Pot 17",
			"Market Guard House Child Pot 18",
			"Market Guard House Child Pot 19",
			"Market Guard House Child Pot 20",
			"Market Guard House Child Pot 21",
			"Market Guard House Child Pot 22",
			"Market Guard House Child Pot 23",
			"Market Guard House Child Pot 24",
			"Market Guard House Child Pot 25",
			"Market Guard House Child Pot 26",
			"Market Guard House Child Pot 27",
			"Market Guard House Child Pot 28",
			"Market Guard House Child Pot 29",
			"Market Guard House Child Pot 30",
			"Market Guard House Child Pot 31",
			"Market Guard House Child Pot 32",
			"Market Guard House Child Pot 33",
			"Market Guard House Child Pot 34",
			"Market Guard House Child Pot 35",
			"Market Guard House Child Pot 36",
			"Market Guard House Child Pot 37",
			"Market Guard House Child Pot 38",
			"Market Guard House Child Pot 39",
			"Market Guard House Child Pot 40",
			"Market Guard House Child Pot 41",
			"Market Guard House Child Pot 42",
			"Market Guard House Child Pot 43",
			"Market Guard House Child Pot 44",
			"Market Guard House Adult Pot 1",
			"Market Guard House Adult Pot 2",
			"Market Guard House Adult Pot 3",
			"Market Guard House Adult Pot 4",
			"Market Guard House Adult Pot 5",
			"Market Guard House Adult Pot 6",
			"Market Guard House Adult Pot 7",
			"Market Man in Green House Pot 1",
			"Market Man in Green House Pot 2",
			"Market Man in Green House Pot 3",
			// HC Pot
			"HC Storms Grotto Pot 1",
			"HC Storms Grotto Pot 2",
			"HC Storms Grotto Pot 3",
			"HC Storms Grotto Pot 4",
			// LLR Pot
			"LLR Front Pot 1",
			"LLR Front Pot 2",
			"LLR Front Pot 3",
			"LLR Front Pot 4",
			"LLR Rain Shed Pot 1",
			"LLR Rain Shed Pot 2",
			"LLR Rain Shed Pot 3",
			"LLR Talons House Pot 1",
			"LLR Talons House Pot 2",
			"LLR Talons House Pot 3",
			// Kak Pot
			"Kak Near Potion Shop Pot 1",
			"Kak Near Potion Shop Pot 2",
			"Kak Near Potion Shop Pot 3",
			"Kak Near Impas House Pot 1",
			"Kak Near Impas House Pot 2",
			"Kak Near Impas House Pot 3",
			"Kak Near Guards House Pot 1",
			"Kak Near Guards House Pot 2",
			"Kak Near Guards House Pot 3",
			"Kak Near Odd Medicine Building Pot 1",
			"Kak Near Odd Medicine Building Pot 2",
			// Graveyard Pot
			"Graveyard Dampe Pot 1",
			"Graveyard Dampe Pot 2",
			"Graveyard Dampe Pot 3",
			"Graveyard Dampe Pot 4",
			"Graveyard Dampe Pot 5",
			"Graveyard Dampe Pot 6",
			// GC Pot
			"GC Darunia Pot 1",
			"GC Darunia Pot 2",
			"GC Darunia Pot 3",
			"GC Medigoron Pot",
			"GC Lower Staircase Pot 1",
			"GC Lower Staircase Pot 2",
			"GC Upper Staircase Pot 1",
			"GC Upper Staircase Pot 2",
			"GC Upper Staircase Pot 3",
			// DMC Pot
			"DMC Near GC Pot 1",
			"DMC Near GC Pot 2",
			"DMC Near GC Pot 3",
			"DMC Near GC Pot 4",
			// ZD Pot
			"ZD Pot 1",
			"ZD Pot 2",
			"ZD Pot 3",
			"ZD Pot 4",
			"ZD Pot 5",
			// ZF Pot
			"ZF Hidden Cave Pot 1",
			"ZF Hidden Cave Pot 2",
			"ZF Hidden Cave Pot 3",
			"ZF Near Jabu Pot 1",
			"ZF Near Jabu Pot 2",
			"ZF Near Jabu Pot 3",
			"ZF Near Jabu Pot 4",
			// Hideout Pot
			"Hideout Break Room Pot 1",
			"Hideout Break Room Pot 2",
			"Hideout 1 Torch Jail Pot 1",
			"Hideout 1 Torch Jail Pot 2",
			"Hideout 1 Torch Jail Pot 3",
			"Hideout Kitchen Pot 1",
			"Hideout Kitchen Pot 2",
			"Hideout 4 Torch Jail Pot 1",
			"Hideout 4 Torch Jail Pot 2",
			"Hideout 2 Torch Jail Pot 1",
			"Hideout 2 Torch Jail Pot 2",
			"Hideout 2 Torch Jail Pot 3",
			"Hideout 2 Torch Jail In Cell Pot 1",
			"Hideout 2 Torch Jail In Cell Pot 2",
			"Hideout 2 Torch Jail In Cell Pot 3",
			"Hideout 2 Torch Jail In Cell Pot 4",
			// Wasteland Pot
			"Wasteland Near GS Pot 1",
			"Wasteland Near GS Pot 2",
			"Wasteland Near GS Pot 3",

			// DUNGEON
			//

			// Dodongos Cavern Pot
			"Dodongos Cavern Right Side Pot 1",
			"Dodongos Cavern Right Side Pot 2",
			"Dodongos Cavern Right Side Pot 3",
			"Dodongos Cavern Right Side Pot 4",
			"Dodongos Cavern Right Side Pot 5",
			"Dodongos Cavern Right Side Pot 6",
			"Dodongos Cavern Lower Lizalfos Pot 1",
			"Dodongos Cavern Lower Lizalfos Pot 2",
			"Dodongos Cavern Lower Lizalfos Pot 3",
			"Dodongos Cavern Lower Lizalfos Pot 4",
			"Dodongos Cavern Torch Room Pot 1",
			"Dodongos Cavern Torch Room Pot 2",
			"Dodongos Cavern Torch Room Pot 3",
			"Dodongos Cavern Torch Room Pot 4",
			"Dodongos Cavern Staircase Pot 1",
			"Dodongos Cavern Staircase Pot 2",
			"Dodongos Cavern Staircase Pot 3",
			"Dodongos Cavern Staircase Pot 4",
			"Dodongos Cavern Last Block Pot 1",
			"Dodongos Cavern Last Block Pot 2",
			"Dodongos Cavern Last Block Pot 3",
			"Dodongos Cavern Blade Room Pot 1",
			"Dodongos Cavern Blade Room Pot 2",
			"Dodongos Cavern Single Eye Switch Room Pot 1",
			"Dodongos Cavern Single Eye Switch Room Pot 2",
			"Dodongos Cavern Double Eye Switch Room Pot 1",
			"Dodongos Cavern Double Eye Switch Room Pot 2",
			// Jabu Jabus Belly Pot
			"Jabu Jabus Belly Above Big Octo Pot 1",
			"Jabu Jabus Belly Above Big Octo Pot 2",
			"Jabu Jabus Belly Basement 2 Octoroks Pot 1",
			"Jabu Jabus Belly Basement 2 Octoroks Pot 2",
			"Jabu Jabus Belly Basement 2 Octoroks Pot 3",
			"Jabu Jabus Belly Basement 2 Octoroks Pot 4",
			"Jabu Jabus Belly Basement Switch Room Pot 1",
			"Jabu Jabus Belly Basement Switch Room Pot 2",
			"Jabu Jabus Belly Barinade Pot 1", // (shared with MQ)
			"Jabu Jabus Belly Barinade Pot 2", // (shared with MQ)
			"Jabu Jabus Belly Barinade Pot 3", // (shared with MQ)
			"Jabu Jabus Belly Barinade Pot 4", // (shared with MQ)
			"Jabu Jabus Belly Barinade Pot 5", // (shared with MQ)
			"Jabu Jabus Belly Barinade Pot 6", // (shared with MQ)
			// Bottom of the Well Pot
			"Bottom of the Well Left Side Pot 1",
			"Bottom of the Well Left Side Pot 2",
			"Bottom of the Well Left Side Pot 3",
			"Bottom of the Well Near Entrance Pot 1",
			"Bottom of the Well Near Entrance Pot 2",
			"Bottom of the Well Underwater Pot",
			"Bottom of the Well Basement Pot 1",
			"Bottom of the Well Basement Pot 2",
			"Bottom of the Well Basement Pot 3",
			"Bottom of the Well Basement Pot 4",
			"Bottom of the Well Basement Pot 5",
			"Bottom of the Well Basement Pot 6",
			"Bottom of the Well Basement Pot 7",
			"Bottom of the Well Basement Pot 8",
			"Bottom of the Well Basement Pot 9",
			"Bottom of the Well Basement Pot 10",
			"Bottom of the Well Basement Pot 11",
			"Bottom of the Well Basement Pot 12",
			"Bottom of the Well Fire Keese Pot",
			"Bottom of the Well West Inner Room Flying Pot 1",
			"Bottom of the Well West Inner Room Flying Pot 2",
			"Bottom of the Well West Inner Room Flying Pot 3",
			// Forest Temple Pot
			"Forest Temple Center Room Right Pot 1",
			"Forest Temple Center Room Right Pot 2",
			"Forest Temple Center Room Right Pot 3",
			"Forest Temple Center Room Left Pot 1",
			"Forest Temple Center Room Left Pot 2",
			"Forest Temple Center Room Left Pot 3",
			"Forest Temple Lower Stalfos Pot",
			"Forest Temple Upper Stalfos Pot 1",
			"Forest Temple Upper Stalfos Pot 2",
			"Forest Temple Upper Stalfos Pot 3",
			"Forest Temple Upper Stalfos Pot 4",
			"Forest Temple Blue Poe Room Pot 1",
			"Forest Temple Blue Poe Room Pot 2",
			"Forest Temple Blue Poe Room Pot 3",
			"Forest Temple Frozen Eye Switch Room Pot 1",
			"Forest Temple Frozen Eye Switch Room Pot 2",
			"Forest Temple Green Poe Room Pot 1",
			"Forest Temple Green Poe Room Pot 2",
			// Fire Temple Pot
			"Fire Temple Big Lava Room Pot 1",
			"Fire Temple Big Lava Room Pot 2",
			"Fire Temple Big Lava Room Pot 3",
			"Fire Temple Near Boss Pot 1",
			"Fire Temple Near Boss Pot 2",
			"Fire Temple Flame Maze Right Side Pot 1",
			"Fire Temple Flame Maze Right Side Pot 2",
			"Fire Temple Flame Maze Right Side Pot 3",
			"Fire Temple Flame Maze Right Side Pot 4",
			"Fire Temple Flame Maze Left Side Pot 1",
			"Fire Temple Flame Maze Left Side Pot 2",
			"Fire Temple Flame Maze Left Side Pot 3",
			"Fire Temple Flame Maze Left Side Pot 4",
			// Water Temple Pot
			"Water Temple Main Room L2 Pot 1",
			"Water Temple Main Room L2 Pot 2",
			"Water Temple Behind Gate Pot 1",
			"Water Temple Behind Gate Pot 2",
			"Water Temple Behind Gate Pot 3",
			"Water Temple Behind Gate Pot 4",
			"Water Temple Near Compass Pot 1",
			"Water Temple Near Compass Pot 2",
			"Water Temple Near Compass Pot 3",
			"Water Temple Like Like Pot 1",
			"Water Temple Like Like Pot 2",
			"Water Temple North Basement Block Puzzle Pot 1",
			"Water Temple North Basement Block Puzzle Pot 2",
			"Water Temple L1 Torch Pot 1",
			"Water Temple L1 Torch Pot 2",
			"Water Temple River Pot 1",
			"Water Temple Central Bow Target Pot 1",
			"Water Temple Central Bow Target Pot 2",
			// Shadow Temple Pot
			"Shadow Temple Whispering Walls Near Dead Hand Pot",
			"Shadow Temple Whispering Walls Left Pot 1",
			"Shadow Temple Whispering Walls Left Pot 2",
			"Shadow Temple Whispering Walls Left Pot 3",
			"Shadow Temple Whispering Walls Front Pot 1",
			"Shadow Temple Whispering Walls Front Pot 2",
			"Shadow Temple Whispering Walls Flying Pot",
			"Shadow Temple Map Chest Room Pot 1",
			"Shadow Temple Map Chest Room Pot 2",
			"Shadow Temple Falling Spikes Lower Pot 2",
			"Shadow Temple Falling Spikes Lower Pot 1",
			"Shadow Temple Falling Spikes Upper Pot 1",
			"Shadow Temple Falling Spikes Upper Pot 2",
			"Shadow Temple Spike Walls Pot",
			"Shadow Temple Invisible Floormaster Pot 1",
			"Shadow Temple Invisible Floormaster Pot 2",
			"Shadow Temple After Wind Pot 1",
			"Shadow Temple After Wind Pot 2",
			"Shadow Temple After Wind Flying Pot 1",
			"Shadow Temple After Wind Flying Pot 2",
			"Shadow Temple After Boat Pot",
			"Shadow Temple Near Boss Pot 1",
			"Shadow Temple Near Boss Pot 2",
			// Spirit Temple Pot
			"Spirit Temple Lobby Pot 1",
			"Spirit Temple Lobby Pot 2",
			"Spirit Temple Lobby Flying Pot 1",
			"Spirit Temple Lobby Flying Pot 2",
			"Spirit Temple Child Climb Pot",
			"Spirit Temple Hall After Sun Block Room Pot 1",
			"Spirit Temple Hall After Sun Block Room Pot 2",
			"Spirit Temple Beamos Hall Pot",
			"Spirit Temple Child Anubis Pot",
			"Spirit Temple Child Bridge Flying Pot",
			"Spirit Temple Central Chamber Flying Pot 1",
			"Spirit Temple Central Chamber Flying Pot 2",
			"Spirit Temple Adult Climb Flying Pot 1",
			"Spirit Temple Adult Climb Flying Pot 2",
			"Spirit Temple Big Mirror Flying Pot 1",
			"Spirit Temple Big Mirror Flying Pot 2",
			"Spirit Temple Big Mirror Flying Pot 3",
			"Spirit Temple Big Mirror Flying Pot 4",
			"Spirit Temple Big Mirror Flying Pot 5",
			"Spirit Temple Big Mirror Flying Pot 6",
			// Ice Cavern Pot
			"Ice Cavern Hall Pot 1",
			"Ice Cavern Hall Pot 2",
			"Ice Cavern Spinning Blade Pot 1",
			"Ice Cavern Spinning Blade Pot 2",
			"Ice Cavern Spinning Blade Pot 3",
			"Ice Cavern Spinning Blade Flying Pot",
			"Ice Cavern Near End Pot 1",
			"Ice Cavern Near End Pot 2",
			"Ice Cavern Frozen Pot",
			// Ganons Castle Pot
			"Ganons Castle Water Trial Pot 1",
			"Ganons Castle Water Trial Pot 2",
			"Ganons Castle Forest Trial Pot 1",
			"Ganons Castle Forest Trial Pot 2",
			"Ganons Castle Light Trial Boulder Pot",
			"Ganons Castle Light Trial Pot 1",
			"Ganons Castle Light Trial Pot 2",
			"Ganons Castle Shadow Trial Like Like Pot 1",
			"Ganons Castle Shadow Trial Like Like Pot 2",
			"Ganons Castle Shadow Trial Pot 1",
			"Ganons Castle Shadow Trial Pot 2",
			"Ganons Castle Fire Trial Pot 1",
			"Ganons Castle Fire Trial Pot 2",
			"Ganons Castle Spirit Trial Pot 1",
			"Ganons Castle Spirit Trial Pot 2",
			// Ganons Tower Pot
			"Ganons Tower Pot 1",  // (shared with MQ)
			"Ganons Tower Pot 2",  // (shared with MQ)
			"Ganons Tower Pot 3",  // (shared with MQ)
			"Ganons Tower Pot 4",  // (shared with MQ)
			"Ganons Tower Pot 5",  // (shared with MQ)
			"Ganons Tower Pot 6",  // (shared with MQ)
			"Ganons Tower Pot 7",  // (shared with MQ)
			"Ganons Tower Pot 8",  // (shared with MQ)
			"Ganons Tower Pot 9",  // (shared with MQ)
			"Ganons Tower Pot 10", // (shared with MQ)
			"Ganons Tower Pot 11", // (shared with MQ)
			"Ganons Tower Pot 12", // (shared with MQ)
			"Ganons Tower Pot 13", // (shared with MQ)
			"Ganons Tower Pot 14", // (shared with MQ)

			// MQ ONLY
			//

			// Dodongos Cavern MQ Pot
			"Dodongos Cavern MQ Right Side Pot 1",
			"Dodongos Cavern MQ Right Side Pot 2",
			"Dodongos Cavern MQ Right Side Pot 3",
			"Dodongos Cavern MQ Right Side Pot 4",
			"Dodongos Cavern MQ Staircase Pot 1",
			"Dodongos Cavern MQ Staircase Pot 2",
			"Dodongos Cavern MQ Staircase Pot 3",
			"Dodongos Cavern MQ Staircase Pot 4",
			"Dodongos Cavern MQ Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ Upper Lizalfos Pot 3",
			"Dodongos Cavern MQ Upper Lizalfos Pot 4",
			"Dodongos Cavern MQ Poes Room Pot 1",
			"Dodongos Cavern MQ Poes Room Pot 2",
			"Dodongos Cavern MQ Poes Room Pot 3",
			"Dodongos Cavern MQ Poes Room Pot 4",
			"Dodongos Cavern MQ Room Before Boss Pot 1",
			"Dodongos Cavern MQ Room Before Boss Pot 2",
			"Dodongos Cavern MQ Armos Army Room Upper Pot",
			"Dodongos Cavern MQ Armos Army Room Pot 1",
			"Dodongos Cavern MQ Armos Army Room Pot 2",
			"Dodongos Cavern MQ Torch Puzzle Room Pot Pillar",
			"Dodongos Cavern MQ Torch Puzzle Room Pot Corner",
			"Dodongos Cavern MQ Before Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ Before Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ After Upper Lizalfos Pot 1",
			"Dodongos Cavern MQ After Upper Lizalfos Pot 2",
			"Dodongos Cavern MQ Back Poe Room Pot 1",
			"Dodongos Cavern MQ Back Poe Room Pot 2",
			// Jabu Jabus Belly MQ Pot
			"Jabu Jabus Belly MQ First Room Pot 1",
			"Jabu Jabus Belly MQ First Room Pot 2",
			"Jabu Jabus Belly MQ Elevator Room Pot 1",
			"Jabu Jabus Belly MQ Elevator Room Pot 2",
			"Jabu Jabus Belly MQ Falling Like Like Room Pot 1",
			"Jabu Jabus Belly MQ Falling Like Like Room Pot 2",
			"Jabu Jabus Belly MQ Boomerang Room Pot 1",
			"Jabu Jabus Belly MQ Boomerang Room Pot 2",
			// Bottom of the Well MQ Pot
			"Bottom of the Well MQ Center Room Right Pot 1",
			"Bottom of the Well MQ Center Room Right Pot 2",
			"Bottom of the Well MQ Center Room Right Pot 3",
			"Bottom of the Well MQ East Inner Room Pot 1",
			"Bottom of the Well MQ East Inner Room Pot 2",
			"Bottom of the Well MQ East Inner Room Pot 3",
			// Forest Temple MQ Pot
			"Forest Temple MQ Center Room Right Pot 1",
			"Forest Temple MQ Center Room Right Pot 2",
			"Forest Temple MQ Center Room Right Pot 3",
			"Forest Temple MQ Center Room Left Pot 1",
			"Forest Temple MQ Center Room Left Pot 2",
			"Forest Temple MQ Center Room Left Pot 3",
			"Forest Temple MQ Wolfos Room Pot",
			"Forest Temple MQ Upper Stalfos Pot 1",
			"Forest Temple MQ Upper Stalfos Pot 2",
			"Forest Temple MQ Upper Stalfos Pot 3",
			"Forest Temple MQ Upper Stalfos Pot 4",
			"Forest Temple MQ Blue Poe Room Pot 1",
			"Forest Temple MQ Blue Poe Room Pot 2",
			"Forest Temple MQ Blue Poe Room Pot 3",
			"Forest Temple MQ Green Poe Room Pot 1",
			"Forest Temple MQ Green Poe Room Pot 2",
			"Forest Temple MQ Basement Pot 1",
			"Forest Temple MQ Basement Pot 2",
			"Forest Temple MQ Basement Pot 3",
			"Forest Temple MQ Basement Pot 4",
			// Fire Temple MQ Pot
			"Fire Temple MQ First Room Pot 1",
			"Fire Temple MQ First Room Pot 2",
			"Fire Temple MQ Big Lava Room Left Pot",
			"Fire Temple MQ Big Lava Room Right Pot",
			"Fire Temple MQ Big Lava Room Alcove Pot",
			"Fire Temple MQ Near Boss Pot 1",
			"Fire Temple MQ Near Boss Pot 2",
			"Fire Temple MQ Narrow Path Room Pot 1",
			"Fire Temple MQ Narrow Path Room Pot 2",
			"Fire Temple MQ Flame Maze Right Upper Pot 1",
			"Fire Temple MQ Flame Maze Right Upper Pot 2",
			"Fire Temple MQ Flame Maze Right Pot 1",
			"Fire Temple MQ Flame Maze Right Pot 2",
			"Fire Temple MQ Flame Maze Left Pot 1",
			"Fire Temple MQ Shoot Torch On Wall Room Pot 1",
			"Fire Temple MQ Shoot Torch On Wall Room Pot 2",
			"Fire Temple MQ Iron Knuckle Room Pot 1",
			"Fire Temple MQ Iron Knuckle Room Pot 2",
			"Fire Temple MQ Iron Knuckle Room Pot 3",
			"Fire Temple MQ Iron Knuckle Room Pot 4",
			"Fire Temple MQ Boss Key Chest Room Pot",
			// Water Temple MQ Pot
			"Water Temple MQ Triple Wall Torch Pot 1",
			"Water Temple MQ Triple Wall Torch Pot 2",
			"Water Temple MQ Triple Wall Torch Pot 3",
			"Water Temple MQ Triple Wall Torch Pot 4",
			"Water Temple MQ Storage Room Pot 1",
			"Water Temple MQ Storage Room Pot 2",
			"Water Temple MQ Storage Room Pot 3",
			"Water Temple MQ Before Dark Link Top Pot 1",
			"Water Temple MQ Before Dark Link Top Pot 2",
			"Water Temple MQ Before Dark Link Lower Pot",
			"Water Temple MQ Room After Dark Link Pot",
			"Water Temple MQ Boss Key Chest Room Pot",
			"Water Temple MQ Before Upper Water Switch Pot 1",
			"Water Temple MQ Before Upper Water Switch Pot 2",
			"Water Temple MQ Before Upper Water Switch Pot 3",
			"Water Temple MQ Dodongo Room Pot 1",
			"Water Temple MQ Dodongo Room Pot 2",
			"Water Temple MQ Freestanding Key Room Pot",
			"Water Temple MQ L1 Torch Pot 1",
			"Water Temple MQ L1 Torch Pot 2",
			"Water Temple MQ Lizalfos Hallway Pot 1",
			"Water Temple MQ Lizalfos Hallway Pot 2",
			"Water Temple MQ Lizalfos Hallway Pot 3",
			"Water Temple MQ Lizalfos Hallway Gate Pot 1",
			"Water Temple MQ Lizalfos Hallway Gate Pot 2",
			"Water Temple MQ River Pot",
			// Shadow Temple MQ Pot
			"Shadow Temple MQ Whispering Walls Pot 1",
			"Shadow Temple MQ Whispering Walls Pot 2",
			"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 1",
			"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 2",
			"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 1",
			"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 2",
			"Shadow Temple MQ Compass Room Pot 1",
			"Shadow Temple MQ Compass Room Pot 2",
			"Shadow Temple MQ Falling Spikes Lower Pot 1",
			"Shadow Temple MQ Falling Spikes Lower Pot 2",
			"Shadow Temple MQ Falling Spikes Upper Pot 1",
			"Shadow Temple MQ Falling Spikes Upper Pot 2",
			"Shadow Temple MQ After Wind Pot 1",
			"Shadow Temple MQ After Wind Pot 2",
			"Shadow Temple MQ After Wind Flying Pot 1",
			"Shadow Temple MQ After Wind Flying Pot 2",
			"Shadow Temple MQ After Boat Pot 1",
			"Shadow Temple MQ After Boat Pot 2",
			"Shadow Temple MQ Near Boss Pot 1",
			"Shadow Temple MQ Near Boss Pot 2",
			"Shadow Temple MQ Bomb Flower Room Pot 1",
			"Shadow Temple MQ Bomb Flower Room Pot 2",
			"Shadow Temple MQ Spike Walls Pot",
			// Spirit Temple MQ Pot
			"Spirit Temple MQ Lobby Pot 1",
			"Spirit Temple MQ Lobby Pot 2",
			"Spirit Temple MQ Lobby Pot 3",
			"Spirit Temple MQ Lobby Pot 4",
			"Spirit Temple MQ Child Torch Slugs Room Pot",
			"Spirit Temple MQ Child 3 Gibdo Room Pot 1",
			"Spirit Temple MQ Child 3 Gibdo Room Pot 2",
			"Spirit Temple MQ Child Stalfos Fight Pot 1",
			"Spirit Temple MQ Child Stalfos Fight Pot 2",
			"Spirit Temple MQ Child Stalfos Fight Pot 3",
			"Spirit Temple MQ Child Climb Pot",
			"Spirit Temple MQ Central Chamber Floor Pot 1",
			"Spirit Temple MQ Central Chamber Floor Pot 2",
			"Spirit Temple MQ Central Chamber Floor Pot 3",
			"Spirit Temple MQ Central Chamber Top Left Pot (Left)",
			"Spirit Temple MQ Central Chamber Top Left Pot (Right)",
			"Spirit Temple MQ Sun Block Room Pot 1",
			"Spirit Temple MQ Sun Block Room Pot 2",
			"Spirit Temple MQ Below 4 Wallmasters Pot 1",
			"Spirit Temple MQ Below 4 Wallmasters Pot 2",
			"Spirit Temple MQ Shifting Wall Pot 1",
			"Spirit Temple MQ Shifting Wall Pot 2",
			"Spirit Temple MQ After Shifting Wall Room Pot 1",
			"Spirit Temple MQ After Shifting Wall Room Pot 2",
			"Spirit Temple MQ Big Mirror Pot 1",
			"Spirit Temple MQ Big Mirror Pot 2",
			"Spirit Temple MQ Big Mirror Pot 3",
			"Spirit Temple MQ Big Mirror Pot 4",
			// Ice Cavern MQ Pot
			"Ice Cavern MQ First Hall Pot",
			"Ice Cavern MQ Tektite Room Pot 1",
			"Ice Cavern MQ Tektite Room Pot 2",
			"Ice Cavern MQ Center Room Pot 1",
			"Ice Cavern MQ Center Room Pot 2",
			"Ice Cavern MQ Near End Pot",
			"Ice Cavern MQ Compass Room Pot 1",
			"Ice Cavern MQ Compass Room Pot 2",
			// Gerudo Training Ground MQ Pot
			"Gerudo Training Ground MQ Lobby Left Pot 1",
			"Gerudo Training Ground MQ Lobby Left Pot 2",
			"Gerudo Training Ground MQ Lobby Right Pot 1",
			"Gerudo Training Ground MQ Lobby Right Pot 2",
			// Ganons Castle MQ Pot
			"Ganons Castle MQ Water Trial Pot 1",
			"Ganons Castle MQ Water Trial Pot 2",
			"Ganons Castle MQ Forest Trial Pot 1",
			"Ganons Castle MQ Forest Trial Pot 2",
			"Ganons Castle MQ Light Trial Pot 1",
			"Ganons Castle MQ Light Trial Pot 2",
			"Ganons Castle MQ Shadow Trial Pot 1",
			"Ganons Castle MQ Shadow Trial Pot 2",
			"Ganons Castle MQ Fire Trial Pot 1",
			"Ganons Castle MQ Fire Trial Pot 2",
			"Ganons Castle MQ Spirit Trial Pot 1",
			"Ganons Castle MQ Spirit Trial Pot 2",
		],
		crate : [
			// OVERWORLD
			//

			// Market Crate
			"Market Night Red Rupee Crate",
			"Market Night Green Rupee Crate 1",
			"Market Night Green Rupee Crate 2",
			"Market Night Green Rupee Crate 3",
			"Market Dog Lady House Crate",
			"Market Guard House Child Crate",
			// LLR Crate
			"LLR Child Crate",
			// Kak Crate
			"Kak Adult Red Rupee Crate",
			"Kak Adult Arrows Crate",
			// GC Crate
			"GC Boulder Maze Crate",
			// GV Crate
			"GV Crate Near Cow",
			"GV Freestanding PoH Crate",
			// GF Crate
			"GF Above Jail Crate",
			// Hideout Crate
			"Hideout Break Room Crate 1",
			"Hideout Break Room Crate 2",
			"Hideout Break Room Hallway Crate 1",
			"Hideout Break Room Hallway Crate 2",
			"Hideout 3 Torch Jail Crate",
			"Hideout 1 Torch Jail Crate",
			"Hideout Near Kitchen Crate 1",
			"Hideout Near Kitchen Crate 2",
			"Hideout Near Kitchen Crate 3",
			"Hideout Near Kitchen Crate 4",
			"Hideout Near Kitchen Crate 5",
			"Hideout 2 Torch Jail Crate 1",
			"Hideout 2 Torch Jail Crate 2",
			// Wasteland Crate
			"Wasteland Crate Before Quicksand",
			"Wasteland Crate After Quicksand 1",
			"Wasteland Crate After Quicksand 2",
			"Wasteland Crate After Quicksand 3",
			"Wasteland Crate Near Colossus",

			// DUNGEON
			//

			// Jabu Jabus Belly Crate
			"Jabu Jabus Belly Small Wooden Crate",
			// Spirit Temple Crate
			"Spirit Temple Before Child Climb Small Wooden Crate 1",
			"Spirit Temple Before Child Climb Small Wooden Crate 2",

			// MQ ONLY
			//

			// Deku Tree MQ Crate
			"Deku Tree MQ Lobby Crate",
			"Deku Tree MQ Slingshot Room Crate 1",
			"Deku Tree MQ Slingshot Room Crate 2",
			// Dodongos Cavern MQ Crate
			"Dodongos Cavern MQ Staircase Crate Bottom Left",
			"Dodongos Cavern MQ Staircase Crate Bottom Right",
			"Dodongos Cavern MQ Staircase Crate Mid Left",
			"Dodongos Cavern MQ Staircase Crate Top Left",
			"Dodongos Cavern MQ Staircase Crate Mid Right",
			"Dodongos Cavern MQ Staircase Crate Top Right",
			"Dodongos Cavern MQ Poes Room Crate 5",
			"Dodongos Cavern MQ Poes Room Crate 6",
			"Dodongos Cavern MQ Poes Room Crate 1",
			"Dodongos Cavern MQ Poes Room Crate 2",
			"Dodongos Cavern MQ Poes Room Crate 3",
			"Dodongos Cavern MQ Poes Room Crate 4",
			"Dodongos Cavern MQ Poes Room Crate Near Bomb Flower",
			"Dodongos Cavern MQ Poes Room Crate 7",
			"Dodongos Cavern MQ Larvae Room Crate 1",
			"Dodongos Cavern MQ Larvae Room Crate 2",
			"Dodongos Cavern MQ Larvae Room Crate 3",
			"Dodongos Cavern MQ Larvae Room Crate 4",
			"Dodongos Cavern MQ Larvae Room Crate 5",
			"Dodongos Cavern MQ Larvae Room Crate 6",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 1",
			"Dodongos Cavern MQ After Upper Lizalfos Crate 2",
			// Forest Temple MQ Crate
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 1",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 2",
			"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 3",
			// Fire Temple MQ Crate
			"Fire Temple MQ Near Boss Left Crate 1",
			"Fire Temple MQ Near Boss Left Crate 2",
			"Fire Temple MQ Near Boss Right Lower Crate 1",
			"Fire Temple MQ Near Boss Right Lower Crate 2",
			"Fire Temple MQ Near Boss Right Mid Crate",
			"Fire Temple MQ Near Boss Right Upper Crate",
			"Fire Temple MQ Shortcut Crate 1",
			"Fire Temple MQ Shortcut Crate 2",
			"Fire Temple MQ Shortcut Crate 3",
			"Fire Temple MQ Shortcut Crate 4",
			"Fire Temple MQ Shortcut Crate 5",
			"Fire Temple MQ Shortcut Crate 6",
			"Fire Temple MQ Lower Lizalfos Maze Crate 1",
			"Fire Temple MQ Lower Lizalfos Maze Crate 2",
			"Fire Temple MQ Lower Lizalfos Maze Crate 3",
			"Fire Temple MQ Upper Lizalfos Maze Crate 1",
			"Fire Temple MQ Upper Lizalfos Maze Crate 2",
			"Fire Temple MQ Upper Lizalfos Maze Crate 3",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Right Crate 2",
			"Fire Temple MQ Shoot Torch On Wall Room Center Crate",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 1",
			"Fire Temple MQ Shoot Torch On Wall Room Left Crate 2",
			// Water Temple MQ Crate
			"Water Temple MQ Central Pillar Upper Crate 1",
			"Water Temple MQ Central Pillar Upper Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 1",
			"Water Temple MQ Central Pillar Lower Crate 2",
			"Water Temple MQ Central Pillar Lower Crate 3",
			"Water Temple MQ Central Pillar Lower Crate 4",
			"Water Temple MQ Central Pillar Lower Crate 5",
			"Water Temple MQ Central Pillar Lower Crate 6",
			"Water Temple MQ Central Pillar Lower Crate 7",
			"Water Temple MQ Central Pillar Lower Crate 8",
			"Water Temple MQ Central Pillar Lower Crate 9",
			"Water Temple MQ Central Pillar Lower Crate 10",
			"Water Temple MQ Central Pillar Lower Crate 11",
			"Water Temple MQ Central Pillar Lower Crate 12",
			"Water Temple MQ Central Pillar Lower Crate 13",
			"Water Temple MQ Central Pillar Lower Crate 14",
			"Water Temple MQ Triple Wall Torch Submerged Crate 1",
			"Water Temple MQ Triple Wall Torch Submerged Crate 2",
			"Water Temple MQ Triple Wall Torch Submerged Crate 3",
			"Water Temple MQ Triple Wall Torch Submerged Crate 4",
			"Water Temple MQ Triple Wall Torch Submerged Crate 5",
			"Water Temple MQ Triple Wall Torch Submerged Crate 6",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 1",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 2",
			"Water Temple MQ Triple Wall Torch Behind Gate Crate 3",
			"Water Temple MQ Storage Room Crate 1",
			"Water Temple MQ Storage Room Crate 2",
			"Water Temple MQ Storage Room Crate 3",
			"Water Temple MQ Storage Room Crate 4",
			"Water Temple MQ Storage Room Crate 5",
			"Water Temple MQ Storage Room Crate 6",
			"Water Temple MQ Storage Room Crate 7",
			"Water Temple MQ Dragon Statue By Torches Crate 1",
			"Water Temple MQ Dragon Statue By Torches Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 1",
			"Water Temple MQ Dragon Statue Submerged Crate 2",
			"Water Temple MQ Dragon Statue Submerged Crate 3",
			"Water Temple MQ Dragon Statue Submerged Crate 4",
			"Water Temple MQ Dragon Statue Near Door Crate 1",
			"Water Temple MQ Dragon Statue Near Door Crate 2",
			"Water Temple MQ Boss Key Chest Room Upper Crate",
			"Water Temple MQ Boss Key Chest Room Lower Crate 1",
			"Water Temple MQ Boss Key Chest Room Lower Crate 2",
			"Water Temple MQ Boss Key Chest Room Lower Crate 3",
			"Water Temple MQ Boss Key Chest Room Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 1",
			"Water Temple MQ Before Upper Water Switch Lower Crate 2",
			"Water Temple MQ Before Upper Water Switch Lower Crate 3",
			"Water Temple MQ Before Upper Water Switch Lower Crate 4",
			"Water Temple MQ Before Upper Water Switch Lower Crate 5",
			"Water Temple MQ Before Upper Water Switch Lower Crate 6",
			"Water Temple MQ Before Upper Water Switch Upper Crate 1",
			"Water Temple MQ Before Upper Water Switch Upper Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 1",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 2",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 3",
			"Water Temple MQ Freestanding Key Area Behind Gate Crate 4",
			"Water Temple MQ Freestanding Key Area Front Crate 1",
			"Water Temple MQ Freestanding Key Area Front Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 1",
			"Water Temple MQ Freestanding Key Area Submerged Crate 2",
			"Water Temple MQ Freestanding Key Area Submerged Crate 3",
			"Water Temple MQ Freestanding Key Area Submerged Crate 4",
			"Water Temple MQ Freestanding Key Area Submerged Crate 5",
			"Water Temple MQ Freestanding Key Area Submerged Crate 6",
			"Water Temple MQ Dodongo Room Lower Crate 1",
			"Water Temple MQ Dodongo Room Lower Crate 2",
			"Water Temple MQ Dodongo Room Lower Crate 3",
			"Water Temple MQ Dodongo Room Upper Crate",
			"Water Temple MQ Dodongo Room Hall Crate",
			"Water Temple MQ Freestanding Key Room Crate 1",
			"Water Temple MQ Freestanding Key Room Crate 2",
			"Water Temple MQ Freestanding Key Room Crate 3",
			"Water Temple MQ Freestanding Key Room Crate 4",
			"Water Temple MQ Freestanding Key Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Gate Crate 1",
			"Water Temple MQ Lizalfos Hallway Gate Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 1",
			"Water Temple MQ Lizalfos Hallway Room Crate 2",
			"Water Temple MQ Lizalfos Hallway Room Crate 3",
			"Water Temple MQ Lizalfos Hallway Room Crate 4",
			"Water Temple MQ Lizalfos Hallway Room Crate 5",
			"Water Temple MQ Lizalfos Hallway Hall Crate 1",
			"Water Temple MQ Lizalfos Hallway Hall Crate 2",
			"Water Temple MQ Lizalfos Hallway Hall Crate 3",
			// Shadow Temple MQ Crate
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 1",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 2",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 3",
			"Shadow Temple MQ Truth Spinner Small Wooden Crate 4",
			// Spirit Temple MQ Crate
			"Spirit Temple MQ Central Chamber Crate 1",
			"Spirit Temple MQ Central Chamber Crate 2",
			"Spirit Temple MQ Big Mirror Crate 1",
			"Spirit Temple MQ Big Mirror Crate 2",
			"Spirit Temple MQ Big Mirror Crate 3",
			"Spirit Temple MQ Big Mirror Crate 4",
			// Gerudo Training Ground MQ Crate
			"Gerudo Training Ground MQ Maze Crate",
		],
		beehive : [
			// OVERWORLD
			//

			// KF Beehive
			"KF Storms Grotto Beehive 1",
			"KF Storms Grotto Beehive 2",
			// LW Beehive
			"LW Near Shortcuts Grotto Beehive 1",
			"LW Near Shortcuts Grotto Beehive 2",
			"LW Scrubs Grotto Beehive",
			// SFM Beehive
			"SFM Storms Grotto Beehive",
			// HF Beehive
			"HF Near Market Grotto Beehive 1",
			"HF Near Market Grotto Beehive 2",
			"HF Open Grotto Beehive 1",
			"HF Open Grotto Beehive 2",
			"HF Southeast Grotto Beehive 1",
			"HF Southeast Grotto Beehive 2",
			"HF Inside Fence Grotto Beehive",
			// LLR Beehive
			"LLR Grotto Beehive",
			// Kak Beehive
			"Kak Open Grotto Beehive 1",
			"Kak Open Grotto Beehive 2",
			// DMT Beehive
			"DMT Cow Grotto Beehive",
			"DMT Storms Grotto Beehive 1",
			"DMT Storms Grotto Beehive 2",
			// GC Beehive
			"GC Grotto Beehive",
			// DMC Beehive
			"DMC Upper Grotto Beehive 1",
			"DMC Upper Grotto Beehive 2",
			"DMC Hammer Grotto Beehive",
			// ZR Beehive
			"ZR Open Grotto Beehive 1",
			"ZR Open Grotto Beehive 2",
			"ZR Storms Grotto Beehive",
			// ZD Beehive
			"ZD In Front of King Zora Beehive 1",
			"ZD In Front of King Zora Beehive 2",
			"ZD Behind King Zora Beehive",
			// LH Beehive
			"LH Grotto Beehive",
			// GV Beehive
			"GV Storms Grotto Beehive",
			// Colossus Beehive
			"Colossus Grotto Beehive",

			// DUNGEON
			//

			// MQ ONLY
			//

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
		{	name : '// v7 : dungeon rewards & songs',
			locs : [

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
		{	name : '// v7 : KF & LW & SFM',
			locs : [
				// KF Freestanding
				"KF Behind Midos Blue Rupee",
				"KF Boulder Maze Blue Rupee 1",
				"KF Boulder Maze Blue Rupee 2",
				"KF End of Bridge Blue Rupee",
				"KF Top of Sarias Recovery Heart 1",
				"KF Top of Sarias Recovery Heart 2",
				"KF Top of Sarias Recovery Heart 3",
				"KF Bean Platform Green Rupee 1",
				"KF Bean Platform Green Rupee 2",
				"KF Bean Platform Green Rupee 3",
				"KF Bean Platform Green Rupee 4",
				"KF Bean Platform Green Rupee 5",
				"KF Bean Platform Green Rupee 6",
				"KF Bean Platform Red Rupee",
				"KF Grass Near Ramp Green Rupee 1",
				"KF Grass Near Ramp Green Rupee 2",
				"KF Grass Near Midos Green Rupee 1",
				"KF Grass Near Midos Green Rupee 2",
				"KF Sarias House Recovery Heart 1",
				"KF Sarias House Recovery Heart 2",
				"KF Sarias House Recovery Heart 3",
				"KF Sarias House Recovery Heart 4",
				"KF Shop Blue Rupee",
				// KF Pot
				"KF Links House Pot",
				"KF Know it All House Pot 1",
				"KF Know it All House Pot 2",
				"KF House of Twins Pot 1",
				"KF House of Twins Pot 2",
				// KF Beehive
				"KF Storms Grotto Beehive 1",
				"KF Storms Grotto Beehive 2",
				// LW Freestanding
				"LW Under Boulder Blue Rupee",
				"LW Underwater Green Rupee 1",
				"LW Underwater Green Rupee 2",
				"LW Underwater Shortcut Green Rupee",
				"LW Underwater Green Rupee 3",
				"LW Underwater Green Rupee 4",
				"LW Underwater Green Rupee 5",
				"LW Underwater Green Rupee 6",
				"LW Underwater Green Rupee 7",
				// LW Beehive
				"LW Near Shortcuts Grotto Beehive 1",
				"LW Near Shortcuts Grotto Beehive 2",
				"LW Scrubs Grotto Beehive",
				// SFM Beehive
				"SFM Storms Grotto Beehive",
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
		{	name : '// v7 : HF & Market & ToT & HC & OGC',
			locs : [
				// HF Pot
				"HF Cow Grotto Pot 1",
				"HF Cow Grotto Pot 2",
				// HF Beehive
				"HF Near Market Grotto Beehive 1",
				"HF Near Market Grotto Beehive 2",
				"HF Open Grotto Beehive 1",
				"HF Open Grotto Beehive 2",
				"HF Southeast Grotto Beehive 1",
				"HF Southeast Grotto Beehive 2",
				"HF Inside Fence Grotto Beehive",
				// Market Crate
				"Market Night Red Rupee Crate",
				"Market Night Green Rupee Crate 1",
				"Market Night Green Rupee Crate 2",
				"Market Night Green Rupee Crate 3",
				"Market Dog Lady House Crate",
				"Market Guard House Child Crate",
				// Market Pot
				"Market Guard House Child Pot 1",
				"Market Guard House Child Pot 2",
				"Market Guard House Child Pot 3",
				"Market Guard House Child Pot 4",
				"Market Guard House Child Pot 5",
				"Market Guard House Child Pot 6",
				"Market Guard House Child Pot 7",
				"Market Guard House Child Pot 8",
				"Market Guard House Child Pot 9",
				"Market Guard House Child Pot 10",
				"Market Guard House Child Pot 11",
				"Market Guard House Child Pot 12",
				"Market Guard House Child Pot 13",
				"Market Guard House Child Pot 14",
				"Market Guard House Child Pot 15",
				"Market Guard House Child Pot 16",
				"Market Guard House Child Pot 17",
				"Market Guard House Child Pot 18",
				"Market Guard House Child Pot 19",
				"Market Guard House Child Pot 20",
				"Market Guard House Child Pot 21",
				"Market Guard House Child Pot 22",
				"Market Guard House Child Pot 23",
				"Market Guard House Child Pot 24",
				"Market Guard House Child Pot 25",
				"Market Guard House Child Pot 26",
				"Market Guard House Child Pot 27",
				"Market Guard House Child Pot 28",
				"Market Guard House Child Pot 29",
				"Market Guard House Child Pot 30",
				"Market Guard House Child Pot 31",
				"Market Guard House Child Pot 32",
				"Market Guard House Child Pot 33",
				"Market Guard House Child Pot 34",
				"Market Guard House Child Pot 35",
				"Market Guard House Child Pot 36",
				"Market Guard House Child Pot 37",
				"Market Guard House Child Pot 38",
				"Market Guard House Child Pot 39",
				"Market Guard House Child Pot 40",
				"Market Guard House Child Pot 41",
				"Market Guard House Child Pot 42",
				"Market Guard House Child Pot 43",
				"Market Guard House Child Pot 44",
				"Market Guard House Adult Pot 1",
				"Market Guard House Adult Pot 2",
				"Market Guard House Adult Pot 3",
				"Market Guard House Adult Pot 4",
				"Market Guard House Adult Pot 5",
				"Market Guard House Adult Pot 6",
				"Market Guard House Adult Pot 7",
				"Market Man in Green House Pot 1",
				"Market Man in Green House Pot 2",
				"Market Man in Green House Pot 3",
				// HC Pot
				"HC Storms Grotto Pot 1",
				"HC Storms Grotto Pot 2",
				"HC Storms Grotto Pot 3",
				"HC Storms Grotto Pot 4",
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
		{	name : '// v7 : LLR & Kak & Graveyard',
			locs : [
				// LLR Pot
				"LLR Front Pot 1",
				"LLR Front Pot 2",
				"LLR Front Pot 3",
				"LLR Front Pot 4",
				"LLR Rain Shed Pot 1",
				"LLR Rain Shed Pot 2",
				"LLR Rain Shed Pot 3",
				"LLR Talons House Pot 1",
				"LLR Talons House Pot 2",
				"LLR Talons House Pot 3",
				// LLR Crate
				"LLR Child Crate",
				// LLR Beehive
				"LLR Grotto Beehive",
				// Kak Pot
				"Kak Near Potion Shop Pot 1",
				"Kak Near Potion Shop Pot 2",
				"Kak Near Potion Shop Pot 3",
				"Kak Near Impas House Pot 1",
				"Kak Near Impas House Pot 2",
				"Kak Near Impas House Pot 3",
				"Kak Near Guards House Pot 1",
				"Kak Near Guards House Pot 2",
				"Kak Near Guards House Pot 3",
				"Kak Near Odd Medicine Building Pot 1",
				"Kak Near Odd Medicine Building Pot 2",
				// Kak Crate
				"Kak Adult Red Rupee Crate",
				"Kak Adult Arrows Crate",
				// Kak Beehive
				"Kak Open Grotto Beehive 1",
				"Kak Open Grotto Beehive 2",
				// Graveyard Freestanding
				"Graveyard Dampe Race Rupee 1",
				"Graveyard Dampe Race Rupee 2",
				"Graveyard Dampe Race Rupee 3",
				"Graveyard Dampe Race Rupee 4",
				"Graveyard Dampe Race Rupee 5",
				"Graveyard Dampe Race Rupee 6",
				"Graveyard Dampe Race Rupee 7",
				"Graveyard Dampe Race Rupee 8",
				// Graveyard Pot
				"Graveyard Dampe Pot 1",
				"Graveyard Dampe Pot 2",
				"Graveyard Dampe Pot 3",
				"Graveyard Dampe Pot 4",
				"Graveyard Dampe Pot 5",
				"Graveyard Dampe Pot 6",
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
		{	name : '// v7 : DMT & GC & DMC',
			locs : [
				// DMT Freestanding
				"DMT Rock Red Rupee",
				"DMT Rock Blue Rupee",
				"DMT Cow Grotto Green Rupee 1",
				"DMT Cow Grotto Green Rupee 2",
				"DMT Cow Grotto Green Rupee 3",
				"DMT Cow Grotto Green Rupee 4",
				"DMT Cow Grotto Green Rupee 5",
				"DMT Cow Grotto Green Rupee 6",
				"DMT Cow Grotto Red Rupee",
				"DMT Cow Grotto Recovery Heart 1",
				"DMT Cow Grotto Recovery Heart 2",
				"DMT Cow Grotto Recovery Heart 3",
				"DMT Cow Grotto Recovery Heart 4",
				// DMT Beehive
				"DMT Cow Grotto Beehive",
				"DMT Storms Grotto Beehive 1",
				"DMT Storms Grotto Beehive 2",
				// GC Freestanding
				"GC Spinning Pot Bomb Drop 1",
				"GC Spinning Pot Bomb Drop 2",
				"GC Spinning Pot Bomb Drop 3",
				"GC Spinning Pot Rupee Drop 1",
				"GC Spinning Pot Rupee Drop 2",
				"GC Spinning Pot Rupee Drop 3",
				"GC Spinning Pot PoH Drop Rupee 1",
				"GC Spinning Pot PoH Drop Rupee 2",
				// GC Pot
				"GC Darunia Pot 1",
				"GC Darunia Pot 2",
				"GC Darunia Pot 3",
				"GC Medigoron Pot",
				"GC Lower Staircase Pot 1",
				"GC Lower Staircase Pot 2",
				"GC Upper Staircase Pot 1",
				"GC Upper Staircase Pot 2",
				"GC Upper Staircase Pot 3",
				// GC Crate
				"GC Boulder Maze Crate",
				// GC Beehive
				"GC Grotto Beehive",
				// DMC Freestanding
				"DMC Adult Green Rupee 1",
				"DMC Adult Green Rupee 2",
				"DMC Adult Green Rupee 3",
				"DMC Adult Green Rupee 4",
				"DMC Adult Green Rupee 5",
				"DMC Adult Green Rupee 6",
				"DMC Adult Red Rupee",
				"DMC Child Red Rupee 1",
				"DMC Child Red Rupee 2",
				"DMC Child Blue Rupee 1",
				"DMC Child Blue Rupee 2",
				"DMC Child Blue Rupee 3",
				"DMC Child Blue Rupee 4",
				"DMC Child Blue Rupee 5",
				"DMC Child Blue Rupee 6",
				// DMC Pot
				"DMC Near GC Pot 1",
				"DMC Near GC Pot 2",
				"DMC Near GC Pot 3",
				"DMC Near GC Pot 4",
				// DMC Beehive
				"DMC Upper Grotto Beehive 1",
				"DMC Upper Grotto Beehive 2",
				"DMC Hammer Grotto Beehive",
			],
		},
		{	name : '// ZR & ZD & ZF & LH',
			locs : [
				// ZR
				"ZR Magic Bean Salesman",
				"ZR Open Grotto Chest",
				"ZR Frogs Zeldas Lullaby", // v7 (frogs)
				"ZR Frogs Eponas Song",    // v7 (frogs)
				"ZR Frogs Sarias Song",    // v7 (frogs)
				"ZR Frogs Suns Song",      // v7 (frogs)
				"ZR Frogs Song of Time",   // v7 (frogs)
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
		{	name : '// v7 : ZR & ZD & ZF & LH',
			locs : [
				// ZR Freestanding
				"ZR Waterfall Red Rupee 1",
				"ZR Waterfall Red Rupee 2",
				"ZR Waterfall Red Rupee 3",
				"ZR Waterfall Red Rupee 4",
				// ZR Beehive
				"ZR Open Grotto Beehive 1",
				"ZR Open Grotto Beehive 2",
				"ZR Storms Grotto Beehive",
				// ZD Pot
				"ZD Pot 1",
				"ZD Pot 2",
				"ZD Pot 3",
				"ZD Pot 4",
				"ZD Pot 5",
				// ZD Beehive
				"ZD In Front of King Zora Beehive 1",
				"ZD In Front of King Zora Beehive 2",
				"ZD Behind King Zora Beehive",
				// ZF Freestanding
				"ZF Bottom Green Rupee 1",
				"ZF Bottom Green Rupee 2",
				"ZF Bottom Green Rupee 3",
				"ZF Bottom Green Rupee 4",
				"ZF Bottom Green Rupee 5",
				"ZF Bottom Green Rupee 6",
				"ZF Bottom Green Rupee 7",
				"ZF Bottom Green Rupee 8",
				"ZF Bottom Green Rupee 9",
				"ZF Bottom Green Rupee 10",
				"ZF Bottom Green Rupee 11",
				"ZF Bottom Green Rupee 12",
				"ZF Bottom Green Rupee 13",
				"ZF Bottom Green Rupee 14",
				"ZF Bottom Green Rupee 15",
				"ZF Bottom Green Rupee 16",
				"ZF Bottom Green Rupee 17",
				"ZF Bottom Green Rupee 18",
				// ZF Pot
				"ZF Hidden Cave Pot 1",
				"ZF Hidden Cave Pot 2",
				"ZF Hidden Cave Pot 3",
				"ZF Near Jabu Pot 1",
				"ZF Near Jabu Pot 2",
				"ZF Near Jabu Pot 3",
				"ZF Near Jabu Pot 4",
				// LH Freestanding
				"LH Underwater Near Shore Green Rupee",
				"LH Underwater Green Rupee 1",
				"LH Underwater Green Rupee 2",
				"LH Lab Dive Red Rupee 1",
				"LH Lab Dive Red Rupee 2",
				"LH Lab Dive Red Rupee 3",
				// LH Beehive
				"LH Grotto Beehive",
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
		{	name : '// v7 : GV & GF & Wasteland & Colossus',
			locs : [
				// GV Freestanding
				"GV Octorok Grotto Red Rupee",
				"GV Octorok Grotto Blue Rupee 1",
				"GV Octorok Grotto Blue Rupee 2",
				"GV Octorok Grotto Blue Rupee 3",
				"GV Octorok Grotto Green Rupee 1",
				"GV Octorok Grotto Green Rupee 2",
				"GV Octorok Grotto Green Rupee 3",
				"GV Octorok Grotto Green Rupee 4",
				// GV Crate
				"GV Crate Near Cow",
				"GV Freestanding PoH Crate",
				// GV Beehive
				"GV Storms Grotto Beehive",
				// GF Crate
				"GF Above Jail Crate",
				// Hideout Pot
				"Hideout Break Room Pot 1",
				"Hideout Break Room Pot 2",
				"Hideout 1 Torch Jail Pot 1",
				"Hideout 1 Torch Jail Pot 2",
				"Hideout 1 Torch Jail Pot 3",
				"Hideout Kitchen Pot 1",
				"Hideout Kitchen Pot 2",
				"Hideout 4 Torch Jail Pot 1",
				"Hideout 4 Torch Jail Pot 2",
				"Hideout 2 Torch Jail Pot 1",
				"Hideout 2 Torch Jail Pot 2",
				"Hideout 2 Torch Jail Pot 3",
				"Hideout 2 Torch Jail In Cell Pot 1",
				"Hideout 2 Torch Jail In Cell Pot 2",
				"Hideout 2 Torch Jail In Cell Pot 3",
				"Hideout 2 Torch Jail In Cell Pot 4",
				// Hideout Crate
				"Hideout Break Room Crate 1",
				"Hideout Break Room Crate 2",
				"Hideout Break Room Hallway Crate 1",
				"Hideout Break Room Hallway Crate 2",
				"Hideout 3 Torch Jail Crate",
				"Hideout 1 Torch Jail Crate",
				"Hideout Near Kitchen Crate 1",
				"Hideout Near Kitchen Crate 2",
				"Hideout Near Kitchen Crate 3",
				"Hideout Near Kitchen Crate 4",
				"Hideout Near Kitchen Crate 5",
				"Hideout 2 Torch Jail Crate 1",
				"Hideout 2 Torch Jail Crate 2",
				// Wasteland Pot
				"Wasteland Near GS Pot 1",
				"Wasteland Near GS Pot 2",
				"Wasteland Near GS Pot 3",
				// Wasteland Crate
				"Wasteland Crate Before Quicksand",
				"Wasteland Crate After Quicksand 1",
				"Wasteland Crate After Quicksand 2",
				"Wasteland Crate After Quicksand 3",
				"Wasteland Crate Near Colossus",
				// Colossus Beehive
				"Colossus Grotto Beehive",
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
		{	name : '// v7 : Deku',
			locs : [
				// Deku Tree Freestanding
				"Deku Tree Lower Lobby Recovery Heart",
				"Deku Tree Upper Lobby Recovery Heart",
				"Deku Tree Basement Recovery Heart 1",
				"Deku Tree Basement Recovery Heart 2",
				"Deku Tree Basement Recovery Heart 3",
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
		{	name : '// v7 : Dodongo',
			locs : [
				// Dodongos Cavern Freestanding
				"Dodongos Cavern Lizalfos Upper Recovery Heart 1",
				"Dodongos Cavern Lizalfos Upper Recovery Heart 2",
				"Dodongos Cavern Blade Room Behind Block Recovery Heart",
				"Dodongos Cavern Lower Lizalfos Hidden Recovery Heart", // (shared with MQ)
				// Dodongos Cavern Pot
				"Dodongos Cavern Right Side Pot 1",
				"Dodongos Cavern Right Side Pot 2",
				"Dodongos Cavern Right Side Pot 3",
				"Dodongos Cavern Right Side Pot 4",
				"Dodongos Cavern Right Side Pot 5",
				"Dodongos Cavern Right Side Pot 6",
				"Dodongos Cavern Lower Lizalfos Pot 1",
				"Dodongos Cavern Lower Lizalfos Pot 2",
				"Dodongos Cavern Lower Lizalfos Pot 3",
				"Dodongos Cavern Lower Lizalfos Pot 4",
				"Dodongos Cavern Torch Room Pot 1",
				"Dodongos Cavern Torch Room Pot 2",
				"Dodongos Cavern Torch Room Pot 3",
				"Dodongos Cavern Torch Room Pot 4",
				"Dodongos Cavern Staircase Pot 1",
				"Dodongos Cavern Staircase Pot 2",
				"Dodongos Cavern Staircase Pot 3",
				"Dodongos Cavern Staircase Pot 4",
				"Dodongos Cavern Last Block Pot 1",
				"Dodongos Cavern Last Block Pot 2",
				"Dodongos Cavern Last Block Pot 3",
				"Dodongos Cavern Blade Room Pot 1",
				"Dodongos Cavern Blade Room Pot 2",
				"Dodongos Cavern Single Eye Switch Room Pot 1",
				"Dodongos Cavern Single Eye Switch Room Pot 2",
				"Dodongos Cavern Double Eye Switch Room Pot 1",
				"Dodongos Cavern Double Eye Switch Room Pot 2",
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
		{	name : '// v7 : Jabu',
			locs : [
				// Jabu Jabus Belly Pot
				"Jabu Jabus Belly Above Big Octo Pot 1",
				"Jabu Jabus Belly Above Big Octo Pot 2",
				"Jabu Jabus Belly Basement 2 Octoroks Pot 1",
				"Jabu Jabus Belly Basement 2 Octoroks Pot 2",
				"Jabu Jabus Belly Basement 2 Octoroks Pot 3",
				"Jabu Jabus Belly Basement 2 Octoroks Pot 4",
				"Jabu Jabus Belly Basement Switch Room Pot 1",
				"Jabu Jabus Belly Basement Switch Room Pot 2",
				"Jabu Jabus Belly Barinade Pot 1", // (shared with MQ)
				"Jabu Jabus Belly Barinade Pot 2", // (shared with MQ)
				"Jabu Jabus Belly Barinade Pot 3", // (shared with MQ)
				"Jabu Jabus Belly Barinade Pot 4", // (shared with MQ)
				"Jabu Jabus Belly Barinade Pot 5", // (shared with MQ)
				"Jabu Jabus Belly Barinade Pot 6", // (shared with MQ)
				// Jabu Jabus Belly Crate
				"Jabu Jabus Belly Small Wooden Crate",
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
		{	name : '// v7 : Well',
			locs : [
				// Bottom of the Well Freestanding
				"Bottom of the Well Center Room Pit Fall Blue Rupee 1",
				"Bottom of the Well Center Room Pit Fall Blue Rupee 2",
				"Bottom of the Well Center Room Pit Fall Blue Rupee 3",
				"Bottom of the Well Center Room Pit Fall Blue Rupee 4",
				"Bottom of the Well Center Room Pit Fall Blue Rupee 5",
				"Bottom of the Well Coffin Recovery Heart 1",
				"Bottom of the Well Coffin Recovery Heart 2",
				// Bottom of the Well Pot
				"Bottom of the Well Left Side Pot 1",
				"Bottom of the Well Left Side Pot 2",
				"Bottom of the Well Left Side Pot 3",
				"Bottom of the Well Near Entrance Pot 1",
				"Bottom of the Well Near Entrance Pot 2",
				"Bottom of the Well Underwater Pot",
				"Bottom of the Well Basement Pot 1",
				"Bottom of the Well Basement Pot 2",
				"Bottom of the Well Basement Pot 3",
				"Bottom of the Well Basement Pot 4",
				"Bottom of the Well Basement Pot 5",
				"Bottom of the Well Basement Pot 6",
				"Bottom of the Well Basement Pot 7",
				"Bottom of the Well Basement Pot 8",
				"Bottom of the Well Basement Pot 9",
				"Bottom of the Well Basement Pot 10",
				"Bottom of the Well Basement Pot 11",
				"Bottom of the Well Basement Pot 12",
				"Bottom of the Well Fire Keese Pot",
				"Bottom of the Well West Inner Room Flying Pot 1",
				"Bottom of the Well West Inner Room Flying Pot 2",
				"Bottom of the Well West Inner Room Flying Pot 3",
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
		{	name : '// v7 : Forest',
			locs : [
				// Forest Temple Freestanding
				"Forest Temple Courtyard Recovery Heart 1",
				"Forest Temple Courtyard Recovery Heart 2",
				"Forest Temple Well Recovery Heart 1",
				"Forest Temple Well Recovery Heart 2",
				// Forest Temple Pot
				"Forest Temple Center Room Right Pot 1",
				"Forest Temple Center Room Right Pot 2",
				"Forest Temple Center Room Right Pot 3",
				"Forest Temple Center Room Left Pot 1",
				"Forest Temple Center Room Left Pot 2",
				"Forest Temple Center Room Left Pot 3",
				"Forest Temple Lower Stalfos Pot",
				"Forest Temple Upper Stalfos Pot 1",
				"Forest Temple Upper Stalfos Pot 2",
				"Forest Temple Upper Stalfos Pot 3",
				"Forest Temple Upper Stalfos Pot 4",
				"Forest Temple Blue Poe Room Pot 1",
				"Forest Temple Blue Poe Room Pot 2",
				"Forest Temple Blue Poe Room Pot 3",
				"Forest Temple Frozen Eye Switch Room Pot 1",
				"Forest Temple Frozen Eye Switch Room Pot 2",
				"Forest Temple Green Poe Room Pot 1",
				"Forest Temple Green Poe Room Pot 2",
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
		{	name : '// v7 : Fire',
			locs : [
				// Fire Temple Freestanding
				"Fire Temple Elevator Room Recovery Heart 1",
				"Fire Temple Elevator Room Recovery Heart 2",
				"Fire Temple Elevator Room Recovery Heart 3",
				"Fire Temple Narrow Path Room Recovery Heart 1",
				"Fire Temple Narrow Path Room Recovery Heart 2",
				"Fire Temple Narrow Path Room Recovery Heart 3",
				"Fire Temple Moving Fire Room Recovery Heart 1",
				"Fire Temple Moving Fire Room Recovery Heart 2",
				"Fire Temple Moving Fire Room Recovery Heart 3",
				// Fire Temple Pot
				"Fire Temple Big Lava Room Pot 1",
				"Fire Temple Big Lava Room Pot 2",
				"Fire Temple Big Lava Room Pot 3",
				"Fire Temple Near Boss Pot 1",
				"Fire Temple Near Boss Pot 2",
				"Fire Temple Flame Maze Right Side Pot 1",
				"Fire Temple Flame Maze Right Side Pot 2",
				"Fire Temple Flame Maze Right Side Pot 3",
				"Fire Temple Flame Maze Right Side Pot 4",
				"Fire Temple Flame Maze Left Side Pot 1",
				"Fire Temple Flame Maze Left Side Pot 2",
				"Fire Temple Flame Maze Left Side Pot 3",
				"Fire Temple Flame Maze Left Side Pot 4",
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
		{	name : '// v7 : Water',
			locs : [
				// Water Temple Freestanding
				"Water Temple River Recovery Heart 1",
				"Water Temple River Recovery Heart 2",
				"Water Temple River Recovery Heart 3",
				"Water Temple River Recovery Heart 4",
				// Water Temple Pot
				"Water Temple Main Room L2 Pot 1",
				"Water Temple Main Room L2 Pot 2",
				"Water Temple Behind Gate Pot 1",
				"Water Temple Behind Gate Pot 2",
				"Water Temple Behind Gate Pot 3",
				"Water Temple Behind Gate Pot 4",
				"Water Temple Near Compass Pot 1",
				"Water Temple Near Compass Pot 2",
				"Water Temple Near Compass Pot 3",
				"Water Temple Like Like Pot 1",
				"Water Temple Like Like Pot 2",
				"Water Temple North Basement Block Puzzle Pot 1",
				"Water Temple North Basement Block Puzzle Pot 2",
				"Water Temple L1 Torch Pot 1",
				"Water Temple L1 Torch Pot 2",
				"Water Temple River Pot 1",
				"Water Temple Central Bow Target Pot 1",
				"Water Temple Central Bow Target Pot 2",
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
		{	name : '// v7 : Shadow',
			locs : [
				// Shadow Temple Freestanding
				"Shadow Temple Invisible Blades Recovery Heart 1",
				"Shadow Temple Invisible Blades Recovery Heart 2",
				"Shadow Temple Before Boat Recovery Heart 1",
				"Shadow Temple Before Boat Recovery Heart 2",
				"Shadow Temple After Boat Upper Recovery Heart 1",
				"Shadow Temple After Boat Upper Recovery Heart 2",
				"Shadow Temple After Boat Lower Recovery Heart",
				"Shadow Temple 3 Spinning Pots Rupee 1",
				"Shadow Temple 3 Spinning Pots Rupee 2",
				"Shadow Temple 3 Spinning Pots Rupee 3",
				"Shadow Temple 3 Spinning Pots Rupee 4",
				"Shadow Temple 3 Spinning Pots Rupee 5",
				"Shadow Temple 3 Spinning Pots Rupee 6",
				"Shadow Temple 3 Spinning Pots Rupee 7",
				"Shadow Temple 3 Spinning Pots Rupee 8",
				"Shadow Temple 3 Spinning Pots Rupee 9",
				// Shadow Temple Pot
				"Shadow Temple Whispering Walls Near Dead Hand Pot",
				"Shadow Temple Whispering Walls Left Pot 1",
				"Shadow Temple Whispering Walls Left Pot 2",
				"Shadow Temple Whispering Walls Left Pot 3",
				"Shadow Temple Whispering Walls Front Pot 1",
				"Shadow Temple Whispering Walls Front Pot 2",
				"Shadow Temple Whispering Walls Flying Pot",
				"Shadow Temple Map Chest Room Pot 1",
				"Shadow Temple Map Chest Room Pot 2",
				"Shadow Temple Falling Spikes Lower Pot 2",
				"Shadow Temple Falling Spikes Lower Pot 1",
				"Shadow Temple Falling Spikes Upper Pot 1",
				"Shadow Temple Falling Spikes Upper Pot 2",
				"Shadow Temple Spike Walls Pot",
				"Shadow Temple Invisible Floormaster Pot 1",
				"Shadow Temple Invisible Floormaster Pot 2",
				"Shadow Temple After Wind Pot 1",
				"Shadow Temple After Wind Pot 2",
				"Shadow Temple After Wind Flying Pot 1",
				"Shadow Temple After Wind Flying Pot 2",
				"Shadow Temple After Boat Pot",
				"Shadow Temple Near Boss Pot 1",
				"Shadow Temple Near Boss Pot 2",
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
		{	name : '// v7 : Spirit',
			locs : [
				// Spirit Temple Freestanding
				"Spirit Temple Shifting Wall Recovery Heart 1",
				"Spirit Temple Shifting Wall Recovery Heart 2",
				// Spirit Temple Pot
				"Spirit Temple Lobby Pot 1",
				"Spirit Temple Lobby Pot 2",
				"Spirit Temple Lobby Flying Pot 1",
				"Spirit Temple Lobby Flying Pot 2",
				"Spirit Temple Child Climb Pot",
				"Spirit Temple Hall After Sun Block Room Pot 1",
				"Spirit Temple Hall After Sun Block Room Pot 2",
				"Spirit Temple Beamos Hall Pot",
				"Spirit Temple Child Anubis Pot",
				"Spirit Temple Child Bridge Flying Pot",
				"Spirit Temple Central Chamber Flying Pot 1",
				"Spirit Temple Central Chamber Flying Pot 2",
				"Spirit Temple Adult Climb Flying Pot 1",
				"Spirit Temple Adult Climb Flying Pot 2",
				"Spirit Temple Big Mirror Flying Pot 1",
				"Spirit Temple Big Mirror Flying Pot 2",
				"Spirit Temple Big Mirror Flying Pot 3",
				"Spirit Temple Big Mirror Flying Pot 4",
				"Spirit Temple Big Mirror Flying Pot 5",
				"Spirit Temple Big Mirror Flying Pot 6",
				// Spirit Temple Crate
				"Spirit Temple Before Child Climb Small Wooden Crate 1",
				"Spirit Temple Before Child Climb Small Wooden Crate 2",
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
		{	name : '// v7 : Ice',
			locs : [
				// Ice Cavern Freestanding
				"Ice Cavern Frozen Blue Rupee",
				"Ice Cavern Map Room Recovery Heart 1",
				"Ice Cavern Map Room Recovery Heart 2",
				"Ice Cavern Map Room Recovery Heart 3",
				"Ice Cavern Block Room Red Rupee 1",
				"Ice Cavern Block Room Red Rupee 2",
				"Ice Cavern Block Room Red Rupee 3",
				// Ice Cavern Pot
				"Ice Cavern Hall Pot 1",
				"Ice Cavern Hall Pot 2",
				"Ice Cavern Spinning Blade Pot 1",
				"Ice Cavern Spinning Blade Pot 2",
				"Ice Cavern Spinning Blade Pot 3",
				"Ice Cavern Spinning Blade Flying Pot",
				"Ice Cavern Near End Pot 1",
				"Ice Cavern Near End Pot 2",
				"Ice Cavern Frozen Pot",
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
		{	name : '// v7 : GTG',
			locs : [
				// Gerudo Training Ground Freestanding
				"Gerudo Training Ground Beamos Recovery Heart 1",
				"Gerudo Training Ground Beamos Recovery Heart 2",
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
		{	name : '// v7 : Ganon',
			locs : [
				// Ganons Castle Freestanding
				"Ganons Castle Shadow Trial Recovery Heart 1",
				"Ganons Castle Shadow Trial Recovery Heart 2",
				"Ganons Castle Shadow Trial Recovery Heart 3",
				"Ganons Castle Fire Trial Recovery Heart",
				"Ganons Castle Spirit Trial Recovery Heart",
				// Ganons Castle Pot
				"Ganons Castle Water Trial Pot 1",
				"Ganons Castle Water Trial Pot 2",
				"Ganons Castle Forest Trial Pot 1",
				"Ganons Castle Forest Trial Pot 2",
				"Ganons Castle Light Trial Boulder Pot",
				"Ganons Castle Light Trial Pot 1",
				"Ganons Castle Light Trial Pot 2",
				"Ganons Castle Shadow Trial Like Like Pot 1",
				"Ganons Castle Shadow Trial Like Like Pot 2",
				"Ganons Castle Shadow Trial Pot 1",
				"Ganons Castle Shadow Trial Pot 2",
				"Ganons Castle Fire Trial Pot 1",
				"Ganons Castle Fire Trial Pot 2",
				"Ganons Castle Spirit Trial Pot 1",
				"Ganons Castle Spirit Trial Pot 2",
				// Ganons Tower Pot
				"Ganons Tower Pot 1",  // (shared with MQ)
				"Ganons Tower Pot 2",  // (shared with MQ)
				"Ganons Tower Pot 3",  // (shared with MQ)
				"Ganons Tower Pot 4",  // (shared with MQ)
				"Ganons Tower Pot 5",  // (shared with MQ)
				"Ganons Tower Pot 6",  // (shared with MQ)
				"Ganons Tower Pot 7",  // (shared with MQ)
				"Ganons Tower Pot 8",  // (shared with MQ)
				"Ganons Tower Pot 9",  // (shared with MQ)
				"Ganons Tower Pot 10", // (shared with MQ)
				"Ganons Tower Pot 11", // (shared with MQ)
				"Ganons Tower Pot 12", // (shared with MQ)
				"Ganons Tower Pot 13", // (shared with MQ)
				"Ganons Tower Pot 14", // (shared with MQ)
			],
		},

		{	name : '// MQ Deku',
			locs : [
				// Deku Tree MQ
				"Deku Tree MQ Map Chest",
				"Deku Tree MQ Slingshot Chest",
				"Deku Tree MQ Slingshot Room Back Chest",
				"Deku Tree MQ Compass Chest",
				"Deku Tree MQ Basement Chest",
				"Deku Tree MQ Before Spinning Log Chest",
				"Deku Tree MQ After Spinning Log Chest",
				// Deku Tree MQ scrub
				"Deku Tree MQ Deku Scrub",
				// Deku Tree MQ GS
				"Deku Tree MQ GS Lobby",
				"Deku Tree MQ GS Compass Room",
				"Deku Tree MQ GS Basement Graves Room",
				"Deku Tree MQ GS Basement Back Room",
			],
		},
		{	name : '// v7 : MQ Deku',
			locs : [
				// Deku Tree MQ Freestanding
				"Deku Tree MQ Lower Lobby Recovery Heart",
				"Deku Tree MQ Near Compass Room Recovery Heart",
				"Deku Tree MQ Compass Room Recovery Heart",
				"Deku Tree MQ Basement Recovery Heart 1",
				"Deku Tree MQ Basement Recovery Heart 2",
				"Deku Tree MQ Basement Recovery Heart 3",
				"Deku Tree MQ Slingshot Room Recovery Heart",
				// Deku Tree MQ Crate
				"Deku Tree MQ Lobby Crate",
				"Deku Tree MQ Slingshot Room Crate 1",
				"Deku Tree MQ Slingshot Room Crate 2",
			],
		},
		{	name : '// MQ Dodongo',
			locs : [
				// Dodongos Cavern MQ
				"Dodongos Cavern MQ Map Chest",
				"Dodongos Cavern MQ Bomb Bag Chest",
				"Dodongos Cavern MQ Torch Puzzle Room Chest",
				"Dodongos Cavern MQ Larvae Room Chest",
				"Dodongos Cavern MQ Compass Chest",
				"Dodongos Cavern MQ Under Grave Chest",
				// Dodongos Cavern MQ scrub
				"Dodongos Cavern MQ Deku Scrub Lobby Front",
				"Dodongos Cavern MQ Deku Scrub Lobby Rear",
				"Dodongos Cavern MQ Deku Scrub Side Room Near Lower Lizalfos",
				"Dodongos Cavern MQ Deku Scrub Staircase",
				// Dodongos Cavern MQ GS
				"Dodongos Cavern MQ GS Scrub Room",
				"Dodongos Cavern MQ GS Larvae Room",
				"Dodongos Cavern MQ GS Lizalfos Room",
				"Dodongos Cavern MQ GS Song of Time Block Room",
				"Dodongos Cavern MQ GS Back Area",
			],
		},
		{	name : '// v7 : MQ Dodongo',
			locs : [
				// Dodongos Cavern MQ Freestanding
				"Dodongos Cavern MQ Torch Puzzle Room Recovery Heart",
				// Dodongos Cavern MQ Pot
				"Dodongos Cavern MQ Right Side Pot 1",
				"Dodongos Cavern MQ Right Side Pot 2",
				"Dodongos Cavern MQ Right Side Pot 3",
				"Dodongos Cavern MQ Right Side Pot 4",
				"Dodongos Cavern MQ Staircase Pot 1",
				"Dodongos Cavern MQ Staircase Pot 2",
				"Dodongos Cavern MQ Staircase Pot 3",
				"Dodongos Cavern MQ Staircase Pot 4",
				"Dodongos Cavern MQ Upper Lizalfos Pot 1",
				"Dodongos Cavern MQ Upper Lizalfos Pot 2",
				"Dodongos Cavern MQ Upper Lizalfos Pot 3",
				"Dodongos Cavern MQ Upper Lizalfos Pot 4",
				"Dodongos Cavern MQ Poes Room Pot 1",
				"Dodongos Cavern MQ Poes Room Pot 2",
				"Dodongos Cavern MQ Poes Room Pot 3",
				"Dodongos Cavern MQ Poes Room Pot 4",
				"Dodongos Cavern MQ Room Before Boss Pot 1",
				"Dodongos Cavern MQ Room Before Boss Pot 2",
				"Dodongos Cavern MQ Armos Army Room Upper Pot",
				"Dodongos Cavern MQ Armos Army Room Pot 1",
				"Dodongos Cavern MQ Armos Army Room Pot 2",
				"Dodongos Cavern MQ Torch Puzzle Room Pot Pillar",
				"Dodongos Cavern MQ Torch Puzzle Room Pot Corner",
				"Dodongos Cavern MQ Before Upper Lizalfos Pot 1",
				"Dodongos Cavern MQ Before Upper Lizalfos Pot 2",
				"Dodongos Cavern MQ After Upper Lizalfos Pot 1",
				"Dodongos Cavern MQ After Upper Lizalfos Pot 2",
				"Dodongos Cavern MQ Back Poe Room Pot 1",
				"Dodongos Cavern MQ Back Poe Room Pot 2",
				// Dodongos Cavern MQ Crate
				"Dodongos Cavern MQ Staircase Crate Bottom Left",
				"Dodongos Cavern MQ Staircase Crate Bottom Right",
				"Dodongos Cavern MQ Staircase Crate Mid Left",
				"Dodongos Cavern MQ Staircase Crate Top Left",
				"Dodongos Cavern MQ Staircase Crate Mid Right",
				"Dodongos Cavern MQ Staircase Crate Top Right",
				"Dodongos Cavern MQ Poes Room Crate 5",
				"Dodongos Cavern MQ Poes Room Crate 6",
				"Dodongos Cavern MQ Poes Room Crate 1",
				"Dodongos Cavern MQ Poes Room Crate 2",
				"Dodongos Cavern MQ Poes Room Crate 3",
				"Dodongos Cavern MQ Poes Room Crate 4",
				"Dodongos Cavern MQ Poes Room Crate Near Bomb Flower",
				"Dodongos Cavern MQ Poes Room Crate 7",
				"Dodongos Cavern MQ Larvae Room Crate 1",
				"Dodongos Cavern MQ Larvae Room Crate 2",
				"Dodongos Cavern MQ Larvae Room Crate 3",
				"Dodongos Cavern MQ Larvae Room Crate 4",
				"Dodongos Cavern MQ Larvae Room Crate 5",
				"Dodongos Cavern MQ Larvae Room Crate 6",
				"Dodongos Cavern MQ After Upper Lizalfos Crate 1",
				"Dodongos Cavern MQ After Upper Lizalfos Crate 2",
			],
		},
		{	name : '// MQ Jabu',
			locs : [
				// Jabu Jabus Belly MQ
				"Jabu Jabus Belly MQ Map Chest",
				"Jabu Jabus Belly MQ First Room Side Chest",
				"Jabu Jabus Belly MQ Second Room Lower Chest",
				"Jabu Jabus Belly MQ Compass Chest",
				"Jabu Jabus Belly MQ Basement Near Switches Chest",
				"Jabu Jabus Belly MQ Basement Near Vines Chest",
				"Jabu Jabus Belly MQ Boomerang Room Small Chest",
				"Jabu Jabus Belly MQ Boomerang Chest",
				"Jabu Jabus Belly MQ Falling Like Like Room Chest",
				"Jabu Jabus Belly MQ Second Room Upper Chest",
				"Jabu Jabus Belly MQ Near Boss Chest",
				// Jabu Jabus Belly MQ cow
				"Jabu Jabus Belly MQ Cow",
				// Jabu Jabus Belly MQ GS
				"Jabu Jabus Belly MQ GS Boomerang Chest Room",
				"Jabu Jabus Belly MQ GS Tailpasaran Room",
				"Jabu Jabus Belly MQ GS Invisible Enemies Room",
				"Jabu Jabus Belly MQ GS Near Boss",
			],
		},
		{	name : '// v7 : MQ Jabu',
			locs : [
				// Jabu Jabus Belly MQ Freestanding
				"Jabu Jabus Belly MQ Underwater Green Rupee 1",
				"Jabu Jabus Belly MQ Underwater Green Rupee 2",
				"Jabu Jabus Belly MQ Underwater Green Rupee 3",
				"Jabu Jabus Belly MQ Recovery Heart 1",
				"Jabu Jabus Belly MQ Recovery Heart 2",
				// Jabu Jabus Belly MQ Pot
				"Jabu Jabus Belly MQ First Room Pot 1",
				"Jabu Jabus Belly MQ First Room Pot 2",
				"Jabu Jabus Belly MQ Elevator Room Pot 1",
				"Jabu Jabus Belly MQ Elevator Room Pot 2",
				"Jabu Jabus Belly MQ Falling Like Like Room Pot 1",
				"Jabu Jabus Belly MQ Falling Like Like Room Pot 2",
				"Jabu Jabus Belly MQ Boomerang Room Pot 1",
				"Jabu Jabus Belly MQ Boomerang Room Pot 2",
			],
		},
		{	name : '// MQ Well',
			locs : [
				// Bottom of the Well MQ
				"Bottom of the Well MQ Map Chest",
				"Bottom of the Well MQ East Inner Room Freestanding Key",
				"Bottom of the Well MQ Compass Chest",
				"Bottom of the Well MQ Dead Hand Freestanding Key",
				"Bottom of the Well MQ Lens of Truth Chest",
				// Bottom of the Well MQ GS
				"Bottom of the Well MQ GS Coffin Room",
				"Bottom of the Well MQ GS West Inner Room",
				"Bottom of the Well MQ GS Basement",
			],
		},
		{	name : '// v7 : MQ Well',
			locs : [
				// Bottom of the Well MQ Freestanding
				"Bottom of the Well MQ Bombable Recovery Heart 1",
				"Bottom of the Well MQ Bombable Recovery Heart 2",
				"Bottom of the Well MQ Basement Recovery Heart 1",
				"Bottom of the Well MQ Basement Recovery Heart 2",
				"Bottom of the Well MQ Basement Recovery Heart 3",
				"Bottom of the Well MQ Coffin Recovery Heart 1",
				"Bottom of the Well MQ Coffin Recovery Heart 2",
				// Bottom of the Well MQ Pot
				"Bottom of the Well MQ Center Room Right Pot 1",
				"Bottom of the Well MQ Center Room Right Pot 2",
				"Bottom of the Well MQ Center Room Right Pot 3",
				"Bottom of the Well MQ East Inner Room Pot 1",
				"Bottom of the Well MQ East Inner Room Pot 2",
				"Bottom of the Well MQ East Inner Room Pot 3",
			],
		},
		{	name : '// MQ Forest',
			locs : [
				// Forest Temple MQ
				"Forest Temple MQ First Room Chest",
				"Forest Temple MQ Wolfos Chest",
				"Forest Temple MQ Well Chest",
				"Forest Temple MQ Raised Island Courtyard Lower Chest",
				"Forest Temple MQ Raised Island Courtyard Upper Chest",
				"Forest Temple MQ Boss Key Chest",
				"Forest Temple MQ Redead Chest",
				"Forest Temple MQ Map Chest",
				"Forest Temple MQ Bow Chest",
				"Forest Temple MQ Compass Chest",
				"Forest Temple MQ Falling Ceiling Room Chest",
				"Forest Temple MQ Basement Chest",
				// Forest Temple MQ GS
				"Forest Temple MQ GS First Hallway",
				"Forest Temple MQ GS Raised Island Courtyard",
				"Forest Temple MQ GS Level Island Courtyard",
				"Forest Temple MQ GS Well",
				"Forest Temple MQ GS Block Push Room",
			],
		},
		{	name : '// v7 : MQ Forest',
			locs : [
				// Forest Temple MQ Freestanding
				"Forest Temple MQ Courtyard Recovery Heart 1",
				"Forest Temple MQ Courtyard Recovery Heart 2",
				"Forest Temple MQ Courtyard Recovery Heart 3",
				"Forest Temple MQ Well Recovery Heart 1",
				"Forest Temple MQ Well Recovery Heart 2",
				"Forest Temple MQ Well Recovery Heart 3",
				// Forest Temple MQ Pot
				"Forest Temple MQ Center Room Right Pot 1",
				"Forest Temple MQ Center Room Right Pot 2",
				"Forest Temple MQ Center Room Right Pot 3",
				"Forest Temple MQ Center Room Left Pot 1",
				"Forest Temple MQ Center Room Left Pot 2",
				"Forest Temple MQ Center Room Left Pot 3",
				"Forest Temple MQ Wolfos Room Pot",
				"Forest Temple MQ Upper Stalfos Pot 1",
				"Forest Temple MQ Upper Stalfos Pot 2",
				"Forest Temple MQ Upper Stalfos Pot 3",
				"Forest Temple MQ Upper Stalfos Pot 4",
				"Forest Temple MQ Blue Poe Room Pot 1",
				"Forest Temple MQ Blue Poe Room Pot 2",
				"Forest Temple MQ Blue Poe Room Pot 3",
				"Forest Temple MQ Green Poe Room Pot 1",
				"Forest Temple MQ Green Poe Room Pot 2",
				"Forest Temple MQ Basement Pot 1",
				"Forest Temple MQ Basement Pot 2",
				"Forest Temple MQ Basement Pot 3",
				"Forest Temple MQ Basement Pot 4",
				// Forest Temple MQ Crate
				"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 1",
				"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 2",
				"Forest Temple MQ Frozen Eye Switch Room Small Wooden Crate 3",
			],
		},
		{	name : '// MQ Fire',
			locs : [
				// Fire Temple MQ
				"Fire Temple MQ Map Room Side Chest",
				"Fire Temple MQ Megaton Hammer Chest",
				"Fire Temple MQ Map Chest",
				"Fire Temple MQ Near Boss Chest",
				"Fire Temple MQ Big Lava Room Blocked Door Chest",
				"Fire Temple MQ Boss Key Chest",
				"Fire Temple MQ Lizalfos Maze Side Room Chest",
				"Fire Temple MQ Compass Chest",
				"Fire Temple MQ Lizalfos Maze Upper Chest",
				"Fire Temple MQ Lizalfos Maze Lower Chest",
				"Fire Temple MQ Freestanding Key",
				"Fire Temple MQ Chest On Fire",
				// Fire Temple MQ GS
				"Fire Temple MQ GS Big Lava Room Open Door",
				"Fire Temple MQ GS Skull On Fire",
				"Fire Temple MQ GS Flame Maze Center",
				"Fire Temple MQ GS Flame Maze Side Room",
				"Fire Temple MQ GS Above Flame Maze",
			],
		},
		{	name : '// v7 : MQ Fire',
			locs : [
				// Fire Temple MQ Freestanding
				"Fire Temple MQ Elevator Room Recovery Heart 1",
				"Fire Temple MQ Elevator Room Recovery Heart 2",
				"Fire Temple MQ Elevator Room Recovery Heart 3",
				// Fire Temple MQ Pot
				"Fire Temple MQ First Room Pot 1",
				"Fire Temple MQ First Room Pot 2",
				"Fire Temple MQ Big Lava Room Left Pot",
				"Fire Temple MQ Big Lava Room Right Pot",
				"Fire Temple MQ Big Lava Room Alcove Pot",
				"Fire Temple MQ Near Boss Pot 1",
				"Fire Temple MQ Near Boss Pot 2",
				"Fire Temple MQ Narrow Path Room Pot 1",
				"Fire Temple MQ Narrow Path Room Pot 2",
				"Fire Temple MQ Flame Maze Right Upper Pot 1",
				"Fire Temple MQ Flame Maze Right Upper Pot 2",
				"Fire Temple MQ Flame Maze Right Pot 1",
				"Fire Temple MQ Flame Maze Right Pot 2",
				"Fire Temple MQ Flame Maze Left Pot 1",
				"Fire Temple MQ Shoot Torch On Wall Room Pot 1",
				"Fire Temple MQ Shoot Torch On Wall Room Pot 2",
				"Fire Temple MQ Iron Knuckle Room Pot 1",
				"Fire Temple MQ Iron Knuckle Room Pot 2",
				"Fire Temple MQ Iron Knuckle Room Pot 3",
				"Fire Temple MQ Iron Knuckle Room Pot 4",
				"Fire Temple MQ Boss Key Chest Room Pot",
				// Fire Temple MQ Crate
				"Fire Temple MQ Near Boss Left Crate 1",
				"Fire Temple MQ Near Boss Left Crate 2",
				"Fire Temple MQ Near Boss Right Lower Crate 1",
				"Fire Temple MQ Near Boss Right Lower Crate 2",
				"Fire Temple MQ Near Boss Right Mid Crate",
				"Fire Temple MQ Near Boss Right Upper Crate",
				"Fire Temple MQ Shortcut Crate 1",
				"Fire Temple MQ Shortcut Crate 2",
				"Fire Temple MQ Shortcut Crate 3",
				"Fire Temple MQ Shortcut Crate 4",
				"Fire Temple MQ Shortcut Crate 5",
				"Fire Temple MQ Shortcut Crate 6",
				"Fire Temple MQ Lower Lizalfos Maze Crate 1",
				"Fire Temple MQ Lower Lizalfos Maze Crate 2",
				"Fire Temple MQ Lower Lizalfos Maze Crate 3",
				"Fire Temple MQ Upper Lizalfos Maze Crate 1",
				"Fire Temple MQ Upper Lizalfos Maze Crate 2",
				"Fire Temple MQ Upper Lizalfos Maze Crate 3",
				"Fire Temple MQ Shoot Torch On Wall Room Right Crate 1",
				"Fire Temple MQ Shoot Torch On Wall Room Right Crate 2",
				"Fire Temple MQ Shoot Torch On Wall Room Center Crate",
				"Fire Temple MQ Shoot Torch On Wall Room Left Crate 1",
				"Fire Temple MQ Shoot Torch On Wall Room Left Crate 2",
			],
		},
		{	name : '// MQ Water',
			locs : [
				// Water Temple MQ
				"Water Temple MQ Longshot Chest",
				"Water Temple MQ Map Chest",
				"Water Temple MQ Compass Chest",
				"Water Temple MQ Central Pillar Chest",
				"Water Temple MQ Boss Key Chest",
				"Water Temple MQ Freestanding Key",
				// Water Temple MQ GS
				"Water Temple MQ GS Lizalfos Hallway",
				"Water Temple MQ GS Before Upper Water Switch",
				"Water Temple MQ GS River",
				"Water Temple MQ GS Freestanding Key Area",
				"Water Temple MQ GS Triple Wall Torch",
			],
		},
		{	name : '// v7 : MQ Water',
			locs : [
				// Water Temple MQ Pot
				"Water Temple MQ Triple Wall Torch Pot 1",
				"Water Temple MQ Triple Wall Torch Pot 2",
				"Water Temple MQ Triple Wall Torch Pot 3",
				"Water Temple MQ Triple Wall Torch Pot 4",
				"Water Temple MQ Storage Room Pot 1",
				"Water Temple MQ Storage Room Pot 2",
				"Water Temple MQ Storage Room Pot 3",
				"Water Temple MQ Before Dark Link Top Pot 1",
				"Water Temple MQ Before Dark Link Top Pot 2",
				"Water Temple MQ Before Dark Link Lower Pot",
				"Water Temple MQ Room After Dark Link Pot",
				"Water Temple MQ Boss Key Chest Room Pot",
				"Water Temple MQ Before Upper Water Switch Pot 1",
				"Water Temple MQ Before Upper Water Switch Pot 2",
				"Water Temple MQ Before Upper Water Switch Pot 3",
				"Water Temple MQ Dodongo Room Pot 1",
				"Water Temple MQ Dodongo Room Pot 2",
				"Water Temple MQ Freestanding Key Room Pot",
				"Water Temple MQ L1 Torch Pot 1",
				"Water Temple MQ L1 Torch Pot 2",
				"Water Temple MQ Lizalfos Hallway Pot 1",
				"Water Temple MQ Lizalfos Hallway Pot 2",
				"Water Temple MQ Lizalfos Hallway Pot 3",
				"Water Temple MQ Lizalfos Hallway Gate Pot 1",
				"Water Temple MQ Lizalfos Hallway Gate Pot 2",
				"Water Temple MQ River Pot",
				// Water Temple MQ Crate
				"Water Temple MQ Central Pillar Upper Crate 1",
				"Water Temple MQ Central Pillar Upper Crate 2",
				"Water Temple MQ Central Pillar Lower Crate 1",
				"Water Temple MQ Central Pillar Lower Crate 2",
				"Water Temple MQ Central Pillar Lower Crate 3",
				"Water Temple MQ Central Pillar Lower Crate 4",
				"Water Temple MQ Central Pillar Lower Crate 5",
				"Water Temple MQ Central Pillar Lower Crate 6",
				"Water Temple MQ Central Pillar Lower Crate 7",
				"Water Temple MQ Central Pillar Lower Crate 8",
				"Water Temple MQ Central Pillar Lower Crate 9",
				"Water Temple MQ Central Pillar Lower Crate 10",
				"Water Temple MQ Central Pillar Lower Crate 11",
				"Water Temple MQ Central Pillar Lower Crate 12",
				"Water Temple MQ Central Pillar Lower Crate 13",
				"Water Temple MQ Central Pillar Lower Crate 14",
				"Water Temple MQ Triple Wall Torch Submerged Crate 1",
				"Water Temple MQ Triple Wall Torch Submerged Crate 2",
				"Water Temple MQ Triple Wall Torch Submerged Crate 3",
				"Water Temple MQ Triple Wall Torch Submerged Crate 4",
				"Water Temple MQ Triple Wall Torch Submerged Crate 5",
				"Water Temple MQ Triple Wall Torch Submerged Crate 6",
				"Water Temple MQ Triple Wall Torch Behind Gate Crate 1",
				"Water Temple MQ Triple Wall Torch Behind Gate Crate 2",
				"Water Temple MQ Triple Wall Torch Behind Gate Crate 3",
				"Water Temple MQ Storage Room Crate 1",
				"Water Temple MQ Storage Room Crate 2",
				"Water Temple MQ Storage Room Crate 3",
				"Water Temple MQ Storage Room Crate 4",
				"Water Temple MQ Storage Room Crate 5",
				"Water Temple MQ Storage Room Crate 6",
				"Water Temple MQ Storage Room Crate 7",
				"Water Temple MQ Dragon Statue By Torches Crate 1",
				"Water Temple MQ Dragon Statue By Torches Crate 2",
				"Water Temple MQ Dragon Statue Submerged Crate 1",
				"Water Temple MQ Dragon Statue Submerged Crate 2",
				"Water Temple MQ Dragon Statue Submerged Crate 3",
				"Water Temple MQ Dragon Statue Submerged Crate 4",
				"Water Temple MQ Dragon Statue Near Door Crate 1",
				"Water Temple MQ Dragon Statue Near Door Crate 2",
				"Water Temple MQ Boss Key Chest Room Upper Crate",
				"Water Temple MQ Boss Key Chest Room Lower Crate 1",
				"Water Temple MQ Boss Key Chest Room Lower Crate 2",
				"Water Temple MQ Boss Key Chest Room Lower Crate 3",
				"Water Temple MQ Boss Key Chest Room Lower Crate 4",
				"Water Temple MQ Before Upper Water Switch Lower Crate 1",
				"Water Temple MQ Before Upper Water Switch Lower Crate 2",
				"Water Temple MQ Before Upper Water Switch Lower Crate 3",
				"Water Temple MQ Before Upper Water Switch Lower Crate 4",
				"Water Temple MQ Before Upper Water Switch Lower Crate 5",
				"Water Temple MQ Before Upper Water Switch Lower Crate 6",
				"Water Temple MQ Before Upper Water Switch Upper Crate 1",
				"Water Temple MQ Before Upper Water Switch Upper Crate 2",
				"Water Temple MQ Freestanding Key Area Behind Gate Crate 1",
				"Water Temple MQ Freestanding Key Area Behind Gate Crate 2",
				"Water Temple MQ Freestanding Key Area Behind Gate Crate 3",
				"Water Temple MQ Freestanding Key Area Behind Gate Crate 4",
				"Water Temple MQ Freestanding Key Area Front Crate 1",
				"Water Temple MQ Freestanding Key Area Front Crate 2",
				"Water Temple MQ Freestanding Key Area Submerged Crate 1",
				"Water Temple MQ Freestanding Key Area Submerged Crate 2",
				"Water Temple MQ Freestanding Key Area Submerged Crate 3",
				"Water Temple MQ Freestanding Key Area Submerged Crate 4",
				"Water Temple MQ Freestanding Key Area Submerged Crate 5",
				"Water Temple MQ Freestanding Key Area Submerged Crate 6",
				"Water Temple MQ Dodongo Room Lower Crate 1",
				"Water Temple MQ Dodongo Room Lower Crate 2",
				"Water Temple MQ Dodongo Room Lower Crate 3",
				"Water Temple MQ Dodongo Room Upper Crate",
				"Water Temple MQ Dodongo Room Hall Crate",
				"Water Temple MQ Freestanding Key Room Crate 1",
				"Water Temple MQ Freestanding Key Room Crate 2",
				"Water Temple MQ Freestanding Key Room Crate 3",
				"Water Temple MQ Freestanding Key Room Crate 4",
				"Water Temple MQ Freestanding Key Room Crate 5",
				"Water Temple MQ Lizalfos Hallway Gate Crate 1",
				"Water Temple MQ Lizalfos Hallway Gate Crate 2",
				"Water Temple MQ Lizalfos Hallway Room Crate 1",
				"Water Temple MQ Lizalfos Hallway Room Crate 2",
				"Water Temple MQ Lizalfos Hallway Room Crate 3",
				"Water Temple MQ Lizalfos Hallway Room Crate 4",
				"Water Temple MQ Lizalfos Hallway Room Crate 5",
				"Water Temple MQ Lizalfos Hallway Hall Crate 1",
				"Water Temple MQ Lizalfos Hallway Hall Crate 2",
				"Water Temple MQ Lizalfos Hallway Hall Crate 3",
			],
		},
		{	name : '// MQ Shadow',
			locs : [
				// Shadow Temple MQ
				"Shadow Temple MQ Early Gibdos Chest",
				"Shadow Temple MQ Map Chest",
				"Shadow Temple MQ Near Ship Invisible Chest",
				"Shadow Temple MQ Compass Chest",
				"Shadow Temple MQ Hover Boots Chest",
				"Shadow Temple MQ Invisible Blades Invisible Chest",
				"Shadow Temple MQ Invisible Blades Visible Chest",
				"Shadow Temple MQ Beamos Silver Rupees Chest",
				"Shadow Temple MQ Falling Spikes Lower Chest",
				"Shadow Temple MQ Falling Spikes Upper Chest",
				"Shadow Temple MQ Falling Spikes Switch Chest",
				"Shadow Temple MQ Invisible Spikes Chest",
				"Shadow Temple MQ Stalfos Room Chest",
				"Shadow Temple MQ Wind Hint Chest",
				"Shadow Temple MQ After Wind Hidden Chest",
				"Shadow Temple MQ After Wind Enemy Chest",
				"Shadow Temple MQ Boss Key Chest",
				"Shadow Temple MQ Spike Walls Left Chest",
				"Shadow Temple MQ Freestanding Key",
				"Shadow Temple MQ Bomb Flower Chest",
				// Shadow Temple MQ GS
				"Shadow Temple MQ GS Falling Spikes Room",
				"Shadow Temple MQ GS Wind Hint Room",
				"Shadow Temple MQ GS After Wind",
				"Shadow Temple MQ GS After Ship",
				"Shadow Temple MQ GS Near Boss",
			],
		},
		{	name : '// v7 : MQ Shadow',
			locs : [
				// Shadow Temple MQ Freestanding
				"Shadow Temple MQ Invisible Blades Recovery Heart 1",
				"Shadow Temple MQ Invisible Blades Recovery Heart 2",
				"Shadow Temple MQ Before Boat Recovery Heart 1",
				"Shadow Temple MQ Before Boat Recovery Heart 2",
				"Shadow Temple MQ After Boat Upper Recovery Heart 1",
				"Shadow Temple MQ After Boat Upper Recovery Heart 2",
				"Shadow Temple MQ After Boat Lower Recovery Heart",
				"Shadow Temple MQ 3 Spinning Pots Rupee 1",
				"Shadow Temple MQ 3 Spinning Pots Rupee 2",
				"Shadow Temple MQ 3 Spinning Pots Rupee 3",
				"Shadow Temple MQ 3 Spinning Pots Rupee 4",
				"Shadow Temple MQ 3 Spinning Pots Rupee 5",
				"Shadow Temple MQ 3 Spinning Pots Rupee 6",
				"Shadow Temple MQ 3 Spinning Pots Rupee 7",
				"Shadow Temple MQ 3 Spinning Pots Rupee 8",
				"Shadow Temple MQ 3 Spinning Pots Rupee 9",
				// Shadow Temple MQ Pot
				"Shadow Temple MQ Whispering Walls Pot 1",
				"Shadow Temple MQ Whispering Walls Pot 2",
				"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 1",
				"Shadow Temple MQ Whispering Walls After Time Block Flying Pot 2",
				"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 1",
				"Shadow Temple MQ Whispering Walls Before Time Block Flying Pot 2",
				"Shadow Temple MQ Compass Room Pot 1",
				"Shadow Temple MQ Compass Room Pot 2",
				"Shadow Temple MQ Falling Spikes Lower Pot 1",
				"Shadow Temple MQ Falling Spikes Lower Pot 2",
				"Shadow Temple MQ Falling Spikes Upper Pot 1",
				"Shadow Temple MQ Falling Spikes Upper Pot 2",
				"Shadow Temple MQ After Wind Pot 1",
				"Shadow Temple MQ After Wind Pot 2",
				"Shadow Temple MQ After Wind Flying Pot 1",
				"Shadow Temple MQ After Wind Flying Pot 2",
				"Shadow Temple MQ After Boat Pot 1",
				"Shadow Temple MQ After Boat Pot 2",
				"Shadow Temple MQ Near Boss Pot 1",
				"Shadow Temple MQ Near Boss Pot 2",
				"Shadow Temple MQ Bomb Flower Room Pot 1",
				"Shadow Temple MQ Bomb Flower Room Pot 2",
				"Shadow Temple MQ Spike Walls Pot",
				// Shadow Temple MQ Crate
				"Shadow Temple MQ Truth Spinner Small Wooden Crate 1",
				"Shadow Temple MQ Truth Spinner Small Wooden Crate 2",
				"Shadow Temple MQ Truth Spinner Small Wooden Crate 3",
				"Shadow Temple MQ Truth Spinner Small Wooden Crate 4",
			],
		},
		{	name : '// MQ Spirit',
			locs : [
				// Spirit Temple MQ
				"Spirit Temple MQ Entrance Front Left Chest",
				"Spirit Temple MQ Entrance Back Right Chest",
				"Spirit Temple MQ Entrance Front Right Chest",
				"Spirit Temple MQ Entrance Back Left Chest",
				"Spirit Temple MQ Map Chest",
				"Spirit Temple MQ Map Room Enemy Chest",
				"Spirit Temple MQ Child Climb North Chest",
				"Spirit Temple MQ Child Climb South Chest",
				"Spirit Temple MQ Compass Chest",
				"Spirit Temple MQ Silver Block Hallway Chest",
				"Spirit Temple MQ Sun Block Room Chest",
				"Spirit Temple MQ Child Hammer Switch Chest",
				"Spirit Temple MQ Statue Room Lullaby Chest",
				"Spirit Temple MQ Statue Room Invisible Chest",
				"Spirit Temple MQ Leever Room Chest",
				"Spirit Temple MQ Symphony Room Chest",
				"Spirit Temple MQ Beamos Room Chest",
				"Spirit Temple MQ Chest Switch Chest",
				"Spirit Temple MQ Boss Key Chest",
				"Spirit Temple MQ Mirror Puzzle Invisible Chest",
				// Spirit Temple MQ GS
				"Spirit Temple MQ GS Sun Block Room",
				"Spirit Temple MQ GS Leever Room",
				"Spirit Temple MQ GS Symphony Room",
				"Spirit Temple MQ GS Nine Thrones Room West",
				"Spirit Temple MQ GS Nine Thrones Room North",
			],
		},
		{	name : '// v7 : MQ Spirit',
			locs : [
				// Spirit Temple MQ Freestanding
				"Spirit Temple MQ Child Recovery Heart 1",
				"Spirit Temple MQ Child Recovery Heart 2",
				// Spirit Temple MQ Pot
				"Spirit Temple MQ Lobby Pot 1",
				"Spirit Temple MQ Lobby Pot 2",
				"Spirit Temple MQ Lobby Pot 3",
				"Spirit Temple MQ Lobby Pot 4",
				"Spirit Temple MQ Child Torch Slugs Room Pot",
				"Spirit Temple MQ Child 3 Gibdo Room Pot 1",
				"Spirit Temple MQ Child 3 Gibdo Room Pot 2",
				"Spirit Temple MQ Child Stalfos Fight Pot 1",
				"Spirit Temple MQ Child Stalfos Fight Pot 2",
				"Spirit Temple MQ Child Stalfos Fight Pot 3",
				"Spirit Temple MQ Child Climb Pot",
				"Spirit Temple MQ Central Chamber Floor Pot 1",
				"Spirit Temple MQ Central Chamber Floor Pot 2",
				"Spirit Temple MQ Central Chamber Floor Pot 3",
				"Spirit Temple MQ Central Chamber Top Left Pot (Left)",
				"Spirit Temple MQ Central Chamber Top Left Pot (Right)",
				"Spirit Temple MQ Sun Block Room Pot 1",
				"Spirit Temple MQ Sun Block Room Pot 2",
				"Spirit Temple MQ Below 4 Wallmasters Pot 1",
				"Spirit Temple MQ Below 4 Wallmasters Pot 2",
				"Spirit Temple MQ Shifting Wall Pot 1",
				"Spirit Temple MQ Shifting Wall Pot 2",
				"Spirit Temple MQ After Shifting Wall Room Pot 1",
				"Spirit Temple MQ After Shifting Wall Room Pot 2",
				"Spirit Temple MQ Big Mirror Pot 1",
				"Spirit Temple MQ Big Mirror Pot 2",
				"Spirit Temple MQ Big Mirror Pot 3",
				"Spirit Temple MQ Big Mirror Pot 4",
				// Spirit Temple MQ Crate
				"Spirit Temple MQ Central Chamber Crate 1",
				"Spirit Temple MQ Central Chamber Crate 2",
				"Spirit Temple MQ Big Mirror Crate 1",
				"Spirit Temple MQ Big Mirror Crate 2",
				"Spirit Temple MQ Big Mirror Crate 3",
				"Spirit Temple MQ Big Mirror Crate 4",
			],
		},
		{	name : '// MQ Ice',
			locs : [
				// Ice Cavern MQ
				"Ice Cavern MQ Map Chest",
				"Ice Cavern MQ Compass Chest",
				"Ice Cavern MQ Freestanding PoH",
				"Ice Cavern MQ Iron Boots Chest",
				// Ice Cavern MQ GS
				"Ice Cavern MQ GS Red Ice",
				"Ice Cavern MQ GS Ice Block",
				"Ice Cavern MQ GS Scarecrow",
			],
		},
		{	name : '// v7 : MQ Ice',
			locs : [
				// Ice Cavern MQ Pot
				"Ice Cavern MQ First Hall Pot",
				"Ice Cavern MQ Tektite Room Pot 1",
				"Ice Cavern MQ Tektite Room Pot 2",
				"Ice Cavern MQ Center Room Pot 1",
				"Ice Cavern MQ Center Room Pot 2",
				"Ice Cavern MQ Near End Pot",
				"Ice Cavern MQ Compass Room Pot 1",
				"Ice Cavern MQ Compass Room Pot 2",
			],
		},
		{	name : '// MQ GTG',
			locs : [
				// Gerudo Training Ground MQ
				"Gerudo Training Ground MQ Lobby Left Chest",
				"Gerudo Training Ground MQ Lobby Right Chest",
				"Gerudo Training Ground MQ First Iron Knuckle Chest",
				"Gerudo Training Ground MQ Before Heavy Block Chest",
				"Gerudo Training Ground MQ Heavy Block Chest",
				"Gerudo Training Ground MQ Eye Statue Chest",
				"Gerudo Training Ground MQ Ice Arrows Chest",
				"Gerudo Training Ground MQ Second Iron Knuckle Chest",
				"Gerudo Training Ground MQ Flame Circle Chest",
				"Gerudo Training Ground MQ Maze Right Central Chest",
				"Gerudo Training Ground MQ Maze Right Side Chest",
				"Gerudo Training Ground MQ Underwater Silver Rupee Chest",
				"Gerudo Training Ground MQ Dinolfos Chest",
				"Gerudo Training Ground MQ Hidden Ceiling Chest",
				"Gerudo Training Ground MQ Maze Path First Chest",
				"Gerudo Training Ground MQ Maze Path Third Chest",
				"Gerudo Training Ground MQ Maze Path Second Chest",
			],
		},
		{	name : '// v7 : MQ GTG',
			locs : [
				// Gerudo Training Ground MQ Pot
				"Gerudo Training Ground MQ Lobby Left Pot 1",
				"Gerudo Training Ground MQ Lobby Left Pot 2",
				"Gerudo Training Ground MQ Lobby Right Pot 1",
				"Gerudo Training Ground MQ Lobby Right Pot 2",
				// Gerudo Training Ground MQ Crate
				"Gerudo Training Ground MQ Maze Crate",
			],
		},
		{	name : '// MQ Ganon',
			locs : [
				// Ganons Castle MQ
				"Ganons Castle MQ Forest Trial Freestanding Key",
				"Ganons Castle MQ Forest Trial Eye Switch Chest",
				"Ganons Castle MQ Forest Trial Frozen Eye Switch Chest",
				"Ganons Castle MQ Water Trial Chest",
				"Ganons Castle MQ Shadow Trial Bomb Flower Chest",
				"Ganons Castle MQ Shadow Trial Eye Switch Chest",
				"Ganons Castle MQ Light Trial Lullaby Chest",
				"Ganons Castle MQ Spirit Trial First Chest",
				"Ganons Castle MQ Spirit Trial Invisible Chest",
				"Ganons Castle MQ Spirit Trial Sun Front Left Chest",
				"Ganons Castle MQ Spirit Trial Sun Back Left Chest",
				"Ganons Castle MQ Spirit Trial Sun Back Right Chest",
				"Ganons Castle MQ Spirit Trial Golden Gauntlets Chest",
				// Ganons Castle MQ scrub
				"Ganons Castle MQ Deku Scrub Left",
				"Ganons Castle MQ Deku Scrub Center-Left",
				"Ganons Castle MQ Deku Scrub Center",
				"Ganons Castle MQ Deku Scrub Center-Right",
				"Ganons Castle MQ Deku Scrub Right",
			],
		},
		{	name : '// v7 : MQ Ganon',
			locs : [
				// Ganons Castle MQ Freestanding
				"Ganons Castle MQ Water Trial Recovery Heart",
				"Ganons Castle MQ Light Trial Recovery Heart 1",
				"Ganons Castle MQ Light Trial Recovery Heart 2",
				// Ganons Castle MQ Pot
				"Ganons Castle MQ Water Trial Pot 1",
				"Ganons Castle MQ Water Trial Pot 2",
				"Ganons Castle MQ Forest Trial Pot 1",
				"Ganons Castle MQ Forest Trial Pot 2",
				"Ganons Castle MQ Light Trial Pot 1",
				"Ganons Castle MQ Light Trial Pot 2",
				"Ganons Castle MQ Shadow Trial Pot 1",
				"Ganons Castle MQ Shadow Trial Pot 2",
				"Ganons Castle MQ Fire Trial Pot 1",
				"Ganons Castle MQ Fire Trial Pot 2",
				"Ganons Castle MQ Spirit Trial Pot 1",
				"Ganons Castle MQ Spirit Trial Pot 2",
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
		// ZR
		{ loc : `"ZR Frogs Zeldas Lullaby",\n`, comment : ` // v7 (frogs)\n`},
		{ loc : `"ZR Frogs Eponas Song",\n`, comment : `    // v7 (frogs)\n`},
		{ loc : `"ZR Frogs Sarias Song",\n`, comment : `    // v7 (frogs)\n`},
		{ loc : `"ZR Frogs Suns Song",\n`, comment : `      // v7 (frogs)\n`},
		{ loc : `"ZR Frogs Song of Time",\n`, comment : `   // v7 (frogs)\n`},
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