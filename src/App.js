import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [roiInputs, setROIInputs] = useState({
    location: 'gym',
    footTraffic: 200,
    pricePerSpray: 2,
    operatingDays: 30
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locationMultipliers = {
    gym: { name: 'Fitness Center', multiplier: 1.2, avgUses: 4 },
    pub: { name: 'Pub/Bar', multiplier: 1.5, avgUses: 6 },
    club: { name: 'Nightclub', multiplier: 2.0, avgUses: 8 },
    restaurant: { name: 'Restaurant', multiplier: 1.3, avgUses: 5 },
    hotel: { name: 'Hotel', multiplier: 1.4, avgUses: 5 }
  };

  const calculateROI = () => {
    const location = locationMultipliers[roiInputs.location];
    const dailyUsers = Math.floor(roiInputs.footTraffic * 0.15);
    const dailyUses = dailyUsers * location.avgUses;
    const dailyRevenue = dailyUses * roiInputs.pricePerSpray * location.multiplier;
    const monthlyRevenue = dailyRevenue * roiInputs.operatingDays;
    const monthlyProfit = monthlyRevenue * 0.75;
    const yearlyProfit = monthlyProfit * 12;
    const breakEvenMonths = 4999 / monthlyProfit;
    const roi = ((yearlyProfit - 4999) / 4999) * 100;

    return {
      dailyUsers,
      dailyUses,
      dailyRevenue: Math.round(dailyRevenue),
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyProfit: Math.round(monthlyProfit),
      yearlyProfit: Math.round(yearlyProfit),
      breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
      roi: Math.round(roi)
    };
  };

  const handleROIInputChange = (field, value) => {
    setROIInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const roiResults = calculateROI();

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">
              <div className="scent-drop"></div>
              <div className="scent-sparkle"></div>
            </div>
            <span className="logo-text">ScentNGoo</span>
          </div>
          <nav className="nav">
            <a href="#opportunity" className="nav-link">Opportunity</a>
            <a href="#product" className="nav-link">Product</a>
            <a href="#invest" className="nav-link">Invest Now</a>
          </nav>
          <button className="cta-button-header" onClick={() => setShowCart(true)}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Transform Your Business Into A 
              <span className="gradient-text"> Luxury Fragrance Empire</span>
            </h1>
            <p className="hero-subtitle">
              Generate £2,000-£5,000+ monthly passive income with our premium 10-scent perfume vending machines. 
              Perfect for pubs, clubs, gyms & indoor venues.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">625</span>
                <span className="stat-label">Sprays per 100ml</span>
              </div>
              <div className="stat">
                <span className="stat-number">10</span>
                <span className="stat-label">Premium Scents</span>
              </div>
              <div className="stat">
                <span className="stat-number">3-6</span>
                <span className="stat-label">Month ROI</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="cta-button-primary" onClick={() => setShowCart(true)}>Start Your Empire £4,999</button>
              <button className="cta-button-secondary" onClick={() => setShowROICalculator(true)}>View ROI Calculator</button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="opportunity-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The £Multi-Million Fragrance Opportunity</h2>
            <p className="section-subtitle">Perfect for indoor venues: pubs, clubs, gyms & premium establishments</p>
          </div>
          
          <div className="competitive-advantage">
            <h3>Why ScentNGoo Dominates The Competition</h3>
            <div className="advantage-grid">
              <div className="advantage-item">
                <div className="advantage-icon">10</div>
                <h4>10 Premium Scents</h4>
                <p>Double the variety of competitors (5 scents). More choices = More sales</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">📱</div>
                <h4>Smart App Monitoring</h4>
                <p>Real-time inventory tracking. True passive income.</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">625</div>
                <h4>625 Sprays Per Bottle</h4>
                <p>Maximum efficiency = Maximum profit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="product-section">
        <div className="container">
          <h2 className="product-title">The ScentNGoo Luxury Vending System</h2>
          <p className="product-description">
            State-of-the-art technology meets premium design. 
          </p>
          
          <div className="roi-calculator">
            <h3>Your ROI Breakdown</h3>
            <div className="roi-grid">
              <div className="roi-item">
                <span className="roi-label">Initial Investment</span>
                <span className="roi-value">£4,999</span>
              </div>
              <div className="roi-item">
                <span className="roi-label">Monthly Revenue</span>
                <span className="roi-value">£2,800+</span>
              </div>
              <div className="roi-item highlight">
                <span className="roi-label">Annual Profit</span>
                <span className="roi-value">£28,600+</span>
              </div>
            </div>
            <button className="roi-calc-button" onClick={() => setShowROICalculator(true)}>
              Calculate Your Custom ROI
            </button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="invest" className="investment-section">
        <div className="container">
          <h2 className="investment-title">Start Your Fragrance Empire Today</h2>
          <div className="investment-package">
            <div className="package-header">
              <h3>Complete Business Package</h3>
              <div className="price">
                <span className="currency">£</span>
                <span className="amount">4,999</span>
              </div>
            </div>
            <div className="package-includes">
              <div className="include-item">✅ Premium ScentNGoo Vending Machine</div>
              <div className="include-item">✅ 10 Luxury Fragrance Bottles</div>
              <div className="include-item">✅ Professional Installation</div>
              <div className="include-item">✅ 1-Year Warranty</div>
              <div className="include-item">✅ 24/7 Support</div>
            </div>
            <button className="invest-button" onClick={() => setShowCart(true)}>
              Secure Your Machine Now - £4,999
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      {showROICalculator && (
        <div className="modal-overlay" onClick={() => setShowROICalculator(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>ROI Calculator</h2>
              <button className="close-btn" onClick={() => setShowROICalculator(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="calculator-inputs">
                <div className="input-group">
                  <label>Location Type:</label>
                  <select 
                    value={roiInputs.location} 
                    onChange={e => handleROIInputChange('location', e.target.value)}
                    className="calculator-input"
                  >
                    <option value="gym">Fitness Center</option>
                    <option value="pub">Pub/Bar</option>
                    <option value="club">Nightclub</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Daily Foot Traffic:</label>
                  <input 
                    type="number" 
                    value={roiInputs.footTraffic}
                    onChange={e => handleROIInputChange('footTraffic', parseInt(e.target.value))}
                    className="calculator-input"
                  />
                </div>
                <div className="input-group">
                  <label>Price Per Spray (£):</label>
                  <input 
                    type="number" 
                    value={roiInputs.pricePerSpray}
                    onChange={e => handleROIInputChange('pricePerSpray', parseFloat(e.target.value))}
                    className="calculator-input"
                    step="0.5"
                  />
                </div>
              </div>
              
              <div className="calculator-results">
                <h3>Your Projected Results</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <span className="result-label">Monthly Profit:</span>
                    <span className="result-value">£{roiResults.monthlyProfit}</span>
                  </div>
                  <div className="result-item highlight">
                    <span className="result-label">Annual Profit:</span>
                    <span className="result-value">£{roiResults.yearlyProfit}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Break-even:</span>
                    <span className="result-value">{roiResults.breakEvenMonths} months</span>
                  </div>
                </div>
                <button className="invest-now-btn" onClick={() => {setShowROICalculator(false); setShowCart(true);}}>
                  Invest Now - £4,999
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Complete Your Purchase</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="cart-item">
                <h3>ScentNGoo Premium Vending Machine</h3>
                <p>Complete business package - £4,999</p>
                <div className="payment-form">
                  <input type="text" placeholder="Full Name" className="form-input" />
                  <input type="email" placeholder="Email Address" className="form-input" />
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                  <button className="checkout-btn">Proceed to Payment - £4,999</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <span className="logo-text">ScentNGoo</span>
            </div>
            <p>📧 scentngoo@gmail.com | 📞 +44 (0) 20 7946 0958</p>
            <p>&copy; 2025 ScentNGoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;