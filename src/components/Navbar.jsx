import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>📘 Book Store</h2>
      <div>
        <Link to="/" style={styles.link}>Books</Link>
        <Link to="/add" style={styles.link}>Add Book</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 60px",
    background: "#020617",
    borderBottom: "1px solid #334155"
  },
  link: {
    marginLeft: "20px",
    color: "#e5e7eb"
  }
};

export default Navbar;
