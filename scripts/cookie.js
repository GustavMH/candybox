var cookie = {
	cookieHandler : null,
	
	create : function(name,value,days) {
		var expires = ""
		if (days) {
			var date = new Date()
			date.setTime(date.getTime() + (days*24*60*60*1000))
			expires = "; expires=" + date.toUTCString()
		}
		document.cookie = name + "=" + value + expires + "; path=/"
	},

	read : function(name) {
		var nameEQ = name + "="
		var ca = document.cookie.split(';')
		for(var i=0;i < ca.length;i++) {
			var c = ca[i]
			while (c.charAt(0)==' ') c = c.substring(1,c.length)
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
		}
		return null
	},

	erase : function(name) {
		cookie.create(name,"",-1)
	},

	autoSave : function() {
		cookie.create("CandyCookie", cookie.getData(), 365)
	},
	
	getData : function() {
		
		return "" + ((code === undefined || code == null || code.length == "") ? 0 : code) +
					":" + sword.name +
					":" + bool_to_n(sword.specialSword) +
					":" + sword.specialPower +
					":" + candies.nbrOwned +
					":" + candies.nbrThrown +
					":" + candies.nbrEaten +
					":" + candies.nbrTotal +
					":" + candies.candiesPerSecond +
					":" + bool_to_n(candiesConverter.activated) +
					":" + cauldron.bookPage +
					":" + cauldron.candiesInTheCauldron +
					":" + cauldron.lollipopsInTheCauldron +
					":" + chocolateBars.nbrOwned +
					":" + farm.lollipopsPlanted +
					":" + farm.currentFlagIndex +
					":" + farm.plantingButtonsStep +
					":" + forge.step +
					":" + bool_to_n(shop.buy10LollipopsButtonShown) +
					":" + bool_to_n(shop.shown) +
					":" + shop.ticklingStep +
					":" + shop.clickingOnLollipopStep +
					":" + hut.step +
					":" + hut.speech +
					":" + inventory.magicianHatLetter +
					":" + lollipops.nbrOwned +
					":" + lollipops.nbrInStock +
					":" + lollipops.nbrBought +
					":" + main.nbrOfSecondsSinceLastMinInterval +
					":" + main.nbrOfSecondsSinceLastHourInterval +
					":" + main.nbrOfSecondsSinceLastDayInterval +
					":" + mountGoblin.basicChestProbability +
					":" + peacefulForest.basicChestProbability +
					":" + peacefulForest.poniesEncountered +
					":" + bool_to_n(objects.all.key.have) +
					":" + bool_to_n(objects.all.hutMap.have) +
					":" + bool_to_n(objects.all.wellMap.have) +
					":" + bool_to_n(objects.all.swampMap.have) +
					":" + bool_to_n(objects.all.boots.have) +
					":" + bool_to_n(objects.all.magicianHat.have) +
					":" + bool_to_n(objects.all.pinkRing.have) +
					":" + bool_to_n(objects.all.forgeMap.have) +
					":" + bool_to_n(objects.all.candiesConverter.have) +
					":" + bool_to_n(objects.all.plateArmour.have) +
					":" + bool_to_n(objects.all.cauldron.have) +
					":" + bool_to_n(objects.all.magicalHorn.have) +
					":" + bool_to_n(objects.all.hornOfPlenty.have) +
					":" + bool_to_n(objects.all.oldAmulet.have) +
					":" + bool_to_n(potions.list.health.shown) +
					":" + bool_to_n(potions.list.escape.shown) +
					":" + bool_to_n(potions.list.berserk.shown) +
					":" + bool_to_n(potions.list.fireScroll.shown) +
					":" + bool_to_n(potions.list.acidRainScroll.shown) +
					":" + bool_to_n(potions.list.teleportScroll.shown) +
					":" + bool_to_n(potions.list.earthquakeScroll.shown) +
					":" + bool_to_n(potions.list.impInvocationScroll.shown) +
					":" + bool_to_n(potions.list.majorHealth.shown) +
					":" + bool_to_n(potions.list.invulnerability.shown) +
					":" + bool_to_n(potions.list.turtle.shown) +
					":" + bool_to_n(potions.list.jelly.shown) +
					":" + bool_to_n(potions.list.seed.shown) +
					":" + bool_to_n(potions.list.cloning.shown) +
					":" + bool_to_n(potions.list.superman.shown) +
					":" + bool_to_n(potions.list.gmooh.shown) +
					":" + potions.list.health.nbrOwned +
					":" + potions.list.escape.nbrOwned +
					":" + potions.list.berserk.nbrOwned +
					":" + potions.list.fireScroll.nbrOwned +
					":" + potions.list.acidRainScroll.nbrOwned +
					":" + potions.list.teleportScroll.nbrOwned + 
					":" + potions.list.earthquakeScroll.nbrOwned +
					":" + potions.list.impInvocationScroll.nbrOwned +
					":" + potions.list.majorHealth.nbrOwned +
					":" + potions.list.invulnerability.nbrOwned +
					":" + potions.list.turtle.nbrOwned +
					":" + potions.list.jelly.nbrOwned +
					":" + potions.list.seed.nbrOwned +
					":" + potions.list.cloning.nbrOwned +
					":" + potions.list.superman.nbrOwned +
					":" + potions.list.gmooh.nbrOwned +
					":" + quest.maxLandOrder +
					":" + quest.tiredTime +
					":" + spells.fasterCandiesFiboPrev +
					":" + spells.fasterCandiesFiboCurr +
					":" + swamp.step +
					":" + tabs.animation +
					":" + wishingWell.speech +
					":" + wishingWell.step +
					":" + bool_to_n(yourself.canSurpass) +
					":" + bool_to_n(developperComputer.won)
	},
	
	setData : function() {
		const payload = cookie.read("CandyCookie")
		const var_list = payload.split(":")

		if(var_list.length != 90) {
			alert("ERROR: Corrupt Candycookie Length:" + var_list.length)
			console.log("ERROR: Corrupt Candycookie Length:" + var_list.length)
		} else {
			cookie.updateData(var_list)
		}
	},
	
	updateData : function(var_list) {
		if(Number(var_list[0]) == 0) {
			code = ""
		} else {
			code = var_list[0]
		}

		if(var_list[1] != "none") {
			sword.setName(var_list[1])
		} else {
			sword.name = var_list[1]
		}
		
		sword.setSpecialSword(n_to_bool(Number(var_list[2])))
		sword.setSpecialPower(Number(var_list[3]))
        candies.setNbrOwned(Number(var_list[4]))
		
		if(Number(var_list[5]) != 0) {
			candies.setNbrThrown(Number(var_list[5]))
		} else {
			candies.nbrThrown = Number(var_list[5])
		}
		
        if(Number(var_list[6]) != 0) {
			candies.setNbrEaten(Number(var_list[6]))
		} else {
			candies.nbrEaten = Number(var_list[6])
		}
        
		
		candies.setNbrTotal(Number(var_list[7]))
		
        candies.setCandiesPerSecond(Number(var_list[8]))
		candiesConverter.setActivated(n_to_bool(Number(var_list[9])))
		cauldron.setBookPage(Number(var_list[10]))
        cauldron.setCandiesInTheCauldron(Number(var_list[11]))
        cauldron.setLollipopsInTheCauldron(Number(var_list[12]))
  
		if(Number(var_list[13]) != 0) {
			chocolateBars.setNbrOwned(Number(var_list[13]))
		} else {
			chocolateBars.nbrOwned = Number(var_list[13])
		}
		
        farm.setLollipopsPlanted(Number(var_list[14]))
		
		
		farm.setCurrentFlagIndex(Number(var_list[15]))
		farm.setPlantingButtonsStep(Number(var_list[16]))
		forge.setStep(Number(var_list[17]))
		shop.setBuy10LollipopsButtonShown(n_to_bool(Number(var_list[18])))
		shop.setShown(n_to_bool(Number(var_list[19])))
		shop.setTicklingStep(Number(var_list[20]))
		
		
		shop.setClickingOnLollipopStep(Number(var_list[21]))
		
		hut.setStep(Number(var_list[22]))
		hut.setSpeech(var_list[23]); //vermutlich string
		inventory.magicianHatLetter = var_list[24]; //char
		
		if(Number(var_list[25]) != 0) {
			lollipops.setNbrOwned(Number(var_list[25]))
		} else {
			lollipops.nbrOwned = Number(var_list[25])
		}
		
		//
		lollipops.setNbrInStock(Number(var_list[26]))
		
		lollipops.setNbrBought(Number(var_list[27]))
		
		main.setNbrOfSecondsSinceLastMinInterval(Number(var_list[28]))
		main.setNbrOfSecondsSinceLastHourInterval(Number(var_list[29]))
		main.setNbrOfSecondsSinceLastDayInterval(Number(var_list[30]))
		mountGoblin.basicChestProbability = Number(var_list[31])
		peacefulForest.basicChestProbability = Number(var_list[32])
		peacefulForest.poniesEncountered = Number(var_list[33])
		//
		
		objects.setHaveObject("key", n_to_bool(Number(var_list[34])))
        objects.setHaveObject("boots", n_to_bool(Number(var_list[38])))
        objects.setHaveObject("swampMap", n_to_bool(Number(var_list[37])))
        objects.setHaveObject("hutMap", n_to_bool(Number(var_list[35])))
        objects.setHaveObject("wellMap", n_to_bool(Number(var_list[36])))
        objects.setHaveObject("magicianHat", n_to_bool(Number(var_list[39])))
        objects.setHaveObject("pinkRing", n_to_bool(Number(var_list[40])))
        objects.setHaveObject("forgeMap", n_to_bool(Number(var_list[41])))
        objects.setHaveObject("candiesConverter", n_to_bool(Number(var_list[42])))
        objects.setHaveObject("plateArmour", n_to_bool(Number(var_list[43])))
        objects.setHaveObject("cauldron", n_to_bool(Number(var_list[44])))
        objects.setHaveObject("magicalHorn", n_to_bool(Number(var_list[45])))
        objects.setHaveObject("hornOfPlenty", n_to_bool(Number(var_list[46])))
        objects.setHaveObject("oldAmulet", n_to_bool(Number(var_list[47])))
		
		// OFFSET 48
		const potions = ["health", "escape", "berserk", "fireScroll", "acidRainScroll", "teleportScroll", "earthquakeScroll",
		 "impInvocationScroll", "majorHealth", "invulnerability", "turtle", "jelly", "seed",
		 "cloning", "superman", "gmooh"]

		potions.map((potion, i) => {
			potions.setPotionShown(potions.list[potion], n_to_bool(Number(var_list[i+48])))
			potions.setPotionNbrOwned(potions.list[potion], Number(var_list[i+64]))
		})
		potions.updateOnPage()

		quest.setMaxLandOrder(Number(var_list[80]))
        
        quest.setTiredTime(Number(var_list[81]))
		
		//
		spells.setFasterCandiesFibo(Number(var_list[82]), Number(var_list[83]))

		swamp.setStep(Number(var_list[84]))
		tabs.setAnimation(var_list[85])
		
		wishingWell.setSpeech(var_list[86])
		wishingWell.setStep(Number(var_list[87]))
		yourself.setCanSurpass(Number(var_list[88]))
		//
		
        developperComputer.setWon(n_to_bool(Number(var_list[89])))

        inventory.updateOnPage()
		buttons.checkHomeEnabled()
	
	}
}
