
import React from 'react';
import aimuLogo from "./assets/aimu-logo.png";


export const COMPANY_NAME = "AiMU";
export const FULL_COMPANY_NAME = "Asset Investment Management U Link";
export const SLOGAN_PRIMARY = "Maximizing land potential since day one";
export const SLOGAN_SECONDARY = "Redefining the Residential Future.";

export const CONTACT_INFO = {
  phone: "206-324-8845",
  email: "info@aimulink.com",
  website: "www.aimulink.com",
  address: "Premium Residential District, Seattle, WA"
};

export const Logo: React.FC<{ className?: string }> = ({ className = "h-24" }) => (
  <img
    src={aimuLogo}
    alt="AiMU Logo"
    className={`${className} w-auto select-none`}
  />
);

