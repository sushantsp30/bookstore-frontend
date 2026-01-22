import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const loadBooks = () => {
    getBooks().then(res => setBooks(res.data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const removeBook = (id) => {
    if (window.confirm("Delete this book?")) {
      deleteBook(id).then(loadBooks);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Book List</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No books found. Click "Add Book".
                </td>
              </tr>
            ) : (
              books.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>₹ {book.price}</td>
                  <td>{book.category}</td>
                  <td>
                    <button
                      className="btn-secondary"
                      onClick={() => navigate(`/edit/${book.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-danger"
                      style={{ marginLeft: "6px" }}
                      onClick={() => removeBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
