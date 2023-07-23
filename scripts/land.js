const land = {
    list : [],
    ponyTime : false,

    create : function(opts) {
        console.log(opts)
        const pony_opts = this.ponyTime ? { text: "PON", description: "A pony" } : {}

        const hp_opts = {
            hp: r_interval_or_number(opts.hp),
            max_hp: r_interval_or_number(opts.max_hp),
            weapon: Array.isArray(opts.weapon)
                ? r_choice(opts.weapon)
                : opts.weapon
        }

        const fake_opts = opts.type == "fake"
              ? { text: `\o/`, description: "", max_hp: 0, hp: 0 }
              : {}

        a = () => r_choice(["B", "U", "G"])
        const spec_opts = ({
            "BUG": {
                name: a() + a() + a()
            },
            "\\o/": {
                hp:  quest.things[0].hp,
                max_hp:  quest.things[0].max_hp,
                weapon:  sword.name
            },
            "CND": {
                hp: 80 + 5 * sword.specialPower
            }
        })[opts.name]

        return {...opts, ...hp_opts, ...fake_opts, ...pony_opts, ...spec_opts}
    },
    
    addLand : function(name, size, order, loadFunction, getTextFunction, moveFunction) {
        this.list.push({name:name, size:size, order:order, unlocked:false, loadFunction:loadFunction, getTextFunction:getTextFunction, moveFunction:moveFunction});
    },
    
    getLandIndexFromOrder : function(input_order) {
        return this.list.findIndex(({order}) => order == input_order)
    },
    
    getLandIndexFromName : function(input_name) {
        return this.list.findIndex(({name}) => name == input_name)
    },
    
    updateListOnPage : function(maxOrder){
        var index, list, option;
        
        // We iterate over all order from 0 to maxOrder
        for(var i = 0; i <= maxOrder; i++){
            cur_land = this.list.find(({order}) => order == i)
            // If the cur_land of index "index" isn't already unlocked and is correct (!= -1)
            if(cur_land && !cur_land.unlocked) {
                list = html.getElement("quest_destination"); // We get the list
                option = document.createElement("option"); // We create the new element to add to the list
                option.text = cur_land.name; // We set its text
                // We add it to the list
                try{
                    list.add(option, list.options[null])
                } catch(e) {
                    list.add(option, null)
                }
                // We set that it is unlocked now
                cur_land.unlocked = true;
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
