/* eslint-disable react/no-unescaped-entities */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white text-lg rounded-lg transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
