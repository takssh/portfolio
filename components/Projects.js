import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Selected projects</h2>
        <p className="section-lead">
          A few things I've built recently, from idea to deployment.
        </p>

        <div className="project-list">
          {projects.map((p, i) => (
            <article key={p.title} className={`project ${i % 2 ? "project-flip" : ""}`}>
              <div className="project-visual" aria-hidden={!p.image}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.title} screenshot`} />
                ) : (
                  <span className="project-monogram">{p.title.charAt(0)}</span>
                )}
              </div>

              <div className="project-body">
                <p className="project-year">{p.year}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live site
                  </a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer">
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
