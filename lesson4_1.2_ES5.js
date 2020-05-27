'use strict'
function Post(author,text,date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (new_text) {
    this.text = new_text;
}

let post1 = new Post("Vasya",'none','27.05.2020');

post1.edit('There is a new text!');
console.log(post1);

function AttachedPost(author, text, date) { //здесь не совсем понял, надо ли включать highlighted
    // потому что мы же его не пишем при вызове, он по дефолту должен быть false
    Post.call(this,author,text,date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
let post2 = new AttachedPost('Vanya','none','27.05.2020');
post2.edit('Vanya has written here a new text!');
post2.makeTextHighlighted();
console.log(post2.text,post2.highlighted);