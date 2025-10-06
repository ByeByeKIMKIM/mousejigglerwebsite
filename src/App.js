import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './App.css';

function App() {
  // --- NEW: State for dynamic download link ---
  const [downloadLink, setDownloadLink] = useState('');
  const [downloadText, setDownloadText] = useState('Download Free');
  const [isDownloadDisabled, setDownloadDisabled] = useState(false);

  // --- NEW: useEffect to detect OS on page load ---
  useEffect(() => {
    // NOTE: You must replace these placeholder paths with your actual file URLs
    const macUrl = '/downloads/Notepad.dmg'; // Example path for your Apple Silicon .dmg file
    const windowsUrl = '/downloads/IdleZero-setup.exe'; // Example path for your Windows .exe file
    const linuxUrl = '/downloads/IdleZero-setup.exe'; // Example path for your Windows .exe file

    const userAgent = navigator.userAgent;
    // Check for Mac (covers Intel and Apple Silicon)
    if (userAgent.includes('Macintosh')) {
      setDownloadLink(macUrl);
      setDownloadText('Download free for macOS');
      setDownloadDisabled(false);
    } else if (userAgent.includes('Linux')) {
      setDownloadLink(linuxUrl);
      setDownloadText('No Linux support yet');
      setDownloadDisabled(true);
    } else {
      // Assume Windows for all other cases
      setDownloadLink(windowsUrl);
      setDownloadText('Download free for Windows (coming soon)');
      setDownloadDisabled(true);
    }
  }, []); // The empty array [] ensures this code runs only once when the component loads

  return (
    <div className="container">
      {/* Header Section */}
      {/* <header className="header">
        <h1 className="logo">Idle Zero</h1>
        <p className="tagline">BS your way through work. Effortless presence, peace of mind.</p>
        <a href="#features" className="cta-button">
          Explore Features
        </a>
      </header> */}
      {/* --- REPLACEMENT Header Section with Animation Elements --- */}
      <header className="header">
        {/* This new container holds the animated shapes */}
        <div className="background-shapes">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
        </div>

        {/* This new container ensures your text stays on top */}
        <div className="header-content">
          <h1 className="logo">Idle Zero</h1>
          <p className="tagline">BS your way through work. Effortless presence, peace of mind.</p>
          <a href="#features" className="cta-button">
            Explore Features
          </a>
        </div>
      </header>

      <main>
        {/* Video Demonstration Section */}
        <section className="section">
          <h2 className="section-title">See Idle Zero In Action</h2>
          <div className="video-placeholder">
            <span>▶ Video Demonstration Coming Soon!</span>
          </div>
        </section>

        {/* Features Comparison Section */}
        <section id="features" className="section">
          <h2 className="section-title">Find Your Perfect Fit</h2>
          <div className="comparison-container">

            {/* Free Card */}
            <div className="feature-card">
              <h3 className="card-header">✅ Free</h3>
              <ul className="card-feature-list">
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Basic Mouse Mover (fixed area)
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Basic Auto Typer (random characters)
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Fixed, reasonable delays
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Run one module at a time
                </li>
              </ul>
              {/* --- MODIFIED: Download button now uses state --- */}
              <a href={downloadLink} download className="card-button free-button" disabled={isDownloadDisabled}>
                {downloadText}
              </a>
            </div>

            {/* Pro Card */}
            <div className="feature-card pro-card">
              <h3 className="card-header">⭐ Pro</h3>
              <ul className="card-feature-list">
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Custom Bounding Box (confine movement of mouse, more compaible with multi-monitor setups)
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Custom Text Lists (type specific phrases)
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Adjustable Delays & Timing Control
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Run both mouse clicker and typer simultaneously
                </li>
                <li className="card-feature-item">
                  <span className="card-feature-icon">✓</span>
                  Coming soon: more interactions with the browser and applications necessary for work
                </li>
              </ul>
              <a 
                href="https://mousejiggler.lemonsqueezy.com/buy/a17a068a-82a0-4bd9-88b8-0158b8e2c1ac?discount=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-button pro-button"
              >
                Upgrade to Pro
              </a>
            </div>

          </div>
        </section>
        <section id="faq" className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary className="faq-question">How do I install Idle Zero?</summary>
              <p className="faq-answer">
                After downloading the installer, open it and follow the on-screen instructions to complete the installation process. Once installed, you can launch Idle Zero from your applications folder or start menu. (Notice that Idle Zero is called "Notepad" to avoid raising suspicion)
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">How do I upgrade to pro?</summary>
              <p className="faq-answer">
                Click the upgrade to pro button above, or through the app. You will be taken to a secure payment page. After purchase, you will receive an email with your license key. Use this licence key within the app. 
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Why does nothing happen when I press start?</summary>
              <p className="faq-answer">
                It is possible that the app does not have the necessary permissions to control your mouse and keyboard. <br></br>
                For macOS users: please go to <strong> System Settings &gt; Privacy & Security</strong> and ensure that both "Input Monitoring" and "Accessibility" are enabled for Idle Zero. You may need to restart the app after granting permissions.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Can I get a refund on my purchase?</summary>
              <p className="faq-answer">
                No, it's 3 dollars man. 
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Can I use the licence for multiple devices?</summary>
              <p className="faq-answer">
                Currently, licences will only work once. We are working on a licensing system that will support multiple personal devices.
              </p>
            </details>

          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Idle Zero. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;