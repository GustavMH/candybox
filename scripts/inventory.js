const inventory = {
    /* TODO check that this doesn't change */
    magicianHatLetter : "     " + random.getRandomLetter(),

    updateOnPage : function(){
        const noObject = data.ascii.noObject
        const randomness_text = (sword.name == "Sword of Randomness")
              ? "infinite + " : ""

        const special_text = (sword.specialSword)
              ? `\n\nLevel : ${randomness_text}${sword.specialPower}` : ""

        const swords = data.ascii.swords
        html.setInner("sword_without_button", swords[swords.asciiKey[sword.name]] + special_text)
        
        // Objects
        const won_obj = {have: developperComputer.won, won: developperComputer.won}
        const draw_obj = (id, {have, name, description, won}, ascii) => {
            txt2 = `<span><b>${name}</b><br/>${description}`
            text = `<pre>${have ? ascii : noObject}</pre>${have ? txt2 : ""}`
            html.setInner(id, text)
            won ? html.showButton("hardmode") : html.hideButton("hardmode")
        }

        Object.entries(data.ascii.inventory)
            .map(([key, ascii]) => draw_obj("inventory_" + key, objects.all[key] || won_obj, ascii))
    }
}
