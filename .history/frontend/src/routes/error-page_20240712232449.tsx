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
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{Object.prototype.hasOwnProperty.call(error, "message") ? error.message : "Yes"}</i>
        </p>
      </div>
    );
  } else {
    return <div>Oops!</div>;
  }
};
