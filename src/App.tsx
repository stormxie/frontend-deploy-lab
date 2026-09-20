const checks = [
  {
    title: 'Build',
    body: 'TypeScript and Vite produce static files in dist.'
  },
  {
    title: 'CI',
    body: 'GitHub Actions installs dependencies and verifies the build.'
  },
  {
    title: 'Deploy',
    body: 'The static output can be served from GitHub Pages, object storage, CDN, or Nginx.'
  },
  {
    title: 'Rollback',
    body: 'Every release should be tied to a commit so an older version can be restored quickly.'
  }
];

export function App() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Frontend deployment practice</p>
          <h1>Ship a small app through a real release path.</h1>
          <p className="intro">
            This project is intentionally tiny. The goal is to understand each
            deployment step, then publish a second version through the same path.
          </p>
        </div>

        <div className="release-panel" aria-label="Release summary">
          <span className="status-dot" />
          <div>
            <p className="panel-label">Current version</p>
            <p className="version">{__APP_VERSION__}</p>
          </div>
        </div>
      </section>

      <section className="check-grid" aria-label="Release checklist">
        {checks.map((check) => (
          <article className="check-card" key={check.title}>
            <h2>{check.title}</h2>
            <p>{check.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
