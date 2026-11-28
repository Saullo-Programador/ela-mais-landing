
import React from "react";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import "./FeatureStrip.css";

const FeatureStrip = ({
  features = [],
  title = "Funcionalidades",
  subtitle = "Tudo o que você precisa para acompanhar seu ciclo com mais cuidado.",
  id = "funcionalidades",
  className = "",
}) => {
  return (
    <section className={`feature-section ${className}`} id={id}>
      <div className="container">
        <header className="feature-section-header">
          <span className="section-kicker">FUNCIONALIDADES</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </header>
        <div className="feature-strip">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title || index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
