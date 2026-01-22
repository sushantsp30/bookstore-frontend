import { useEffect, useState } from "react";
import { getBookById, updateBook } from "../services/BookService";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    category: ""
  });

  // Load book data on page load
  useEffect(() => {
    getBookById(id)
      .then(res => setBook(res.data))
      .catch(err => console.error("Error loading book:", err));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const update = async (e) => {
    e.preventDefault();
    await updateBook(id, book);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "450px" }}>
        <h2>Edit Book</h2>

        <form onSubmit={update}>
          <input
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <input
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            required
          />

          <input
            name="price"
            placeholder="Price"
            value={book.price}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            value={book.category}
            onChange={handleChange}
          />

          <div style={{ marginTop: "15px" }}>
            <button className="btn-primary">Update Book</button>
            <button
              type="button"
              className="btn-secondary"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBook;
