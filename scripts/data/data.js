data = {
    recipes: [
        [{ type: "mix", n_lollipops: null, n_candies: 100, duration: [11, 19] }]
    ],
    mobs: {
        chuckNorris: ("mob", "CHN", 1000, 1000, "Chuck Norris", "Chuck Norris. You just can't beat him.", [])
        necromancer: ("mob", "NEC", 150, 150, "magic staff", "A necromancer. She summons ghosts and dead stuff.", [drops.createDrop("object", "candiesConverter", true), drops.createDrop("object", "cauldron", true)])
        ghost: ("mob", "GHO", 5, 5, "spectral magic", "A Ghost. It halves the life of human beings.", [])
        pileOfCorpses: ("mob", "POC", [140, 220, 20], [140, 220, 20], "none", "A pile of corpses. It doesn't hurt you, but damn, it's hard to remove !", [])
        guard: ("mob", "GUA", 25, 25, "spear", "One of the castle's guards.", [drops.createDrop("candies", random.getRandomIntUpTo(40))])
        knight: ("mob", "KNI", 70, 70, "sharp sword", "A knight with a huge armor.", [drops.createDrop("candies", 230 + random.getRandomIntUpTo(70)), drops.createDrop("object", "plateArmour", random.oneChanceOutOf(10))])
        cheatedGardenGnome: ("mob", "CGG", 70, 70, "ultra plasma gun", "A cheated garden gnome. Since when garden gnomes have guns like that ?", [])
        spikyDoor: ("mob", "|-|", 300, 300, "spikes", "A strong door. Hard to break. There are spikes on it, it hurts !", []);
        door: ("mob", "|-|", 300, 300, "none", "A strong door. Hard to break.", [])
        banshee: ("mob", "BSH", 160, 160, "?", "A banshee, omen of death.", [])
        demon: ("mob", "DEM", 90, 90, "demon claws", "A demon.", [])
        devil: ("mob", "DEV", 250, 250, "religion", "It's the devil itself !", [drops.createDrop("candies", 100000)])
        teleportingGate: ("mob", " * ", 120, 120, "none", "A teleporting gate, made by the devil itself.", [])
        bug: ("mob", "BUG", [300, 10000300, 1], 300, random.pickRandomly(["itself", "religion", "flames", "sharp teeth", "cursed sword", "claws", "dagger", "fins", "hooves", "magic staff", "horn", "silver sword", "chocolate sword", "demon claws"]), "A bug !", [drops.createDrop("candies", 100000000)])
        dev: ("mob", "DEV", 100000000000000, 100000000000000, "bugs", "The developper (hey, he made this game !)", [drops.createDrop("candies", 1000000)])
        komodoDragon: ("mob", "KOM", 5, 5, "foots and tail", "A Komodo dragon. Did you heard about island gigantism ?", []),
        rhinoceros: ("mob", "RHI", 160, 160, "horn", "A " + random.pickRandomly(["white", "black", "indian", "javan", "sumatran"]) + " rhinoceros. Watch out for his horn !", []),
        gaur: ("mob", "GAU", 80, 80, "horns", "A Gaur. This large bovine looks like a bison.", []),
        dromornisStirtoni: ("mob", "DST", 70, 70, "giant beak", "A Dromornis Stirtoni ! A 400kg flightless bird !", []),
        gorilla: ("mob", "GOR", 50, 50, "its fists", "A Gorilla. Gorillas occasionally engage in homosexual interactions.", []),
        capybara: ("mob", "CPY", 20, 20, "its teeth", "A capybara : the largest rodent in the world !", []),
        doedicurus: ("mob", "DOE", 120, 120, "spiky tail", "A Doedicurus : your favorite glyptodont !", []),
        stoneWall: ("mob", "WAL", 300, 300, "stone", "A stone wall.", []),
        walledOffZombieWarrior: ("mob", "WZW", [150, 250, 10], [150, 250, 10], "cursed sword", "A walled off zombie warrior. He probably did something bad to end up here.", [drops.createDrop("candies", random.getRandomIntUpTo(1) * 4000), drops.createDrop("object", "oldAmulet", true)]),
        fireball: ("mob", "FBL", 1, 1, "itself", "A fireball !! Watch out !", []),
        fakeDoorMonster: ("mob", "| |", 70, 70, "sharp teeth", "It's not a door ! It's a monster ! (an ugly one)", []),
        unicorn: ("mob", "UNI", 100, 100, "magical horn", "A unicorn !! They exist !", []),
        charlieTheUnicorn: ("mob", "UNI", 100, 100, "magical horn", "A unicorn !! It has no kidney.", [drops.createDrop("object", "magicalHorn", true)]),
        troll: ("mob", "TRL", 250, 250, "enormous fist", "A troll. It is huge, but it lacks precision.", []),
        dragon: ("mob", ",((", 1000, 1000, "flames", "A dragon !! Kill him and the castle will be yours.", []),
        tree: ("mob", "|||", 5, 5, "none", "A tree. It sometimes drops a candy.", [drops.createDrop("candies", random.getRandomIntUpTo(1)), drops.createDrop("object", "key", random.oneChanceOutOf(2))])
        yourself: ("mob", "\\o/", null, null, "", "You", [])
        cow: ("mob", "COW", 12, 12, "horns", "A cow ! Mooooo !", [drops.createDrop("candies", 100)]),
        cowKing: ("mob", "COW", 180, 180, "horns", "The cow king ! It looks like a normal cow, but it isn't...", [drops.createDrop("candies", 1000), drops.createDrop("object", "hornOfPlenty", true)]),
        basicChest: ("mob", "CHS", 80, 80, "none", "A chest !! Very rare.", [drops.createDrop("candies", 300 + random.getRandomIntUpTo(500)), drops.createDrop("object", "key", true), drops.createDrop("object", "boots", random.oneChanceOutOf(3)), drops.createDrop("object", "swampMap", random.oneChanceOutOf(3)), drops.createDrop("object", "hutMap", random.oneChanceOutOf(3))]),
        openChest: ("mob", "CHS", 1, 1, "none", "An open chest, full of candies !", [drops.createDrop("candies", 6000 + random.getRandomIntUpTo(2000))]),
        eel: ("mob", "EEL", 3, 3, "electric tail", "An eel. Weak, but aggressive.", [drops.createDrop("candies", 50 + random.getRandomIntUpTo(50))])
        fish: ("mob", "F~H", [9, 12, 1], [9, 12, 1], "fins", "A fish. Easy to beat.", [drops.createDrop("candies", 5)])
        octopus: ("mob", "OCT", 45, 45, "tentacles", "An octopus guardian. It looks dangerous.", [])
        theWhale: ("mob", "The Whale.", 100, 100, "giant tail", "The Whale does not like to be disturbed.", [drops.createDrop("candies", 400 + random.getRandomIntUpTo(400)), drops.createDrop("object", "key", true), drops.createDrop("object", "hutMap", true), drops.createDrop("object", "swampMap", true), drops.createDrop("object", "boots", true), drops.createDrop("object", "wellMap", true), drops.createDrop("object", "magicianHat", true), drops.createDrop("object", "pinkRing", true), drops.createDrop("object", "forgeMap", true)])
        woodPony: ("mob", "WPY", 12, 12, "hooves", "A wood poney ! It's a poney ! It the woods !", [drops.createDrop("candies", 42)])
        sickGoblin: ("mob", "GSB", 20, [5, 10, 1], "claws", "A sick goblin. It smells.", [drops.createDrop("candies", 3 + random.getRandomIntUpTo(3))])
        nastyGoblin: ("mob", "GOB", 20, 20, "claws", "A nasty goblin.", [drops.createDrop("candies", 3 + random.getRandomIntUpTo(3))])
        tenaciousGoblin: ("mob", "GTB", 30, 30, "dagger", "A tenacious goblin. Oh, he has a dagger, too.", [drops.createDrop("candies", 9 + random.getRandomIntUpTo(9)), drops.createDrop("object", "key", random.oneChanceOutOf(2)), drops.createDrop("object", "boots", random.oneChanceOutOf(5)), drops.createDrop("object", "swampMap", random.oneChanceOutOf(5)), drops.createDrop("object", "hutMap", random.oneChanceOutOf(5))])

        // Ally
        candyMonster: ("ally", "CND", null, null, "exploding candies", "A candy monster. He throws candies on his ennemies.", [])
        imp: ("ally", "IMP", [15, 25, 1], [15, 25, 1], "its whole body", "An imp.", []),
        irc: ("ally", "ORC", 30, 30, "bludgeon", "An orc. It looks stupid.", []),
        draugr: ("ally", "DRG", 35, 35, "various bones", "A draugr. It seems to be dead, but it's still moving..", []),
        chupacabra: ("ally", "CBA", 30, 30, "fangs", "A chupacabra. A real goat sucker !", []),
        golem: ("ally", "GOL", 100, 100, "rock", "A golem. Solid, solid golem.", []),
        chimera: ("ally", "CHI", [50, 57, 1], [50, 57, 1], "fire", "A chimera : lion, serpent and goat at the same time.", []),

        clone: ("ally", "\\o/", null, null, "cloned sword", "A clone of you.", [])

        // trap
        jelly: ("trap", "JEL", 1, 1, "powerful explosion", "A jelly !! Go away !", [])
        yggdrasil: ("trap", "/Y\\", 10000, 10000, "none", "Yggdrasill is its name, a tall tree, showered with shining loam.", [drops.createDrop("candies", 10000)])
        tree: ("trap", "\\|/", [500, 900, 100], [500, 900, 100], "none", "A candy tree. I hope you're carrying a good axe.", [])

        // Fake
        {type:"fake", text:"\\o/", max_hp:0, hp:0, weapon:"none", description:"", drops:[]}
    }
    text: {
        merchant: {
            tickle: [
                "Hey ! You touched my hat !",
                "Stop that, stop that ! You're tickling me !",
                "Hahahaha ! I'm so ticklish !",
                "Listen, listen : I give you 100 candies ! But stop that please !"
            ],
            click_lollipop: {
                texts: [
                    "Hey ! Don't touch the products !",
                    "Seriously, don't touch this lollipop.",
                    "Don't touch it ! Other customers may lick it after that, that's gross !",
                    "Stop now or I'll be force to do something.",
                    "Okay, okay, I lower the price, but stop touching it !",
                    "I can't make a lower price... Please stop."
                ],
                intervals: [0, 1, 2, 3, 4, 14]
            },
            swords: {
                "wooden sword": {
                    accept: "Great! This wooden sword isn't the best, for sure, but it really didn't cost so much.",
                    decline: "You don't have enough candies. You should save up candies to buy it : swords are useful nowadays."
                },
                "copper sword": {
                    accept: "This copper sword is quite heavy, but it slays efficiently.",
                    decline: "You need 300 candies to buy that sword! Did you know that copper slowly reacts with atmospheric oxygen forming a layer of brown-black copper oxide?"
                },
                "iron sword": {
                    accept: "This iron sword could cut almost anything, if you're strong enough to use it.",
                    decline: "You need more candies for the iron sword. Iron is strong. Iron is reliable. Iron will obey your slaying desire."
                },
                "silver sword": {
                    accept: "One thousand candies for meeee! Uh, I mean, this silver sword is even stronger than the iron one! You had to buy it.",
                    decline: "One thousand candies for the silver sword! My marginal profit can't handle less than that."
                },
                "diamond sword": {
                    accept: "Diamond! This is the best sword I can sell you. It will cut rocks as if they were made of butter.",
                    decline: "You need more candies. The diamond sword is quite expensive, but it's worth it!"
                }
            }
        },
        brewing_val_errors: [
            "The value you entered for candies is not a number.",
            "The value you entered for lollipops is not a number.",
            "The values you entered are not numbers.",
            "You don't have enough to put all that in the cauldron !",
            "Don't put negative values !",
            ""
        ],
        brewing_actions: {
            info:
            `<br/><b>What you have :</b>
    Candies :   <span id='candies_n'></span>
    Lollipops : <span id='lollipops_n'></span>`,
            put:
            `<b>What you want to put in the cauldron :</b><br/>
<input id=\"cauldron_candies_quantity\" type=\"text\" size=\"10\"/> candies
<input id=\"cauldron_lollipops_quantity\" type=\"text\" size=\"10\"/> lollipops
<button onclick=\"cauldron.putInTheCauldron()\">Put all that in the cauldron</button> <span id=\"cauldron_comment\"></span>`,
            in_cauldron:
            `<b>What is in the cauldron :</b>
   Candies :   <span id='candies_in_cauldron'></span>
   Lollipops : <span id='lollipops_in_cauldron'></span>`,
            actions:
            `<b>What you can do with it :</b><br/>
<button id=\"cauldron_mix\" onclick=\"cauldron.setWeAreMixing(true)\">Mix</button><button id=\"cauldron_boil\" onclick=\"cauldron.setWeAreBoiling(true)\">Boil</button><button disabled=\"disabled\" id=\"cauldron_stop\" onclick=\"cauldron.stopActions()\">Stop</button><br/><br/>
<span id=\"cauldron_action_text\"></span>
<button id=\"cauldron_put_into_bottles\" onclick=\"cauldron.putIntoBottles()\">Put everything into bottles</button><br/><br/>
<span id=\"cauldron_results_text\"></span>`

        },
        cauldron_boiling: {
            texts: [
                "cold.",
                "lukewarm.",
                "hot..",
                "very hot...",
                "very very hot !",
                "bubbles begin to appear...",
                "bubbles begin to appear... and..",
                "BOILING !",
                "the water is burnt ! How is that even possible ?"
            ],
            intervals: [0,3,6,9,11,13,14,15,32]
        }
    },
    ascii: {
        dragon: [
            "    _///_,",
            "   / ` \' \'>",
            "  o\'  __/_\'>",
            " /  _/  )_\\\'>",
            "\"__/   /_/\\_>",
            "  ____/_/_/_/",
            " /,---, _/ /",
            "\"\"  /_/_/_/",
            "   /_(_(_(_                 \\",
            "  (   \\_\\_\\\\_               )\\",
            "   \\\'__\\_\\_\\_\\__            ).\\",
            "   //____|___\\__)           )_/",
            "   |  _  \\\'___\'_(           /\'",
            "    \\_ (-\'\\\'___\'_\\      __,\'_\'",
            "    __) \\  \\\\___(_   __/.__,\'",
            "_,((,-,__\\__\'\", __\\_/. __,\'",
            "              \'\"./_._._-\'"
        ],
        swords: {
            woodenWithButton : "\
      .\n\
     / \\\n\
     | |\n\
     | |  <button class=\"home_button\" id=\"buy_wooden_sword\" onClick=\"sword.buyThisSword(\'wooden sword\');\">Buy the wooden sword (150 candies)</button>\n\
     | |\n\
     | |\n\
   `--8--\'\n\
      8\n\
      0",

            wooden : "Wooden sword\n\
     .\n\
    / \\\n\
    | |\n\
    | |\n\
    | |\n\
    | |\n\
  `--8--\'\n\
     8\n\
     0",

            copperWithButton : "\
      .\n\
     /:\\\n\
     |||\n\
     |||  <button class=\"home_button\" id=\"buy_copper_sword\" onClick=\"sword.buyThisSword(\'copper sword\');\">Buy the copper sword (300 candies)</button>\n\
     |||\n\
     |||\n\
   `--8--\'\n\
      8\n\
      0",

            copper : "Copper sword\n\
     .\n\
    /:\\\n\
    |||\n\
    |||\n\
    |||\n\
    |||\n\
  `--8--\'\n\
     8\n\
     0",

            ironWithButton : "\
      /|\n\
     |\\|\n\
     |||\n\
     |||  <button class=\"home_button\" id=\"buy_iron_sword\" onClick=\"sword.buyThisSword(\'iron sword\');\">Buy the iron sword (500 candies)</button>\n\
     |||\n\
     |||\n\
     |||\n\
     |||\n\
  ~-[{o}]-~\n\
     |/|\n\
     |/|\n\
     `0\'",

            iron : "Iron sword\n\
    /|\n\
   |\\|\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
~-[{o}]-~\n\
   |/|\n\
   |/|\n\
   `0\'",

            silverWithButton : "\
     |\\\n\
     |/|\n\
     |||\n\
     [|]  <button class=\"home_button\" id=\"buy_silver_sword\" onClick=\"sword.buyThisSword(\'silver sword\');\">Buy the silver sword (1000 candies)</button>\n\
     |||\n\
     [|]\n\
     |||\n\
     |||\n\
  \\_[[O]]_/\n\
     |/|\n\
     |/|\n\
     `0\'",

            silver : "Silver sword\n\n\
    |\\\n\
    |/|\n\
    |||\n\
    [|]\n\
    |||\n\
    [|]\n\
    |||\n\
    |||\n\
 \\_[[O]]_/\n\
    |/|\n\
    |/|\n\
    `0\'",

            diamondWithButton : "\
      /|\n\
     |;|\n\
     |:|\n\
     |;|  <button class=\"home_button\" id=\"buy_diamond_sword\" onClick=\"sword.buyThisSword(\'diamond sword\');\">Buy the diamond sword (2000 candies)</button>\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
  \\_[[C]]_/\n\
     |N|\n\
     |D|\n\
     `0\'",

            diamond : "Diamond sword\n\n\
      /|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
  \\_[[C]]_/\n\
     |N|\n\
     |D|\n\
     `0\'",

            candyDiamond : "Candy diamond sword\n\n\
        /|\n\
       |o|\n\
       |:|\n\
       |o|\n\
       |:|\n\
       |o|\n\
       |:|\n\
       |o|\n\
   o   |:|   o\n\
    \\_[[C]]_/\n\
       |N|\n\
       |D|\n\
       'O'",

            polishedCandyDiamond : "Polished candy diamond sword\n\n\
            /|\n\
           |o|\n\
           | |\n\
           |o|\n\
           | |\n\
           |o|\n\
           | |\n\
           |o|\n\
       o   | |   o\n\
        \\_([-])_/\n\
           | |\n\
           | |\n\
           'O'",

            chocolate : "Chocolate sword\n\n\
       /|\n\
      |o|\n\
      |~|\n\
      |o|\n\
      |~|\n\
      |o|\n\
      |~|\n\
      |o|\n\
  o   |~|   o\n\
   \\~([-])~/\n\
      |~|\n\
      |~|\n\
      'O'",

            sharpChocolate : "Sharp chocolate sword\n\n\
         /|\n\
        |^|\n\
        |~|\n\
        |^|\n\
        |~|\n\
        |^|\n\
        |~|\n\
        |^|\n\
    .   |~|   .\n\
     \\~([-])~/\n\
        |~|\n\
        |~|\n\
        'O'",

            ofFlames : "Sword of Flames\n\n\
       _\n\
      /#|\n\
     |##|\n\
     |##|\n\
     |#F|\n\
     |L#|\n\
     |#A|\n\
     |M#|\n\
     |#E|\n\
     |S#|\n\
     |##|\n\
     |##|\n\
 _   |##|   _\n\
 \\\\-([--])-//\n\
     |``|\n\
     |``|\n\
     |``|\n\
     \"##\"",

            ofLife : "Sword of Life\n\n\
   _    _\n\
  ( `\\/' )\n\
  `\\    /'\n\
    |\\/|\n\
    |  |\n\
    |~ |\n\
    |  |\n\
    | ~|\n\
    |  |\n\
    |  |\n\
    | ~|\n\
    |~ |\n\
    |  |\n\
    | ~|\n\
/~~([--])~~\\\n\
    |  |\n\
    |  |\n\
    |  |\n\
    \"OO\"",

            ofSummoning : "Sword of Summoning\n\n\
       _\n\
      /*|      _\n\
     |% |     / \\\n\
     |  |    /& /\n\
     | &|   /  /\n\
     |  |  /  /\n\
     |% | / %/\n\
     |  |/  /\n\
     | * & /\n\
     |    /\n\
     |& */\n\
     |  |\n\
     |_%|\n\
  ~~([__])~~\n\
     |*%|\n\
     |%&|\n\
     |*&|\n\
     \'42\'",

            ofLiflamesummoning : "Sword of Liflamesummoning\n\n\
      _    _\n\
     ( `\\/' )\n\
     `\\    /'\n\
       |\\/|      _\n\
       |% |     /#\\\n\
       |  |    /&#/\n\
       | &|   /##/\n\
       |  |  /##/\n\
       |% | /#%/\n\
       |  |/##/\n\
       | * &#/\n\
       |   #/\n\
       |& */\n\
       |  |\n\
       |_%|\n\
    ~~([__])~~\n\
       |l%|\n\
       |%f|\n\
       |s%|\n\
       \'42\'",

            ofRandomness : "  Sword of Randomness\n\n\
      _    _\n\
 À    ( `\\/' )\n\
    À `\\ e  /'\n\
    À À  |\\/|      _\n\
    À   |% |     /#\\\n\
    À  qsd |  |    /&#/\n\
       | &|   /##/\n\
       ÀÀ|  |  /##/\n\
       |% | /s%/\n\
      f |  |À/##/\n\
       | $*À &#/\n\
  r     |   #/\n\
       |& */\n\
      ù |  |\n\
   dfg    |_%|\n\
    ~~(É[__])~~\n\
       |l%|\n\
      A |%f|\n\
       |s%sdd|\n\
       \'42\'"

        },
        cauldron : [
                "       ___________",
                "      (___________)",
                "       /         \\",
                "      /           \\",
                "     |             |",
                " ____\\             /____",
                "()____\'.__     __.\'____()",
                "     .\'` .\'```\'. `-.",
                "    ().\'`       `\'.()"
            ],

        book :
        [
            "      ___________________   ___________________",
            "  .-/|       ~~**~~      \\ /      ~~**~~       |\\-.",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||                    :                    ||||",
            "  ||||___________________ : ___________________||||",
            "  ||/====================\\:/====================\\||",
            "  `---------------------~___~--------------------\'\'"
        ],

        book_pages : [
            [
                "Welcome to the",
                "potions brewing",
                "manual for",
                "beginners !",
                "",
                " (second edition)",
                "",
                " __  __  __  __ ",
                " )(  )(  )(  )( ",
                "(__)(__)(__)(__)"
            ],
            [
                "",
                "The present",
                "manual will focus",
                "on potions that",
                "require materials",
                "such as : ",
                " - candies",
                " - lollipops",
            ],
            [
                " The three rules",
                "of potion brewing",
                "-----------------",
                "",
                "1. The effect of",
                "a potion depends",
                "on its content as",
                "well as on the",
                "steps followed to",
                "prepare it."
            ],
            [
                "2. You can do",
                "several potions",
                "in one go.",
                "",
                "3. It's possible",
                "to mix",
                "instructions to",
                "brew potions of",
                "different types",
                "in one go."
            ],
            [
                "Table of contents",
                "-----------------",
                " Pages 10 to 20",
                " (Good potions)",
                "-----------------",
                "",
                " 10-13",
                "Minor health",
                "potion"
            ],
            [
                "",
                " 14-17",
                "Major health",
                "potion",
                "",
                " 18-20",
                "Invulnerability",
                "potion"
            ],
            [
                "Table of contents",
                "-----------------",
                " Pages 22 to 41",
                "(Strange potions)",
                "-----------------",
                "",
                " 22-27",
                "Turtle potion"
            ],
            [
                " 28-33",
                "Cloning potion",
                "",
                " 34-37",
                "G.M.O.O.H.",
                "potion",
                "",
                " 38-41",
                "Superman potion",
            ],
            [
                "Table of contents",
                "-----------------",
                " Pages 42 to 50",
                "(Various magical",
                "objects you can",
                "  brew in your",
                "   cauldron)",
                "-----------------"
            ],
            [
                "",
                "",
                " 42-45",
                "Magical seed",
                "",
                "",
                " 46-50",
                "Magical jelly",
            ],
            [
                "Minor health pot.",
                "-----------------",
                "The minor health",
                "potion is the",
                "easiest to brew",
                "for beginners.",
                "",
                "Used during a",
                "quest, it will",
                "make you recover"
            ],
            [
                "50 health points.",
                "",
                "For one potion,",
                "you will need 100",
                "candies.",
                "",
                "Put them in the",
                "cauldron and mix",
                "during about 15",
                "seconds."
            ],
            [
                "You can mix a",
                "little more or",
                "less longer, it",
                "doesn't matter so",
                "much.",
                "",
                "When you're done,",
                "put the resulting",
                "mixture into",
                "bottles."
            ],
            [
                "Congratulations !",
                "You just made",
                "your first minor",
                "health potion !",
                "",
                "",
                "N.B. : use 200",
                "candies for 2",
                "potions, 300 for",
                "3, etc."
            ],
            [
                "Major health pot.",
                "-----------------",
                "The major health",
                "potion is a bit",
                "harder to make",
                "than the previous",
                "one.",
                "",
                "But it's also",
                "a lot more",
            ],
            [
                "efficient : by",
                "drinking it",
                "during a quest,",
                "you will gain",
                "100 health points",
                "instead of 50.",
                "",
                "How to make a",
                "major health",
                "potion :"
            ],
            [
                "1. Put 100",
                "lollipops into",
                "your cauldron.",
                "",
                "2. Begin mixing",
                "forcefully.",
                "",
                "3. While you're",
                "mixing, add 100",
                "candies into the",
            ],
            [
                "cauldron.",
                "",
                "4. Stop mixing",
                "after 20 seconds.",
                "",
                "5. Put the result",
                "into bottles.",
                "",
                "6. You're done !"
            ],
            [
                " Invulnerability",
                "     potion",
                "-----------------",
                "",
                "This potion,",
                "although being",
                "quite easy to",
                "brew, require a",
                "lot of candies."
            ],
            [
                "The recipe is",
                "simple : just",
                "put 2000 candies",
                "inside your",
                "cauldron and mix",
                "them until your",
                "arms hurt.",
                "",
                "This potion will",
                "make you"
            ],
            [
                "invincible for",
                "some time,",
                "during which you",
                "won't feel any",
                "pain or physical",
                "damage."
            ],
            [
                "  Turtle potion",
                "-----------------",
                "A turtle !",
                "A turtle !",
                "Do you want to",
                "become a turtle ?",
                "",
                "You'll be able to",
                "become one with",
                "this fantastic"
            ],
            [
                "potion !",
                "",
                "When you will be",
                "a turtle, you",
                "will resist a lot",
                "more to physical",
                "damage. But you",
                "will be slower,",
                "too."
            ],
            [
                "Now, let's get",
                "down to business.",
                "",
                "Put 10000",
                "lollipops in your",
                "cauldron. Do not",
                "add any candy, or",
                "your potion will",
                "be a failure."
            ],
            [
                "Now, heat up the",
                "cauldron until",
                "your preparation",
                "is boiling.",
                "",
                "When it's boiling,",
                "stop heating it",
                "up and mix a",
                "little bit."
            ],
            [
                "Add the same",
                "quantity of",
                "lollipops as you",
                "put at the",
                "beginning, and,",
                "one more time,",
                "heat up",
                "everything until",
                "it's boiling."
            ],
            [
                "Stop boiling,",
                "put into a bottle,",
                "begin a quest,",
                "drink the potion,",
                "you're a turtle !!",
                "",
                "   _  .----.",
                "  (_\\/      \\_,",
                "    \'uu----uu~\'"
            ],
            [
                "  Cloning potion",
                "-----------------",
                "There's a little",
                "bit of candies in",
                "everyone of us.",
                "",
                "This is actually",
                "a physical law of",
                "our universe."
            ],
            [
                "Now, candies are",
                "a very malleable",
                "material.",
                "",
                "These two facts",
                "led us to the",
                "realisation of",
                "this cloning",
                "potion."
            ],
            [
                "The potion will",
                "copy your inner",
                "structure and",
                "make a clone of",
                "you almost",
                "entirely made",
                "of candies",
                "(there's a bit of",
                "water, too)."
            ],
            [
                "Steps :",
                "",
                "Burn the water in",
                "your cauldron.",
                "",
                "Then, while it's",
                "still burning,",
                "add as many",
                "candies as you",
                "can."
            ],
            [
                "It's simple : the",
                "more candies you",
                "put, the more",
                "potions you'll",
                "get !",
                "",
                "(be sure to put",
                "   a minimum",
                "quantity, though)"
            ],
            [
                "  \\o/  ->  \\o/",
                "",
                "   ^        |",
                "   |        V",
                "",
                "  \\o/  <-  \\o/",
                "",
                "  \"The circle",
                "    of life\""
            ],
            [
                "G.M.O.O.H. potion",
                "-----------------",
                "G.M.O.O.H. means",
                "\"Get Me Out Of",
                "Here\".",
                "",
                "This potion is to",
                "be used in",
                "critical",
                "situations."
            ],
            [
                "It will teleport",
                "you to another",
                "location.",
                "",
                "Maybe it will",
                "be safer, maybe",
                "it won't. Who",
                "knows ?",
                "Quite exciting",
                "isn't it ?"
            ],
            [
                "First, put in",
                "your cauldron a",
                "base quantity of",
                "10 000 candies.",
                "",
                "Then, add 500",
                "lollipops for",
                "each potion you",
                "want to brew."
            ],
            [
                "Never change the",
                "base quantity of",
                "10 000 candies.",
                "",
                "Then, mix a little",
                "bit and put into",
                "bottles.",
                "",
                "Enjoy your random",
                "potions !"
            ],
            [
                " Superman potion",
                "-----------------",
                "This potion will",
                "transform you",
                "into Superman,",
                "providing you",
                "a fantastic cape.",
                "",
                "Some people say",
                "that this isn't"
            ],
            [
                "useful.",
                "",
                "We respond them",
                "that it is just",
                "so cooooool !",
                "",
                "Anyway, to make",
                "one :",
                "",
                "Put 180 candies"
            ],
            [
                "in your cauldron.",
                "",
                "Mix them.",
                "",
                "Think about",
                "Superman.",
                "",
                "Think once again.",
                "",
                "Put into bottle."
            ],
            [
                "You're done !",
                "",
                "   ___________",
                "  /.\'_______` \\",
                " /( <_______`-\'\\",
                " `.`.______  \\.\'",
                "   `..-.___>.\'",
                "     `.__ .\'",
                "       `.\'"
            ],
            [
                "      Seed",
                "-----------------",
                "According to an",
                "ancient legend,",
                "trees would be",
                "the source of all",
                "candies in the",
                "whole world.",
                "",
                "There would exist"
            ],
            [
                "somewhere in the",
                "universe a giant",
                "tree, which",
                "remains unnamed.",
                "",
                "This tree would",
                "provide its",
                "discoverer an",
                "infinite flow of",
                "candies."
            ],
            [
                "Anyway, we didn't",
                "find it yet, but",
                "we found that it",
                "was possible to",
                "craft a magical",
                "seed so that it",
                "grows a resistant",
                "tree. And this",
                "can be useful",
                "during a quest."
            ],
            [
                "Heat up the water",
                "in your cauldron.",
                "",
                "Add 650 candies,",
                "stop boiling and",
                "put the seed into",
                "a bottle.",
                "",
                "Now, plant some",
                "trees !"
            ],
            [
                "      Jelly",
                "-----------------",
                "Did you ever",
                "thought about",
                "some kind of bomb",
                "that you could",
                "use during a",
                "quest ? If so,",
                "then this magical",
                "jelly should"
            ],
            [
                "please you !",
                "",
                "It is a bit hard",
                "to prepare, but",
                "it's quite",
                "powerful.",
                "",
                "This jelly",
                "explodes on",
                "contact and deals"
            ],
            [
                "high damage.",
                "",
                "There are three",
                "peparation steps",
                "which correspond",
                "to the three",
                "layers of the",
                "jelly.",
                "",
                "First step :"
            ],
            [
                "Put 600 candies,",
                "boil the water,",
                "stop boiling.",
                "",
                "Second step :",
                "",
                "Add 6 000",
                "lollipops,",
                "mix,",
                "stop mixing."
            ],
            [
                "Third step :",
                "",
                "Repeat first step.",
                "",
                "Note that you can",
                "only place the",
                "jelly behind you.",
                "",
                "Good luck for",
                "your quests !"
            ],
            [
                "   ~ The end ~",
                "-----------------",
                "",
                "   Thanks for",
                "    reading !",
                "",
                "We hope this book",
                "helped you. Feel",
                "     free to",
                "redistribute it !",
            ],
            [
                "Co-authors :",
                "",
                "- the sorceress",
                "- the necromancer",
                "- a shoemaker",
                "- a mathematician",
                "- ???",
                "",
                " Happy brewing ~"
            ]
        ]
    }
}
