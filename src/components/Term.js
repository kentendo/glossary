import React, { PropTypes } from 'react';
import styles from "./home.css";

const Term = ({title, subtitle, definition, expanded, onClick}) => (
  <div 
    className={styles.term}
    onClick={onClick}
    >
    <h1 style={{marginTop:"10px", marginBottom:"5px", fontSize:"50px", textTransform:"capitalize"}}>{title} <small style={{fontWeight:"normal", fontSize:"20px"}}>{subtitle.toUpperCase()}</small> {expanded}</h1>
    { (expanded) && <p style={{marginTop:"0", fontStyle:"italic", fontFamily:"serif", fontSize:"25px"}}>{definition}</p> }
  </div>
);

Term.propTypes = {
  expanded: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Term;
