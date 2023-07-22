var castleKeep = {
    size : 30, // The size here must be higher than the size of the biggest room
    realSize : 0, // This is the real size of the current room, in term of things
    roomSize : 0, // Real size of the room in term of ascii
    floorPosition : 0, // Where the floor is located in the current room
    firstCharacterPosition : 0, // Where the character is located when he enters the room
    lastCharacterPosition : 0, // Where the character can exit the room
    text : [],
    roomNumber : 0, // The current room number. Increase by one each room.
    mobsAreMoving : false, // If true, in the current room, mobs should move toward the player
    maxRoom : 6,

    onload : function(){
        land.addLand("Castle's keep", this.size, 5, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        // We get the character's index
        var index = quest.getCharacterIndex();
        var characterThing = quest.things[index];
        
        // If the mobs should move, we make them move
        if(this.mobsAreMoving){
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" && quest.things[i-1].type == "none"){
                    quest.things[i-1] = quest.things[i];
                    quest.things[i] = quest.makeNoneThing();
                }
            }
        }
        
        // If the character is just after the exit of the room, we create a new room and put him in it
        if(index == this.lastCharacterPosition - this.firstCharacterPosition + 1){
            this.roomNumber += 1; // We increment the room number
            // If we aren't yet arrived at the room x
            if(this.roomNumber <= this.maxRoom){
                quest.things = quest.fillWithNoneThings(); // Remove all the things
                this.createNewRoom(); // Create a new room
                quest.things[0] = characterThing; // Put the character at the beginning of the room
            }
            // Else, we end the quest
            else{
                quest.things[this.size-1] = quest.things[index];
                quest.things[index] = quest.makeFakeCharacter();
            }
        }
        
        // If we just killed the dragon
        if(this.roomNumber == 6 && index == 16 && quest.things[17].type == "none"){
            // We reload the room without the dragon
            this.text = [];
            this.createRoomStructure();
            this.createDoorHere(this.firstCharacterPosition);
        }
    },
    
    load : function(){
        this.roomNumber = 0; // We reset the room number
        this.createNewRoom();
    },
    
    getText : getText.castleKeep,

    createRoomStructure : function(){
        var line;

        // Create the roof
        line = "__";
        for(var i = 0; i < this.roomSize; i++){
            line += "___";
        }
        line += "\n";
        this.text.push(line);
        // Create the inside
        line = "|";
        for(var i = 0; i < this.roomSize; i++){
            line += "   ";
        }
        line += "|\n";
        for(var i = 0; i < this.floorPosition - 1; i++){
            this.text.push(line);
        }
        // Create the floor
        line = "|";
        for(var i = 0; i < this.roomSize; i++){
            line += "___";
        }
        line += "|\n";
        this.text.push(line);
    },
    
    addDragonInRoom : function(){
        this.text = layer_texts(
            this.text,
            [data.ascii.dragon, 54, 1]
        )
    },
    
    createNewRoom : function(){
        this.text = [];
        
        // If we're not yet at the boss room, we make a random-sized room
        if(this.roomNumber < this.maxRoom){
            // Set the size and stuff
            this.realSize = 16 + r_int(1+10);
            this.firstCharacterPosition = r_int(1+2);
            this.lastCharacterPosition = this.firstCharacterPosition + this.realSize - 1;
            this.floorPosition = 5 + r_int(1+6);
            this.roomSize = this.realSize + this.firstCharacterPosition + r_int(1+2);
            
            this.createRoomStructure();
                
            // We add the doors at the character's first and last position
            this.createDoorHere(this.firstCharacterPosition);
            this.createDoorHere(this.lastCharacterPosition);
        }
        // Else, it's the boss room
        else{
            // Set the size and stuff
            this.realSize = 26;
            this.firstCharacterPosition = 1;
            this.lastCharacterPosition = 21;
            this.floorPosition = 16;
            this.roomSize = this.realSize + this.firstCharacterPosition + 1;
            
            this.createRoomStructure();
            this.addDragonInRoom();
                
            // We add the doors at the character's first and last position
            this.createDoorHere(this.firstCharacterPosition);
        }
        
        // By default, mobs are not moving
        this.mobsAreMoving = false;
        
        // We add roomNumber specific stuff
        switch(this.roomNumber){
            // Room 0 : we put some guards
            case 0:
                for(var i = 2; i < this.realSize - 1; i+=3){
                    quest.things[i] = castleEntrance.makeGuard();
                }
                this.mobsAreMoving = true;
            break;
            // Rooms 1 to 4 : we put some random ennemies
            case 1: case 2: case 3: case 4:
                switch(r_int(1+7)){
                    // Knights room
                    case 0:
                        for(var i = 2; i < this.realSize - 1; i++){
                            if(r_oneOutOf(4)){
                                quest.things[i] = castleEntrance.makeKnight();
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Animals room
                    case 1:
                        for(var i = 2; i < this.realSize - 1; i++){
                            if(r_oneOutOf(4)){
                                switch(r_int(1+6)){
                                    case 0: quest.things[i] = castleKeep.makeKomodoDragon(); break;
                                    case 1: quest.things[i] = castleKeep.makeRhinoceros(); break;
                                    case 2: quest.things[i] = castleKeep.makeGaur(); break;
                                    case 3: quest.things[i] = castleKeep.makeDromornisStirtoni(); break;
                                    case 4: quest.things[i] = castleKeep.makeGorilla(); break;
                                    case 5: quest.things[i] = castleKeep.makeCapybara(); break;
                                    case 6: quest.things[i] = castleKeep.makeDoedicurus(); break;
                                }
                            }
                        }
                    break;
                    // Ghosts room
                    case 2:
                        for(var i = 4; i < this.realSize - 1; i++){
                            if(r_oneOutOf(5)){
                                quest.things[i] = castleStairs.makeGhost();
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Walled off zombie warrior room
                    case 3:
                        // We add the walls
                        for(var i = 1; i < this.floorPosition; i++){
                            this.text[i] = this.text[i].replaceAt(1 + this.firstCharacterPosition*3 + 7*3, "WAL");
                            this.text[i] = this.text[i].replaceAt(1 + this.firstCharacterPosition*3 + 9*3, "WAL");
                        }
                        // We add the mobs (walls and walled off zombie warrior)
                        quest.things[7] = land.create(data.mobs.stoneWall)
                        quest.things[9] = land.create(data.mobs.stoneWall)
                        quest.things[8] = land.create(data.mobs.walledOffZombieWarrior)
                    break;
                    // Fireball room
                    case 4:
                        for(var i = this.realSize - 8; i < this.realSize - 1; i++){
                            if(r_coin()){
                                quest.things[i] = land.create(data.mobs.fireball)
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Fake door room
                    case 5:
                        this.createDoorHere(this.firstCharacterPosition + 8);
                        quest.things[8] = land.create(data.mobs.FakeDoorMonster)
                    break;
                    // Unicorn room
                    case 6:
                        quest.things[2 + r_int(1+this.realSize - 4)] = land.create(data.mobs.charlieTheUnicorn)
                        quest.things[2 + r_int(1+this.realSize - 4)] = land.create(data.mobs.unicorn)
                        quest.things[2 + r_int(1+this.realSize - 4)] = land.create(data.mobs.unicorn)
                        this.mobsAreMoving = true;
                    break;
                    // Troll room
                    case 7:
                        quest.things[6 + r_int(1+this.realSize - 8)] = land.create(data.mobs.troll)
                        this.mobsAreMoving = true;
                    break;
                }
            break;
            // The chests room
            case 5:
                for(var i = 1; i < this.realSize - 1; i++){
                    if(r_oneOutOf(3)){
                        quest.things[i] = quest.makeOpenChest();
                    }
                }
                this.mobsAreMoving = false;
            break;
            // Boss room
            case 6:
                quest.things[17] = land.create(data.mobs.dragon)
            break;
        }
    },
    
    createDoorHere : function(position){
        this.text = layer_texts(
            this.text,
            [data.ascii.door, 1+position*3, this.floorPosition-2]
        )
    }
};
