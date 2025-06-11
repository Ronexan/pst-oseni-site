import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div className="abolute left-0 top-0 w-full h-screen flex flex-col justify-center items-center p-2">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-2 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}