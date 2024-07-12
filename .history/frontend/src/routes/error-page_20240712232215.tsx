import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const Error: React.FC = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.data?.message}</i>
        </p>
      </div>
    );
  } else if() {
    
  } else {
    return <div>Oops!</div>;
  }
};
