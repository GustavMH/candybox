var lollipops = {
    
    // Variables
    nbrOwned : 0,
    nbrBought : 0,
    nbrInStock : 1000,
    stockShortage : false,
    
    // Functions
    buy1 : function(){
        if(candies.nbrOwned >= shop.oneLollipopPrice && this.nbrInStock >= 1){
            candies.setNbrOwned(candies.nbrOwned - shop.oneLollipopPrice);
            this.setNbrOwned(this.nbrOwned + 1);
            this.setNbrBought(this.nbrBought + 1);
            this.setNbrInStock(this.nbrInStock - 1);
            shop.setMerchantSpeech("Thanks for buyin'! Here's your " + this.getFlavour() + " flavor lollipop.");
        }
    },
    
    buy10 : function(){
        if(candies.nbrOwned >= shop.tenLollipopsPrice && this.nbrInStock >= 10){
            candies.setNbrOwned(candies.nbrOwned - shop.tenLollipopsPrice);
            this.setNbrOwned(this.nbrOwned + 10);
            this.setNbrBought(this.nbrBought + 10);
            this.setNbrInStock(this.nbrInStock - 10);
            shop.setMerchantSpeech("Thanks for buyin'! Here's your ten lollipops. Various flavours.");
        }
        else shop.setMerchantSpeech("I'm sorry, we don't have enough lollipops in stock to sell you ten of them. We currently have " + this.nbrInStock + " lollipops in stock.");
    },
    
    getFlavour : function(){
        /* Get a flavour based on how many lollipops have been bought.
         * The flavour is determined by a CPD, encoding the propability
         * for each flavour category, from 0 to 1, the CPD is new for every
         * 50 lollipops bought. */

        flavours = {
            fruits : ["apple", "strawberry", "grape", "blackberry", "orange", "watermelon", "banana", "pear", "cherry", "raspberry", "mandarin", "lime", "peach", "apricot", "blueberry", "kiwifruit", "lychee", "pineapple"],
            uncommon : ["chocolate", "cookie", "pancake", "water", "tomato", "kitten"],
            unrealistic : ["leprechaun", "korrigan", "lollipop", "snow", "storm", "door", "dracula"],
            abstract : ["gluttony", "desire", "love", "causality", "fatalism", "cuteness"]
        }

        all_chances = [
            [1], [1], [0.9, 1], [0.8, 1], [0.7, 1], [0.5, 1], [0.4, 0.9, 1], [0.3, 0.8, 1],
            [0.2, 0.7, 1], [0.1, 0.6, 1], [0.1, 0.5, 1], [0.1, 0.4, 0.9], [0.1, 0.3, 0.8],
            [0.1, 0.2, 0.7], [0.1, 0.2, 0.6], [0.1, 0.2, 0.5], [0.1, 0.2, 0.4], [0.1, 0.2, 0.3],
        ]

        if (this.nbrBought == 42 && random.flipACoin())   return "space"
        if (this.nbrBought == 1337 && random.flipACoin()) return "leet"

        const r = random.getRandomFloat()
        const chances = all_chances[Math.floor(this.nbrBought / 50)] || all_chances[17]

        if (r < chances[0]) return random.pickRandomly(flavours.fruits);
        if (r < chances[1]) return random.pickRandomly(flavours.uncommon);
        if (r < chances[2]) return random.pickRandomly(flavours.unrealistic);

        return random.pickRandomly(flavours.abstract);
    },
    
    delivery : function(){
        this.setNbrInStock(this.nbrInStock + 15 + random.getRandomIntUpTo(10));
        window.setTimeout(this.delivery.bind(this), 900000); // One delivery every 15 minutes
    },
    
    setNbrOwned : function(value){
        this.nbrOwned = value;

        text = this.nbrOwned != 1
            ? `You have ${this.nbrOwned} lollipops!`
            : "You have 1 lollipop!"

        htmlInteraction.setInnerHtml("lollipops", text);
        htmlInteraction.setElementVisibility("lollipops", true);
        buttons.checkLollipops();
        cauldron.updateActionsInfoOnPage();
        computer.updateLollipops();
    },
    
    setNbrBought : function(value){
        this.nbrBought = value;
    },
    
    setNbrInStock : function(value){
        // Set the value
        this.nbrInStock = value;
        
        // If > 100, decrease it
        if(this.nbrInStock > 140) this.nbrInStock = 140;
        
        // Handle lollipops stock shortage
        if(this.stockShortage == false && this.nbrInStock == 0){
            this.stockShortage = true;
            buttons.checkLollipopsStockShortage();
        }
        else if(this.stockShortage == true && this.nbrInStock != 0){
            this.stockShortage = false;
            buttons.checkLollipopsStockShortage();
        }
    }
    
};
