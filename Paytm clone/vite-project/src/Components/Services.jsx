import React from "react";
import "./Services.css";

const services = ["Mobile Recharge", "Electricity Bill", "DTH Recharge", "Flight Tickets"];

const Services = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div key={index} className="service-box">{service}</div>
      ))}
    </section>
  );
};

export default Services;
