import Link from "next/link";
import React from "react";
import { MdCreate, MdHome, MdLock } from "react-icons/md";

interface iProps {
  id: number;
  name: string;
  url: string;
  icon: "";
}

const Header = () => {
  const nav = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <MdHome />,
    },
    {
      id: 2,
      name: "Lock",
      url: "/",
      icon: <MdLock />,
    },
    {
      id: 3,
      name: "Create",
      url: "/",
      icon: <MdCreate />,
    },
  ];

  const user = null;
  return (
    <div className="flex justify-center items-center w-full h-[70px] border-b">
      <div className="w-[90%] flex justify-between items-center">
        <h1>Logo</h1>

        <div className="flex gap-4 items-center">
          {nav.map((props: any) => (
            <Link
              href={props.url}
              className="border rounded-md flex gap-2 px-4 py-2 items-center"
            >
              <div>{props.name}</div>
              <div>{props.icon}</div>
            </Link>
          ))}
        </div>
        {user ? (
          <div className="border rounded-sm flex gap-2 px-6 py-2 items-center">
            Log out
          </div>
        ) : (
          <Link
            href="/signIn"
            className="border rounded-sm flex gap-2 px-6 py-2 items-center"
          ></Link>
        )}
        <div>Log in</div>
      </div>
    </div>
  );
};

export default Header;
