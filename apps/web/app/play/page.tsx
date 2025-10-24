import { Button } from "components/ui/button";
import {
  Brain,
  Users,
  Trophy,
  Target,
  Zap,
  Clock,
  Coins,
  Star,
} from "lucide-react";
import Link from "next/link";

const gameModes = [
  {
    id: "practice",
    title: "Practice Mode",
    description:
      "Sharpen your skills with unlimited questions. No stakes, just pure learning.",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    features: [
      "Unlimited questions",
      "No time pressure",
      "All categories",
      "Track progress",
    ],
    buttonText: "Start Practice",
    href: "/practice",
    badge: "Free",
    badgeColor: "bg-blue-500",
  },
  {
    id: "multiplayer",
    title: "Multiplayer Battle",
    description:
      "Challenge players worldwide in real-time quiz battles. Test your speed and knowledge.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    features: [
      "Real-time matches",
      "1v1 or team battles",
      "Ranked matchmaking",
      "Win rewards",
    ],
    buttonText: "Find Match",
    href: "/multiplayer",
    badge: "Popular",
    badgeColor: "bg-purple-500",
  },
  {
    id: "tournament",
    title: "Weekly Tournament",
    description:
      "Compete for the biggest prizes. Join scheduled tournaments and climb the leaderboard.",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    features: [
      "Weekly events",
      "$5K+ prize pools",
      "Global leaderboard",
      "NFT badges",
    ],
    buttonText: "Join Tournament",
    href: "/tournaments",
    badge: "Live Now",
    badgeColor: "bg-orange-500",
  },
];

const stats = [
  {
    icon: Users,
    label: "Active Players",
    value: "1,247",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    label: "Games Today",
    value: "15,892",
    color: "text-purple-500",
  },
  { icon: Trophy, label: "Tournaments", value: "24", color: "text-orange-500" },
  {
    icon: Coins,
    label: "Total Prizes",
    value: "$50K",
    color: "text-green-500",
  },
];

export default function PlayPage() {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="py-12 lg:py-20 border-b border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
              <Target className="h-4 w-4" />
              Choose Your Challenge
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Select Your <span className="text-primary">Game Mode</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Whether you're practicing, battling friends, or competing for
              prizes, we've got the perfect mode for you.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/30 border border-border/50"
                >
                  <stat.icon className={`h-5 w-5 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Grid */}
      <section className="py-12 lg:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameModes.map((mode, index) => (
              <div
                key={mode.id}
                className="group relative rounded-2xl border-2 border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${mode.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div
                    className={`inline-flex items-center gap-1 px-3 py-1 mb-4 text-xs font-bold text-white ${mode.badgeColor} rounded-full`}
                  >
                    <Star className="h-3 w-3" />
                    {mode.badge}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${mode.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <mode.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${mode.gradient}`}
                        />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full bg-linear-to-r ${mode.gradient} hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
                    size="lg"
                  >
                    <Link href={mode.href}>
                      {mode.buttonText}
                      <Zap className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-20 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect Wallet</h3>
              <p className="text-muted-foreground text-sm">
                Connect your Web3 wallet to get started. We support all major
                wallets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Mode</h3>
              <p className="text-muted-foreground text-sm">
                Select practice, multiplayer, or tournament based on your mood.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Playing</h3>
              <p className="text-muted-foreground text-sm">
                Answer questions, compete with others, and win rewards on Celo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
