var shop = {

    // Variables
    buy10LollipopsButtonShown : false, // True if the buy 10 lollipops button should be shown
    shown : false, // True if the shop is currently shown
    ticklingStep : 0, // Tickling step (increase when we click on the merchant's hat
    clickingOnLollipopStep : 0, // Clicking on lollipop step (increase when we clicked on the top of the lollipop sold at the shop)
    oneLollipopPrice : 0, // Price of one lollipop, calculated depending on the clicking on lollipop step
    tenLollipopsPrice : 0, // Price of ten lollipops, calculated the same way as above
    currentSwordButtonId : "none", // Contains the id of the current sword buying button
    currentSwordPrice : 0, // Contains the price of the current sword being sold by the merchant
    
    // Functions
    onload : function(){
        lollipops.delivery(); // The merchant must have some lollipops in stock at the beginning, so we make a delivery
        this.setClickingOnLollipopStep(0); // This also set the lollipops price !
    },
    
    check : function(){
        if(candies.nbrOwned >= this.oneLollipopPrice) this.setShown(true);
        if(candies.nbrOwned >= 150){
            // If we don't have any sword and there's no sword to sell yet, we show the wooden sword
            if(sword.name == "none" && this.currentSwordButtonId == "none") {
                this.showProduct("wooden_sword");
            }
        }
    },
    
    setBuy10LollipopsButtonShown : function(value) {
        this.buy10LollipopsButtonShown = value;
    },
    
    clickedOnHat : function() {
        text = data.text.merchant.tickle[this.ticklingStep]
        if (text) this.setMerchantSpeech(text)
        if (this.ticklingStep == 3)
            candies.setNbrOwned(candies.nbrOwned + 100);

        this.setTicklingStep(this.ticklingStep + 1);
    },
    
    setTicklingStep : function(value){
        this.ticklingStep = value;
    },
    
    setClickingOnLollipopStep : function(value) {
        this.clickingOnLollipopStep = value;

        /* Reduces price based of no. of times top of lollipop is clicked */
        price_mod = Math.min(Math.max(0, value - 4), 10)

        this.oneLollipopPrice = 60 - price_mod
        this.tenLollipopsPrice = 500 - price_mod * 5
        html.setInner("buy_1_lollipop", `Buy a lollipop (${this.oneLollipopPrice} candies)`)
        html.setInner("buy_10_lollipops", `Buy 10 lollipop (${this.tenLollipopsPrice} candies)`)
    },
    
    clickedOnLollipop : function() {
        this.setClickingOnLollipopStep(this.clickingOnLollipopStep + 1)

        const { intervals, texts } = data.text.merchant.click_lollipop
        text = texts[intervals.indexOf(this.clickingOnLollipopStep)]
        if (text) this.setMerchantSpeech(text)
    },
    
    showProduct : function(id){
        /* TODO this is a map, since selling_order is a map, since sword.setName uses .name*/
        const special_product = ({
            "wooden sword":  [data.ascii.swords.woodenWithButton,  "buy_wooden_sword",  150],
            "copper sword":  [data.ascii.swords.copperWithButton,  "buy_copper_sword",  300],
            "iron sword":    [data.ascii.swords.ironWithButton,    "buy_iron_sword",    500],
            "silver sword":  [data.ascii.swords.silverWithButton,  "buy_silver_sword",  1000],
            "diamond sword": [data.ascii.swords.diamondWithButton, "buy_diamond_sword", 2000],
        })[id]

        console.log("showProduct", id, special_product)

        if (special_product) {
            const [ascii, button_id, price] = special_product
            html.setInner("sword_with_button", ascii)
            this.currentSwordButtonId = button_id
            this.currentSwordPrice = price
        } else {
            html.setElementVisibility(id, true);
            html.setElementDisplay(id, "block");
        }
    },
    
    show : function(){
        // We show the shop
        if(html.isElementVisible("shop") == false) { // If the shop isn't already visible
            html.setElementVisibility("shop", true);
            this.setMerchantSpeech("Hello, I'm the candy merchant. I would do anything for candies. My lollipops are delicious!");
        }
        
        // And the lollipop we can buy :)
        this.showProduct("lollipop");
    },
    
    setShown : function(value){
        // If the new value is true but it was false before, we show the shop
        if(value == true && this.shown == false) this.show();

        // We change the value
        this.shown = value;
    },
    
    hideProduct : function(id){
        // If it's a special product
        if(id == "sword"){
            this.currentSwordButtonId = "none";
            html.setInner("sword_with_button", "");
        }
        // Else
        else{
            html.setElementVisibility(id, false);
            html.setElementDisplay(id, "none");
        }
    },
    
    setMerchantSpeech : function(text){
        html.setInner("merchant_speech", format_speech(text, 20, " "));
    }
    
};
