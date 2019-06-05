class Modal{
    constructor(submission){
        this.submission = submission;
        this.id = submission.id;
        //Container definition
        this.container = document.createElement("div");
        this.container.id = "container" + this.id;
        this.container.setAttribute("class", "modalContainer");
        this.container.addEventListener("click", function(e){
            if(e.target == this){
                this.style.visibility = "hidden";
                this.style.display = "none";
            }
        });
            //Content definition
            this.content = document.createElement("div");
            this.content.id = "content" + this.id;
            this.content.setAttribute("class", "modalContent");
            this.content.setAttribute("onclick", "return false");
                this.imageContainer = document.createElement("div");
                this.imageContainer.setAttribute("class", "modalImageContainer");
                    this.image = document.createElement("img");
                    this.image.setAttribute("class", "modalImage");
                    this.image.setAttribute("src", this.submission.images[0]);
                    this.imageID = 0;
                this.imageContainer.appendChild(this.image);
            this.content.appendChild(this.imageContainer);
                this.commentContainer = document.createElement("div");
                this.commentContainer.id = "commentContainer" + this.id;
                this.commentContainer.setAttribute("class", "modalCommentContainer");
                    this.title = document.createElement("h1");
                    this.title.setAttribute("class", "modalTitle");
                    this.title.innerText = this.submission.name + ", " + this.submission.age;
                this.commentContainer.appendChild(this.title);
                    this.locationElement = document.createElement("h2");
                    this.locationElement.setAttribute("class", "modalLocation");
                    this.locationElement.innerText = this.submission.location;
                this.commentContainer.appendChild(this.locationElement);
                    this.comment = document.createElement("div");
                    this.comment.setAttribute("class", "modalComment");
                    this.comment.innerText = this.submission.comments[0];
                this.commentContainer.appendChild(this.comment);
                    this.buttons = document.createElement("div");
                    this.buttons.setAttribute("class", "modalButtons");
                        this.leftButton = document.createElement("button");
                        this.leftButton.setAttribute("class", "modalButton");
                        this.leftButton.setAttribute("onclick", "modals[" + this.id + "].leftOne()");
                        this.leftButton.innerText = "<";
                    this.buttons.appendChild(this.leftButton);
                        this.rightButton = document.createElement("button");
                        this.rightButton.setAttribute("class", "modalButton");
                        this.rightButton.setAttribute("onclick", "modals[" + this.id + "].rightOne()");
                        this.rightButton.innerText = ">";
                    this.buttons.appendChild(this.rightButton);
                this.commentContainer.appendChild(this.buttons);
            this.content.appendChild(this.commentContainer);
        this.container.appendChild(this.content);
        this.hideModal();
        this.loadModal();
    }
    leftOne(){
        this.displayID = this.displayID - 1;
    }
    rightOne(){
        this.displayID = this.displayID + 1;
    }
    loadModal(){
        if(this.loadedModal)return;
        this.loadedModal = true;   
        document.body.appendChild(this.container);
    }
    showModal(){
        this.container.style.visibility = "visible";
        this.container.style.display = "block";
    }
    hideModal(){
        this.container.style.visibility = "hidden";
        this.container.style.display = "none";
        this.displayID = 0;
    }
    set displayID(i){
        while(i < 0)i += 3;
        i = i % 3;
        this.image.setAttribute("src", this.submission.images[i]);
        this.comment.innerText = this.submission.comments[i];
        this.imageID = i;
    }
    get displayID(){
        return this.imageID;
    }
}


function loadCSS(){
    var modalStyle = document.createElement("link");
    modalStyle.setAttribute("rel", "stylesheet");
    modalStyle.setAttribute("href", "../modal/modal.css");
    document.head.appendChild(modalStyle);
}

var modals = [];

function loadPeopleModals(){
    loadPeople();
    modals = [];
    for(var i = 0; i < people.length; i ++){
        modals.push(new Modal(people[i]));
    }
}

function init(){
    loadCSS();
    loadPeople();
    loadPeopleModals();
}

var i = 0;
var j = 0;
var on = false;

function demoModals(){
    if(i > 16){
        i = 0;
        j = 0;
        on = false;
        return;
    }
    if(on){
        if(j < 2){
            modals[i].rightOne();
            j ++;
        } else {    
            modals[i].hideModal();
            i ++;
            on = false;
        }
    } else {
        modals[i].showModal();
        j = 0;
        on = true;
    }
    setTimeout(demoModals, 1000);
}