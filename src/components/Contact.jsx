export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Sorry, there was a problem sending your message. Please contact us directly at info@biuracing.com."
    );
  }

  return (
    <section id="contact-section">
      <div className="checker"></div>
      <div className="contact-spotlight"></div>
      <img
        className="contact-car"
        src="/assets/car-outline-2.png"
        alt=""
        aria-hidden="true"
      />
      <div className="wrap">
        <div className="section-head">
          <h2>
            Get in
            <br />
            Touch
          </h2>
          <p>
            Sponsoring, joining, or just curious - tell us what's on your mind.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label>Reason for Contact</label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Sponsorship</option>
                <option>Joining the Team</option>
                <option>General Info</option>
                <option>Else</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea placeholder="Tell us a bit about what you're looking for..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
