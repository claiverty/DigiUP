export default function SectionLabel({ label }) {
  return (
    <p className="section-label">
      <span className="section-label__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {label}
    </p>
  );
}
