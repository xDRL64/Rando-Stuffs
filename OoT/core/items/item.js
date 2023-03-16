window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.Item ??= {};


window.RandoStuffs.OoT.core.Item.list = (function(GFX=window.RandoStuffs.OoT.core.Item.gfx||{}){

	return {
		
		'Ice Trap' :                                GFX.noGFXyet,
	
		// inventory items
		'Deku Stick Capacity' :                     GFX.dekuStick,
		'Deku Nut Capacity' :                       GFX.dekuNut,
		'Ocarina' :                                 GFX.fairyOcarina,
		'Slingshot' :                               GFX.fairySlingshot,
		'Boomerang' :                               GFX.boomerang,
		'Lens of Truth' :                           GFX.lensTruth,
		'Magic Bean Pack' :                         GFX.magicBeans,
		'Bow' :                                     GFX.fairyBow,
		'Progressive Hookshot' :                    GFX.hookshot,
		'Megaton Hammer' :                          GFX.megatonHammer,
		'Fire Arrows' :                             GFX.fireArrow,
		'Ice Arrows' :                              GFX.iceArrow,
		'Light Arrows' :                            GFX.lightArrow,
		'Dins Fire' :                               GFX.dinFire,
		'Farores Wind' :                            GFX.faroreWind,
		'Nayrus Love' :                             GFX.nayruLove,
	
		// bottle items
		'Rutos Letter' :                            GFX.rutoLetter,
		'Bottle' :                                  GFX.emptyBottle,
		'Bottle with Milk' :                        GFX.bottleMilk,
		'Bottle with Red Potion' :                  GFX.bottleRedPotion,
		'Bottle with Green Potion' :                GFX.bottleGreenPotion,
		'Bottle with Blue Potion' :                 GFX.bottleBluePotion,
		'Bottle with Fairy' :                       GFX.bottleFairy,
		'Bottle with Fish' :                        GFX.bottleFish,
		'Bottle with Blue Fire' :                   GFX.bottleBlueFire,
		'Bottle with Bugs' :                        GFX.bottleBugs,
		'Bottle with Big Poe' :                     GFX.bottleBigPoe,
		'Bottle with Poe' :                         GFX.bottlePoe,
	
		// trade items
		'Weird Egg' :                               GFX.egg,
		'Pocket Egg' :                              GFX.egg,
		'Pocket Cucco' :                            GFX.chicken,
		'Cojiro' :                                  GFX.cojiro,
		'Odd Mushroom' :                            GFX.oddMushroom,
		'Poachers Saw' :                            GFX.poacherSaw,
		'Broken Sword' :                            GFX.brokenSword,
		'Prescription' :                            GFX.prescription,
		'Eyeball Frog' :                            GFX.eyeballFrog,
		'Eyedrops' :                                GFX.eyedrops,
		'Claim Check' :                             GFX.claimCheck,
		
		// switchable equipment items
		'Kokiri Sword' :                            GFX.kokiriSword,
		'Giants Knife' :                            GFX.goronSword,
		'Biggoron Sword' :                          GFX.goronSword,
		'Deku Shield' :                             GFX.dekuShield,
		'Hylian Shield' :                           GFX.hylianShield,
		'Mirror Shield' :                           GFX.mirrorShield,
		'Goron Tunic' :                             GFX.goronTunic,
		'Zora Tunic' :                              GFX.zoraTunic,
		'Iron Boots' :                              GFX.ironBoots,
		'Hover Boots' :                             GFX.hoverBoots,
		
		// fix equipment items
		'Bomb Bag' :                                GFX.bombBag,
		'Progressive Strength Upgrade' :            GFX.goronBracelet,
		'Progressive Scale' :                       GFX.silverScale,
		'Progressive Wallet' :                      GFX.adultWallet,
	
		// status items
		'Magic Meter' :                             GFX.magicJarDrop,
		'Heart Container' :                         GFX.heartContainer,
		'Piece of Heart (Treasure Chest Game)' :    GFX.pieceHeart,
		'Piece of Heart' :                          GFX.pieceHeart,
		'Double Defense' :                          GFX.doubleDefense,
	
		// quest items
		'Gerudo Membership Card' :                  GFX.gerudoCard,
		'Stone of Agony' :                          GFX.stoneAgony,
		'Gold Skulltula Token' :                    GFX.goldSkullToken,
		
		// small key items
		'Small Key (Bottom of the Well)' :          GFX.smallKey,
		'Small Key (Forest Temple)' :               GFX.smallKey,
		'Small Key (Fire Temple)' :                 GFX.smallKey,
		'Small Key (Water Temple)' :                GFX.smallKey,
		'Small Key (Spirit Temple)' :               GFX.smallKey,
		'Small Key (Shadow Temple)' :               GFX.smallKey,
		'Small Key (Thieves Hideout)' :             GFX.smallKey,
		'Small Key (Gerudo Training Ground)' :      GFX.smallKey,
		'Small Key (Ganons Castle)' :               GFX.smallKey,
	
		// small key ring
		'Small Key Ring (Bottom of the Well)' :     GFX.smallKey,
		'Small Key Ring (Forest Temple)' :          GFX.smallKey,
		'Small Key Ring (Fire Temple)' :            GFX.smallKey,
		'Small Key Ring (Water Temple)' :           GFX.smallKey,
		'Small Key Ring (Shadow Temple)' :          GFX.smallKey,
		'Small Key Ring (Spirit Temple)' :          GFX.smallKey,
		'Small Key Ring (Thieves Hideout)' :        GFX.smallKey,
		'Small Key Ring (Gerudo Training Ground)' : GFX.smallKey,
		'Small Key Ring (Ganons Castle)' :          GFX.smallKey,
	
		// boss key items
		'Boss Key (Forest Temple)' :                GFX.bossKey,
		'Boss Key (Water Temple)' :                 GFX.bossKey,
		'Boss Key (Fire Temple)' :                  GFX.bossKey,
		'Boss Key (Spirit Temple)' :                GFX.bossKey,
		'Boss Key (Shadow Temple)' :                GFX.bossKey,
		'Boss Key (Ganons Castle)' :                GFX.bossKey,
	
		// map items
		'Map (Deku Tree)' :                         GFX.map,
		'Map (Dodongos Cavern)' :                   GFX.map,
		'Map (Jabu Jabus Belly)' :                  GFX.map,
		'Map (Forest Temple)' :                     GFX.map,
		'Map (Fire Temple)' :                       GFX.map,
		'Map (Water Temple)' :                      GFX.map,
		'Map (Spirit Temple)' :                     GFX.map,
		'Map (Shadow Temple)' :                     GFX.map,
		'Map (Bottom of the Well)' :                GFX.map,
		'Map (Ice Cavern)' :                        GFX.map,
	
		// compass items
		'Compass (Deku Tree)' :                     GFX.compass,
		'Compass (Dodongos Cavern)' :               GFX.compass,
		'Compass (Jabu Jabus Belly)' :              GFX.compass,
		'Compass (Forest Temple)' :                 GFX.compass,
		'Compass (Fire Temple)' :                   GFX.compass,
		'Compass (Water Temple)' :                  GFX.compass,
		'Compass (Spirit Temple)' :                 GFX.compass,
		'Compass (Shadow Temple)' :                 GFX.compass,
		'Compass (Bottom of the Well)' :            GFX.compass,
		'Compass (Ice Cavern)' :                    GFX.compass,
		
		// consumable items
		'Recovery Heart' :                          GFX.heartDrop,
		'Rupee (1)' :                               GFX.greenRupeeHUD,
		'Rupees (5)' :                              GFX.blueRupeeHUD,
		'Rupees (20)' :                             GFX.redRupeeHUD,
		'Rupees (50)' :                             GFX.purpleRupeeHUD,
		'Rupees (200)' :                            GFX.orangeRupeeHUD,
		'Deku Stick (1)' :                          GFX.dekuStickDrop,
		'Deku Seeds (30)' :                         GFX.dekuSeeds,
		'Deku Nuts (5)' :                           GFX.dekuNutDrop,
		'Deku Nuts (10)' :                          GFX.dekuNutDrop,
		'Arrows (5)' :                              GFX.arrowDrop,
		'Arrows (10)' :                             GFX.arrowBigDrop,
		'Arrows (30)' :                             GFX.arrowBiggestDrop,
		'Bombs (5)' :                               GFX.bomb,
		'Bombs (10)' :                              GFX.bomb,
		'Bombs (20)' :                              GFX.bomb,
		'Bombchus (5)' :                            GFX.bombchu,
		'Bombchus (10)' :                           GFX.bombchu,
		'Bombchus (20)' :                           GFX.bombchu,
		
		// song items
		'Zeldas Lullaby' :                          GFX.whiteNote,
		'Eponas Song' :                             GFX.whiteNote,
		'Sarias Song' :                             GFX.whiteNote,
		'Suns Song' :                               GFX.whiteNote,
		'Song of Time' :                            GFX.whiteNote,
		'Song of Storms' :                          GFX.whiteNote,
		'Minuet of Forest' :                        GFX.greenNote,
		'Bolero of Fire' :                          GFX.redNote,
		'Serenade of Water' :                       GFX.blueNote,
		'Requiem of Spirit' :                       GFX.orangeNote,
		'Nocturne of Shadow' :                      GFX.violetNote,
		'Prelude of Light' :                        GFX.yellowNote,
	
		// stone and medallion items
		'Kokiri Emerald' :                          GFX.kokiriEmerald,
		'Goron Ruby' :                              GFX.goronRuby,
		'Zora Sapphire' :                           GFX.zoraSapphire,
		'Light Medallion' :                         GFX.lightMedallion,
		'Forest Medallion' :                        GFX.forestMedallion,
		'Fire Medallion' :                          GFX.fireMedallion,
		'Water Medallion' :                         GFX.waterMedallion,
		'Spirit Medallion' :                        GFX.spiritMedallion,
		'Shadow Medallion' :                        GFX.shadowMedallion,
	
		// OoTR
		'Triforce Piece' :                          GFX.noGFXyet,
		
		// standard shop items
		'Buy Heart' :                               GFX.heartDrop,
		'Buy Deku Stick (1)' :                      GFX.dekuStickDrop,
		'Buy Deku Seeds (30)' :                     GFX.dekuSeeds,
		'Buy Deku Nut (5)' :                        GFX.dekuNutDrop,
		'Buy Deku Nut (10)' :                       GFX.dekuNutDrop,
		'Buy Arrows (10)' :                         GFX.arrowDrop,
		'Buy Arrows (30)' :                         GFX.arrowBigDrop,
		'Buy Arrows (50)' :                         GFX.arrowBiggestDrop,
		'Buy Bombs (5) for 25 Rupees' :             GFX.bomb,
		'Buy Bombs (5) for 35 Rupees' :             GFX.bomb,
		'Buy Bombs (10)' :                          GFX.bomb,
		'Buy Bombs (20)' :                          GFX.bomb,
		'Buy Bombchu (10)' :                        GFX.bombchu,
		'Buy Bombchu (20)' :                        GFX.bombchu,
		'Buy Bombchu (5)' :                         GFX.bombchu,
		'Buy Red Potion for 30 Rupees' :            GFX.bottleRedPotion,
		'Buy Red Potion for 40 Rupees' :            GFX.bottleRedPotion,
		'Buy Red Potion for 50 Rupees' :            GFX.bottleRedPotion,
		'Buy Green Potion' :                        GFX.bottleGreenPotion,
		'Buy Bottle Bug' :                          GFX.bottleBugs,
		'Buy Fairy\'s Spirit' :                     GFX.bottleFairy,
		'Buy Fish' :                                GFX.bottleFish,
		'Buy Blue Fire' :                           GFX.bottleBlueFire,
		'Buy Deku Shield' :                         GFX.dekuShield,
		'Buy Hylian Shield' :                       GFX.hylianShield,
		'Buy Goron Tunic' :                         GFX.goronTunic,
		'Buy Zora Tunic' :                          GFX.zoraTunic,
	
	};
})();

