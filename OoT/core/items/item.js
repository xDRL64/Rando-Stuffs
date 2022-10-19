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
        'Gold Skulltula Token':                     GFX.goldSkullToken,
        
        // small key items
        'Small Key (Bottom of the Well)' :          GFX.smallKey,
        'Small Key (Forest Temple)' :               GFX.smallKey,
        'Small Key (Fire Temple)' :                 GFX.smallKey,
        'Small Key (Water Temple)' :                GFX.smallKey,
        'Small Key (Spirit Temple)' :               GFX.smallKey,
        'Small Key (Shadow Temple)' :               GFX.smallKey,
        'Small Key (Gerudo Fortress)' :             GFX.smallKey,
        'Small Key (Gerudo Training Grounds)' :     GFX.smallKey,
        'Small Key (Ganons Castle)' :               GFX.smallKey,
    
        // small key ring
        'Small Key Ring (Thieves Hideout)' :        GFX.smallKey,
        'Small Key Ring (Shadow Temple)' :          GFX.smallKey,
        'Small Key Ring (Ganons Castle)' :          GFX.smallKey,
        'Small Key Ring (Forest Temple)' :          GFX.smallKey,
        'Small Key Ring (Spirit Temple)' :          GFX.smallKey,
        'Small Key Ring (Fire Temple)' :            GFX.smallKey,
        'Small Key Ring (Water Temple)' :           GFX.smallKey,
        'Small Key Ring (Bottom of the Well)' :     GFX.smallKey,
        'Small Key Ring (Gerudo Training Ground)' : GFX.smallKey,
    
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
        
        'Bombchus (5)' :                            GFX.bombchu,
        'Bombchus (10)' :                           GFX.bombchu,
        'Bombchus (20)' :                           GFX.bombchu,
        
        'Arrows (5)' :                              GFX.arrowDrop,
        'Arrows (10)' :                             GFX.arrowBigDrop,
        'Arrows (30)' :                             GFX.arrowBiggestDrop,
    
        'Bombs (5)' :                               GFX.bomb,
        'Bombs (10)' :                              GFX.bomb,
        'Bombs (20)' :                              GFX.bomb,
    
        'Deku Nuts (5)' :                           GFX.dekuNutDrop,
        'Deku Nuts (10)' :                          GFX.dekuNutDrop,
    
        'Deku Seeds (30)' :                         GFX.dekuSeeds,
    
        'Deku Stick (1)' :                          GFX.dekuStickDrop,
    
        'Rupee (1)' :                               GFX.greenRupeeHUD,
        'Rupees (5)' :                              GFX.blueRupeeHUD,
        'Rupees (20)' :                             GFX.redRupeeHUD,
        'Rupees (50)' :                             GFX.purpleRupeeHUD,
        'Rupees (200)' :                            GFX.orangeRupeeHUD,
    
        'Recovery Heart' :                          GFX.heartDrop,
        
        
        
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
        'Buy Deku Stick (1)' :                      GFX.dekuStickDrop,
        
        'Buy Deku Nut (5)' :                        GFX.dekuNutDrop,
        'Buy Deku Nut (10)' :                       GFX.dekuNutDrop,
    
        'Buy Arrows (10)' :                         GFX.arrowDrop,
        'Buy Arrows (30)' :                         GFX.arrowBigDrop,
        'Buy Arrows (50)' :                         GFX.arrowBiggestDrop,
    
        'Buy Deku Seeds (30)' :                     GFX.dekuSeeds,
    
        'Buy Bombs (5) [25]' :                      GFX.bomb,
        'Buy Bombs (5) [35]' :                      GFX.bomb,
        'Buy Bombs (10)' :                          GFX.bomb,
        'Buy Bombs (20)' :                          GFX.bomb,
    
        'Buy Bombchu (10)' :                        GFX.bombchu,
        'Buy Bombchu (20)' :                        GFX.bombchu,
        'Buy Bombchu (5)' :                         GFX.bombchu,
    
        'Buy Deku Shield' :                         GFX.dekuShield,
        'Buy Hylian Shield' :                       GFX.hylianShield,
        
        'Buy Red Potion [30]' :                     GFX.bottleRedPotion,
        'Buy Red Potion [50]' :                     GFX.bottleRedPotion,
        'Buy Green Potion' :                        GFX.bottleGreenPotion,
        'Buy Bottle Bug' :                          GFX.bottleBugs,
        'Buy Fairy\'s Spirit' :                     GFX.bottleFairy,
        'Buy Fish' :                                GFX.bottleFish,
        'Buy Blue Fire' :                           GFX.bottleBlueFire,
        
        'Buy Goron Tunic' :                         GFX.goronTunic,
        'Buy Zora Tunic' :                          GFX.zoraTunic,
    
    };
})();







