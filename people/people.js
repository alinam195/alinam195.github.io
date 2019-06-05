class Card{
    constructor(submission){
        this.submission = submission;
        this.id = submission.id;
        this.button = document.createElement("button");
        this.button.setAttribute("class", "masonrybutton");
        this.button.setAttribute("onclick", "modals[" + this.id + "].showModal()");
            this.image = document.createElement("img");
            this.image.setAttribute("class", "masonryImage");
            this.image.setAttribute("src", this.submission.images[0]);
        this.button.appendChild(this.image);
    }
}

function initWithCards(){
    init();
    createCards();

}
var cards = [];

function createCards(){
    var column = 1;
    for(var i = 0; i < modals.length; i ++){
        while(column > 4)column -= 4;
        var newCard = new Card(people[i]); 
        cards.push(newCard);
        console.log("column" + column);
        document.getElementById("column" + column).appendChild(newCard.button);
        column ++;
    }
}