data = {
    recipes: [
        [{ type: "mix", n_lollipops: null, n_candies: 100, duration: [11, 19] }]
    ],
    text: {
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
