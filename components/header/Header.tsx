import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";

export interface HeaderProps {
  showVideo: boolean;
  selectedSong: number | null;
  songs: { video: string }[];
}

const Header = ({ showVideo, selectedSong, songs }: HeaderProps) => {
  return (
    <>
      <div
        className={`flex items-center justify-between px-16 pt-2 text-[#ff69b4] md:px-32 ${
          showVideo && selectedSong !== null && songs.length > 0
            ? "pb-0"
            : "pb-8"
        }`}
      >
        <Link href="/">
          <h1 className="flex items-center transition duration-300 hover:opacity-100">
            <Image src={Logo} alt="Logo" className="w-16 rounded-full" />
            <span
              className="link-container mt-1 text-3xl font-extrabold"
              onClick={() => window.location.reload()}
            >
              MusicStream
            </span>
          </h1>
        </Link>
        <nav className="hidden text-3xl font-semibold md:flex">
          <p>
            Made With{" "}
            <a className="ml-1 text-xl" role="img" aria-label="HeartEmoji">
              ❤️
            </a>{" "}
            By{" "}
            <span>
              <Link
                href="https://www.linkedin.com/in/amjadimdad00"
                target="_blank"
              >
                Amjad Imdad
              </Link>
            </span>
          </p>
        </nav>
      </div>
    </>
  );
};

export default Header;
