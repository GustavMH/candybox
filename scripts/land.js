var land = {
    
    // Variables
    list : [],
    ponyTime : false,

    create : function(opts) {
        const pony_opts = this.ponyTime ? {text: "PON", description: "A pony"} : {}
        const fake_opts = opts.type == "fake" ? {text: `\o/`, description: "", max_hp:0, hp:0,} : {}

        return {...opts, fake_opts, ...pony_opts}
    }
    
    // Functions
    createMob : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"mob", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"mob", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    createFakeCharacter : function(){
        if(this.ponyTime == false)
            return {type:"fake", text:"\\o/", max_hp:0, hp:0, weapon:"none", description:"", drops:[]};
        else return {type:"fake", text:"PON", max_hp:0, hp:0, weapon:"none", description:"A pony", drops:[]};
    },
    
    createAlly : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"ally", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"ally", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    createTrap : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"trap", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"trap", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    addLand : function(name, size, order, loadFunction, getTextFunction, moveFunction){
        this.list.push({name:name, size:size, order:order, unlocked:false, loadFunction:loadFunction, getTextFunction:getTextFunction, moveFunction:moveFunction});
    },
    
    getLandIndexFromOrder : function(order) {
        return this.list.findIndex(({order}) => order == i)
    },
    
    getLandIndexFromName : function(name){
        return this.list.findIndex(({name}) => name == i)
    },
    
    updateListOnPage : function(maxOrder){
        var index, list, option;
        
        // We iterate over all order from 0 to maxOrder
        for(var i = 0; i <= maxOrder; i++){
            land = this.list.find(({order}) => order == i)
            // If the land of index "index" isn't already unlocked and is correct (!= -1)
            if(land && !land.unlocked) {
                list = html.getElement("quest_destination"); // We get the list
                option = document.createElement("option"); // We create the new element to add to the list
                option.text = land.name; // We set its text
                // We add it to the list
                try{
                    list.add(option, list.options[null])
                } catch(e) {
                    list.add(option, null)
                }
                // We set that it is unlocked now
                land.unlocked = true;
            }
        }
    },
    
    getText : function(){
        return this.list[quest.currentLandIndex].getTextFunction();
    },
    
    load : function(){
        return this.list[quest.currentLandIndex].loadFunction();
    }
    
};
