'use strict'
class Post {
    constructor(author,text,date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(new_text){
        this.text = new_text;
    }
}

let post1 = new Post("Vasya",'none','27.05.2020');
post1.edit('There is a new text!');
console.log(post1);

class AttachedPost extends Post{
    constructor(author,text,date) {
        super(author,text,date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

let post2 = new AttachedPost('Vanya','none','27.05.2020');
post2.edit('Vanya has written here a new text!');
post2.makeTextHighlighted();
console.log(post2.text,post2.highlighted);