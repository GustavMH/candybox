var inventory = {
    
    // Variables
    magicianHatLetter : "",
    
    // Functions
    setMagicianHatLetter : function(value){
        this.magicianHatLetter = value;
    },
    
    updateOnPage : function(){
        // Check for the magician hat letter : if we have the magician hat but no letter is set yet
        if(objects.all.magicianHat.have && this.magicianHatLetter == ""){
            this.setMagicianHatLetter("     " + random.getRandomLetter());
        }
        
        // Sword
        switch(sword.name){
            "wooden sword": sword.asciiWoodenSwordWithoutButton
            "copper sword": sword.asciiCopperSwordWithoutButton
            "iron sword": sword.asciiIronSwordWithoutButton
            "silver sword": sword.asciiSilverSwordWithoutButton
            "diamond sword": sword.asciiDiamondSwordWithoutButton
            "candy diamond sword": sword.asciiCandyDiamondSword
            "polished candy diamond sword": sword.asciiPolishedCandyDiamondSword
            "chocolate sword": sword.asciiChocolateSword
            "sharp chocolate sword": sword.asciiSharpChocolateSword
            "Sword of Flames": sword.asciiSwordOfFlames +
            "Sword of Life": sword.asciiSwordOfLife + "\n\nLevel : " + sword.specialPower
            "Sword of Summoning": sword.asciiSwordOfSummoning + "\n\nLevel : " + sword.specialPower
            "Sword of Liflamesummoning": sword.asciiSwordOfLiflamesummoning + "\n\nLevel : " + sword.specialPower
            "Sword of Randomness": sword.asciiSwordOfRandomness + "\n\nLevel : infinite + " + sword.specialPower
        }

        const randomness_text = (sword.name == "Sword of Randomness")
              ? "infinite + "
              : ""

        const special_text = (sword.specialSword)
              ? `\n\nLevel : ${randomness_text}${sword.specialPower}`
              : ""


        html.setInner("sword_without_button", )
        
        // Objects
        this.updateObjectOnPage("inventory_key", objects.all.key, this.asciiKey, this.asciiNoObject);
        this.updateObjectOnPage("inventory_boots", objects.all.boots, this.asciiBoots, this.asciiNoObject);
        this.updateObjectOnPage("inventory_magician_hat", objects.all.magicianHat, this.magicianHatLetter + "\n" + this.asciiMagicianHat, this.asciiNoObject);
        this.updateObjectOnPage("inventory_pink_ring", objects.all.pinkRing, this.asciiPinkRing, this.asciiNoObject);
        this.updateObjectOnPage("inventory_candies_converter", objects.all.candiesConverter, this.asciiCandiesConverter, this.asciiNoObject);
        this.updateObjectOnPage("inventory_plate_armour", objects.all.plateArmour, this.asciiPlateArmour, this.asciiNoObject);
        this.updateObjectOnPage("inventory_cauldron", objects.all.cauldron, this.asciiCauldron, this.asciiNoObject);
        this.updateObjectOnPage("inventory_magical_horn", objects.all.magicalHorn, this.asciiMagicalHorn, this.asciiNoObject);
        this.updateObjectOnPage("inventory_horn_of_plenty", objects.all.hornOfPlenty, this.asciiHornOfPlenty, this.asciiNoObject);
        this.updateObjectOnPage("inventory_old_amulet", objects.all.oldAmulet, this.asciiOldAmulet, this.asciiNoObject);
        
        if(developperComputer.won){
            html.setInner("inventory_won1", "<pre>" + this.asciiWon1 + "</pre>");
            html.setInner("inventory_won2", "<pre>" + this.asciiWon2 + "</pre>");
            html.showButton("hardmode");
        }
        else{
            html.setInner("inventory_won1", "<pre>" + this.asciiNoObject + "</pre>");
            html.setInner("inventory_won2", "<pre>" + this.asciiNoObject + "</pre>");
            html.hideButton("hardmode");
        }
        
        // Maps
        this.updateObjectOnPage("inventory_swamp_map", objects.all.swampMap, this.asciiSwampMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_hut_map", objects.all.hutMap, this.asciiHutMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_forge_map", objects.all.forgeMap, this.asciiForgeMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_well_map", objects.all.wellMap, this.asciiWellMap, this.asciiNoObject);
    },
    
    updateObjectOnPage : function(id, obj, ascii, asciiNoObject){
        if(obj.have){
            html.setInner(id, "<pre>" + ascii + "</pre><span><b>" + obj.name + "</b><br/>" + obj.description);
        } else{
            html.setInner(id, "<pre>" + asciiNoObject + "</pre>");
        }
    }
};
