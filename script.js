class Book {
  constructor(title, author) {
      this.title = title;
      this.author = author;
  }
}

class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
  }

  removeBook(index) {
      this.books.splice(index, 1);
  }

  getBooks() {
      return this.books;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const library = new Library();
  const bookListSection = document.getElementById("book-list");
  const addBookSection = document.getElementById("add-book");
  const contactInfoSection = document.getElementById("contact-info");
  const booksUl = document.getElementById("books");
  const submitBtn = document.getElementById("submit-btn");
  const currentDateSpan = document.getElementById("current-date");

   // Set the current date and time
   const updateDate = () => {
    const now = new Date();
    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    currentDateSpan.textContent = now.toLocaleString('en-US', options);
};

  // Navigation to show different sections
  document.getElementById("list-btn").addEventListener("click", () => {
      addBookSection.style.display = "none";
      contactInfoSection.style.display = "none";
      bookListSection.style.display = "block";
      updateDate();
      renderBookList();
  });

  document.getElementById("add-btn").addEventListener("click", () => {
      bookListSection.style.display = "none";
      contactInfoSection.style.display = "none";
      addBookSection.style.display = "block";
      updateDate();
  });

  document.getElementById("contact-btn").addEventListener("click", () => {
      addBookSection.style.display = "none";
      bookListSection.style.display = "none";
      contactInfoSection.style.display = "block";
      updateDate();
  });

  // Determine the appropriate suffix for the date

  // Add book functionality
  submitBtn.addEventListener("click", () => {
      const title = document.getElementById("book-title").value;
      const author = document.getElementById("book-author").value;

      if (title && author) {
          const newBook = new Book(title, author);
          library.addBook(newBook);

          document.getElementById("book-title").value = '';
          document.getElementById("book-author").value = '';
      }
  });

  // Render the book list
  function renderBookList() {
      booksUl.innerHTML = '';
      library.getBooks().forEach((book, index) => {
          const li = document.createElement("li");
          li.textContent = `${book.title} by ${book.author} `;

          // Set background color based on index
          if (index % 2 === 0) { // Even index (0, 2, 4, ...)
              li.style.backgroundColor = "#c1c1c1";
          } else { // Odd index (1, 3, 5, ...)
              li.style.backgroundColor = "white"; // Change to blue for odd items
          }

          const removeBtn = document.createElement("button");
          removeBtn.textContent = "Remove";
          removeBtn.onclick = () => {
              library.removeBook(index);
              renderBookList();
          };
          li.appendChild(removeBtn);
          booksUl.appendChild(li);
      });
  }
});

