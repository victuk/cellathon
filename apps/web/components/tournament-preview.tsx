import { Button } from "components/ui/button";
import { Trophy, Calendar, Users, Coins } from "lucide-react";
import Link from "next/link";

export function TournamentPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
              <Trophy className="h-4 w-4" />
              Featured Event
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Weekly Tournaments That Pay
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every week, compete against the best players for substantial prize
              pools. Tournaments are fair, transparent, and rewards are
              distributed instantly via smart contracts.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Weekly Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    New tournaments every Monday. Multiple time zones supported.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Skill-Based Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Compete against players of similar skill levels for fair
                    competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Guaranteed Prizes</h3>
                  <p className="text-sm text-muted-foreground">
                    Top performers win CELO tokens and exclusive NFT badges.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="px-8">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
          </div>

          {/* Right Content - Tournament Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />

            <div className="relative p-8 rounded-2xl border-2 border-primary/20 bg-background shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                  LIVE NOW
                </span>
                <Trophy className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Grand Quiz Championship
              </h3>
              <p className="text-muted-foreground mb-6">
                This week's featured tournament
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">
                    $5,000
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Prize Pool
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">
                    247
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Players Joined
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Entry Fee</span>
                  <span className="font-semibold">10 CELO</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">1 Hour</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Questions</span>
                  <span className="font-semibold">50 Questions</span>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href="/play">Join Tournament Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
