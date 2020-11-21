import React from "react";
import { useStateValue } from "../StateProvider";
import { ReactReader } from "react-reader";

const Reading = () => {
  const [{ basket }] = useStateValue();

  
  let DEMO_URL = "/react-reader/files/alice.epub";
  let DEMO_NAME = "Alice in wonderland";

  if (basket?.length === 0) {
     DEMO_NAME = "Alice in wonderland";
  } else {
    // console.log(basket[0]?.book?.volumeInfo?.title);
    DEMO_NAME = basket[0]?.book?.volumeInfo?.title;
  }

  // console.log(basket);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* // * Container needs a height.. */}
      <ReactReader
        url={"/react-reader/files/alice.epub"}
        title={DEMO_NAME}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
};

export default Reading;