window.RandoStuffs.OoT.core.Item.hashIcons = ((GFX=window.RandoStuffs.OoT.core.Item.gfx||{})=>{

	return {
		'Deku Stick'       : GFX.dekuStick,
		'Deku Nut'         : GFX.dekuNut,
		'Bow'              : GFX.fairyBow,
		'Slingshot'        : GFX.fairySlingshot,
		'Fairy Ocarina'    : GFX.fairyOcarina,
		'Bombchu'          : GFX.bombchu,
		'Longshot'         : GFX.longshot,
		'Boomerang'        : GFX.boomerang,
		'Lens of Truth'    : GFX.lensTruth,
		'Beans'            : GFX.magicBeans,
		'Megaton Hammer'   : GFX.megatonHammer,
		'Bottled Fish'     : GFX.bottleFish,
		'Bottled Milk'     : GFX.bottleMilk,
		'Mask of Truth'    : GFX.TruthMask,
		'SOLD OUT'         : GFX.soldOut,
		'Cucco'            : GFX.chicken, // need a check (GZ ROM : compare child/adult)
		'Mushroom'         : GFX.oddMushroom,
		'Saw'              : GFX.poacherSaw,
		'Frog'             : GFX.eyeballFrog,
		'Master Sword'     : GFX.masterSword,
		'Mirror Shield'    : GFX.mirrorShield,
		'Kokiri Tunic'     : GFX.kokiriTunic,
		'Hover Boots'      : GFX.hoverBoots,
		'Silver Gauntlets' : GFX.silverGauntlets,
		'Gold Scale'       : GFX.goldenScale,
		'Stone of Agony'   : GFX.stoneAgony,
		'Skull Token'      : GFX.goldSkullToken,
		'Heart Container'  : GFX.heartContainer,
		'Boss Key'         : GFX.bossKey,
		'Compass'          : GFX.compass,
		'Map'              : GFX.map,
		'Big Magic'        : GFX.bigMagicJarDrop, // need a check (OoTR ROM : choose file screen)
	};

})();


