import { Button } from "components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
            <Sparkles className="h-4 w-4" />
            Join the Revolution
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Test Your Knowledge?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect your wallet and start playing in seconds. Win tournaments,
            earn rewards, and become a quiz champion on the blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-lg font-bold group"
            >
              <Link href="/play">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg font-semibold border-2"
            >
              <Link href="/tournaments">View Tournaments</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required • Connect with any Web3 wallet
          </p>
        </div>
      </div>
    </section>
  );
}
