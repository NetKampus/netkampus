import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NavbarButtons() {
  return (
    <div className="flex gap-4">
      <Button variant="ghost" asChild>
        <Link className="font-semibold" href="/sign-in">
          Registrarse
        </Link>
      </Button>
      <Button
        asChild
        variant={"default"}
        className="bg-linear-to-b from-green-500 to-green-600 text-white hover:to-green-700 transition-all shadow-lg border-b-4 border-green-800 active:translate-y-1 active:border-b-2 active:shadow-sm transform"
      >
        <Link className="font-semibold" href="/sign-up">
          <span className="hidden lg:inline">Ingresar</span>
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
