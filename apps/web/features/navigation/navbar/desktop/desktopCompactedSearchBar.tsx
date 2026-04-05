import { Separator } from "@workspace/ui/components/separator";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavbarButtons from "../shared/navbarButtons";

interface SearchBarProps {
  leftIcon?: React.ReactNode;
  locationLabel?: string;
  dateLabel?: string;
  guestsLabel?: string;
  onClick?: () => void;
  onOpen?: () => void;
}

export default function DesktopCompactedSearchBar({
  leftIcon,
  locationLabel = "En cualquier lugar del mundo",
  dateLabel = "Cualquier fecha",
  guestsLabel = "¿Cuántos?",
  onOpen,
}: SearchBarProps) {
  return (
    <header className="flex justify-center">
      <div className="absolute h-4 top-0 z-0 w-full bg-white"></div>
      <div className="z-50 flex justify-center w-full px-4">
        <svg
          width="26"
          height="43"
          className="z-10 shrink-0"
          aria-hidden="true"
        >
          <path d="M 26.5 43 C 26 29 16 16 0 16 L 0 0 L 26.5 0 Z" fill="#fff" />
        </svg>

        <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl h-20 px-4 md:px-6 grid grid-cols-1 grid-rows-1 items-center bg-white rounded-b-3xl">
          <div className="col-start-1 row-start-1 justify-self-start z-10 shrink-0">
            <Link href="/">
              <Image
                src="/logo/logoBlack.svg"
                alt="BeKampus"
                width={180}
                height={60}
                className="hidden lg:inline"
              />
              <Image
                src="/logo/logo.svg"
                alt="BeKampus"
                width={60}
                height={60}
                className="lg:hidden"
              />
            </Link>
          </div>

          <div className="col-start-1 row-start-1 justify-self-center z-0 flex justify-center min-w-0 w-full max-w-[calc(100%-330px)] lg:max-w-[calc(100%-460px)]">
            <button
              onClick={onOpen}
              className="flex items-center cursor-pointer border border-gray-300 rounded-full h-12 px-2 sm:px-3 py-2 shadow-sm hover:shadow-md transition bg-white min-w-0 w-full max-w-fit"
            >
              {leftIcon && (
                <div className="flex items-center justify-center w-8 h-8 mr-2">
                  {leftIcon}
                </div>
              )}

              <div className="text-sm font-semibold px-2 md:px-4 text-gray-900 truncate shrink min-w-0 max-w-50">
                {locationLabel}
              </div>

              <Separator orientation="vertical" className="h-6 shrink-0" />

              <div className="text-sm font-semibold px-2 md:px-4 text-gray-900 truncate shrink min-w-0 max-w-40">
                {dateLabel}
              </div>

              <Separator orientation="vertical" className="h-6 shrink-0" />

              <div className="text-sm font-semibold px-2 md:px-4 text-gray-900 truncate shrink min-w-0 max-w-60">
                {guestsLabel}
              </div>

              <div className="bg-green-600 rounded-full p-2 text-white flex items-center justify-center shrink-0 ml-1">
                <Search className="w-4 h-4" strokeWidth={3} />
              </div>
            </button>
          </div>

          <div className="col-start-1 row-start-1 justify-self-end z-10 shrink-0">
            <NavbarButtons />
          </div>
        </div>

        <svg width="26" height="43" aria-hidden="true" className="shrink-0">
          <path
            d="M 26 16 C 11 16 0 29 0 43 L 0 0 L 26 0 L 26 0 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </header>
  );
}
