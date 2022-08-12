const data = require("../../data/parts.json");
const { getRandomElementInList } = require("../service/random");

const cadexModule = {
    generate(){
        return {
            name:getRandomElementInList(data.names),
            verb:getRandomElementInList(data.verbs),
            adjective:getRandomElementInList(data.adjectives),
            complement:getRandomElementInList(data.complements),
            // Je viens surcharger la méthode toString pour retourner plutôt la phrase issue du cadex
            toString(){
                return this.name + " " + this.adjective + " " + this.verb + " " + this.complement;
            }
        };
    },
    add(words){
        // j'ajoute mes mots à data
        for(const category in data){
            const value = words[category.slice(0, category.length-1)];
            if(value){
                data[category].push(value);
            }
        }

        console.log(data.names);
    }
};

module.exports = cadexModule;