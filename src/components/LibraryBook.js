import React from "react";
import { Link } from "react-router-dom";
import './LibraryBook.css';
import { useStateValue } from "../StateProvider";

const LibraryBook = ({ id, img, publisher }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
    // console.log("remove")
  };
  return (
    <div className="library_item">
      <div className="library_img">
        <Link to="/reading" className="library_link">
          <img id={id} src={img} alt={publisher} />
        </Link>
        {/* <img id={id} src={img} alt={publisher} /> */}
      </div>
      <div className="library_book_btn">
        <Link
          className="row_btn"
          onClick={removeFromBasket}
        >
          Remove to Library
        </Link>
        {/* <Link>Read</Link> */}
      </div>
    </div>
  );
};

export default LibraryBook;
