import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = ({spinner,error,children}) => {
    
  if (spinner) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return `Error is ${error.message}`;
  }
  return <div className="container">
    {children}
  </div>
};

export default Loading;
