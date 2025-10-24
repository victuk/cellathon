import { Button } from "components/ui/button";
import {
  Trophy,
  ArrowLeft,
  Calendar,
  Users,
  Coins,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";

const tournaments = [
  {
    id: 1,
    title: "Celo Masters Championship",
    status: "live",
    prize: "$5,000",
    players: 247,
    maxPlayers: 500,
    entryFee: "10 CELO",
    duration: "1 Hour",
    questions: 50,
    startTime: "Live Now",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Ethereum & Layer 2 Showdown",
    status: "upcoming",
    prize: "$2,500",
    players: 89,
    maxPlayers: 300,
    entryFee: "5 CELO",
    duration: "45 min",
    questions: 40,
    startTime: "Starts in 2h",
    badge: "Popular",
  },
  {
    id: 3,
    title: "Blockchain Basics Blitz",
    status: "upcoming",
    prize: "$1,000",
    players: 156,
    maxPlayers: 200,
    entryFee: "3 CELO",
    duration: "30 min",
    questions: 30,
    startTime: "Starts in 5h",
    badge: "Quick",
  },
  {
    id: 4,
    title: "Web3 & DeFi Challenge",
    status: "upcoming",
    prize: "$3,500",
    players: 45,
    maxPlayers: 400,
    entryFee: "8 CELO",
    duration: "1.5 Hour",
    questions: 60,
    startTime: "Tomorrow",
    badge: null,
  },
];

export default function TournamentsPage() {
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Tournaments
                  </h1>
                  <p className="text-muted-foreground">
                    Compete in blockchain quiz tournaments for prizes
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
              <Button variant="outline">
                <Trophy className="mr-2 h-4 w-4" />
                My Tournaments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-muted/30 border-b border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-background border border-border/50 text-center">
              <Trophy className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">24</div>
              <div className="text-xs text-muted-foreground">
                Active Tournaments
              </div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/50 text-center">
              <Users className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">1,247</div>
              <div className="text-xs text-muted-foreground">Total Players</div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/50 text-center">
              <Coins className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$50K</div>
              <div className="text-xs text-muted-foreground">
                Total Prize Pool
              </div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/50 text-center">
              <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-xs text-muted-foreground">Starting Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments List */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Tournaments</h2>
            <p className="text-muted-foreground">
              Join now and compete for prizes
            </p>
          </div>

          <div className="space-y-6">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  tournament.status === "live"
                    ? "border-primary/50 bg-primary/5"
                    : "border-border bg-background hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  {/* Tournament Info */}
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-3 mb-3">
                      {tournament.status === "live" && (
                        <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full animate-pulse">
                          LIVE NOW
                        </span>
                      )}
                      {tournament.badge && tournament.status !== "live" && (
                        <span className="px-3 py-1 text-xs font-bold bg-muted text-foreground rounded-full">
                          {tournament.badge}
                        </span>
                      )}
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {tournament.startTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                      {tournament.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tournament.players}/{tournament.maxPlayers}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tournament.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {tournament.questions} Questions
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{
                            width: `${
                              (tournament.players / tournament.maxPlayers) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Prize & Entry */}
                  <div className="flex flex-col gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        Prize Pool
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {tournament.prize}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        Entry Fee
                      </div>
                      <div className="text-lg font-semibold">
                        {tournament.entryFee}
                      </div>
                    </div>

                    <Button
                      className={`px-8 ${
                        tournament.status === "live"
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-linear-to-r from-yellow-500 to-orange-500 hover:opacity-90"
                      }`}
                      size="lg"
                    >
                      {tournament.status === "live" ? "Join Now" : "Register"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Top Players This Week</h2>
              <p className="text-muted-foreground">
                See who's leading the competition
              </p>
            </div>
            <Button variant="outline">View Full Leaderboard</Button>
          </div>

          <div className="bg-background rounded-2xl border border-border/50 overflow-hidden">
            <div className="divide-y divide-border/50">
              {[1, 2, 3, 4, 5].map((rank) => (
                <div
                  key={rank}
                  className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        rank === 1
                          ? "bg-yellow-500 text-white"
                          : rank === 2
                          ? "bg-gray-400 text-white"
                          : rank === 3
                          ? "bg-orange-600 text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      #{rank}
                    </div>
                    <div>
                      <div className="font-semibold">Player {rank}</div>
                      <div className="text-sm text-muted-foreground">
                        {5 - rank + 1} tournaments won
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">
                      {(6 - rank) * 500} CELO
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Winnings
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
