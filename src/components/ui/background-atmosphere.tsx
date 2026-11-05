export function BackgroundAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="mesh-blob mesh-blob-teal" />
      <div className="mesh-blob mesh-blob-violet" />
      <div className="mesh-blob mesh-blob-coral" />
      <div className="mesh-grid" />
      <div className="mesh-noise" />
    </div>
  );
}
