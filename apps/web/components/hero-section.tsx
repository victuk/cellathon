import Link from "next/link";
import { Button } from "components/ui/button";
import { UserBalance } from "components/user-balance";
import { Zap, Trophy, Brain } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold bg-linear-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/30 backdrop-blur-sm animate-fade-in">
            <Zap className="h-4 w-4 animate-pulse" />
            Built on Celo • Live on Mainnet & Sepolia
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent animate-fade-in-up">
            Challenge Your Mind.
            <br />
            <span className="text-primary">Win on Blockchain.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Join the ultimate decentralized quiz platform. Compete in
            multiplayer battles, dominate weekly tournaments, and earn real
            rewards on Celo.
          </p>

          {/* User Balance Display */}
          <div className="mb-8 animate-fade-in-up delay-300">
            <UserBalance />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-linear-to-r from-primary to-primary/80"
            >
              <Link href="/play">
                <Trophy className="mr-2 h-5 w-5" />
                Start Playing
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="/practice">
                <Brain className="mr-2 h-5 w-5" />
                Practice Mode
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-border/40 animate-fade-in-up delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">
                Active Players
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">
                Weekly Tournaments
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">$10K+</div>
              <div className="text-sm text-muted-foreground">
                Prizes Awarded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
