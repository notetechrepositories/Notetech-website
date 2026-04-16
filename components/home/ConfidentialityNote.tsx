type ConfidentialityNoteProps = {
  children: React.ReactNode;
  className?: string;
};

/** NDA / confidentiality — noticeable but calmer than a full warning banner */
export default function ConfidentialityNote({
  children,
  className = "",
}: ConfidentialityNoteProps) {
  return (
    <p
      className={`motion-interactive rounded-[var(--radius-card)] border border-border-subtle border-l-[3px] border-l-primary/50 bg-badge-soft/55 px-4 py-3 text-sm leading-relaxed text-ink shadow-[var(--shadow-card-value)] ${className}`}
      role="note"
    >
      {children}
    </p>
  );
}
