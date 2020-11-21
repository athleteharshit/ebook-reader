import React from "react";
import LibraryBook from "./LibraryBook";
import './LibraryBook.css';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { useStateValue } from "../StateProvider";

const Library = () => {
  const [{ basket }] = useStateValue();
  // console.log(basket);
  // const add = basket[0];
  // console.log(add);

  return (
    <>
      {basket?.length === 0 ? (
        <div className="library">
          <h1 className="library_heading"><LocalLibraryIcon/>Your Library is empty</h1>
        </div>
      ) : (
        <div className="library">
          <h1 className="library_heading"><LocalLibraryIcon/>From Your Library</h1>
          {/*  list out all of the library book products  */}
          <div className="library_book">
            {basket.map((item) => (
              <LibraryBook
                id={item.id}
                img={item.img}
                publisher={item.publisher}
              />
            ))}
          </div>
        </div>
      )}
    </>
    // <>
    //   {add && (
    //     <div className="home">
    //       <h1>From Your Library</h1>
    //       <div className="row_api">
    //         {basket?.map((baskets) => (
    //           <>
    //             <div className="row_component">
    //               <div className="row_book">
    //                 <div className="row_books">
    //                   <div className="row_book_img">
    //                     <img id={baskets.id} src={baskets.img} alt={baskets.publisher} />
    //                   </div>
    //                   <div className="row_book_btn">
    //                     <Link
    //                       to=""
    //                       className="row_btn btn btn-outline-danger"
    //                       onClick={removeToBasket}
    //                     >
    //                       Remove to Library
    //                     </Link>
    //                     {/* <Link>Read</Link> */}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default Library;
