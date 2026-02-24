export default function Services() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "AI Automation",
    "Cloud Solutions",
    "UI/UX Design",
    "Digital Marketing"
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>

      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </div>
  );
}