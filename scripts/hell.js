var hell = {
    size : 45,
    lavaLakeStep : 0,
    buffers : [[], [], [], [], [], [], []], // The three things buffers
    bufferPosition : 1, // On which buffer is the character (at first in the middle buffer)
    timeSpent : 0, // Increase each cycle
    addRockStep : 0,
    monstersGap : 7, // Gap between the devil and appearing monsters
    step : 0,

    onload : function(){
        land.addLand("Hell", this.size, 6, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    move : function(){
        // We increase the lava lake step
        this.lavaLakeStep += 1
        if(this.lavaLakeStep == 12){
            this.lavaLakeStep = 0
        }
        
        // We make things move
        for(var i = 0; i < 7; i++){
            if(i != this.bufferPosition){
                if(this.buffers[i][0].type == "mob") this.buffers[i][0] = quest.makeNoneThing()
                for(var j = 1; j < this.size - 1; j++){
                    if(this.buffers[i][j].type == "mob" && this.buffers[i][j-1].type == "none" && this.buffers[i][j].text != " * " && this.buffers[i][j].text != "|-|"){
                        this.buffers[i][j-1] = this.buffers[i][j]
                        this.buffers[i][j] = quest.makeNoneThing()
                    }
                }
                // Clone
                for(var j = this.size-2; j >= 0; j--){
                    if(this.buffers[i][j].text == "\\o/" && this.buffers[i][j].type == "ally" && this.buffers[i][j+1].type == "none" && this.buffers[i][j].text != " * " && this.buffers[i][j].text != "|-|"){
                        this.buffers[i][j+1] = this.buffers[i][j]
                        this.buffers[i][j] = quest.makeNoneThing()
                    }
                }
            }
            else{
                if(quest.things[0].type == "mob") quest.things[0] = quest.makeNoneThing()
                for(var j = 1; j < this.size - 1; j++){
                    if(quest.things[j].type == "mob" && quest.things[j-1].type == "none" && quest.things[j].text != " * " && quest.things[j].text != "|-|"){
                        quest.things[j-1] = quest.things[j]
                        quest.things[j] = quest.makeNoneThing()
                    }
                }
            }
        }
        
        // We check the steps
        switch(this.step){
            case 0: this.checkStep1(); break
            case 1: this.checkStep2(); break
            case 2: this.checkStep3(); break
            case 3: this.checkStep4(); break
        }
        
        // We add ennemies in the middle buffers
        for(var i = 2; i < 5; i++){
            if(i != this.bufferPosition && this.buffers[i][this.size-this.monstersGap].type == "none"){
                this.buffers[i][this.size-this.monstersGap] = this.makeMiddleCreature()
            }
            else if(i == this.bufferPosition && quest.things[this.size-this.monstersGap].type == "none"){
                quest.things[this.size-this.monstersGap] = this.makeMiddleCreature()
            }
        }
        
        // Idem in the side buffers
        for(var i = 0; i < 2; i++){
            if(i != this.bufferPosition && this.buffers[i][this.size-this.monstersGap].type == "none"){
                this.buffers[i][this.size-this.monstersGap] = this.makeSideCreature()
            }
            else if(i == this.bufferPosition && quest.things[this.size-this.monstersGap].type == "none"){
                quest.things[this.size-this.monstersGap] = this.makeSideCreature()
            }
        }
        
        for(var i = 5; i < 7; i++){
            if(i != this.bufferPosition && this.buffers[i][this.size-this.monstersGap].type == "none"){
                this.buffers[i][this.size-this.monstersGap] = this.makeSideCreature()
            }
            else if(i == this.bufferPosition && quest.things[this.size-this.monstersGap].type == "none"){
                quest.things[this.size-this.monstersGap] = this.makeSideCreature()
            }
        }
        
        // We increase the time spent
        this.timeSpent += 1
    },
    
    load : function(){
        // We set the first buffer position
        this.bufferPosition = 3
        
        // We fill buffers
        for(var i = 0; i < 7; i++){
            if(i != this.bufferPosition){
               this.buffers[i] = quest.fillWithNoneThings()
            }
        }
        
        // We add the devil
        quest.things[this.size - 1] = this.makeDevil()
        
        // We add first doors
        quest.things[this.size - 4] = this.makeDoor()
        for(var i = 0; i < 7; i++){
            if(i != 3) this.buffers[i][this.size - 4] = this.makeDoor()
        }
        
        // We add second doors
        quest.things[this.size - 6] = this.makeSpikyDoor()
        for(var i = 0; i < 7; i++){
            if(i != 3 && i != 5) this.buffers[i][this.size - 6] = this.makeSpikyDoor()
        }
        this.buffers[5][this.size - 6] = this.makeDoor()
        
        // We add teleporting gates
        quest.things[this.size - 3] = this.makeTeleportingGate()
        quest.things[this.size - 5] = this.makeTeleportingGate()
        for(var i = 0; i < 7; i++){
            if(i != 3){
                this.buffers[i][this.size - 3] = this.makeTeleportingGate()
                this.buffers[i][this.size - 5] = this.makeTeleportingGate()
            }
        }
        
        // We set the steps
        this.addRockStep = 0
        this.step = 0
        
        // We set the time spent
        this.timeSpent = 0
    },
    
    teleportCharacter : function(gatesIndex){
        var index = quest.getCharacterIndex()
        
        quest.things[0] = quest.things[index]
        quest.things[index] = quest.makeNoneThing()
        
        quest.things[gatesIndex] = quest.makeNoneThing()
        for(var i = 0; i < 7; i++){
            if(i != this.bufferPosition){
                this.buffers[i][gatesIndex] = quest.makeNoneThing()
            }
        }
    },
    
    checkStep1 : function(){
        var index = quest.getCharacterIndex()
        
        if(index >= this.size - 7) this.step = 1
    },
    
    checkStep2 : function(){
        for(var i = 0; i < 7; i++){
            if((i != this.bufferPosition && this.buffers[i][this.size-5].text != " * ") || (i == this.bufferPosition && quest.things[this.size-5].text != " * ")){
                this.teleportCharacter(this.size-5)
                this.step = 2
                break
            }
        }
    },
    
    checkStep3 : function(){
        var index = quest.getCharacterIndex()
        
        if(index >= this.size - 5) this.step = 3
    },
    
    checkStep4 : function(){
        for(var i = 0; i < 7; i++){
            if((i != this.bufferPosition && this.buffers[i][this.size-3].text != " * ") || (i == this.bufferPosition && quest.things[this.size-3].text != " * ")){
                this.teleportCharacter(this.size-3)
                this.step = 4
                this.timeSpent = 0
                break
            }
        }
    },
    
    goDown : function(){
        var pos = this.bufferPosition
        
        // If we're questing the hell
        if(quest.weAreQuestingRightNow && land.getLandIndexFromName("Hell") == quest.currentLandIndex){
            // If we're not already at the buffer 2
            if(this.bufferPosition != 6){
                // If we were able to swap, change the buffer position
                if(this.swapBufferAndQuestThings(pos, pos + 1)){
                    this.bufferPosition += 1
                    this.checkDevil()
                    quest.updateOnPage()
                }
            }
        }
    },
    
    goUp : function(){
        var pos = this.bufferPosition
        
        // If we're questing the hell
        if(quest.weAreQuestingRightNow && land.getLandIndexFromName("Hell") == quest.currentLandIndex){
            // If we're not already at the buffer 0
            if(this.bufferPosition != 0){
                // If we were able to swap, change the buffer position
                if(this.swapBufferAndQuestThings(pos, pos - 1)){
                    this.bufferPosition -= 1
                    this.checkDevil()
                    quest.updateOnPage()
                }
            }
        }
    },
    
    swapBufferAndQuestThings : function(now, after){
        var index = quest.getCharacterIndex()
        var character = quest.things[index]

        // If we will be able to move on the "after" buffer, we swap (if we have some hp, too)
        if(this.buffers[after][index].type == "none" && character.hp > 0){
            // We save the quest things in the old buffer
            this.buffers[now] = quest.things.slice(0)
            // We delete the character from the old buffer
            this.buffers[now][index] = quest.makeNoneThing()
            // We put the new buffer into the quest things
            quest.things = this.buffers[after].slice(0)
            // We add the character
            quest.things[index] = character
            // We return true
            return true
        }

        // Else we return false
        return false
    },
    
    checkDevil : function(){
        // If the devil isn't on the line of the character
        if(quest.things[this.size-1].text != "DEV"){
            // We move it
            for(var i = 0; i < 7; i++){
                if(i != this.bufferPosition && this.buffers[i][this.size-1].text == "DEV"){
                    quest.things[this.size-1] = this.buffers[i][this.size-1]
                    this.buffers[i][this.size-1] = quest.makeNoneThing()
                    break
                }
            }
        }
    },
    
    makeMiddleCreature : function(){
        switch(this.step){
            case 0:
                if(r_oneOutOf(3)){
                    return this.makeDemon()
                }
            break
            case 2:
                if(r_oneOutOf(4)){
                    return this.makeBanshee()
                }
            break
            case 3:
                if(r_oneOutOf(3)){
                    return castleKeep.makeFireball()
                }
            break
            case 4:
                if(this.timeSpent < 50 && this.timeSpent % 2 == 0){
                    return castleStairs.makeGhost()
                }
                else if(this.timeSpent < 70){
                    // nothing
                }
                else if(this.timeSpent < 90){
                    if(r_oneOutOf(5)){
                        return castleKeep.makeFireball()
                    }
                }
                else if(this.timeSpent < 110){
                    if(r_oneOutOf(4)){
                        return castleKeep.makeFireball()
                    }
                }
                else if(this.timeSpent < 130){
                    if(r_oneOutOf(3)){
                        return castleKeep.makeFireball()
                    }
                }
                else if(this.timeSpent < 170){
                    if(r_oneOutOf(2)){
                        return castleKeep.makeFireball()
                    }
                }
                else{
                    return castleKeep.makeFireball()
                }
            break
        }
        
        return quest.makeNoneThing()
    },
    
    makeSideCreature : function(){
        switch(this.step){
            case 0:
                return this.makeMiddleCreature()
            break
            case 2:
                if(r_oneOutOf(5)){
                    return castleStairs.makeGhost()
                }
            break
            case 3:
                if(r_oneOutOf(4)){} // nothing
                else{
                    return castleStairs.makeGhost()
                }
            break
            case 4:
                return this.makeMiddleCreature()
            break
        }
        
        return quest.makeNoneThing()
    },
    getText : getText.hell
}
