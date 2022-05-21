import Link from "next/link";
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { IconHome, IconBookmark } from "@/icons";

export function Header() {
  return (
    <header className="font-bold">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-16 px-2">
        <Link href="/">
          <a className="flex items-center gap-2 text-xl transition-opacity hover:opacity-80 md:text-2xl">
            <Image src={logo} alt="Front On Food logo" width={45} height={36} />

            <h1>OnFood</h1>
          </a>
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <a className="text flex min-h-[56px] items-center rounded-full border-2 border-[#d9d9d9] px-6 text-[#626264] transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white">
                <IconHome className="mr-2 w-5" /> Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/favourites">
              <a className="text flex min-h-[56px] items-center rounded-full border-2 border-[#d9d9d9] px-6 text-[#626264] transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white">
                <IconBookmark className="mr-2 w-5" /> Favourites
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
