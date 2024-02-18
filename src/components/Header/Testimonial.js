import React from "react";
import "./Style.css";

const testimonials = [
  {
    id: 1,
    name: "Faryal Mir - Islamabad",
    testimonial: "I absolutely love the abayas and hijabs from this online shop. The quality is excellent and the designs are beautiful. Highly recommended!",
  },
  {
    id: 2,
    name: "Anaya Khan - Rawalpindi",
    testimonial: "The abayas and hijabs I purchased from this shop exceeded my expectations. The fabric is comfortable and the prices are reasonable. Will definitely shop here again!",
  },
  {
    id: 3,
    name: "Sarah - Lahore",
    testimonial: "Outstanding collection of abayas and hijabs! The variety of styles and colors is impressive. The customer service is also top-notch. I'm a satisfied customer!",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2>WHAT OUR CUSTOMER SAY</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-author">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
