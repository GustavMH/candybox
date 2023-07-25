var code = ""

const bool_to_n = (bool) => bool ? 1 : 0
const n_to_bool = (n) => n == 1

function save() {
	var date = new Date()
	
	var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var min = date.getMinutes()
	var year = date.getFullYear() + ""

    month = (month < 10 ? "0" : "") + month
    day = (day < 10 ? "0" : "") + day
    hour = (hour < 10 ? "0" : "") + hour
    min = (min < 10 ? "0" : "") + min
	
	var save_text = "code: " + ((code === undefined || code == null || code.length == "") ? 0 : code) + "\n" + 
					"swordName: " + sword.name + "\n" + 
					"swordSpecialSword: " + bool_to_n(sword.specialSword) + "\n" + 
					"swordSpecialPower: " + sword.specialPower + "\n" + 
					"candiesNbrOwned: " + candies.nbrOwned + "\n" + 
					"candiesNbrThrown: " + candies.nbrThrown + "\n" + 
					"candiesNbrEaten: " + candies.nbrEaten + "\n" + 
					"candiesNbrTotal: " + candies.nbrTotal + "\n" + 
					"candiesCandiesPerSecond: " + candies.candiesPerSecond + "\n" + 
					"candiesConverterActivated: " + bool_to_n(candiesConverter.activated) + "\n" + 
					"cauldronBookPage: " + cauldron.bookPage + "\n" + 
					"cauldronCandies: " + cauldron.candiesInTheCauldron + "\n" + 
					"cauldronLollipops: " + cauldron.lollipopsInTheCauldron + "\n" + 
					"chocolateBarsNbrOwned: " + chocolateBars.nbrOwned + "\n" + 
					"farmLollipopsPlanted: " + farm.lollipopsPlanted + "\n" + 
					"farmCurrentFlagIndex: " + farm.currentFlagIndex + "\n" + 
					"farmPlantingButtonsStep: " + farm.plantingButtonsStep + "\n" + 
					"forgeStep: " + forge.step + "\n" + 
					"shopLollipopsButtonsShown: " + bool_to_n(shop.buy10LollipopsButtonShown) + "\n" + 
					"shopShown: " + bool_to_n(shop.shown) + "\n" + 
					"shopTicklingStep: " + shop.ticklingStep + "\n" + 
					"shopClickingOnLollipopStep: " + shop.clickingOnLollipopStep + "\n" + 
					"hutStep: " + hut.step + "\n" + 
					"hutSpeech: " + hut.speech + "\n" + 
					"inventoryMagicianHatLetter: " + inventory.magicianHatLetter + "\n" + 
					"lollipopsNbrOwned: " + lollipops.nbrOwned + "\n" + 
					"lollipopsNbrInStock: " + lollipops.nbrInStock + "\n" + 
					"lollipopsNbrBought: " + lollipops.nbrBought + "\n" + 
					"mainNbrOfSecondsSinceLastMinInterval: " + main.nbrOfSecondsSinceLastMinInterval + "\n" + 
					"mainNbrOfSecondsSinceLastHourInterval: " + main.nbrOfSecondsSinceLastHourInterval + "\n" + 
					"mainNbrOfSecondsSinceLastDayInterval: " + main.nbrOfSecondsSinceLastDayInterval + "\n" + 
					"mountGoblinBasicChestProbability: " + mountGoblin.basicChestProbability + "\n" + 
					"peacefulForestBasicChestProbability: " + peacefulForest.basicChestProbability + "\n" + 
					"peacefulForestPoniesEncountered: " + peacefulForest.poniesEncountered + "\n" + 
					"objectsHaveObjectKey: " + bool_to_n(objects.all.key.have) + "\n" + 
					"objectsHaveObjectHutMap: " + bool_to_n(objects.all.hutMap.have) + "\n" + 
					"objectsHaveObjectWellMap: " + bool_to_n(objects.all.wellMap.have) + "\n" + 
					"objectsHaveObjectSwampMap: " + bool_to_n(objects.all.swampMap.have) + "\n" + 
					"objectsHaveObjectBoots: " + bool_to_n(objects.all.boots.have) + "\n" + 
					"objectsHaveObjectMagicianHat: " + bool_to_n(objects.all.magicianHat.have) + "\n" + 
					"objectsHaveObjectPinkRing: " + bool_to_n(objects.all.pinkRing.have) + "\n" + 
					"objectsHaveObjectForgeMap: " + bool_to_n(objects.all.forgeMap.have) + "\n" + 
					"objectsHaveObjectCandiesConverter: " + bool_to_n(objects.all.candiesConverter.have) + "\n" + 
					"objectsHaveObjectPlateArmour: " + bool_to_n(objects.all.plateArmour.have) + "\n" + 
					"objectsHaveObjectCauldron: " + bool_to_n(objects.all.cauldron.have) + "\n" + 
					"objectsHaveObjectMagicalHorn: " + bool_to_n(objects.all.magicalHorn.have) + "\n" + 
					"objectsHaveObjectHornOfPlenty: " + bool_to_n(objects.all.hornOfPlenty.have) + "\n" + 
					"objectsHaveObjectOldAmulet: " + bool_to_n(objects.all.oldAmulet.have) + "\n" + 
					"potionsShownHealth: " + bool_to_n(potions.list.health.shown) + "\n" + 
					"potionsShownEscape: " + bool_to_n(potions.list.escape.shown) + "\n" + 
					"potionsShownBerserk: " + bool_to_n(potions.list.berserk.shown) + "\n" + 
					"potionsShownFireScroll: " + bool_to_n(potions.list.fireScroll.shown) + "\n" + 
					"potionsShownAcidRainScroll: " + bool_to_n(potions.list.acidRainScroll.shown) + "\n" + 
					"potionsShownTeleportScroll: " + bool_to_n(potions.list.teleportScroll.shown) + "\n" + 
					"potionsShownEarthquakeScroll: " + bool_to_n(potions.list.earthquakeScroll.shown) + "\n" + 
					"potionsShownImpInvocationScroll: " + bool_to_n(potions.list.impInvocationScroll.shown) + "\n" + 
					"potionsShownMajorHealth: " + bool_to_n(potions.list.majorHealth.shown) + "\n" + 
					"potionsShownInvulnerability: " + bool_to_n(potions.list.invulnerability.shown) + "\n" + 
					"potionsShownTurtle: " + bool_to_n(potions.list.turtle.shown) + "\n" + 
					"potionsShownJelly: " + bool_to_n(potions.list.jelly.shown) + "\n" + 
					"potionsShownSeed: " + bool_to_n(potions.list.seed.shown) + "\n" + 
					"potionsShownCloning: " + bool_to_n(potions.list.cloning.shown) + "\n" + 
					"potionsShownSuperman: " + bool_to_n(potions.list.superman.shown) + "\n" + 
					"potionsShownGmooh: " + bool_to_n(potions.list.gmooh.shown) + "\n" + 
					"potionsNbrOwnedHealth: " + potions.list.health.nbrOwned + "\n" + 
					"potionsNbrOwnedEscape: " + potions.list.escape.nbrOwned + "\n" + 
					"potionsNbrOwnedBerserk: " + potions.list.berserk.nbrOwned + "\n" + 
					"potionsNbrOwnedFireScroll: " + potions.list.fireScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedAcidRainScroll: " + potions.list.acidRainScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedTeleportScroll: " + potions.list.teleportScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedEarthquakeScroll: " + potions.list.earthquakeScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedImpInvocationScroll: " + potions.list.impInvocationScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedMajorHealth: " + potions.list.majorHealth.nbrOwned + "\n" + 
					"potionsNbrOwnedInvulnerability: " + potions.list.invulnerability.nbrOwned + "\n" + 
					"potionsNbrOwnedTurtle: " + potions.list.turtle.nbrOwned + "\n" + 
					"potionsNbrOwnedJelly: " + potions.list.jelly.nbrOwned + "\n" + 
					"potionsNbrOwnedSeed: " + potions.list.seed.nbrOwned + "\n" + 
					"potionsNbrOwnedCloning: " + potions.list.cloning.nbrOwned + "\n" + 
					"potionsNbrOwnedSuperman: " + potions.list.superman.nbrOwned + "\n" + 
					"potionsNbrOwnedGmooh: " + potions.list.gmooh.nbrOwned + "\n" + 
					"questMaxLandOrder: " + quest.maxLandOrder + "\n" + 
					"questTiredTime: " + quest.tiredTime + "\n" + 
					"spellsFasterCandiesFibo1: " + spells.fasterCandiesFiboPrev + "\n" + 
					"spellsFasterCandiesFibo2: " + spells.fasterCandiesFiboCurr + "\n" + 
					"swampStep: " + swamp.step + "\n" + 
					"tabsAnimation: " + tabs.animation + "\n" + 
					"wishingWellSpeech: " + wishingWell.speech + "\n" + 
					"wishingWellStep: " + wishingWell.step + "\n" + 
					"yourselfCanSurpass: " + bool_to_n(yourself.canSurpass) + "\n" + 
					"developperComputerWon: " + bool_to_n(developperComputer.won)
	
	var filename = "candybox_" + year.substring(2, 4) + month + day + "_" + hour + "-" + min
	var blob = new Blob([save_text], {type: "text/plain;charset=utf-8"})
	saveAs(blob, filename+".cs")
}
