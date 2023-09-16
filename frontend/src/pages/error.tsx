import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div className="centered-container">
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <h2>
                    Sorry, there was an error loading this page. Please make
                    sure that your link is correct, and try reloading the page!
                </h2>
            </div>
        );
    }
    if (error instanceof Error) {
        return <p>{error?.message || "Unknown Error"}</p>;
    }
    return <p>Unknown Error</p>;
}
