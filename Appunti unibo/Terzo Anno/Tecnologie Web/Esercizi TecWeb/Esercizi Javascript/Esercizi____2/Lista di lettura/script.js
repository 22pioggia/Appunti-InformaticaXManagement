document.addEventListener("DOMContentLoaded", function(){
  const books = document.getElementsByTagName("p");
  const bookounter = [0, 0, 0, 0, 0];
  const booklist = document.getElementById("bookList");
  const maxclick = 10;


  function addBook(key){
    bookounter[key]++;

    if(bookounter[key]>= maxclick){
        let button = document.getElementById("btn"+key);
        button.disabled= true;
        button.classList.add("disabled");
    }

    let listItem = document.getElementById("book_"+key);
    if(!listItem){
        listItem = document.createElement("li");
        listItem.id = "book_"+key;
        booklist.appendChild(listItem);
    }

    listItem.textContent = books[key].textContent+": "+bookounter[key];
    
    sortList();
  }

  function sortList(){
    var items = Array.from(booklist.children);
    
    items.sort((a,b) => a.textContent.localeCompare(b.textContent));

    items.forEach((item) => booklist.appendChild(item));
  }

  Array.from(books).forEach((_,i) => {
    var button = document.getElementById("btn"+i);
    button.addEventListener("click", () => addBook(i));
  });
});