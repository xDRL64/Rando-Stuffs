window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Location ??= {};

window.RandoStuffs.OoT.core.Location.Data = null;

window.RandoStuffs.OoT.core.Location.list = [
	
	// OVERWORLD
	[	
		// Status Quest
		[
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

		// Kokiri Forest
		[
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

			// v7 sanities
			[
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
			],
		],

		// Lost Woods
		[
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

			// v7 sanities
			[
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
			],
		],

		// Sacred Forest Meadow
		[
			// SFM
			"SFM Wolfos Grotto Chest",
	
			// SFM scrub
			"SFM Deku Scrub Grotto Front",
			"SFM Deku Scrub Grotto Rear",
	
			// SFM GS
			"SFM GS",

			// v7 sanities
			[
				// SFM Beehive
				"SFM Storms Grotto Beehive",
			],
		],

		// Hyrule Field
		[
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

			// v7 sanities
			[
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
			],
		],

		// Market & Temple of Time
		[
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

			// v7 sanities
			[
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
			],
		],

		// Hyrule Castle
		[
			// HC
			"HC Malon Egg",
			"HC Great Fairy Reward",
	
			// HC GS
			"HC GS Tree",
			"HC GS Storms Grotto",

			// v7 sanities
			[
				// HC Pot
				"HC Storms Grotto Pot 1",
				"HC Storms Grotto Pot 2",
				"HC Storms Grotto Pot 3",
				"HC Storms Grotto Pot 4",
			],
		],

		// Lon Lon Ranch
		[
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

			// v7 sanities
			[
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
			],
		],

		// Kakariko
		[
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
			
			// v7 sanities
			[
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
			],
		],

		// Graveyard
		[
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

			// v7 sanities
			[
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
		],

		// Death Mountain Trail
		[
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

			// v7 sanities
			[
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
			],
		],

		// Goron City
		[
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

			// v7 sanities
			[
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
			],
		],

		// Death Mountain Crater
		[
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

			// v7 sanities
			[
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
		],

		// Zora's River
		[
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

			// v7 sanities
			[
				// ZR Freestanding
				"ZR Waterfall Red Rupee 1",
				"ZR Waterfall Red Rupee 2",
				"ZR Waterfall Red Rupee 3",
				"ZR Waterfall Red Rupee 4",

				// ZR Beehive
				"ZR Open Grotto Beehive 1",
				"ZR Open Grotto Beehive 2",
				"ZR Storms Grotto Beehive",
			],
		],

		// Zora's Domain
		[
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

			// v7 sanities
			[
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
			],
		],

		// Zora's Fountain
		[
			// ZF
			"ZF Great Fairy Reward",
			"ZF Iceberg Freestanding PoH",
			"ZF Bottom Freestanding PoH",
	
			// ZF GS
			"ZF GS Above the Log",
			"ZF GS Tree",
			"ZF GS Hidden Cave",

			// v7 sanities
			[
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
			],
		],

		// Lake Hylia
		[
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

			// v7 sanities
			[
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
		],

		// Gerudo Valley
		[
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

			// v7 sanities
			[
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
			],
		],

		// Gerudo's Fortress
		[
			// GF
			"GF Chest",
			"GF HBA 1000 Points", // minigame
			"GF HBA 1500 Points", // minigame
			
			// GF GS
			"GF GS Top Floor",
			"GF GS Archery Range",

			// v7 sanities
			[
				// GF Crate
				"GF Above Jail Crate",
			],
		],

		// Thieves' Hideout
		[
			// Hideout
			"Hideout 1 Torch Jail Gerudo Key",   // (RED)    (1trch)
			"Hideout 2 Torches Jail Gerudo Key", // (BLUE)   (2trch)
			"Hideout 3 Torches Jail Gerudo Key", // (GREEN)  (3trch)
			"Hideout 4 Torches Jail Gerudo Key", // (YELLOW) (4trch)
			"Hideout Gerudo Membership Card",

			// v7 sanities
			[
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
			],
		],

		// Haunted Wasteland
		[
			// Wasteland
			"Wasteland Bombchu Salesman",
			"Wasteland Chest",
			
			// Wasteland GS
			"Wasteland GS",

			// v7 sanities
			[
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
			],
		],

		// Desert Colossus
		[
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

			// v7 sanities
			[
				// Colossus Beehive
				"Colossus Grotto Beehive",
			],
		],

		// Outside Ganon's Castle
		[
			// OGC
			"OGC Great Fairy Reward",
	
			// OGC GS
			"OGC GS",
		],
	],

	// DUNGEON
	[	
		// Deku Tree ORIGINAL
		[
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

			// v7 sanities
			[
				// Deku Tree Freestanding
				"Deku Tree Lower Lobby Recovery Heart",
				"Deku Tree Upper Lobby Recovery Heart",
				"Deku Tree Basement Recovery Heart 1",
				"Deku Tree Basement Recovery Heart 2",
				"Deku Tree Basement Recovery Heart 3",
			],

			// Deku Tree boss heart
			"Deku Tree Queen Gohma Heart", // (shared with MQ)
		],

		// Deku Tree MQ ONLY
		[
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
			[
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
		],

		// Dodongos Cavern ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Dodongos Cavern boss room
			"Dodongos Cavern Boss Room Chest", // (shared with MQ)
			
			// Dodongos Cavern boss heart
			"Dodongos Cavern King Dodongo Heart", // (shared with MQ)
		],

		// Dodongos Cavern MQ ONLY
		[
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
			[
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
		],

		// Jabu Jabus Belly ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Jabu Jabus Belly boss heart
			"Jabu Jabus Belly Barinade Heart", // (shared with MQ)
		],

		// Jabu Jabus Belly MQ ONLY
		[
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
			[
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
		],

		// Bottom of the Well ORIGINAL
		[
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

			// v7 sanities
			[
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
		],

		// Bottom of the Well MQ ONLY
		[
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
			[
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
		],

		// Forest Temple ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Forest Temple boss heart
			"Forest Temple Phantom Ganon Heart", // (shared with MQ)
		],

		// Forest Temple MQ ONLY
		[
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
			[
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
		],

		// Fire Temple ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Fire Temple boss heart
			"Fire Temple Volvagia Heart", // (shared with MQ)
		],

		// Fire Temple MQ ONLY
		[
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
			[
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
		],

		// Water Temple ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Water Temple boss heart
			"Water Temple Morpha Heart", // (shared with MQ)
		],

		// Water Temple MQ ONLY
		[
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
			[
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
		],

		// Shadow Temple ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Shadow Temple boss heart
			"Shadow Temple Bongo Bongo Heart", // (shared with MQ)
		],

		// Shadow Temple MQ ONLY
		[
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
			[
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
		],

		// Spirit Temple ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Spirit Temple boss heart
			"Spirit Temple Twinrova Heart", // (shared with MQ)
		],

		// Spirit Temple MQ ONLY
		[
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
			[
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
		],

		// Ice Cavern ORIGINAL
		[
			// Ice Cavern
			"Ice Cavern Map Chest",
			"Ice Cavern Compass Chest",
			"Ice Cavern Freestanding PoH",
			"Ice Cavern Iron Boots Chest",

			// Ice Cavern GS
			"Ice Cavern GS Spinning Scythe Room",
			"Ice Cavern GS Heart Piece Room",
			"Ice Cavern GS Push Block Room",

			// v7 sanities
			[
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
		],

		// Ice Cavern MQ ONLY
		[
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
			[
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
		],

		// Gerudo Training Ground ORIGINAL
		[
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

			// v7 sanities
			[
				// Gerudo Training Ground Freestanding
				"Gerudo Training Ground Beamos Recovery Heart 1",
				"Gerudo Training Ground Beamos Recovery Heart 2",
			],
		],

		// Gerudo Training Ground MQ ONLY
		[
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
			[
				// Gerudo Training Ground MQ Pot
				"Gerudo Training Ground MQ Lobby Left Pot 1",
				"Gerudo Training Ground MQ Lobby Left Pot 2",
				"Gerudo Training Ground MQ Lobby Right Pot 1",
				"Gerudo Training Ground MQ Lobby Right Pot 2",

				// Gerudo Training Ground MQ Crate
				"Gerudo Training Ground MQ Maze Crate",
			],
		],

		// Ganons Castle ORIGINAL
		[
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

			// v7 sanities
			[
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

			// Ganons Tower
			"Ganons Tower Boss Key Chest", // (shared with MQ)
		],

		// Ganons Castle MQ ONLY
		[
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
			[
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
		],
	],
];

window.RandoStuffs.OoT.core.Location.list = window.RandoStuffs.OoT.core.Location.list.flat(Number.MAX_SAFE_INTEGER);

// window.RandoStuffs.OoT.core.Location.oldToNewNames
//
(()=>{
	// last version 
	let newNameUntil71 = { // PAY VERY ATTENTION TO THE ORDER OF INDEXICES
		                   // CANNOT INSERT BETWEEN / CAN ONLY ADD AT END
		'Song' : [
			"Song from Royal Familys Tomb", // 0
		],
		'Kak' : [
			"Kak GS Near Gate Guard", // 0
		],
		'Graveyard' : [
			"Graveyard Royal Familys Tomb Chest",  // 0
			"Graveyard Dampe Race Hookshot Chest", // 1
		],
		'GF & Hideout' : [
			"Hideout 1 Torch Jail Gerudo Key",   // 0
			"Hideout 2 Torches Jail Gerudo Key", // 1
			"Hideout 3 Torches Jail Gerudo Key", // 2
			"Hideout 4 Torches Jail Gerudo Key", // 3
			"Hideout Gerudo Membership Card",    // 4
		],
		'Fire Temple MQ' : [
			"Fire Temple MQ GS Flame Maze Center",    // 0
			"Fire Temple MQ GS Flame Maze Side Room", // 1
			"Fire Temple MQ GS Above Flame Maze",     // 2
		],
		'Shadow Temple' : [
			"Shadow Temple GS Invisible Blades Room", // 0
		],
		'GTG' : [
			"Gerudo Training Ground Lobby Left Chest",              // 0
			"Gerudo Training Ground Lobby Right Chest",             // 1
			"Gerudo Training Ground Stalfos Chest",                 // 2
			"Gerudo Training Ground Before Heavy Block Chest",      // 3
			"Gerudo Training Ground Heavy Block First Chest",       // 4
			"Gerudo Training Ground Heavy Block Second Chest",      // 5
			"Gerudo Training Ground Heavy Block Third Chest",       // 6
			"Gerudo Training Ground Heavy Block Fourth Chest",      // 7
			"Gerudo Training Ground Eye Statue Chest",              // 8
			"Gerudo Training Ground Near Scarecrow Chest",          // 9
			"Gerudo Training Ground Hammer Room Clear Chest",       // 10
			"Gerudo Training Ground Hammer Room Switch Chest",      // 11
			"Gerudo Training Ground Freestanding Key",              // 12
			"Gerudo Training Ground Maze Right Central Chest",      // 13
			"Gerudo Training Ground Maze Right Side Chest",         // 14
			"Gerudo Training Ground Underwater Silver Rupee Chest", // 15
			"Gerudo Training Ground Beamos Chest",                  // 16
			"Gerudo Training Ground Hidden Ceiling Chest",          // 17
			"Gerudo Training Ground Maze Path First Chest",         // 18
			"Gerudo Training Ground Maze Path Second Chest",        // 19
			"Gerudo Training Ground Maze Path Third Chest",         // 20
			"Gerudo Training Ground Maze Path Final Chest",         // 21
		],
		'GTG MQ' : [
			"Gerudo Training Ground MQ Lobby Left Chest",              // 0
			"Gerudo Training Ground MQ Lobby Right Chest",             // 1
			"Gerudo Training Ground MQ First Iron Knuckle Chest",      // 2
			"Gerudo Training Ground MQ Before Heavy Block Chest",      // 3
			"Gerudo Training Ground MQ Heavy Block Chest",             // 4
			"Gerudo Training Ground MQ Eye Statue Chest",              // 5
			"Gerudo Training Ground MQ Ice Arrows Chest",              // 6
			"Gerudo Training Ground MQ Second Iron Knuckle Chest",     // 7
			"Gerudo Training Ground MQ Flame Circle Chest",            // 8
			"Gerudo Training Ground MQ Maze Right Central Chest",      // 9
			"Gerudo Training Ground MQ Maze Right Side Chest",         // 10
			"Gerudo Training Ground MQ Underwater Silver Rupee Chest", // 11
			"Gerudo Training Ground MQ Dinolfos Chest",                // 12
			"Gerudo Training Ground MQ Hidden Ceiling Chest",          // 13
			"Gerudo Training Ground MQ Maze Path First Chest",         // 14
			"Gerudo Training Ground MQ Maze Path Third Chest",         // 15
			"Gerudo Training Ground MQ Maze Path Second Chest",        // 16
		],
	};

	let NN = newNameUntil71; // (NN : new name)

	// from v6.0.0 to v7.1.0
	let oldToNewNames = [ // PAY VERY ATTENTION TO THE ORDER OF INDEXICES
		// Song
		[
			["Song from Composers Grave", NN['Song'][0]],
		],
		// Kak
		[
			["Kak GS Guards House", NN['Kak'][0]],
		],
		// Graveyard
		[
			["Graveyard Composers Grave Chest", NN['Graveyard'][0]],
			["Royal Familys Tomb Chest", NN['Graveyard'][0]],

			["Graveyard Hookshot Chest", NN['Graveyard'][1]],
		],
		// GF & Hideout
		[
			["GF North F1 Carpenter",     NN['GF & Hideout'][0]],
			["GF North F2 Carpenter",     NN['GF & Hideout'][2]],
			["GF South F1 Carpenter",     NN['GF & Hideout'][3]],
			["GF South F2 Carpenter",     NN['GF & Hideout'][1]],
			["GF Gerudo Membership Card", NN['GF & Hideout'][4]],

			["TH North 1F Red Jail Gerudo Key",   NN['GF & Hideout'][0]],
			["TH North 2F Green Jail Gerudo Key", NN['GF & Hideout'][2]],
			["TH South 1F Olive Jail Gerudo Key", NN['GF & Hideout'][3]],
			["TH South 2F Blue Jail Gerudo Key",  NN['GF & Hideout'][1]],
			["TH Gerudo Membership Card",         NN['GF & Hideout'][4]],

			["Hideout Red Jail Guard",         NN['GF & Hideout'][0]],
			["Hideout Green Jail Guard",       NN['GF & Hideout'][2]],
			["Hideout Olive Jail Guard",       NN['GF & Hideout'][3]],
			["Hideout Blue Jail Guard",        NN['GF & Hideout'][1]],
			["Hideout Gerudo Membership Card", NN['GF & Hideout'][4]],

			["Hideout 1 Torch Jail Guard",   NN['GF & Hideout'][0]],
			["Hideout 2 Torches Jail Guard", NN['GF & Hideout'][1]],
			["Hideout 3 Torches Jail Guard", NN['GF & Hideout'][2]],
			["Hideout 4 Torches Jail Guard", NN['GF & Hideout'][3]],

			["Hideout Jail Guard (1 Torch)",   NN['GF & Hideout'][0]],
			["Hideout Jail Guard (2 Torches)", NN['GF & Hideout'][1]],
			["Hideout Jail Guard (3 Torches)", NN['GF & Hideout'][2]],
			["Hideout Jail Guard (4 Torches)", NN['GF & Hideout'][3]],
		],
		// Fire Temple MQ
		[
			["Fire Temple MQ GS Fire Wall Maze Center",    NN['Fire Temple MQ'][0]],
			["Fire Temple MQ GS Fire Wall Maze Side Room", NN['Fire Temple MQ'][1]],
			["Fire Temple MQ GS Above Fire Wall Maze",     NN['Fire Temple MQ'][2]],
		],
		// Shadow Temple
		[
			["Shadow Temple GS Like Like Room", NN['Shadow Temple'][0]],
		],
		// GTG
		[
			["Gerudo Training Grounds Lobby Left Chest",              NN['GTG'][ 0]],
			["Gerudo Training Grounds Lobby Right Chest",             NN['GTG'][ 1]],
			["Gerudo Training Grounds Stalfos Chest",                 NN['GTG'][ 2]],
			["Gerudo Training Grounds Before Heavy Block Chest",      NN['GTG'][ 3]],
			["Gerudo Training Grounds Heavy Block First Chest",       NN['GTG'][ 4]],
			["Gerudo Training Grounds Heavy Block Second Chest",      NN['GTG'][ 5]],
			["Gerudo Training Grounds Heavy Block Third Chest",       NN['GTG'][ 6]],
			["Gerudo Training Grounds Heavy Block Fourth Chest",      NN['GTG'][ 7]],
			["Gerudo Training Grounds Eye Statue Chest",              NN['GTG'][ 8]],
			["Gerudo Training Grounds Near Scarecrow Chest",          NN['GTG'][ 9]],
			["Gerudo Training Grounds Hammer Room Clear Chest",       NN['GTG'][10]],
			["Gerudo Training Grounds Hammer Room Switch Chest",      NN['GTG'][11]],
			["Gerudo Training Grounds Freestanding Key",              NN['GTG'][12]],
			["Gerudo Training Grounds Maze Right Central Chest",      NN['GTG'][13]],
			["Gerudo Training Grounds Maze Right Side Chest",         NN['GTG'][14]],
			["Gerudo Training Grounds Underwater Silver Rupee Chest", NN['GTG'][15]],
			["Gerudo Training Grounds Beamos Chest",                  NN['GTG'][16]],
			["Gerudo Training Grounds Hidden Ceiling Chest",          NN['GTG'][17]],
			["Gerudo Training Grounds Maze Path First Chest",         NN['GTG'][18]],
			["Gerudo Training Grounds Maze Path Second Chest",        NN['GTG'][19]],
			["Gerudo Training Grounds Maze Path Third Chest",         NN['GTG'][20]],
			["Gerudo Training Grounds Maze Path Final Chest",         NN['GTG'][21]],
		],
		// GTG MQ
		[
			["Gerudo Training Grounds MQ Lobby Left Chest",              NN['GTG MQ'][ 0]],
			["Gerudo Training Grounds MQ Lobby Right Chest",             NN['GTG MQ'][ 1]],
			["Gerudo Training Grounds MQ First Iron Knuckle Chest",      NN['GTG MQ'][ 2]],
			["Gerudo Training Grounds MQ Before Heavy Block Chest",      NN['GTG MQ'][ 3]],
			["Gerudo Training Grounds MQ Heavy Block Chest",             NN['GTG MQ'][ 4]],
			["Gerudo Training Grounds MQ Eye Statue Chest",              NN['GTG MQ'][ 5]],
			["Gerudo Training Grounds MQ Ice Arrows Chest",              NN['GTG MQ'][ 6]],
			["Gerudo Training Grounds MQ Second Iron Knuckle Chest",     NN['GTG MQ'][ 7]],
			["Gerudo Training Grounds MQ Flame Circle Chest",            NN['GTG MQ'][ 8]],
			["Gerudo Training Grounds MQ Maze Right Central Chest",      NN['GTG MQ'][ 9]],
			["Gerudo Training Grounds MQ Maze Right Side Chest",         NN['GTG MQ'][10]],
			["Gerudo Training Grounds MQ Underwater Silver Rupee Chest", NN['GTG MQ'][11]],
			["Gerudo Training Grounds MQ Dinolfos Chest",                NN['GTG MQ'][12]],
			["Gerudo Training Grounds MQ Hidden Ceiling Chest",          NN['GTG MQ'][13]],
			["Gerudo Training Grounds MQ Maze Path First Chest",         NN['GTG MQ'][14]],
			["Gerudo Training Grounds MQ Maze Path Third Chest",         NN['GTG MQ'][15]],
			["Gerudo Training Grounds MQ Maze Path Second Chest",        NN['GTG MQ'][16]],
		],
	];
	window.RandoStuffs.OoT.core.Location.oldToNewNames = oldToNewNames.flat();
})();

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



