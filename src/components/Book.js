import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import { useStateValue } from "../StateProvider";

const Book = ({ id, img, publisher, book }) => {
  const [{ basket }, dispatch] = useStateValue();

  //add to basket
  const addToBasket = () => {
    //add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        publisher: publisher,
        book: book,
      }
    });

    console.log("add to basket");
    // console.log(id);
  };
  return (
    <>
        <div className="book_item">
          <div className="book_img">
            <Link to="/reading" className="book_link">
              <img id={id} src={img} alt={publisher} />
            </Link>
            {/* <img id={id} src={img} alt={publisher}/> */}
          </div>
          <div className="book_btn">
            <Link
              className="row_btn"
              onClick={addToBasket}
            >
              Add to Library
            </Link>
          </div>
        </div>
    </>
  );
};

export default Book;
