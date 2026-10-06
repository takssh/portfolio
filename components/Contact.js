import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <h2 className="contact-title">Let's build something together.</h2>
        <p className="section-lead">
          I'm open to internships, freelance work and collaborations. Send me a
          message and I'll reply within a couple of days.
        </p>

        <a className="btn btn-primary btn-large" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className="socials">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
