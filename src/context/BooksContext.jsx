import { createContext, useState, useEffect } from "react";
import { books } from "../data/books";

const STORAGE_KEY = "reserva-biblioteca:books";

function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return books;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return books;
    return parsed;
  } catch {
    return books;
  }
}

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [bookList, setBookList] = useState(loadBooks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
  }, [bookList]);

  const availableCount = bookList.filter((book) => book.available).length;

  function toggleBook(bookId) {
    setBookList((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book,
      ),
    );
  }

  function addBook(newBook) {
    setBookList((prev) => [...prev, newBook]);
  }

  const value = { books: bookList, availableCount, toggleBook, addBook };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}
