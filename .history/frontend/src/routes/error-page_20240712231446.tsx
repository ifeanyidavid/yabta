import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const Error: React.FC = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is 
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