window.RandoStuffs.OoT.core.Item.filterListSet = {

	majorItems : {
		labelTxt : 'Major Items',
		itemList : [
			'Ocarina',
			'Slingshot',
			'Boomerang',
			'Lens of Truth',
			'Bow',
			'Progressive Hookshot',
			'Megaton Hammer',
			'Fire Arrows',
			'Light Arrows',
			'Dins Fire',
			'Rutos Letter',
			'Kokiri Sword',
			'Deku Shield',
			'Mirror Shield',
			'Goron Tunic',
			'Zora Tunic',
			'Iron Boots',
			'Hover Boots',
			'Bomb Bag',
			'Progressive Strength Upgrade',
			'Progressive Scale',
			'Progressive Wallet',
			'Magic Meter',
			'Gerudo Membership Card',
			'Small Key (Bottom of the Well)',
			'Small Key (Forest Temple)',
			'Small Key (Fire Temple)',
			'Small Key (Water Temple)',
			'Small Key (Spirit Temple)',
			'Small Key (Shadow Temple)',
			'Small Key (Thieves Hideout)',
			'Small Key (Gerudo Training Ground)',
			'Small Key (Ganons Castle)',
			'Small Key Ring (Bottom of the Well)',
			'Small Key Ring (Forest Temple)',
			'Small Key Ring (Fire Temple)',
			'Small Key Ring (Water Temple)',
			'Small Key Ring (Shadow Temple)',
			'Small Key Ring (Spirit Temple)',
			'Small Key Ring (Thieves Hideout)',
			'Small Key Ring (Gerudo Training Ground)',
			'Small Key Ring (Ganons Castle)',
			'Boss Key (Forest Temple)',
			'Boss Key (Water Temple)',
			'Boss Key (Fire Temple)',
			'Boss Key (Spirit Temple)',
			'Boss Key (Shadow Temple)',
			'Boss Key (Ganons Castle)',
			'Bombchus (5)',
			'Bombchus (10)',
			'Bombchus (20)',
			'Triforce Piece',
			'Buy Bombchu (10)',
			'Buy Bombchu (20)',
			'Buy Bombchu (5)',
			'Buy Deku Shield',
			'Buy Goron Tunic',
			'Buy Zora Tunic',
		],
	},

	inventory : {
		labelTxt : 'Inventory Items',
		itemList : [
			'Deku Stick Capacity',
			'Deku Nut Capacity',
			'Ocarina',
			'Slingshot',
			'Boomerang',
			'Lens of Truth',
			'Magic Bean Pack',
			'Bow',
			'Progressive Hookshot',
			'Megaton Hammer',
			'Fire Arrows',
			'Ice Arrows',
			'Light Arrows',
			'Dins Fire',
			'Farores Wind',
			'Nayrus Love',
		],
	},

	bottles : {
		labelTxt : 'Bottles',
		itemList : [
			'Rutos Letter',
			'Bottle',
			'Bottle with Milk',
			'Bottle with Red Potion',
			'Bottle with Green Potion',
			'Bottle with Blue Potion',
			'Bottle with Fairy',
			'Bottle with Fish',
			'Bottle with Blue Fire',
			'Bottle with Bugs',
			'Bottle with Big Poe',
			'Bottle with Poe',
		],
	},

	trade : {
		labelTxt : 'Trade Items',
		itemList : [
			'Weird Egg',
			'Pocket Egg',
			'Pocket Cucco',
			'Cojiro',
			'Odd Mushroom',
			'Poachers Saw',
			'Broken Sword',
			'Prescription',
			'Eyeball Frog',
			'Eyedrops',
			'Claim Check',
		],
	},

	switchEquip : {
		labelTxt : 'Switchable Equipment',
		itemList : [
			'Kokiri Sword',
			'Giants Knife',
			'Biggoron Sword',
			'Deku Shield',
			'Hylian Shield',
			'Mirror Shield',
			'Goron Tunic',
			'Zora Tunic',
			'Iron Boots',
			'Hover Boots',
		],
	},

	fixEquip : {
		labelTxt : 'Fix Equipment',
		itemList : [
			'Bomb Bag',
			'Progressive Strength Upgrade',
			'Progressive Scale',
			'Progressive Wallet',
			'Slingshot',
			'Bow',
		],
	},

	status : {
		labelTxt : 'Status Items',
		itemList : [
			'Magic Meter',
			'Heart Container',
			'Piece of Heart (Treasure Chest Game)',
			'Piece of Heart',
			'Double Defense',
		],
	},

	quest : {
		labelTxt : 'Quest Menu Items',
		itemList : [
			'Gerudo Membership Card',
			'Stone of Agony',
			'Gold Skulltula Token',
			'Zeldas Lullaby',
			'Eponas Song',
			'Sarias Song',
			'Suns Song',
			'Song of Time',
			'Song of Storms',
			'Minuet of Forest',
			'Bolero of Fire',
			'Serenade of Water',
			'Requiem of Spirit',
			'Nocturne of Shadow',
			'Prelude of Light',
			'Kokiri Emerald',
			'Goron Ruby',
			'Zora Sapphire',
			'Light Medallion',
			'Forest Medallion',
			'Fire Medallion',
			'Water Medallion',
			'Spirit Medallion',
			'Shadow Medallion',
			'Triforce Piece',
		],
	},

	dungeon : {
		labelTxt : 'Dungeon Stuff Items',
		itemList : [
			'Small Key (Bottom of the Well)',
			'Small Key (Forest Temple)',
			'Small Key (Fire Temple)',
			'Small Key (Water Temple)',
			'Small Key (Spirit Temple)',
			'Small Key (Shadow Temple)',
			'Small Key (Thieves Hideout)',
			'Small Key (Gerudo Training Ground)',
			'Small Key (Ganons Castle)',
			'Small Key Ring (Bottom of the Well)',
			'Small Key Ring (Forest Temple)',
			'Small Key Ring (Fire Temple)',
			'Small Key Ring (Water Temple)',
			'Small Key Ring (Shadow Temple)',
			'Small Key Ring (Spirit Temple)',
			'Small Key Ring (Thieves Hideout)',
			'Small Key Ring (Gerudo Training Ground)',
			'Small Key Ring (Ganons Castle)',
			'Boss Key (Forest Temple)',
			'Boss Key (Water Temple)',
			'Boss Key (Fire Temple)',
			'Boss Key (Spirit Temple)',
			'Boss Key (Shadow Temple)',
			'Boss Key (Ganons Castle)',
			'Map (Deku Tree)',
			'Map (Dodongos Cavern)',
			'Map (Jabu Jabus Belly)',
			'Map (Forest Temple)',
			'Map (Fire Temple)',
			'Map (Water Temple)',
			'Map (Spirit Temple)',
			'Map (Shadow Temple)',
			'Map (Bottom of the Well)',
			'Map (Ice Cavern)',
			'Compass (Deku Tree)',
			'Compass (Dodongos Cavern)',
			'Compass (Jabu Jabus Belly)',
			'Compass (Forest Temple)',
			'Compass (Fire Temple)',
			'Compass (Water Temple)',
			'Compass (Spirit Temple)',
			'Compass (Shadow Temple)',
			'Compass (Bottom of the Well)',
			'Compass (Ice Cavern)',
		],
	},

	consumable : {
		labelTxt : 'Consumable Items',
		itemList : [
			'Recovery Heart',
			'Rupee (1)',
			'Rupees (5)',
			'Rupees (20)',
			'Rupees (50)',
			'Rupees (200)',
			'Deku Stick (1)',
			'Deku Seeds (30)',
			'Deku Nuts (5)',
			'Deku Nuts (10)',
			'Arrows (5)',
			'Arrows (10)',
			'Arrows (30)',
			'Bombs (5)',
			'Bombs (10)',
			'Bombs (20)',
			'Bombchus (5)',
			'Bombchus (10)',
			'Bombchus (20)',
		],
	},

	shop : {
		labelTxt : 'Shop\'s Standard Items',
		itemList : [
			'Buy Heart',
			'Buy Deku Stick (1)',
			'Buy Deku Seeds (30)',
			'Buy Deku Nut (5)',
			'Buy Deku Nut (10)',
			'Buy Arrows (10)',
			'Buy Arrows (30)',
			'Buy Arrows (50)',
			'Buy Bombs (5) for 25 Rupees',
			'Buy Bombs (5) for 35 Rupees',
			'Buy Bombs (10)',
			'Buy Bombs (20)',
			'Buy Bombchu (10)',
			'Buy Bombchu (20)',
			'Buy Bombchu (5)',
			'Buy Red Potion for 30 Rupees',
			'Buy Red Potion for 40 Rupees',
			'Buy Red Potion for 50 Rupees',
			'Buy Green Potion',
			'Buy Bottle Bug',
			'Buy Fairy\'s Spirit',
			'Buy Fish',
			'Buy Blue Fire',
			'Buy Deku Shield',
			'Buy Hylian Shield',
			'Buy Goron Tunic',
			'Buy Zora Tunic',
		],
	},

};


