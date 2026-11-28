
import React from "react";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import "./FeatureStrip.css";

const FeatureStrip = ({
  features = [],
  id = "funcionalidades",
  className = "",
}) => {
  return (
    <section
      className={`feature-strip container ${className}`}
      id={id}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title || index}
          {...feature}
        />
      ))}
    </section>
  );
};

export default FeatureStrip;
