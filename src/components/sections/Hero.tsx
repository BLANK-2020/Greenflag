export function Hero() {
  return (
    <div className="hero-box">
      <img
        src="/hero-bg.png"
        alt=""
        className="hero-image"
      />
      <div className="hero-inner">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-col-left">
              <h1 className="hero-heading" aria-label="Technology and transformation hiring. Done properly.">
                Technology and transformation hiring. Done properly.
              </h1>
              <p className="hero-description" aria-label="Green Flag works with organisations delivering real technology and business change.">
                Green Flag works with organisations delivering real technology and business change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
