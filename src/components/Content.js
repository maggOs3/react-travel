import React from "react";
import point from "../images/Point.png";

export default function Content(props) {
  console.log(props);
  return (
    <section className="country--section">
      <img
        src={props.item.image}
        alt="geo image"
        className="section--map-image"
      />
      <div className="section--info">
        <div className="section--navigation">
          <img
            src={point}
            alt="map location"
            className="section--point-image"
          />
          <h3 className="section--country">{props.item.location}</h3>
          <a href={props.item.googleMap} className="section--country-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="section--title">{props.item.title}</h2>
        <p className="section--period">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="section--description">{props.item.description}</p>
      </div>
    </section>
  );
}
