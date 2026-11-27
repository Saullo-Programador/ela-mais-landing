
import React from "react";
import "../styles/FeatureCard.css";

const FeatureCard = ({
  icon: Icon,
  title,
  text,
  className = "",
}) => {
  return (
    <article className={`feature-card ${className}`}>
      {Icon && (
        <div className="feature-icon">
          <Icon size={27} />
        </div>
      )}

      <div className="feature-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
