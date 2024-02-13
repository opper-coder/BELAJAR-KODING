import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-3xl">404</h1>
      <h2 className="text-xl">Page not Found</h2>
      <Link href="/" className="bg-blue-700 text-white p-3 m-5 rounded-lg">
        Home
      </Link>
    </div>
  );
}
