import { Button } from "components/ui/button";
import { Brain, ArrowLeft, Play, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "celo",
    name: "Celo Blockchain",
    questions: 250,
    color: "bg-green-500",
    description: "Celo protocol, features & ecosystem",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    questions: 300,
    color: "bg-blue-500",
    description: "Ethereum fundamentals & smart contracts",
  },
  {
    id: "layer2",
    name: "Layer 2 Solutions",
    questions: 200,
    color: "bg-purple-500",
    description: "Scaling solutions & L2 protocols",
  },
  {
    id: "defi",
    name: "DeFi",
    questions: 280,
    color: "bg-yellow-500",
    description: "Decentralized finance protocols",
  },
  {
    id: "blockchain",
    name: "Blockchain Basics",
    questions: 350,
    color: "bg-cyan-500",
    description: "Core blockchain concepts",
  },
  {
    id: "web3",
    name: "Web3 & dApps",
    questions: 220,
    color: "bg-red-500",
    description: "Web3 development & dApps",
  },
];

export default function PracticePage() {
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Practice Mode
                  </h1>
                  <p className="text-muted-foreground">
                    Sharpen your skills, no pressure
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                My Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Choose a Category</h2>
            <p className="text-muted-foreground">
              Select a topic to start practicing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/practice/${category.id}`}
                className="group relative p-6 rounded-2xl border-2 border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {category.questions} questions
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>

                <Button className="w-full" size="sm">
                  <Play className="mr-2 h-4 w-4" />
                  Start Practice
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <div className="text-sm text-muted-foreground">
                Questions Answered
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">0%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <div className="text-sm text-muted-foreground">
                Current Streak
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">0h</div>
              <div className="text-sm text-muted-foreground">
                Time Practiced
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
