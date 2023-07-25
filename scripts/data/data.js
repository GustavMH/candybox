data = {
    potion_list: {
        "health": { buttonText: "Health potion", buttonColor: "#ff0000", action: "potions.heal(50);", shown: false, nbrOwned: 0, merchantSpeech: "Use this minor health potion during combats to regain some of your health points !", type: "potion" },
        "escape": { buttonText: "Escape potion", buttonColor: "#51c90f", action: "potions.escape();", shown: false, nbrOwned: 0, merchantSpeech: "The escape potion allow escaping from a quest while avoiding any time penalty. It makes you flee really really fast !", type: "potion" },
        "berserk": { buttonText: "Berserk potion", buttonColor: "#000000", action: "potions.berserk();", shown: false, nbrOwned: 0, merchantSpeech: "The berserk potions transforms you into a.. BERSERKEEEER !", type: "potion" },
        "fireScroll": { buttonText: "Fire scroll", buttonColor: "#dc3e00", action: "potions.fireScroll();", shown: false, nbrOwned: 0, merchantSpeech: "This powerful fire scroll will burn your enemy if you use it during a fight.", type: "scroll" },
        "acidRainScroll": { buttonText: "Acid rain scroll", buttonColor: "#68980b", action: "potions.acidRainScroll();", shown: false, nbrOwned: 0, merchantSpeech: "This acid rain scroll will instantly damage everyone in the whole land (including yourself).", type: "scroll" },
        "teleportScroll": { buttonText: "Teleport scroll", buttonColor: "#7ca0b5", action: "potions.teleportScroll();", shown: false, nbrOwned: 0, merchantSpeech: "This teleport scroll will make you go back to the beginning of a quest. Useful to rest a little bit !", type: "scroll" },
        "earthquakeScroll": { buttonText: "Earthquake scroll", buttonColor: "#470b0b", action: "potions.earthquakeScroll();", shown: false, nbrOwned: 0, merchantSpeech: "This earthquake scroll will inflict a lot of damage to everyone in the whole land.", type: "scroll" },
        "impInvocationScroll": { buttonText: "Imp invocation scroll", buttonColor: "#ff6600", action: "potions.impInvocationScroll();", shown: false, nbrOwned: 0, merchantSpeech: "This imp invocation scroll will, if there's enough place, invoke in front of you an imp which will fight for you.", type: "scroll" },
        "majorHealth": { buttonText: "Major health potion", buttonColor: "#ff0000", action: "potions.heal(100);", shown: false, nbrOwned: 0, merchantSpeech: "This major health potion is twice more efficient than the minor one.", type: "potion" },
        "invulnerability": { buttonText: "Invulnerability potion", buttonColor: "#ef893b", action: "potions.invulnerability();", shown: false, nbrOwned: 0, merchantSpeech: "This invulnerability potion will make you invincible for some time, but it fills your stomach : you won't be able to drink another potion for a long time after using it.", type: "potion" },
        "turtle": { buttonText: "Turtle potion", buttonColor: "#008a13", action: "potions.turtle();", shown: false, nbrOwned: 0, merchantSpeech: "When you drink a turtle potion, you become a turtle. Drawback : you walk slower. Benefit : you're way more resistant to your ennemies' attacks.", type: "potion" },
        "jelly": { buttonText: "Jelly", buttonColor: "#9500b5", action: "potions.jelly();", shown: false, nbrOwned: 0, merchantSpeech: "This skillfully prepared jelly explodes on contact of anything trying to go through it, dealing high damage. Using it will place it behind you.", type: "special" },
        "seed": { buttonText: "Seed", buttonColor: "#3dab3a", action: "potions.seed();", shown: false, nbrOwned: 0, merchantSpeech: "This seed is able to make grow a candy tree. The candy tree is made of candies, and it takes a lot of time to cut it down. Using the seed will grow a tree in front of you, if there's enough place.", type: "special" },
        "cloning": { buttonText: "Cloning potion", buttonColor: "#6d6d6d", action: "potions.cloning();", shown: false, nbrOwned: 0, merchantSpeech: "This cloning potion will, well... clone you. Your clone will have the same health points as you when you drank the potion, but he won't have your armor nor your sword. He will fight using a \"cloned sword\", which deals a correct amount of damage. The clone will be placed in front of you, if there's enough place.", type: "potion" },
        "superman": { buttonText: "Superman potion", buttonColor: "#ddef17", action: "potions.superman();", shown: false, nbrOwned: 0, merchantSpeech: "This superman potion will give you a cape and make you look like superman for the rest of the quest !", type: "potion" },
        "gmooh": { buttonText: "G.M.O.O.H. potion", buttonColor: "#ff00c0", action: "potions.gmooh();", shown: false, nbrOwned: 0, merchantSpeech: "This \"Get Me Out Of Here\" potion will teleport you somewhere else. The destination isn't predictable at all.", type: "potion" }
    },
    potion_buttons: [
        "seed",
        "jelly",
        "\n",
        "health",
        "escape",
        "berserk",
        "\n",
        "majorHealth",
        "turtle",
        "invulnerability",
        "superman",
        "cloning",
        "gmooh",
        "\n",
        "fireScroll",
        "acidRainScroll",
        "teleportScroll",
        "impInvocationScroll",
        "earthquakeScroll"
    ],
    chuckNorrisFacts: [
        "Chuck Norris counted to infinity. Twice.",
        "Chuck Norris' tears cure cancer. Too bad he has never cried.",
        "Chuck Norris does not sleep. He waits.",
        "Chuck Norris can squeeze orange juice out of a lemon.",
        "Superman owns a pair of Chuck Norris pajamas.",
        "Chuck Norris can kill two stones with one bird.",
        "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
        "Chuck Norris doesn't have hair on his testicles, because hair does not grow on steel.",
        "Chuck Norris can build a snowman out of rain.",
        "Chuck Norris once punched a man in the soul.",
        "Chuck Norris can drown a fish.",
        "Leaving a criminal in the same room as Chuck Norris is cruel and unusual punishment.",
        "Chuck Norris can pick oranges from an apple tree and make the best lemonade youve ever tasted.",
        "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.",
        "Chuck Norris doesn't play \"hide-and-seek.\" He plays \"hide-and-pray-I-don't-find-you.\"",
        "Chuck Norris beat the sun in a staring contest.",
        "Chuck Norris makes onions cry.",
        "Chuck Norris can divide by zero.",
        "Chuck Norris hears every tree that falls in the woods."
    ],
    lands: {
        peacefulForest: {
            level: ["__________________________________________________________________________________________"],
            path: [[0,0],[3,0],[6,0],[9,0],[12,0],[15,0],[18,0],[21,0],[24,0],[27,0],[30,0],[33,0],[36,0],[39,0],[42,0],[45,0],[48,0],[51,0],[54,0],[57,0],[60,0],[63,0],[66,0],[69,0],[72,0],[75,0],[78,0],[81,0],[84,0],[87,0]],
            spawning_intervals: [
                // oneOutOf prob, start, end, type
                { inv_prob: 600, prob_add: -601, after: 1, before: 30, type: "woodPony" },
                { inv_prob: 100, prob_add: 100, after: 1, before: 30, type: "basicChest" },
                { inv_prob: 2, prob_add: 0, after: 1, before: 30, type: "tree" },
            ]
        },
        mountGoblin: {
            level: [
                "                                    ____________                                    ",
                "                           _________/ \\/ \\/ \\/ \\_________                           ",
                "                  _________/ \\/ \\/ \\  /   \\  \\  / \\/ \\/ \\_________                 ",
                "         _________/ \\/ \\/ \\   \\ /   \\/     \\  \\/  /   \\  / \\/ \\/ \\_________         ",
                "_________/ \\/ \\/ \\  /  /   \\   /    /       \\ /  /     \\/  /   \\  / \\/ \\/ \\_________"
            ],
            path: [[0,4],[3,4],[6,4],[9,3],[12,3],[15,3],[18,2],[21,2],[24,2],[27,1],[30,1],[33,1],[36,0],[39,0],[42,0],[45,0],[48,1],[51,1],[54,1],[57,2],[60,2],[63,2],[66,3],[69,3],[72,3],[75,4],[78,4],[81,4],[84,4],[87,4]],
            spawning_intervals: [
                // oneOutOf prob, start, end, type
                { inv_prob: 100, prob_add: 100, before: 11, after: 15, type: "basicChest" },
                { inv_prob: 14,  prob_add: 0,   before: 11, after: 15, type: "nastyGoblin" },
                { inv_prob: 2,   prob_add: 0,   before: 11, after: 15, type: "sickGoblin" },
                { inv_prob: 2,   prob_add: 0,   before: 15, after: 11, type: "tenaciousGoblin" }
            ]
        },
        underwaterCave: {
            level: [
                "            / . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
                "___________| . . . . . . . . . . . . . . . . . . . . . . _______ . . .",
                ". . .|     |. . . . . . . . . . . . . . . . . . . ._____/       \\ . . .",
                " . . |     | . . . ________. . . . . . . . . . . ./              \\ . .",
                ". . .|      \\_____/        \\_______ . . . . . . ./                \\ . .",
                " . . \\                             \\____________/                  \\ .",
                ". . . \\                                                  __         | .",
                " . . . \\                                              __/. |        |.",
                ". . . . \\                                    ________/. . .|        | .",
                " . . . . \\                              ____/. . . . . . ./        / .",
                ". . . . . \\___                       __/. . . . . . . . ./        / . .",
                " . . . . . . .\\               ______/. . . . . . . . . ./        / . .",
                ". . . . . . . .\\_____________/. . . . . ____. . . . . ./        / . . .",
                " . .__________ . . . . . . . . . . . __/    \\_________/         \\. . .",
                ". ./          \\ . . . . . . . ______/                            \\. . .",
                " ./            \\_____________/                                    |. .",
                ".|                                                                | . .",
                " |                                                               / . .",
                ".|                                                              / . . .",
                " |                           __________           _____________/ . . .",
                ". \\_____            ________/ . . . . .\\_________/. . . . . . . . . . .",
                " . . . .\\__________/ . . . . . . . . . . . . . . . . . . . . . . . . .",
                ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
            ],
            path: [[0,1],[3,1],[6,1],[7,2],[7,3],[7,4],[9,5],[11,6],[13,7],[14,8],[15,9],[18,10],[21,10],[24,9],[27,8],[30,7],[33,7],[36,8],[39,8],[42,7],[45,7],[48,7],[51,6],[54,5],[57,4],[60,5],[62,6],[62,7],[62,8],[61,9],[60,10],[59,11],[58,12],[58,13],[58,14],[58,15],[55,16],[52,17],[51,18],[48,18],[45,19],[42,19],[39,18],[36,17],[33,16],[30,17],[27,17],[25,18],[22,18],[19,18],[16,18],[13,18],[10,18],[7,18]],
            bubblesStartingPositions: [[10,9],[13,9],[18,11],[20,11],[22,11],[24,11],[26,11],[30,10],[32,10],[34,10],[38,9],[41,8],[43,8],[54,7],[56,7],[57,5],[59,5],[63,18],[61,18],[59,18],[57,18],[55,18],[53,18],[51,18],[49,19],[47,19],[45,19],[43,19],[41,19],[38,18],[36,18],[34,18],[32,18],[30,18],[27,19],[25,19],[23,19],[21,19],[18,20],[16,20],[14,20],[12,20],[10,20],[7,19],[5,19],[3,19]]
        },
        castleEntrance: {
            height: [[0,20], [26,19], [27, 18]],
            mask: [28, 29, 30]
        },
        castleStairs: {
            height: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]
        }
    },
    garden_gnome_spawn: [
        // 1/probability, position
        [1, 27],
        [1, 28],
        [2, 29],
        [1, 30],
        [1, 31],
        [2, 32],
        [1, 34],
        [1, 35],
        [1, 36],
        [1, 37],
        [1, 38],
        [2, 39]
    ],
    recipes: [
        [{ type: "mix", n_lollipops: null, n_candies: 100, duration: [11, 19] }]
    ],
    shop_selling_order: [
        "wooden sword",
        "copper sword",
        "iron sword",
        "silver sword",
        "diamond sword",
        "products_after_swords"
    ],
    sword_summons: [
        "imp",
        "orc",
        "draugr",
        "chupacabra",
        "golem",
        "chimera",
        "candyMonster"
    ],
    mobs: {
        chuckNorris: {type: "mob", text: "CHN", max_hp: 1000, hp: 1000, weapon: "Chuck Norris", description: "Chuck Norris. You just can't beat him.", drops: {}},
        necromancer: {type: "mob", text: "NEC", max_hp: 150, hp: 150, weapon: "magic staff", description: "A necromancer. She summons ghosts and dead stuff.", drops: {"candiesConverter": 1, "cauldron": 1}},
        ghost: {type: "mob", text: "GHO", max_hp: 5, hp: 5, weapon: "spectral magic", description: "A Ghost. It halves the life of human beings.", drops: {}},
        pileOfCorpses: {type: "mob", text: "POC", max_hp: [140, 220, 20], hp: [140, 220, 20], weapon: "none", description: "A pile of corpses. It doesn't hurt you, but damn, it's hard to remove !", drops: {}},
        guard: {type: "mob", text: "GUA", max_hp: 25, hp: 25, weapon: "spear", description: "One of the castle's guards.", drops: {"candies": [0, 40]}},
        knight: {type: "mob", text: "KNI", max_hp: 70, hp: 70, weapon: "sharp sword", description: "A knight with a huge armor.", drops: {"candies": [230, 70+230], "plateArmour": 10}},
        cheatedGardenGnome: {type: "mob", text: "CGG", max_hp: 70, hp: 70, weapon: "ultra plasma gun", description: "A cheated garden gnome. Since when garden gnomes have guns like that ?", drops: {}},
        spikyDoor: {type: "mob", text: "|-|", max_hp: 300, hp: 300, weapon: "spikes", description: "A strong door. Hard to break. There are spikes on it, it hurts !", drops: {}},
        door: {type: "mob", text: "|-|", max_hp: 300, hp: 300, weapon: "none", description: "A strong door. Hard to break.", drops: {}},
        banshee: {type: "mob", text: "BSH", max_hp: 160, hp: 160, weapon: "?", description: "A banshee, omen of death.", drops: {}},
        demon: {type: "mob", text: "DEM", max_hp: 90, hp: 90, weapon: "demon claws", description: "A demon.", drops: {}},
        devil: {type: "mob", text: "DEV", max_hp: 250, hp: 250, weapon: "religion", description: "It's the devil itself !", drops: {"candies": 100000}},
        teleportingGate: {type: "mob", text: " * ", max_hp: 120, hp: 120, weapon: "none", description: "A teleporting gate, made by the devil itself.", drops: {}},
        bug: {type: "mob", text: "BUG", max_hp: [300, 10000300, 1], hp: 300, weapon: ["itself", "religion", "flames", "sharp teeth", "cursed sword", "claws", "dagger", "fins", "hooves", "magic staff", "horn", "silver sword", "chocolate sword", "demon claws"], description: "A bug !", drops: {"candies": 100000000}},
        dev: {type: "mob", text: "DEV", max_hp: 100000000000000, hp: 100000000000000, weapon: "bugs", description: "The developper (hey, he made this game !)", drops: {"candies": 1000000}},
        komodoDragon: {type: "mob", text: "KOM", max_hp: 5, hp: 5, weapon: "foots and tail", description: "A Komodo dragon. Did you heard about island gigantism ?", drops: {}},
        rhinoceros: {type: "mob", text: "RHI", max_hp: 160, hp: 160, weapon: "horn", description: ["white", "black", "indian", "javan", "sumatran"].map((str) => `A ${str} rhinoceros. Watch out for his horn !`), drops: {}},
        gaur: {type: "mob", text: "GAU", max_hp: 80, hp: 80, weapon: "horns", description: "A Gaur. This large bovine looks like a bison.", drops: {}},
        dromornisStirtoni: {type: "mob", text: "DST", max_hp: 70, hp: 70, weapon: "giant beak", description: "A Dromornis Stirtoni ! A 400kg flightless bird !", drops: {}},
        gorilla: {type: "mob", text: "GOR", max_hp: 50, hp: 50, weapon: "its fists", description: "A Gorilla. Gorillas occasionally engage in homosexual interactions.", drops: {}},
        capybara: {type: "mob", text: "CPY", max_hp: 20, hp: 20, weapon: "its teeth", description: "A capybara : the largest rodent in the world !", drops: {}},
        doedicurus: {type: "mob", text: "DOE", max_hp: 120, hp: 120, weapon: "spiky tail", description: "A Doedicurus : your favorite glyptodont !", drops: {}},
        stoneWall: {type: "mob", text: "WAL", max_hp: 300, hp: 300, weapon: "stone", description: "A stone wall.", drops: {}},
        walledOffZombieWarrior: {type: "mob", text: "WZW", max_hp: [150, 250, 10], hp: [150, 250, 10], weapon: "cursed sword", description: "A walled off zombie warrior. He probably did something bad to end up here.", drops: {"candies": [0, 4000, 4000], "oldAmulet": 1}},
        fireball: {type: "mob", text: "FBL", max_hp: 1, hp: 1, weapon: "itself", description: "A fireball !! Watch out !", drops: {}},
        fakeDoorMonster: {type: "mob", text: "| |", max_hp: 70, hp: 70, weapon: "sharp teeth", description: "It's not a door ! It's a monster ! (an ugly one)", drops: {}},
        unicorn: {type: "mob", text: "UNI", max_hp: 100, hp: 100, weapon: "magical horn", description: "A unicorn !! They exist !", drops: {}},
        charlieTheUnicorn: {type: "mob", text: "UNI", max_hp: 100, hp: 100, weapon: "magical horn", description: "A unicorn !! It has no kidney.", drops: {"magicalHorn": 1}},
        troll: {type: "mob", text: "TRL", max_hp: 250, hp: 250, weapon: "enormous fist", description: "A troll. It is huge, but it lacks precision.", drops: {}},
        dragon: {type: "mob", text: ",((", max_hp: 1000, hp: 1000, weapon: "flames", description: "A dragon !! Kill him and the castle will be yours.", drops: {}},
        tree: {type: "mob", text: "|||", max_hp: 5, hp: 5, weapon: "none", description: "A tree. It sometimes drops a candy.", drops: {"candies": [0, 2], "key": 2}},
        yourself: {type: "mob", text: "\\o/", max_hp: null, hp: null, weapon: "", description: "You", drops: {}},
        cow: {type: "mob", text: "COW", max_hp: 12, hp: 12, weapon: "horns", description: "A cow ! Mooooo !", drops: {"candies": 100}},
        cowKing: {type: "mob", text: "COW", max_hp: 180, hp: 180, weapon: "horns", description: "The cow king ! It looks like a normal cow, but it isn't...", drops: {"candies": 1000, "hornOfPlenty": 1}},
        basicChest: {type: "mob", text: "CHS", max_hp: 80, hp: 80, weapon: "none", description: "A chest !! Very rare.", drops: {"candies": [300, 500+300], "key": 1, "boots": 3, "swampMap": 3, "hutMap": 3}},
        openChest: {type: "mob", text: "CHS", max_hp: 1, hp: 1, weapon: "none", description: "An open chest, full of candies !", drops: {"candies": [6000, 2000+6000]}},
        eel: {type: "mob", text: "EEL", max_hp: 3, hp: 3, weapon: "electric tail", description: "An eel. Weak, but aggressive.", drops: {"candies": [50, 50+50]}},
        fish: {type: "mob", text: "F~H", max_hp: [9, 12, 1], hp: [9, 12, 1], weapon: "fins", description: "A fish. Easy to beat.", drops: {"candies": 5}},
        octopus: {type: "mob", text: "OCT", max_hp: 45, hp: 45, weapon: "tentacles", description: "An octopus guardian. It looks dangerous.", drops: {}},
        theWhale: {type: "mob", text: "The Whale.", max_hp: 100, hp: 100, weapon: "giant tail", description: "The Whale does not like to be disturbed.", drops: {"candies": [400, 400+400], "key": 1, "hutMap": 1, "swampMap": 1, "boots": 1, "wellMap": 1, "magicianHat": 1, "pinkRing": 1, "forgeMap": 1}},
        woodPony: {type: "mob", text: "WPY", max_hp: 12, hp: 12, weapon: "hooves", description: "A wood poney ! It's a poney ! It the woods !", drops: {"candies": 42}},
        sickGoblin: {type: "mob", text: "GSB", max_hp: 20, hp: [5, 10, 1], weapon: "claws", description: "A sick goblin. It smells.", drops: {"candies": [3, 3+3]}},
        nastyGoblin: {type: "mob", text: "GOB", max_hp: 20, hp: 20, weapon: "claws", description: "A nasty goblin.", drops: {"candies": [3, 3+3]}},
        tenaciousGoblin: {type: "mob", text: "GTB", max_hp: 30, hp: 30, weapon: "dagger", description: "A tenacious goblin. Oh, he has a dagger, too.", drops: {"candies": [9, 9+9], "key": 2, "boots": 5, "swampMap": 5, "hutMap": 5}},

        // Ally
        candyMonster: {type: "ally", text: "CND", max_hp: null, hp: null, weapon: "exploding candies", description: "A candy monster. He throws candies on his ennemies.", drops: {}},
        imp: {type: "ally", text: "IMP", max_hp: [15, 25, 1], hp: [15, 25, 1], weapon: "its whole body", description: "An imp.", drops: {}},
        orc: {type: "ally", text: "ORC", max_hp: 30, hp: 30, weapon: "bludgeon", description: "An orc. It looks stupid.", drops: {}},
        draugr: {type: "ally", text: "DRG", max_hp: 35, hp: 35, weapon: "various bones", description: "A draugr. It seems to be dead, but it's still moving..", drops: {}},
        chupacabra: {type: "ally", text: "CBA", max_hp: 30, hp: 30, weapon: "fangs", description: "A chupacabra. A real goat sucker !", drops: {}},
        golem: {type: "ally", text: "GOL", max_hp: 100, hp: 100, weapon: "rock", description: "A golem. Solid, solid golem.", drops: {}},
        chimera: {type: "ally", text: "CHI", max_hp: [50, 57, 1], hp: [50, 57, 1], weapon: "fire", description: "A chimera : lion, serpent and goat at the same time.", drops: {}},
        clone: {type: "ally", text: "\\o/", max_hp: null, hp: null, weapon: "cloned sword", description: "A clone of you.", drops: {}},

        // trap
        jelly: {type: "trap", text: "JEL", max_hp: 1, hp: 1, weapon: "powerful explosion", description: "A jelly !! Go away !", drops: {}},
        yggdrasil: {type: "trap", text: "/Y\\", max_hp: 10000, hp: 10000, weapon: "none", description: "Yggdrasill is its name, a tall tree, showered with shining loam.", drops: {"candies": 10000}},
        treeTrap: {type: "trap", text: "\\|/", max_hp: [500, 900, 100], hp: [500, 900, 100], weapon: "none", description: "A candy tree. I hope you're carrying a good axe.", drops: {}},

        // Fake
        fake: {type:"fake", text: "\\o/", max_hp: 0, hp: 0, weapon: "none", description: "", drops: {}}
    },
    text: {
        forge: {
            buttons: {
                "sharpen": {text: "Sharpen your sword using the anvil"},
                "enchantHealth": {text: "Enchant using a health potion", id: "enchant_health"},
                "enchantFire": {text: "Enchant using a fire scroll", id: "enchant_fire"},
                "enchantImpInvocation": {text: "Enchant using an imp invocation scroll", id: "enchant_imp_invocation"}
            },
            enchant: {
                "init": "You could enchant your sword using this anvil, but be careful : you can only enchant a sword once !",
                "Sword of Flames": "You now have the Sword of Flames ! Your sword is covered by a permanent blaze, damaging your enemies more than ever.",
                "Sword of Life": "You now have the Sword of Life ! This powerful charm will drain the life of your enemies to regain yours.",
                "Sword of Summoning": "You now have the Sword of Summoning ! Your sword will sometimes spawn ally creatures in place of your dead enemies."
            }
        },
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
        },
        swamp: {
            default_button: '\n\n<input id="answer" type="text" onchange="swamp.answer()" /> <span id="swamp_comment"></span>',
            leave_button: '\n\n<button onClick="swamp.leave();">Leave the Swampy Swamp</button>',
            questions: [
                {
                    text: "Hello. I\'m The Frog. I can provide you candies, and lots of things. I know how much you love candies. But I feel alone in this swamp. I\'d like to play with you before. If you answer my questions correctly, the sweetest sweets will be yours.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(5);">Let\'s go, then</button>',
                },
                {
                    text: "First question : do you _really_ love candies?",
                    answers: ["yes"],
                    reward: ["candies", 10]
                },
                {
                    text: "Perfect. Here\'s 10 candies. Many more candies are waiting for you.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(7);">Second question!</button>'
                },
                {
                    text: "Second question : if A implies B and B implies C, and D implies A, and E implies D, what does A imply?",
                    answers: ["c", "b", "candb", "bandc"],
                    reward: ["candies", 100]
                },
                {
                    text: "Great. You seem to understand basic logic. Here\'s 100 candies.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(9);">Next question!</button>'
                },
                {
                    text: "Third question. Consider 10 days. If I give you 1 candy on the first day, and each day I give you twice more candies than the previous day, how much candies will I give you on day number 10?",
                    answers: ["512"],
                    reward: ["candies", 512]
                },
                {
                    text: "Exactly. Let\'s speed up the process : here\'s your 512 candies right now! Playing with you is so exciting! Next question is for 1000 candies.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(11);">Candiiiiies!</button>'
                },
                {
                    text: "Fourth question : if you could be whatever you want, what would you be?",
                    answers: ["frog", "afrog", "thefrog"],
                    reward: ["candies", 1000]
                },
                {
                    text: "Correct! Everyone wants to be a frog. Here\'s your 1000 candies.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(13);">Any more enigma?</button>'
                },
                {
                    text: "Here\'s a story : there\'s a fox, a lion and a wolf inside a lunar crater. The fox is about to bite the lion, which is about to bite the wolf, which is about to bite the fox. It\'s snowing and a shrub is watching the scene. Who\'s enjoying the story?",
                    answers: ["me"],
                    reward: ["chocolateBars", 1]
                },
                {
                    text: "Right, you were enjoying it! At least, I hope so. Here\'s a chocolate bar for you. It\'s very precious.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(15);">Thanks, Frog!</button>'
                },
                {
                    text: "Now, just type the answer to that question and I\'ll give you a very special present : what is the only thing to go beyond the limits of our universe ?",
                    answers: ["theanswertothatquestion", "theanswer", "answer", "answertothatquestion"],
                    reward: ["beserk", 5]
                },
                {
                    text: "Yes it is ! Now, here\'s 5 very special potions. They\'ll be very useful during quests.",
                    button: '\n\n<button id="answer" onClick="swamp.setStep(17);">Yay !!</button>'
                }
            ],
            no_more_questions: "I have no more sweets to give you. It was a real pleasure to play with you. Thanks a lot.",
        }
    },
    ascii: {
        lava: [
            "_.-'-.",
            "._.-'-",
            "-._.-'",
            "'-._.-",
            "-'-._.",
            ".-'-._"
        ],
        frog: "\
           .--._.--.\n\
      The ( O     O ) Frog\n\
          /   . .   \\\n\
         .`._______.'.\n\
        /(           )\\\n\
      _/  \\  \\   /  /  \\_\n\
   .~   `  \\  \\ /  /  '   ~.\n\
  {    -.   \\  V  /   .-    }\n\
_ _`.    \\  |  |  |  /    .'_ _\n\
>_       _} |  |  | {_       _<\n\
 /. - ~ ,_-'  .^.  `-_, ~ - .\\\n\
          '-'|/   \\|`-`\n\n\
",
        swamp_steps : [
            "\
While you walk through the swamp,\n\
following your map...\
",
            "\
On the horizon, you see a\n\
              00        frog\n\
             (--)         coming...\n\
            ( || )\n\
            ^^~~^^\
",
            "\
It is coming_    _\n\
  slowly   (o)--(o)\n\
   but    /.______.\\\n\
  surely, \\________/\n\
         ./        \\.\n\
        ( .        , )\n\
         \\ \\_\\\\//_/ /\n\
          ~~  ~~  ~~\
",
            "\
           .-.   .-.\n\
          ( o )_( o )\n\
      __ / '-'   '-' \\ __ it is\n\
     /  /      \"      \\  \\    green.\n\
    |   \\    _____,   /   |\n\
     \\  \\`-._______.-'/  /\n\
 _.-`   /\\)         (/\\   `-._\n\
(_     / /  /.___.\\  \\ \\     _)\n\
 (_.(_/ /  (_     _)  \\ \\_)._)\n\
       (_(_)_)   (_(_)_)\
"
        ],
        peacefulForest: [

        ],
        cowLevel: [
            '                                   "The cow level"                                        ',
            "                                                                                          ",
            "                                                                                          ",
            "                  ______________________________________________________                  ",
            "                                                                                          ",
            "         ________________________________________________________________________         ",
            "                                                                                          ",
            "__________________________________________________________________________________________"
        ],
        castleStairs: [
            "                                                      ___\n",
            "                                                   ___|  \n",
            "                                                ___|     \n",
            "                                             ___|        \n",
            "                                          ___|           \n",
            "                                       ___|              \n",
            "                                    ___|                 \n",
            "                                 ___|                    \n",
            "                              ___|                       \n",
            "                           ___|                          \n",
            "                        ___|                             \n",
            "                     ___|                                \n",
            "                  ___|                                   \n",
            "               ___|                                      \n",
            "            ___|                                         \n",
            "         ___|                                            \n",
            "      ___|                                               \n",
            "   ___|                                                  \n",
            "___|                                                     \n"
        ],
        hut: "\
/\\)\\))/\\(/|)\\))/((||\\/)\\)\\\n\
(/((\\///)))/(\\\\(/)\\\\\\\\\\)\\)\n\
.__/(|_/|        |\\_|)/__.\n\
   | |_/|        |\\_| |\n\
   | |_/|        |\\_| |\n\
.__| |_/|        |\\_| |__.\n\
     |_/|        |\\_|\n\
     |_/|        |\\_|\n\
._   |_/|________|\\_|   _.\n\
  '-.|_/          \\_|.-'\
",
        hutWithSocerer: "\
/\\)\\))/\\(/|)\\))/((||\\/)\\)\\\n\
(/((\\///)))/(\\\\(/)\\\\\\\\\\)\\)\n\
.__/(|_/|  _|\\_  |\\_|)/__.\n\
   | |_/|   (\"}  |\\_| |\n\
   | |_/|i_.-@-._|\\_| |\n\
.__| |_/|8--,  .-|\\_| |__.\n\
     |_/|I  /==\\ |\\_|\n\
     |_/|I  |   \\|\\_|\n\
._   |_/|I__/___\\|\\_|   _.\n\
  '-.|_/          \\_|.-'\n\n\
",
        whale: [
            "/     ::.    \\",
            "(\\./)  .-\"\"-. ",
            " `\\'-'`      \\",
            "   '.___,_`__/"
        ],
        boat: [
            "     _     ",
            "    /|\\    ",
            "   /_|_\\   ",
            " ____|\\o/_",
            " \\_______/"
        ],
        castleEntrace: [
            "                                                                                     __\n",
            "                                                                                    <*/\n",
            "                                                                                     (}\n",
            "                                                                                     |\\\n",
            "                                                                                     ||| || || || |\n",
            "                                                                                     |`\' `\' `\' `\'.|\n",
            "                                                                                     :          .:;\n",
            "                                                                                      \\-..____..:/  _  _\n",
            "                                                                                       :--------:_,\' || |\n",
            "                                                                                       |]     .:|    `\' `\n",
            "                                                                                       |  ,-. .[| _\n",
            "                                                                                       |  | | .:|\'--\' _\n",
            "                                                                                       |  |_| .:|   \'--\'\n",
            "                                                                                       |  \'=\' .:|\n",
            "                                                                                       | __   .:|\n",
            "                                                                                       |\'--\'  .:|   _\n",
            "                                                                                       |      .:|  \'-\'\n",
            "                                                                                       |      \'-|       _\n",
            "                                                                                 ______|  _   .:|   _ \'--\'\n",
            "                                                                              ___||||||| \'-\'  .:|  \'-\'\n",
            "                                                                           ___|||||||||;._____.::-------\n",
            "\' \"  \'\' \" \"\' \"\'  \'  \" \' \"\' \'\" \' \'\" \"\' \' \'\" \" \' \' \'\"  \' \' \'\" \'  \'\" \'\" \'\' \' \'\" \" \' \'\" \' \' \" \'\" \" \" \' \'\" \"\' \n",
            "     \"\'  \'      \" \' \"  \' \"       \'     \"   \'  \'  \"    \'  \'  \"    \'  \"    \' \' \"   \" \"    \' \'  \"  \"\'  \'\n",
            "        \'\"     \'    \"   \' \"      \'    \"     \'      \"   \'       \"     \"        \'   \"     \'    \"   \'  \n",
            "             \'         \"        \'         \'        \"      \"        \'     \'       \'    \"   \"\n"
        ],
        sea: [
            "                                 'The sea'                                       ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            "                                                                                 ",
            " ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~ ",
            "   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  "
        ],
        computer: [
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n"
        ],
        door: [
            " _ ",
            "|.|",
            "| |"
        ],
        platform: [
            "______",
            "\\|__|/"
        ],
        moat: [
            "                                                                  \n",
            "                                                                  \n",
            "                                                                  \n",
            "__________________                                    ____________\n",
            "                  \\,                               ._/ /\n",
            "                    \\,                            /  \\ \\\n",
            "                     )_,                         (__   _\\\n",
            "                    /  _\\                        /   ./ /\n",
            "                    \\,   |                      |   /  /\n",
            "                    /  _/ \\                     /  (\n",
            "                         _,|                   /_\n",
            "                           \\                  |"
        ],
        desert: [
            "                              \"The desert\"                               \n",
            "                                                                           \n",
            "                                                                           \n",
            "       _                             _                                     \n",
            "      / \\              _            / \\                          _         \n",
            "    , | | ,           / \\         , | | ,                       / \\        \n",
            "   ((_| |_))        , | | ,      ((_| |_))                    , | | ,      \n",
            "   `--, ,--`       ((_| |_))     `--, ,--`                   ((_| |_))     \n",
            "      | |          `--, ,--`        | |                  _   `--, ,--`     \n",
            "      | |             | |           | |  _              / \\     | |        \n",
            "     `\"\"\"`            | |          `\"\"\"`/ \\           , | | ,   | |        \n",
            "                     `\"\"\"`            , | | ,        ((_| |_)) `\"\"\"`       \n",
            "                                     ((_| |_))       `--, ,--`             \n",
            "                                     `--, ,--`          | |                \n",
            "                                        | |             | |                \n",
            "                                        | |            `\"\"\"`               \n",
            "                                       `\"\"\"`                               \n"
        ],
        garden: [
            "                                                                               ,                                               \n",
            "                                                                    /\\^/`\\                                              \n",
            "                                                                   | \\/   |                                             \n",
            "                                                                   | |    |                                             \n",
            "                                              _ _                  \\ \\    /                                             \n",
            "                                            _{ ' }_                 '\\\\//'                                              \n",
            "      _                                    { `.!.` }                  ||                                                \n",
            "    _(_)_            wWWWw                 ',_/Y\\_,'                  ||                                                \n",
            "   (_)@(_)           (___)                   {_,_}                    ||                                                \n",
            "     (_)\\              Y                       |         vVVVv    |\\  ||  |\\                                           \n",
            "         |/           \\|/                    (\\|         (___)    | | ||  | |                                           \n",
            "        \\|             |/                     \\| /)        Y      | | || / /                                            \n",
            "         |            \\|                       |//       (\\|/)     \\ \\||/ /                                             \n",
            "      \\\\\\|//         \\\\|//                     |/         \\|/       `\\\\//`                                              \n",
            "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
        ],

        anvil: "\
    .-------..___\n\
    \'-._     :_.-\'\n\
     .- ) _ ( --.\n\
    :  \'-\' \'-\'  ;.\n\
   /\'-.._____.-\' |\n\
   |   |     \\   |\n\
   \\   |     /   \\\n\
   |   \\     )_.-\'\n\
   \'-._/__..-\'\n\n",
        noObject : "            \n            \n            ",
        inventory: {
            key : " __\n\
/o \\_____\n\
\\__/-=\"=\"`",

            boots : "  ____\n\
  \\  _|__\n\
 __)|   /\n\
(___|  (__\n\
    (_-___)",

            magicianHat : "    / \\\n\
   /   \\\n\
  /     \\\n\
 /_______\\",

            pinkRing : "   .--.\n\
  //  \\\\\n\
  \\\\__//\n\
   \'--\'",

            swampMap : " _________\n\
|         |\n\
| SWAMP   |\n\
|    ---> |\n\
|.-._.-._.|",

            hutMap : " _________\n\
|  __     |\n\
| /lp\\ -> |\n\
| |__|    |\n\
|._.-._.__|",

            forgeMap : " _________\n\
/  anvil  \\\n\
|   this  |\n\
| <-- way |\n\
\\_________/",

            wellMap : " .-~-~-~-.\n\
!  ~    ~ !\n\
!~    ~   !\n\
! ~  ~  ~ !\n\
 \'-~-~-~-\'",

            candiesConverter : "   ______\n\
  /+|  |+\\\n\
 |=={==}==|\n\
  \\_|__|_/",

            plateArmour : "-;`\\..../`;-\n\
 |...::...|\n\
 /\'\'\'::\'\'\'\\\n\
/\\   ::   /\\\n\
  >._::_.<",

            cauldron : "  ________\n\
 (________)\n\
  )      (\n\
 /        \\\n\
|          |\n\
\\__________/",

            magicalHorn : "  \\.\n\
   \\\'.\n\
    \\ \'.\n\
     \\,-\'",

            hornOfPlenty : "  .\\\n\
   \\\'.\n\
    \\ \'.\n\
     \\__)",

            oldAmulet : "   /   \\\n\
   o   o\n\
    \\_/\n\
    .^.\n\
   \'cnd\'\n\
   \'. .\'",

            won1 : "Bravo !\nYou won\nthe game :)\nYou now have\nall the\ncandies in\nthe world.",

            won2 : "(you can now\nask the dev\nfor a real\ncandy, if you\nfind him !)",
        },
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
            asciiKey: {
                "wooden sword": "wooden",
                "copper sword": "copper",
                "iron sword": "iron",
                "silver sword": "silver",
                "diamond sword": "diamond",
                "candy diamond sword": "candyDiamond",
                "polished candy diamond sword": "polishedCandyDiamond",
                "chocolate sword": "chocolate",
                "sharp chocolate sword": "sharpChocolate",
                "Sword of Flames": "ofFlames",
                "Sword of Life": "ofLife",
                "Sword of Summoning": "ofSummoning",
                "Sword of Liflamesummoning": "ofLiflamesummoning",
                "Sword of Randomness": "ofRandomness"
            },
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
