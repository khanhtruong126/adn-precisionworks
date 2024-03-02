import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-xl">Oops!</h1>
      <p className="italic text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
      <p className="text-app-red">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
