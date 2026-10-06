import { journey } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <h2 className="section-title">Education and experience</h2>

        <ol className="timeline">
          {journey.map((item) => (
            <li key={item.title} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
