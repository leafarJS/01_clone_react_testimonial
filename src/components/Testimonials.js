import React from "react";
import "../css/Testimonial.css";
//TODO: components functional
/*
a) props
b) inside of function const { image, name, country, position, enterprise, testimonial } = props;
c) destruction of props and pass with argument
*/
function Testimonial({
  image,
  name,
  country,
  position,
  enterprise,
  testimonial,
}) {
  //const { image, name, country, position, enterprise, testimonial } = props;
  return (
    <div className="container-testimonial">
      <img
        className="img-testimonial"
        src={require(`../assets/img_${image}.png`)}
        alt="images testimonial one"
      />
      <div className="container-testimonial-text">
        <p className="testimonial-name">
          <strong>{name}</strong> in {country}
        </p>
        <p className="testimonial-position">
          {position} in <strong>{enterprise}</strong>
        </p>
        <p className="testimonial-text">"{testimonial}"</p>
      </div>
    </div>
  );
}
export default Testimonial;
