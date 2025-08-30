import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
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
          <Button variant="outline" className="font-semibold">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-12">
          <div className="md:w-1/2 space-y-7">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">
              Instantly Create <span className="text-primary">YouTube Thumbnails</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Elevate your channel with stunning, professional thumbnails—no design skills needed. Fast, smart, and fully customizable.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button size="lg" className="px-8 py-5 text-lg font-bold shadow-md">Get Started</Button>
              <Button size="lg" variant="outline" className="px-8 py-5 text-lg font-bold">View Examples</Button>
            </div>
            <div className="flex items-center space-x-2 pt-6">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="10" cy="10" r="9"/><path d="M7 10l2 2 4-4"/></svg>
              <span className="text-muted-foreground text-sm">No credit card required</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/thumbnail-example.png"
                alt="Thumbnail Example"
                width={520}
                height={320}
                className="rounded-xl border-2 border-primary/20 shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background px-6 py-2 rounded-full shadow border text-sm font-semibold flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="9" cy="9" r="8"/><path d="M6 9l2 2 4-4"/></svg>
                AI-Enhanced Quality
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20">
          <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">Why Choose ThumbGen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-primary/10">
                <CardContent className="pt-8 pb-6 flex flex-col items-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-muted/60 rounded-2xl px-6 md:px-16 shadow-inner">
          <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-5 shadow-lg border-2 border-primary/30">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">Simple Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <Card className="w-full md:w-96 border-primary/20 shadow-lg hover:shadow-2xl transition-shadow">
              <CardContent className="py-10 flex flex-col items-center">
                <div className="text-5xl font-extrabold mb-2">$0</div>
                <div className="text-muted-foreground mb-6">Free Forever</div>
                <ul className="mb-8 space-y-2 text-center text-muted-foreground">
                  <li>✔️ Unlimited thumbnail generations</li>
                  <li>✔️ All styles & templates</li>
                  <li>✔️ AI-powered suggestions</li>
                  <li>✔️ No watermark</li>
                </ul>
                <Button size="lg" className="w-full font-bold">Start for Free</Button>
              </CardContent>
            </Card>
            <Card className="w-full md:w-96 border-primary/20 shadow-lg hover:shadow-2xl transition-shadow">
              <CardContent className="py-10 flex flex-col items-center">
                <div className="text-5xl font-extrabold mb-2">$9</div>
                <div className="text-muted-foreground mb-6">Pro / month</div>
                <ul className="mb-8 space-y-2 text-center text-muted-foreground">
                  <li>✔️ Priority AI processing</li>
                  <li>✔️ Early access to new features</li>
                  <li>✔️ Premium support</li>
                  <li>✔️ Commercial license</li>
                </ul>
                <Button size="lg" className="w-full font-bold" variant="outline">Go Pro</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© 2024 ThumbGen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition">Terms</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">Privacy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Multiple Styles",
    description: "Choose from minimalist, bold, colorful, and dark thumbnail styles to match your brand.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    title: "AI-Generated Content",
    description: "Our AI enhances your ideas to create professional-looking thumbnails every time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
      </svg>
    ),
  },
  {
    title: "Custom Uploads",
    description: "Upload your own images to incorporate into professionally designed thumbnails.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Enter your video topic",
    description: "Provide details about your video to guide the thumbnail generation process.",
  },
  {
    title: "Choose your style preferences",
    description: "Select the domain, tone, style, and target audience that matches your brand.",
  },
  {
    title: "Generate & download",
    description: "Our AI creates multiple options for you to choose from and download.",
  },
];

