import React, { useState, useEffect } from "react";
import Book from "./Book";
import axios from "axios";

const Row = ({ title, fetchUrl }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    // get request google book api
    async function fetchData() {
      const request = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${fetchUrl}+terms`
      );
      // console.log(request.data.items);
      setBook(request.data.items);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="book">
        {book &&
          book.map((books) => (
            <>
              <Book
                id={books.id}
                img={books.volumeInfo.imageLinks.thumbnail}
                publisher={books.volumeInfo.publisher}
                book={books}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default Row;

// {/* <Book key={books.id} img={books.volumeInfo.imageLinks.thumbnail} title={title} publisher={books.volumeInfo.publisher} book={books}/> */}
