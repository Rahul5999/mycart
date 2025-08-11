import React from "react";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to MyStore</h1>
      <p className="mb-4">Your one-stop shop for all your needs!</p>

      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={home2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={home3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
