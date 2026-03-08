import Link from 'next/link'

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
            <div className="hero-col-right">
              <div className="hero-card">
                <div className="hero-card-content">
                  <span className="chip">We hire for</span>
                  <div className="hero-card-stats">
                    <div className="hero-card-stats-number">Program Managers to Delivery Leads</div>
                    <div className="hero-card-stats-description">
                      Change managers, business analysts, PMO professionals—people who&apos;ve delivered transformation, not just the job title. Brisbane and Australia-wide.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
