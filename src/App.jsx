import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCommissionSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const whatsapp = data.get("whatsapp");
    const type = data.get("type") || "Not specified";
    const style = data.get("style") || "Not specified";
    const subjects = data.get("subjects") || "Not specified";
    const size = data.get("size") || "Not specified";
    const deadline = data.get("deadline") || "Not specified";
    const budget = data.get("budget") || "Not specified";
    const description = data.get("description");

    const subject = `New Commission Request from ${name}`;

    const body = `
Hello Sukruta,

I would like to request a commission artwork.

CUSTOMER DETAILS
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp}

COMMISSION DETAILS
Type: ${type}
Style: ${style}
Number of subjects: ${subjects}
Artwork size: ${size}
Deadline: ${deadline}
Budget: ${budget}

IDEA / DESCRIPTION
${description}

I will provide the reference photographs separately.

Thank you!
    `.trim();

    window.location.href =
      `mailto:starkeddard36@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="site">
      <main>
        <section className="home" id="home">
          <div className="home-card">
            <header className="home-nav">
              <a href="#home" className="brand">
                Paper-n-Strokes
              </a>

              <nav>
                <a href="#home">Home</a>
                <a href="#work">Works</a>
                <a href="#about">About</a>
                <a href="#commission-form">Commissions</a>
              </nav>
            </header>

            <div className="home-content">
              <div className="home-side home-left">
                <span className="home-label">
                  Hello, I'm
                </span>

                <h2>
                  Sukruta
                  <span>Kulkarni</span>
                </h2>

                <p>
                  I am an Artist
                </p>
              </div>

              <div className="portrait-container">
                <div className="portrait-ring"></div>

                <div className="portrait-photo">
                <img
                  src="/sukruta-profile.png"
                  alt="Sukruta Kulkarni"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                </div>
              </div>

              <div className="home-side home-right">
                <span className="home-label">
                  Paper-n-Strokes
                </span>

                <h2>
                  Art feels 
                  <span>personal.</span>
                </h2>

                <p>
                  Portraits · Landscapes · Sketches
                </p>
              </div>
            </div>

            <div className="home-bottom">
             

              <a href="#work">
              
              </a>

              <span className="home-year">
             
              </span>
            </div>
          </div>
        </section>

        <section className="works" id="work">
          <div className="works-heading">
            <div>
              <span className="section-number">
               
              </span>

              <p className="small-label">
              </p>

              <h2>
                Selected <em>Works</em>
              </h2>
            </div>

            <p className="works-description">
              A collection of portraits, landscapes
              and paintings brought to life through art.
            </p>
          </div>

<div className="gallery">
  <article
    className="artwork artwork-tall"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-1.jpeg",
        title: "Chhatrapati Shivaji Maharaj",
        type: "Pencil Sketch"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-1.jpeg"
        alt="Chhatrapati Shivaji Maharaj pencil sketch"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Chhatrapati Shivaji Maharaj</strong>
      <span>Pencil Sketch</span>
    </div>
  </article>

  <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-2.jpeg",
        title: "A Mother's Love ❤️",
        type: "Colour Pencil Sketch"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-2.jpeg"
        alt="A Mother's Love colour pencil sketch"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>A Mother's Love ❤️</strong>
      <span>Colour Pencil Sketch</span>
    </div>
  </article>

  <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-3.jpeg",
        title: "Shri Ram Mandir Idol",
        type: "Charcoal Art"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-3.jpeg"
        alt="Shri Ram Mandir Idol charcoal art"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Shri Ram Mandir Idol</strong>
      <span>Charcoal Art</span>
    </div>
  </article>

  <article
    className="artwork artwork-tall"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-4.jpeg",
        title: "Allu Arjun as Pushpa Raj",
        type: "Colour Pencil Art"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-4.jpeg"
        alt="Allu Arjun as Pushpa Raj colour pencil art"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Allu Arjun as Pushpa Raj</strong>
      <span>Colour Pencil Art</span>
    </div>
  </article>

  <article
    className="artwork artwork-wide"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-5.jpeg",
        title: "Lord Krishna with Arjun",
        type: "Poster Colour Painting"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-5.jpeg"
        alt="Lord Krishna with Arjun poster colour painting"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Lord Krishna with Arjun</strong>
      <span>Poster Colour Painting</span>
    </div>
  </article>

  <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-6.jpeg",
        title: "Maharashtraian Kaka",
        type: "Colour Pencil Sketch"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-6.jpeg"
        alt="Maharashtraian Kaka colour pencil sketch"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Maharashtraian Kaka</strong>
      <span>Colour Pencil Sketch</span>
    </div>
  </article>

    <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artworkA.jpeg",
        title: "A Deer",
        type: "Canvas Painting"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artworkA.jpeg"
        alt="A Deer canvas painting"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>A Deer</strong>
      <span>Canvas Painting</span>
    </div>
  </article>

    <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artworkB.jpeg",
        title: "Raghavendra Swami",
        type: "Pencil Sketch"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artworkB.jpeg"
        alt="Raghavendra Swami pencil sketch"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Raghvendra Swami</strong>
      <span>Pencil Sketch</span>
    </div>
  </article>

  <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-7.jpeg",
        title: "Swami Samarth",
        type: "Colour Pencil Sketch"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-7.jpeg"
        alt="Swami Samarth colour pencil sketch"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Swami Samarth</strong>
      <span>Colour Pencil Sketch</span>
    </div>
  </article>

  <article
    className="artwork artwork-tall"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-8.jpeg",
        title: "Saurabh Jain as Krishna",
        type: "Charcoal Art"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-8.jpeg"
        alt="Saurabh Jain as Krishna charcoal art"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Saurabh Jain as Krishna</strong>
      <span>Charcoal Art</span>
    </div>
  </article>

    <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artworkC.jpeg",
        title: "Mammooty from Bramayugam",
        type: "Charcoal Art"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artworkC.jpeg"
        alt="Mammooty from Bramayugam charcoal art"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Mammooty from Bramayugam</strong>
      <span>Charcoal Art</span>
    </div>
  </article>

  <article
    className="artwork artwork-wide"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-9.jpeg",
        title: "Shri Krishna's Eyes ✨",
        type: "Artwork"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-9.jpeg"
        alt="Shri Krishna's Eyes"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Shri Krishna's Eyes ✨</strong>
      <span>Artwork</span>
    </div>
  </article>

  <article
    className="artwork artwork-normal"
    onClick={() =>
      setSelectedArtwork({
        image: "/artworks/artwork-10.jpeg",
        title: "Shri Ram",
        type: "Colour Pencil Art"
      })
    }
  >
    <div className="artwork-image">
      <img
        src="/artworks/artwork-10.jpeg"
        alt="Shri Ram colour pencil art"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="artwork-title">
      <strong>Shri Ram</strong>
      <span>Colour Pencil Art</span>
    </div>
  </article>
</div>
         
        </section>

        <section className="about" id="about">
          <div className="about-number">
          
          </div>

          <div className="about-heading">
            <p className="small-label">
            </p>

            <h2>
              Behind the<em> strokes.</em>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              Hi, I'm Sukruta.
            </p>

            <p>
              Paper-n-Strokes is my little corner of
              the world where photographs, memories
              and imagination become something tangible.
            </p>

            <p>
              I create artwork that feels personal —
              something you can look at years later and
              still remember exactly how that moment felt.
            </p>

            <div className="signature">
              ~ Sukruta Kulkarni
            </div>
          </div>
        </section>

        <section
          className="commission-section"
          id="commission-form"
        >
          <div className="commission-inner">
            <div className="commission-header">
              <p className="small-label">
                HAVE AN IDEA?
              </p>

              <h2>
                Let's create something
                <em> personal.</em>
              </h2>

              <p>
                Tell me a little about the artwork
                you're imagining.
              </p>
            </div>

            <form
              className="commission-form"
              onSubmit={handleCommissionSubmit}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="What should I call you?"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="whatsapp">
                  WhatsApp number
                </label>

                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div className="form-field">
                <label>
                  What would you like drawn?
                </label>

                <div className="choice-grid">
                  <label className="choice">
                    <input
                      type="radio"
                      name="type"
                      value="Portrait"
                    />
                    <span>Portrait</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="type"
                      value="Couple"
                    />
                    <span>Couple</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="type"
                      value="Pet"
                    />
                    <span>Pet</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="type"
                      value="Family"
                    />
                    <span>Family</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="type"
                      value="Other"
                    />
                    <span>Something else</span>
                  </label>
                </div>
              </div>

              <div className="form-field">
                <label>
                  Preferred style
                </label>

                <div className="choice-grid">
                  <label className="choice">
                    <input
                      type="radio"
                      name="style"
                      value="Pencil"
                    />
                    <span>Pencil</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="style"
                      value="Colour"
                    />
                    <span>Colour</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="style"
                      value="Digital"
                    />
                    <span>Digital</span>
                  </label>

                  <label className="choice">
                    <input
                      type="radio"
                      name="style"
                      value="Not sure"
                    />
                    <span>Not sure</span>
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="subjects">
                    Number of subjects
                  </label>

                  <select
                    id="subjects"
                    name="subjects"
                  >
                    <option value="">
                      Select
                    </option>
                    <option value="1">
                      1
                    </option>
                    <option value="2">
                      2
                    </option>
                    <option value="3">
                      3
                    </option>
                    <option value="4+">
                      4+
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="size">
                    Artwork size
                  </label>

                  <select
                    id="size"
                    name="size"
                  >
                    <option value="">
                      Select
                    </option>
                    <option value="A5">
                      A5
                    </option>
                    <option value="A4">
                      A4
                    </option>
                    <option value="A3">
                      A3
                    </option>
                    <option value="Custom">
                      Custom
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="deadline">
                  When do you need it?
                </label>

                <input
                  id="deadline"
                  name="deadline"
                  type="date"
                />
              </div>

              <div className="form-field">
                <label htmlFor="budget">
                  Approximate budget
                </label>

                <select
                  id="budget"
                  name="budget"
                >
                  <option value="">
                    Select a range
                  </option>
                  <option value="Under ₹1000">
                    Under ₹1,000
                  </option>
                  <option value="₹1000 - ₹2500">
                    ₹1,000 – ₹2,500
                  </option>
                  <option value="₹2500 - ₹5000">
                    ₹2,500 – ₹5,000
                  </option>
                  <option value="₹5000+">
                    ₹5,000+
                  </option>
                  <option value="Not sure">
                    I'm not sure
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="description">
                  Tell me about your idea
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  placeholder="Tell me about the person, memory, occasion or idea you'd like to turn into art..."
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="references">
                  Reference photographs
                </label>

                <div className="upload-box">
                  <input
                    id="references"
                    type="file"
                    accept="image/*"
                    multiple
                  />

                  <span>
                    + Add your reference photos
                  </span>

                  <small>
                    JPG, PNG or WEBP
                  </small>
                </div>
              </div>

              <button
                type="submit"
                className="submit-commission"
              >
                Send Commission Request
                <span>↗</span>
              </button>

              <p className="form-note">
                Your request will open in your email app
                and be sent directly to Paper-n-Strokes.
              </p>
            </form>
          </div>
        </section>

        <footer
          className="footer"
          id="contact"
        >
          <div className="footer-brand">
            Paper-n-Strokes
          </div>

          <div className="footer-center">
            Made with patience & imagination.
          </div>

          <div className="footer-links">
            <a
              href="https://www.instagram.com/_suvarna_kulkarni_?stkn=MTd6cDEyNnE4djVwMQ==&utm_source=ig_contact_invite"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/qr/LMT3UJNWK6PZJ1"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:starkeddard36@gmail.com">
              Email
            </a>
          </div>

          <div className="footer-bottom">
            © 2026 Paper-n-Strokes - Sukruta Kulkarni
          </div>
        </footer>
      {selectedArtwork && (
  <div
    className="artwork-lightbox"
    onClick={() => setSelectedArtwork(null)}
  >
    <button
      className="lightbox-close"
      onClick={() => setSelectedArtwork(null)}
      aria-label="Close artwork"
    >
      ×
    </button>

    <div
      className="lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedArtwork.image}
        alt={selectedArtwork.title}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="lightbox-info">
        <strong>{selectedArtwork.title}</strong>
        <span>{selectedArtwork.type}</span>
      </div>
    </div>
  </div>
)}
      </main>

      <button
        className={`back-to-top ${
          showTopButton ? "visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;