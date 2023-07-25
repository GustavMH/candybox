var swamp = {
    shown : false,
    step : 0,

    updateOnPage : function(){
        if(this.shown) {
            if (this.step < 4) {
                html.setInner("map", data.ascii.swamp_steps[this.step])
                this.step += 1
                window.setTimeout(this.updateOnPage.bind(this), 3500)
            } else {
                html.setInner("map", [
                    data.ascii.frog,
                    format_speech(data.swamp.questions[this.step].text, 29),
                    data.swamp.questions[this.step].button || data.swamp.default_button
                ].join(""))
            }
        }
    },
    
    enter : function(){
        objects.leave()
        this.shown = true
        this.updateOnPage()
    },
    
    leave : function(){
        this.shown = false
        html.setInner("map", "")
    },

    setComment : function(value){
        html.setInner("swamp_comment", value)
        window.setTimeout(html.setInner("swamp_comment", ""), 1000)
    },
    
    setStep : function(value){
        this.step = value
        // If the swamp is shown
        if(this.shown){
            // We update on page
            this.updateOnPage()
            // We possibly focus
            if(this.step >= 4 && this.step <= 16){
                html.focusElement("answer")
            }
        }
    },
    
    answer : function() {
        const index = this.step - 4

        const ans = html.getElement("answer").value.toLowerCase().replace(/[^\w]|_/g, "")
        html.getElement("answer").focus() // Re focus after answering

        const { answers, reward: [type, amount] } = data.swamp.questions[index]

        if (ans in answers) {
            if (type == "candies")       candies.setNbrOwned(candies.nbrOwned + amount)
            if (type == "chocolateBars") chocolateBars.setNbrOwned(chocolateBars.nbrOwned + amount)
            if (type == "beserk")        potions.getPotions(potions.list.beserk, amount)

            this.step += 1
        } else {
            this.setComment("wrong.")
        }
    }
}
