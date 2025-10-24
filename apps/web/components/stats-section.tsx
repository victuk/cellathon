export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">10K+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Questions
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Across all categories
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">1M+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Games Played
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              And counting
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">$50K+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Total Rewards
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Distributed to winners
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">99.9%</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Uptime
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Always available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
