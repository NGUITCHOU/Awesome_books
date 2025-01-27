class LibraryApp {
  constructor() {
    this.library = LibraryApp.loadLibrary();
    this.init();
    this.renderBookList();
  }


  init() {
    this.bookListSection = document.getElementById('book-list');
    this.addBookSection = document.getElementById('add-book');
    this.contactInfoSection = document.getElementById('contact-info');
    this.booksUl = document.getElementById('books');
    this.submitBtn = document.getElementById('submit-btn');
    this.currentTime = document.getElementById('current-time');

    // Event listeners
    document.getElementById('list-btn').addEventListener('click', () => {
      this.showSection('list');
    });
    document.getElementById('add-btn').addEventListener('click', () => {
      this.showSection('add');
    });
    document.getElementById('contact-btn').addEventListener('click', () => {
      this.showSection('contact');
    });
    this.submitBtn.addEventListener('click', () => this.addBook());

    // Initial call to update time
    this.updateTime();
  }

  static loadLibrary() {
    const libraryData = localStorage.getItem('library');
    return libraryData ? JSON.parse(libraryData) : [];
  }

  saveLibrary() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  showSection(section) {
    this.addBookSection.style.display = 'none';
    this.contactInfoSection.style.display = 'none';
    this.bookListSection.style.display = 'none';

    if (section === 'list') {
      this.bookListSection.style.display = 'block';
      this.renderBookList();
    } else if (section === 'add') {
      this.addBookSection.style.display = 'block';
    } else if (section === 'contact') {
      this.contactInfoSection.style.display = 'block';
    }

    this.updateTime();
  }

  updateTime() {
    const now = new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    this.currentTime.textContent = now.toLocaleString('en-US', options);
  }

  addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    if (title && author) {
      const newBook = { title, author };
      this.library.push(newBook);
      this.saveLibrary();
      document.getElementById('book-title').value = '';
      document.getElementById('book-author').value = '';
      this.renderBookList();
    }
  }

  renderBookList() {
    this.booksUl.innerHTML = '';
    this.library.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      li.style.backgroundColor = index % 2 === 0 ? '#c1c1c1' : 'white';

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        this.library.splice(index, 1);
        this.renderBookList();
      };
      li.appendChild(removeBtn);
      this.booksUl.appendChild(li);
    });
  }

  static initialize() {
    return new LibraryApp();
  }
}

// Initialize the app once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  LibraryApp.initialize(); // Call the static method for initialization
});


// book  collection class
// class BookCollection{
// constructor(){
//   this.book = this.loadbooks();
//   this.displayBooks();
//   this.innitializenavigation(); 
// }

// innitializenavigation(){
//   const navlink = document.querySelectorAll("nav-link");
//   navlink.forEach(link =>{
//     link.addEventListener("click", (e)=>{
//       // remove active link
//       navlink.forEach(l =>l.classList.remove("active"));
//       // add active class to the class
//       link.classList.add("active");
//       // get the section from the data
//       const sectionID = link.dataset.section
//     })
//   })
// }
//  switchsection(sectionID){
//  const sections = document.querySelectorAll("section");
//  section.forEach(section =>{
//   section.classList.remove("active");
//  });
//  document.getElementById(sectionID).classList.add("active");
//  }

// //  add book to list
// AddBook(title, author){
//   const book = {
//     title,
//    authour,
//   id:Date.now().toString()
// };
// this.book.push(push);
// this.Savebooks();
// this.displaybooks();
// }
// // remove book to list
// removebook(id){
// this.books = this.book.filter(book =>book.id !==id )  ;
// }
// // save books to local storage
// Savebooks(){
// LocalStorage.setItem("books", JSON.stringify(this.books));
// }
// // stored/save book function
// loadbooks(){
//   const storedbooks = localStorage.getItem("books");
//   returnstoredbooks?
//   JSON.parse(storedbooks):[];
// }
// // display books
// displaybooks(){
//   const bookList = document.getElementById("books-list");
//   bookList.innerHTML = ""
//   this.books.forEach(book =>{
//     const BookElement  = document.createElement("li");
//     BookElement.className = "book-item";
//     BookElement.innerHTML = `
    
//     <div>
//     <span>"${book.title}" by ${book.author}"<span/>
//     <div/>
//     <button class=btn>Remove unclick=bookcollection.removebook()<button/>
//     `;
//     bookList.appendChild(BookElement);
//   })
// }
// // innitialise book collection
// bookcollection(){
//   const bookcollection = newBookCollection();
// }
// // handle add book
// handleAddBooks() {
//   const titleinput = document.getElementById("title");
//   const Authorinput = document.getElementById("author");
//   const title = titleinput.ariaValueMax.trim()
//   if(title && authour){
//     bookcollection.AddBook(title)
//     titleinput.value = ""
//   }
  
// }
// }

// class BookCollection {
//   constructor() { 
//       this.books = this.loadBooks();
//       this.displayBooks();
//       this.initializeNavigation();
//   }

//   initializeNavigation() {
//       const navLinks = document.querySelectorAll('.nav-link');
//       navLinks.forEach(link => {
//           link.addEventListener('click', (e) => {
//               // Remove 'active' class from all links
//               navLinks.forEach(l => l.classList.remove('active'));
//               // Add 'active' class to clicked link
//               link.classList.add('active');
              
//               // Get the section id from the data-section attribute
//               const sectionId = link.dataset.section;
//               this.switchSection(sectionId);
//           });
//       });
//   }

//   switchSection(sectionId) {
//       const sections = document.querySelectorAll('.section');
//       sections.forEach(section => {
//           section.classList.remove('active');
//       });
//       document.getElementById(sectionId).classList.add('active');
//   }

//   loadBooks() {
//       const storedBooks = localStorage.getItem('books');
//       return storedBooks ? JSON.parse(storedBooks) : [];
//   }

//   saveBooks() {
//       localStorage.setItem('books', JSON.stringify(this.books));
//   }

//   addBook(title, author) {
//       const book = {
//           title,
//           author,
//           id: Date.now().toString()
//       };
//       this.books.push(book);
//       this.saveBooks();
//       this.displayBooks();
//   }

//   removeBook(id) {
//       this.books = this.books.filter(book => book.id !== id);
//       this.saveBooks();
//       this.displayBooks();
//   }

//   displayBooks() {
//       const booksList = document.getElementById('books-list');
//       booksList.innerHTML = '';

//       this.books.forEach(book => {
//           const bookElement = document.createElement('div');
//           bookElement.className = 'book-item';
//           bookElement.innerHTML = `   
//               <div>
//                   <span>"${book.title}" by ${book.author}</span>
//               </div>
//               <button class="remove-btn" onclick="bookCollection.removeBook('${book.id}')">
//                   Remove
//               </button>
//           `;
//           booksList.appendChild(bookElement);
//       });
//   }
// }

// // Initialize the book collection
// const bookCollection = new BookCollection();

// // Handle form submission
// function handleAddBook() {
//   const titleInput = document.getElementById('title');
//   const authorInput = document.getElementById('author');

//   const title = titleInput.value.trim();
//   const author = authorInput.value.trim();

//   if (title && author) {
//       bookCollection.addBook(title, author);
//       titleInput.value = '';
//       authorInput.value = '';
//   }
// }
