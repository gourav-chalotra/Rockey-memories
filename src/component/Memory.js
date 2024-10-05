import React from "react";
import "./Memory.css";

const arrayImage = [
  {
    src: "/assits/img1.jpg",
  },
  {
    src: "/assits/img2.jpg",
  },
  {
    src: "/assits/img3.jpg",
  },
  {
    src: "/assits/img4.jpg",
  },
  {
    src: "/assits/img5.jpg",
  },
  {
    src: "/assits/img6.jpg",
  },
  {
    src: "/assits/img7.jpg",
  },
  {
    src: "/assits/img8.jpg",
  },
  {
    src: "/assits/img9.jpg",
  },
];

const memories = () => {
  return (
    <>
      <div className="container">
        <div className="backhome">
          <button>Home</button>
        </div>
        <div className="videoOrImage">
          <ol>
            <li className="image">Image</li>
            <li className="video">Video</li>
          </ol>
        </div>
        <div className="gridFrame">
          <div className="ImageAndVideo">
            <div className="imageGrid">
              {arrayImage.map((index) => (
                <img
                  src={index.src}
                  className="imageRockey"
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    filter: "saturate(0%)",
                    width: "80%",
                    height: "95%",
                    cursor:"pointer"
                  }}
                />
              ))}
            </div>
            <div className="videoGrid">
              {/* {arrayImage.map((index) => (
                <img
                  src={index.src}
                  className="imageRockey"
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    filter: "saturate(0%)",
                    width: "80%",
                    height: "95%",
                    cursor:"pointer"
                  }}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memories;
