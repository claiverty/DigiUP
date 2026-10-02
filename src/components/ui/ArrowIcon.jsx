const paths = {
  upRight: "M5 19 19 5M8 5h11v11",
  right: "M5 12h14m-6-6 6 6-6 6",
  down: "M12 5v14m-6-6 6 6 6-6",
  up: "M12 19V5m-6 6 6-6 6 6",
};

export default function ArrowIcon({ direction = "upRight", className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction] ?? paths.upRight} />
    </svg>
  );
}
