var random = {
    /* TODO remove this file */
    getRandomFloat : function(){
        return Math.random();
    },
    
    pickRandomly : function(array){
        return array[Math.floor(Math.random()*array.length)];
    },
    
    getRandomIntUpTo : function(n){
        return Math.floor(Math.random()*(n+1));
    },
    
    getRandomLetter : function(){
        var possible = "abcdefghijklmnopqrstuvwxyz";

        return possible.charAt(Math.floor(this.getRandomFloat() * possible.length));
    },
    
    pure : function(){
        return Math.floor(Math.pow(10, random.getRandomIntUpTo(100)) * random.getRandomFloat());
    },
    
    pure2 : function(){
        switch(random.getRandomIntUpTo(2)){
            case 0: return Math.floor(Math.pow(10, random.getRandomIntUpTo(100)) * random.getRandomFloat()); break;
            case 1: return -Math.floor(Math.pow(10, random.getRandomIntUpTo(100)) * random.getRandomFloat()); break;
            case 2: return "bug"; break;
        }
    },
    
};
