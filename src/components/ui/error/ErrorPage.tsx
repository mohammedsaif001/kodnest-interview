import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@mui/material";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(
      error.message,
      error.digest,
      error.name,
      "Catching Errrors======================================== Error.tsx"
    );
  }, [error]);
  const router = useRouter();
  return (
    <div className="flex w-full h-full justify-center items-center flex-col gap-4">
      <h2 className="text-xl font-medium capitalize tracking-wider text-red-500">
        Oops! Something went wrong :(
      </h2>
      <p className="text-sm text-red-500 text-center">
        Error Message : {error?.message}
      </p>
      <div className="flex justify-center gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          color="primary"
          variant="contained"
          className="text-sm order-1"
        >
          Try again
        </Button>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => router.back()
          }
          variant="contained"
          color="secondary"
          className="text-sm"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
