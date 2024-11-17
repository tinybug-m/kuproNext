#!/bin/bash

# Create the necessary directories
mkdir -p src/app/Home
mkdir -p src/app/Commodities
mkdir -p src/app/Sustainability
mkdir -p src/components
mkdir -p src/utils

# Create the basic files in the `app` directory
cat > src/app/globals.css <<EOL
/* Add your global styles here */
body {
  font-family: Arial, sans-serif;
}
EOL

cat > src/app/layout.js <<EOL
import './globals.css';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}
EOL

cat > src/app/page.js <<EOL
import Home from './Home/page';

export default function HomePage() {
  return <Home />;
}
EOL

# Create Home page files
cat > src/app/Home/page.js <<EOL
"use client";
import useScrollHandler from '@/utils/useScrollHandler';
import Hero from './Hero';
import OurStory from './OurStory';
import OurValueAdd from './OurValueAdd';
import OurTeam from './OurTeam';
import OfficeLocations from './OfficeLocations';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, 4) // Update to total number of components - 1
        : Math.max(prevIndex - 1, 0);
      return nextIndex;
    });
  };

  useScrollHandler(changeComponent);

  const components = [
    <Hero key="1" />,
    <OurStory key="2" />,
    <OurValueAdd key="3" />,
    <OurTeam key="4" />,
    <OfficeLocations key="5" />
  ];

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ transition: 'opacity 0.8s ease-in-out' }}>
        {components[currentIndex]}
      </div>
    </div>
  );
}
EOL

cat > src/app/Home/Hero.js <<EOL
"use client";
export default function Hero() {
  return <div>Hero Component</div>;
}
EOL

cat > src/app/Home/OurStory.js <<EOL
"use client";
export default function OurStory() {
  return <div>Our Story Component</div>;
}
EOL

cat > src/app/Home/OurValueAdd.js <<EOL
"use client";
export default function OurValueAdd() {
  return <div>Our Value-Add Component</div>;
}
EOL

cat > src/app/Home/OurTeam.js <<EOL
"use client";
export default function OurTeam() {
  return <div>Our Team Component</div>;
}
EOL

cat > src/app/Home/OfficeLocations.js <<EOL
"use client";
export default function OfficeLocations() {
  return <div>Office Locations Component</div>;
}
EOL

# Create Commodities page files
cat > src/app/Commodities/page.js <<EOL
"use client";
import useScrollHandler from '@/utils/useScrollHandler';
import Hero from './Hero';
import SoftCommodities from './SoftCommodities';
import BaseMetals from './BaseMetals';
import { useState } from 'react';

export default function Commodities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, 2) // Update to total number of components - 1
        : Math.max(prevIndex - 1, 0);
      return nextIndex;
    });
  };

  useScrollHandler(changeComponent);

  const components = [
    <Hero key="1" />,
    <SoftCommodities key="2" />,
    <BaseMetals key="3" />
  ];

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ transition: 'opacity 0.8s ease-in-out' }}>
        {components[currentIndex]}
      </div>
    </div>
  );
}
EOL

cat > src/app/Commodities/Hero.js <<EOL
"use client";
export default function Hero() {
  return <div>Energy & Chemicals Hero Component</div>;
}
EOL

cat > src/app/Commodities/SoftCommodities.js <<EOL
"use client";
export default function SoftCommodities() {
  return <div>Soft Commodities Component</div>;
}
EOL

cat > src/app/Commodities/BaseMetals.js <<EOL
"use client";
export default function BaseMetals() {
  return <div>Base Metals Component</div>;
}
EOL

# Create Sustainability page files
cat > src/app/Sustainability/page.js <<EOL
"use client";
import useScrollHandler from '@/utils/useScrollHandler';
import Hero from './Hero';
import DrivingEnergyTransition from './DrivingEnergyTransition';
import CarbonCreditTrading from './CarbonCreditTrading';
import { useState } from 'react';

export default function Sustainability() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeComponent = (direction) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = direction === 'next'
        ? Math.min(prevIndex + 1, 2) // Update to total number of components - 1
        : Math.max(prevIndex - 1, 0);
      return nextIndex;
    });
  };

  useScrollHandler(changeComponent);

  const components = [
    <Hero key="1" />,
    <DrivingEnergyTransition key="2" />,
    <CarbonCreditTrading key="3" />
  ];

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ transition: 'opacity 0.8s ease-in-out' }}>
        {components[currentIndex]}
      </div>
    </div>
  );
}
EOL

cat > src/app/Sustainability/Hero.js <<EOL
"use client";
export default function Hero() {
  return <div>Sustainable Sourcing and Production Hero Component</div>;
}
EOL

cat > src/app/Sustainability/DrivingEnergyTransition.js <<EOL
"use client";
export default function DrivingEnergyTransition() {
  return <div>Driving the Energy Transition Component</div>;
}
EOL

cat > src/app/Sustainability/CarbonCreditTrading.js <<EOL
"use client";
export default function CarbonCreditTrading() {
  return <div>Carbon Credit Trading Component</div>;
}
EOL

# Create global components
cat > src/components/Footer.js <<EOL
"use client";
export default function Footer() {
  return <footer>Footer Component</footer>;
}
EOL

cat > src/components/Menu.js <<EOL
"use client";
export default function Menu() {
  return (
    <nav>
      <div>Logo</div>
      <button>Home</button>
      <button>Commodities</button>
      <button>Sustainability</button>
      <button>Contact</button>
    </nav>
  );
}
EOL

# Create utility files
cat > src/utils/useScrollHandler.js <<EOL
import { useEffect, useRef } from 'react';

const useScrollHandler = (changeComponent) => {
  const isThrottling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isThrottling.current) return;
      isThrottling.current = true;

      const direction = event.deltaY > 0 ? 'next' : 'previous';
      changeComponent(direction);

      setTimeout(() => {
        isThrottling.current = false;
      }, 1000);
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0].clientY;
      const direction = touchStartY.current - touchEndY > 50
        ? 'next'
        : (touchEndY - touchStartY.current > 50 ? 'previous' : null);
      if (direction) changeComponent(direction);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [changeComponent]);

  return null;
};

export default useScrollHandler;
EOL

