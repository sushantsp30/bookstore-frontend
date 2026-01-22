import { useState } from "react";
import { addBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const saveBook = async (e) => {
    e.preventDefault();
    await addBook(book);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "450px" }}>
        <h2>Add Book</h2>

        <form onSubmit={saveBook}>
          <input name="title" placeholder="Title" onChange={handleChange} required />
          <input name="author" placeholder="Author" onChange={handleChange} required />
          <input name="price" placeholder="Price" onChange={handleChange} />
          <input name="category" placeholder="Category" onChange={handleChange} />

          <button className="btn-primary" style={{ marginTop: "15px" }}>
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
