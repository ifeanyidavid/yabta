import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const Error: React.FC = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error?.statusText
  }
};
