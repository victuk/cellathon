import { Button } from "components/ui/button";
import { Users, ArrowLeft, Zap, Crown, Shield, Swords } from "lucide-react";
import Link from "next/link";

const matchTypes = [
  {
    id: "quick",
    title: "Quick Match",
    description:
      "Jump into a game instantly. Random opponent, random category.",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    players: "1v1",
    time: "5 min",
    reward: "50 CELO",
  },
  {
    id: "ranked",
    title: "Ranked Battle",
    description: "Compete for ranking points. Win to climb the leaderboard.",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    players: "1v1",
    time: "10 min",
    reward: "100 CELO",
  },
  {
    id: "team",
    title: "Team Battle",
    description: "Join forces with other players. Work together to win.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    players: "2v2",
    time: "15 min",
    reward: "200 CELO",
  },
];

export default function MultiplayerPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="py-12 border-b border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/play">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Modes
            </Link>
          </Button>

          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Multiplayer Battle
                  </h1>
                  <p className="text-muted-foreground">
                    Test your blockchain knowledge against players worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 px-6 py-3 rounded-xl bg-muted/50 border border-border/50">
              <div>
                <div className="text-sm text-muted-foreground">Your Rank</div>
                <div className="text-xl font-bold">#1,247</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
                <div className="text-xl font-bold text-primary">0%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Types */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Choose Battle Type</h2>
            <p className="text-muted-foreground">
              Select how you want to compete
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {matchTypes.map((match) => (
              <div
                key={match.id}
                className="group relative rounded-2xl border-2 border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${match.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <match.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{match.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {match.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Players</span>
                    <span className="font-semibold">{match.players}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">{match.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Reward</span>
                    <span className="font-semibold text-primary">
                      {match.reward}
                    </span>
                  </div>
                </div>

                <Button className={`w-full bg-linear-to-r ${match.gradient}`}>
                  <Swords className="mr-2 h-4 w-4" />
                  Find Match
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Players */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Players Online</h2>
              <p className="text-muted-foreground">
                Currently available for battle
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                1,247 Online
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-background border border-border/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="font-bold">P{i}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Player {i}</div>
                    <div className="text-xs text-muted-foreground">
                      Rank #{1000 + i * 100}
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  Challenge
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
