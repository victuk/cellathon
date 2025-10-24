import { Brain, Users, Trophy, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multiplayer Battles",
    description:
      "Challenge players worldwide in real-time quiz battles. Prove your knowledge and climb the leaderboard.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Trophy,
    title: "Weekly Tournaments",
    description:
      "Compete in high-stakes tournaments every week. Win big prizes and earn exclusive NFT badges.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Brain,
    title: "Practice Mode",
    description:
      "Sharpen your skills in solo practice mode. Learn, improve, and prepare for competitive matches.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description:
      "Win and earn instantly on Celo blockchain. Fast, secure, and transparent reward distribution.",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "Fair & Transparent",
    description:
      "All games are provably fair with blockchain verification. No cheating, just pure skill.",
    gradient: "from-red-500/10 to-rose-500/10",
  },
  {
    icon: Clock,
    title: "24/7 Gaming",
    description:
      "Play anytime, anywhere. The platform never sleeps, and neither does the competition.",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of competitive gaming with blockchain-powered
            rewards and fair play.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
