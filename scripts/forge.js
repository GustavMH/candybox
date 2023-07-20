const forge = {
    shown : false,
    step : 0,
    speech : "There's an anvil here.",
      
    updateOnPage : function(){
        const buttons = data.text.forge.buttons
        const text = [
            data.ascii.anvil,
            format_speech(this.speech, 23),
            "", "",
            ...[["sharpen",              sword.name == "chocolate sword"]
                ["enchantHealth",        potions.list.health.shown],
                ["enchantFire",          potions.list.fireScroll.shown],
                ["enchantImpInvocation", potions.list.impInvocationScroll.shown]
               ].filter((a, b) => a)
                .map((_, key) => `<button id=${buttons[key].id} onClick='sword.${key}();'>${buttons[key].text}</button>`),
            "<button onClick=\"forge.leave();\">Leave the forge</button>"
        ].join("\n")

        html.setInner("map", text);
        buttons.checkForge();
    },
    
    setStep : function(value){
        this.step = value;
        this.speech = [
            data.text.forge.enchant.init,
            data.text.forge.enchant[sword_name]
        ][this.step]

        if(this.shown) this.updateOnPage();
    },
  
    enter : function(){
        objects.leave();
        this.shown = true;
        this.updateOnPage();
    },
    
    leave : function(){
        this.shown = false;
        html.setInner("map", "");
    }
    
};
