type TrustChipProps = {
  children: React.ReactNode;
};

/** Compact trust indicator — soft badge tone aligned to logo blues */
export default function TrustChip({ children }: TrustChipProps) {
  return (
    <span className="motion-interactive inline-flex items-center rounded-[var(--radius-card)] border border-primary/12 bg-badge-soft/85 px-3.5 py-2 text-xs font-medium leading-snug text-ink shadow-[var(--shadow-card-value)] hover:border-primary/22">
      {children}
    </span>
  );
}
