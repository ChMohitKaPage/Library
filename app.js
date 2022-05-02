console.log('app2.js');

class Books {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
    display(){
        let bookDetails = document.getElementById("bookDetails");
        let html = `
        
                <td>${this.name}</td>
                <td>${this.author}</td>
                <td>${this.type}</td>
              
        `
        let newDiv = document.createElement('tr');
        newDiv.innerHTML = html;
        console.log(newDiv);
        bookDetails.append(newDiv);
        
    }
    displayMsg(message){
        
        let html = 
        `
        <div class="alert alert-primary" role="alert">
            ${message}
          </div>
        `
        let newDiv = document.getElementById("msg");
        newDiv.innerHTML = html;
        setTimeout(function(){ 
            newDiv.innerHTML="";
        }, 2000);
    }
}

let addBook = document.getElementById("addBook");
addBook.addEventListener('submit',addBookFunc);
function addBookFunc(e){
    e.preventDefault();
    //console.log('Form submitted');
    
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let fiction = document.getElementById('fiction').checked;
    let programming = document.getElementById('programming').checked;
    let cooking = document.getElementById('cooking').checked;
    if(fiction){
        type = "Fiction";
    }
    else if(programming){
        type = "Programming";
    }
    else{
        type = "Cooking";
    }
    console.log(type);
   let book = new Books(name,author,type);
   if(name.length<2 || author.length<2){
       book.displayMsg("Book name and author name length should be larger than 1");
   }
   else{
        book.display();
        book.displayMsg("Addition successful");
   }
   
   console.log(book);
   document.getElementById('bookName').value = "";
   document.getElementById('authorName').value = "";

}