// window.RandoStuffs.OoT.core.Item.oldToNewNames
(()=>{
	// last version
	let newNameUntil71 = { // PAY VERY ATTENTION TO THE ORDER OF INDEXICES
						   // CANNOT INSERT BETWEEN / CAN ONLY ADD AT END
		'Buy Item' : [
			"Buy Bombs (5) for 25 Rupees",  // 0
			"Buy Red Potion for 30 Rupees", // 1
			"Buy Bombs (5) for 35 Rupees",  // 2
			"Buy Red Potion for 40 Rupees", // 3
			"Buy Red Potion for 50 Rupees", // 4
		],
		'Small Keys' : [
			"Small Key (Thieves Hideout)",              //  0
			"Small Key (Gerudo Training Ground)",       //  1

			"Small Key Ring (Bottom of the Well)",      //  2
			"Small Key Ring (Forest Temple)",           //  3
			"Small Key Ring (Fire Temple)",             //  4
			"Small Key Ring (Water Temple)",            //  5
			"Small Key Ring (Shadow Temple)",           //  6
			"Small Key Ring (Spirit Temple)",           //  7
			"Small Key Ring (Thieves Hideout)",         //  8
			"Small Key Ring (Gerudo Training Ground)",  //  9
			"Small Key Ring (Ganons Castle)",           // 10
		],
	};

	let NN = newNameUntil71; // (NN : new name)

	// from v6.0.0 to v7.1.0
	let oldToNewNames = [ // PAY VERY ATTENTION TO THE ORDER OF INDEXICES
		// Buy Item
		[
			["Buy Bombs (5) [25]",  NN['Buy Item'][0]],
			["Buy Red Potion [30]", NN['Buy Item'][1]],
			["Buy Bombs (5) [35]",  NN['Buy Item'][2]],
			["Buy Red Potion [40]", NN['Buy Item'][3]],
			["Buy Red Potion [50]", NN['Buy Item'][4]],
	
			["Buy Bombs (5) for 25",  NN['Buy Item'][0]],
			["Buy Red Potion for 30", NN['Buy Item'][1]],
			["Buy Bombs (5) for 35",  NN['Buy Item'][2]],
			["Buy Red Potion for 40", NN['Buy Item'][3]],
			["Buy Red Potion for 50", NN['Buy Item'][4]],
		],
		// Small Keys
		[
			["Small Key (Gerudo Fortress)",             NN['Small Keys'][0]],
			["Small Key (Gerudo Training Grounds)",     NN['Small Keys'][1]],

			["Small Key Pack (Bottom of the Well)",     NN['Small Keys'][ 2]],
			["Small Key Pack (Forest Temple)",          NN['Small Keys'][ 3]],
			["Small Key Pack (Fire Temple)",            NN['Small Keys'][ 4]],
			["Small Key Pack (Water Temple)",           NN['Small Keys'][ 5]],
			["Small Key Pack (Shadow Temple)",          NN['Small Keys'][ 6]],
			["Small Key Pack (Spirit Temple)",          NN['Small Keys'][ 7]],
			["Small Key Pack (Thieves Hideout)",        NN['Small Keys'][ 8]],
			["Small Key Pack (Gerudo Training Ground)", NN['Small Keys'][ 9]],
			["Small Key Pack (Ganons Castle)",          NN['Small Keys'][10]],       
		],
	];
	window.RandoStuffs.OoT.core.Item.oldToNewNames = oldToNewNames.flat();
})();