class LibraryApp {
  constructor() {
    this.library = [];
    this.init();
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
