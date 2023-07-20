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
            case "wooden sword": html.setInner("sword_without_button", sword.asciiWoodenSwordWithoutButton); break;
            case "copper sword": html.setInner("sword_without_button", sword.asciiCopperSwordWithoutButton); break;
            case "iron sword": html.setInner("sword_without_button", sword.asciiIronSwordWithoutButton); break;
            case "silver sword": html.setInner("sword_without_button", sword.asciiSilverSwordWithoutButton); break;
            case "diamond sword": html.setInner("sword_without_button", sword.asciiDiamondSwordWithoutButton); break;
            case "candy diamond sword": html.setInner("sword_without_button", sword.asciiCandyDiamondSword); break;
            case "polished candy diamond sword": html.setInner("sword_without_button", sword.asciiPolishedCandyDiamondSword); break;
            case "chocolate sword": html.setInner("sword_without_button", sword.asciiChocolateSword); break;
            case "sharp chocolate sword": html.setInner("sword_without_button", sword.asciiSharpChocolateSword); break;
            case "Sword of Flames": html.setInner("sword_without_button", sword.asciiSwordOfFlames + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Life": html.setInner("sword_without_button", sword.asciiSwordOfLife + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Summoning": html.setInner("sword_without_button", sword.asciiSwordOfSummoning + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Liflamesummoning": html.setInner("sword_without_button", sword.asciiSwordOfLiflamesummoning + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Randomness": html.setInner("sword_without_button", sword.asciiSwordOfRandomness + "\n\nLevel : infinite + " + sword.specialPower); break;
        }
        
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
        }
        else{
            html.setInner(id, "<pre>" + asciiNoObject + "</pre>");
        }
    },
    
    // Ascii art
    
    asciiKey : " __\n\
/o \\_____\n\
\\__/-=\"=\"`",

    asciiBoots : "  ____\n\
  \\  _|__\n\
 __)|   /\n\
(___|  (__\n\
    (_-___)",
    
    asciiMagicianHat : "    / \\\n\
   /   \\\n\
  /     \\\n\
 /_______\\",
    
    asciiPinkRing : "   .--.\n\
  //  \\\\\n\
  \\\\__//\n\
   \'--\'",
   
    asciiSwampMap : " _________\n\
|         |\n\
| SWAMP   |\n\
|    ---> |\n\
|.-._.-._.|",

    asciiHutMap : " _________\n\
|  __     |\n\
| /lp\\ -> |\n\
| |__|    |\n\
|._.-._.__|",

    asciiForgeMap : " _________\n\
/  anvil  \\\n\
|   this  |\n\
| <-- way |\n\
\\_________/",

    asciiWellMap : " .-~-~-~-.\n\
!  ~    ~ !\n\
!~    ~   !\n\
! ~  ~  ~ !\n\
 \'-~-~-~-\'",
 
    asciiCandiesConverter : "   ______\n\
  /+|  |+\\\n\
 |=={==}==|\n\
  \\_|__|_/",
 
    asciiPlateArmour : "-;`\\..../`;-\n\
 |...::...|\n\
 /\'\'\'::\'\'\'\\\n\
/\\   ::   /\\\n\
  >._::_.<",
  
    asciiCauldron : "  ________\n\
 (________)\n\
  )      (\n\
 /        \\\n\
|          |\n\
\\__________/",

    asciiMagicalHorn : "  \\.\n\
   \\\'.\n\
    \\ \'.\n\
     \\,-\'",

    asciiHornOfPlenty : "  .\\\n\
   \\\'.\n\
    \\ \'.\n\
     \\__)",
     
    asciiOldAmulet : "   /   \\\n\
   o   o\n\
    \\_/\n\
    .^.\n\
   \'cnd\'\n\
   \'. .\'",
   
    asciiWon1 : "Bravo !\nYou won\nthe game :)\nYou now have\nall the\ncandies in\nthe world.",
   
    asciiWon2 : "(you can now\nask the dev\nfor a real\ncandy, if you\nfind him !)",
   
    asciiNoObject : "            \n            \n            "

};
