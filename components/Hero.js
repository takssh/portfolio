import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">{profile.role}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View my work</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
            {profile.resume && (
              <a className="btn btn-ghost" href={profile.resume} download>
                Download CV
              </a>
            )}
          </div>
        </div>

       
      </div>
    </section>
  );
}
