import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

export const Header = ()=>{
    return (
        <div>
             <header className="flex justify-between items-center mb-16">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={44}
                        height={44}
                        className="rounded-full border border-primary shadow"
                      />
                      <span className="font-extrabold text-2xl tracking-tight text-primary">ThumbGen</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="font-medium hover:text-primary transition">Features</Link>
                        <Link href="#how-it-works" className="font-medium hover:text-primary transition">How it works</Link>
                        <Link href="#pricing" className="font-medium hover:text-primary transition">Pricing</Link>
                      </nav>
                      <ModeToggle />
                      <Link href="/sign-in">
                        <Button variant="outline" className="font-semibold">Sign In</Button>
                      </Link>
                    </div>
                  </header>
        </div>
    )
}