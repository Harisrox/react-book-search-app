import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHref, useNavigate, useParams } from "react-router-dom";

const Name = () => {
  const [books, setBooks] = useState([]);
  const params = useParams();
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const getBooks = (name) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${name}&key=${apiKey}`
      )
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => getBooks(params.name), [params.name]);

  return (
    <div>
      <div className="row" style={{ margin: "50px" }}>
        {books.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          return (
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div key={book.id} className="project-card">
                <img
                  src={thumbnail}
                  alt="book cover"
                  style={{ marginTop: "20px", widht: "120px", height: "150px" }}
                />
                <div className="info">
                  <h5 style={{ color: "black", fontSize: "12px" }}>
                    {book.volumeInfo.title}
                  </h5>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    {book.volumeInfo.authors}
                  </p>
                  <button
                    className="btn btn-sm btn-success"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <a
                      href={book.volumeInfo.previewLink}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Get Book
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Name;
