import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { CategoriesTabs, type Category } from "../constants/categoriesTabs";

function CategoryTab({
  category,
  isActive,
}: {
  category: Category;
  isActive: boolean;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  const handleClick = () => {
    if (!isActive && lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  };

  const searchParams = useSearchParams();

  const currentQueryString = searchParams.toString();

  const targetUrl = currentQueryString
    ? `/${category.id}?${currentQueryString}`
    : `/${category.id}`;

  return (
    <Link
      href={targetUrl}
      onClick={handleClick}
      className={`flex gap-2 pl-2 pr-4 items-center transition-all border-b-3 min-w-15 ${
        isActive
          ? "border-black text-black font-semibold"
          : "border-transparent text-gray-500 hover:text-black hover:border-gray-300" // Inactivo
      }`}
    >
      <div className="w-14 h-14">
        <Lottie
          lottieRef={lottieRef}
          animationData={category.icon}
          loop={false}
          autoplay={false}
        />
      </div>
      <span className="text-md font-semibold">{category.label}</span>
    </Link>
  );
}

export default function NavbarCategoriesTabs() {
  const pathname = usePathname();

  const currentCategory =
    pathname === "/" ? "events" : pathname.replace("/", "");

  return (
    <div className="flex space-x-8 overflow-x-auto no-scrollbar justify-center">
      {CategoriesTabs.map((category) => (
        <CategoryTab
          key={category.id}
          category={category}
          isActive={currentCategory === category.id}
        />
      ))}
    </div>
  );
}
