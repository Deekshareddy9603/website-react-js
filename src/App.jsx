import { initPrefersReducedMotion } from "framer-motion";
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <>
      <style>{`
      *{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth;font-family:'Segoe UI',sans-serif;}
      body{background:#f4f6f9;}
      section{padding:100px 10%;}
      .dual-title{text-align:center;font-size:40px;margin-bottom:50px;}
      .dual-title span{background:linear-gradient(90deg,#023047,#ffb703);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
      .navbar{position:fixed;width:100%;top:0;background:#023047;padding:15px 50px;display:flex;justify-content:space-between;z-index:1000;}
      .navbar a{color:white;margin-left:20px;text-decoration:none;}
      .navbar a:hover{color:#ffb703;}
      .home{height:100vh;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://images.unsplash.com/photo-1503387762-592deb58ef4e");background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;text-align:center;color:white;}
      .home h1{font-size:60px;}
      .home p{margin-top:20px;font-size:20px;font-style:italic;}
      .about-container{display:flex;align-items:center;gap:100px;}
      .about-container img{width:400%;max-width:500px;border-radius:10px;animation:slideIn 1.5s ease;}
      .about-text{font-size:20px;line-height:1.8;}
      .services-grid{display:grid;grid-template-columns:repeat(2, 1fr);(auto-fit,minmax(250px,1fr));gap:30px;}
      .service-zigzag{display:flex;flex-direction:column;gap:60px;}
      .service-card{background:white;border-radius:10px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.1);transition:0.4s;}
      .service-card:hover{transform:translateY(-10px);}
      .service-card img{width:100%;height:300px;object-fit:cover;}
      .service-card h3{padding:15px;color:#023047;}
      .service-card p{padding:0 15px 20px;font-size:14px;}
      .projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;}
      .project-card{position:relative;overflow:hidden;border-radius:10px;}
      .project-card img{width:100%;height:400px;object-fit:cover;transition:0.5s;}
      .project-card:hover img{transform:scale(1.1);}
      .project-info{position:absolute;bottom:0;background:rgba(0,0,0,0.7);color:white;width:100%;padding:15px;}
      .contact form{max-width:500px;margin:auto;display:flex;flex-direction:column;}
      .contact input,.contact textarea{margin-bottom:15px;padding:10px;border:1px solid #ccc;border-radius:5px;}
      .contact button{padding:12px;background:#023047;color:white;border:none;cursor:pointer;transition:0.3s;}
      .contact button:hover{background:#ffb703;color:black;}
      .footer{background:#023047;color:white;padding:40px 10%;text-align:center;}
      .footer h4{margin-bottom:10px;color:#ffb703;}
      .footer p{margin:5px 0;}
      .reveal{opacity:0;transform:translateY(40px);transition:1s;}
      .reveal.active{
      opacity:1;transform:translateY(0);
      }
      @keyframes slideIn{from{opacity:0; transform:translateX(-50px);}to{opacity:1; transform:translateX(0);}
      }
      @media(max-width:768px){.about-container{flex-direction:column;}.home h1{font-size:35px;}}
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div style={{color:"#ffb703",fontWeight:"bold"}}>WEBUILD</div>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="home">
        <div>
          <h1>Building Tomorrow’s Foundations</h1>
          <p>"Quality is not an act, it is a habit."</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2 className="dual-title"><span>About Us</span></h2>
        <div className="about-container reveal">
          <img src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_640221-172.jpg?semt=ais_hybrid&w=740&q=80" alt="about"/>
          <div className="about-text">
            We are a leading construction company delivering residential, commercial, and industrial projects.
            Our team focuses on quality, safety, and innovation, ensuring every project is completed to perfection.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2 className="dual-title"><span>Our Services</span></h2>
        <div className="services-grid reveal">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" alt="residential"/>
            <h3>Residential Building</h3>
            <p>Constructing modern and durable homes with innovative designs.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="commercial"/>
            <h3>Commercial Construction</h3>
            <p>Office buildings and commercial complexes built for long-term use.</p>
          </div>
          <div className="service-card">
            <img src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?semt=ais_hybrid&w=740&q=80" alt="renovation"/>
            <h3>Renovation</h3>
            <p>Transforming old buildings into modern, functional spaces.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1599423300746-b62533397364" alt="interior"/>
            <h3>Interior Design</h3>
            <p>Creating stylish and practical interiors for homes and offices.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" alt="bridge"/>
            <h3>Bridge Construction</h3>
            <p>Engineering strong, safe, and long-lasting bridges.</p>
          </div>
          <div className="service-card">
            <img src="https://media.istockphoto.com/id/496119890/photo/new-road-construction.jpg?s=612x612&w=0&k=20&c=yyBsEAcd07RME72Dlykh5x018xvv7dG3lQ55y_wrvlA=" alt="road"/>
            <h3>Road Development</h3>
            <p>Building durable roads with smooth surfaces and safety standards.</p>
          </div>
          
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="dual-title"><span>Our Projects</span></h2>
        <div className="projects-grid reveal">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118" alt="project1"/>
            <div className="project-info">
              <h4>Skyscraper Project</h4>
              <p>A 50-floor skyscraper with modern engineering.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8" alt="project2"/>
            <div className="project-info">
              <h4>Luxury Villas</h4>
              <p>Premium villas with landscaped gardens and pools.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="project3"/>
            <div className="project-info">
              <h4>Shopping Mall</h4>
              <p>Modern retail complex with elegant architecture.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="project4"/>
            <div className="project-info">
              <h4>Hospital Building</h4>
              <p>State-of-the-art medical facility with safety measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="dual-title"><span>Contact Me</span></h2>
        <form>
          <input type="text" placeholder="Your Name" required/>
          <input type="email" placeholder="Your Email Address" required/>
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h4>WEBUILD COMPANY</h4>
        <p>Home | About | Services | Projects | Contact</p>
        <p>Email: info@webuild.com</p>
        <p>Phone: +123 456 7890</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;