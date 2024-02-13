import { Children } from "react";

export default function layoutAbout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <nav className="fixed left-0 top-10 z-10 h-screen w-60 bg-gray-800 text-white p-5">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
        </ul>
    </nav>
    <div>{children}</div>
    </>
  )
}
