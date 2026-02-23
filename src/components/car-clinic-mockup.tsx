const statusCards = [
  { label: "待維修", count: 3, bg: "bg-destructive/15" },
  { label: "診斷中", count: 2, bg: "bg-warning-muted" },
  { label: "維修中", count: 4, bg: "bg-primary/15" },
  { label: "等零件", count: 1, bg: "bg-success-muted" },
];

export function CarClinicMockup() {
  return (
    <div className="bg-card text-card-foreground">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b-[3px] border-border bg-primary/10 px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full border border-border bg-destructive" />
          <div className="h-2.5 w-2.5 rounded-full border border-border bg-warning" />
          <div className="h-2.5 w-2.5 rounded-full border border-border bg-success" />
        </div>
        <span className="text-xs font-bold tracking-wide">車房管理系統</span>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
        {statusCards.map((card) => (
          <div
            key={card.label}
            className={`rounded-sm border-[3px] border-border p-2 text-center shadow-[var(--brutal-shadow-sm)] ${card.bg}`}
          >
            <div className="text-xl font-black leading-none">{card.count}</div>
            <div className="mt-1 text-[10px] font-bold">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Fake table row */}
      <div className="border-t-[3px] border-border px-3 py-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold">AB 1234</span>
          <span className="rounded-sm border border-border bg-primary/15 px-1.5 py-0.5 font-bold text-primary">
            維修中
          </span>
          <span className="text-muted-foreground">2025-01-15</span>
        </div>
      </div>
    </div>
  );
}
