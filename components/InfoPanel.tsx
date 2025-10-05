
import React, { useState } from 'react';

// =================================================================
// CONFIGURATION
// All editable content and links are stored here for easy access.
// =================================================================
const CONFIG = {
  CONTRACT_ADDRESS: '0x8fdbf33543799c2e4ccb6abd66a448365beae137',
  BUY_NOW_URL: 'https://dexscreener.com/avalanche/0x8fdbf33543799c2e4ccb6abd66a448365beae137',
  X_URL: 'https://x.com/pointlesscoin',
};

// =================================================================
// Info Panel Component
// Displays the coin name, description, contract address,
// and social/purchase links.
// =================================================================
const InfoPanel: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [copied, setCopied] = useState(false);

  // --- EVENT HANDLERS ---
  const handleCopy = () => {
    navigator.clipboard.writeText(CONFIG.CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // --- RENDER ---
  return (
    <div className="text-center mt-8 md:mt-12 px-4 select-none">
      {/* --- HEADER SECTION --- */}
      <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
        Pointless Coin
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-mono">
        Embrace the void. In a universe of purpose, we offer a sanctuary of meaninglessness.
        There is no roadmap. There is no utility. There is only .&lt;
      </p>

      {/* --- CONTRACT ADDRESS SECTION --- */}
      <div className="relative mt-10 font-mono text-sm md:text-base bg-black/30 border border-gray-700 rounded-lg p-3 flex items-center justify-between max-w-lg w-full mx-auto backdrop-blur-sm">
        <span className="text-gray-300 pr-4" aria-label="Contract Address">{CONFIG.CONTRACT_ADDRESS}</span>
        <button 
          onClick={handleCopy} 
          className={`transition-all duration-300 flex-shrink-0 flex items-center gap-2 ${copied ? 'text-green-400' : 'text-gray-400 hover:text-white'}`} 
          aria-label={copied ? 'Address Copied' : 'Copy address'}
        >
          {copied ? (
            <>
              <span className="font-bold text-xs" style={{ textShadow: '0 0 8px rgba(52, 211, 153, 0.7)' }}>Copied</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* --- CALL TO ACTION --- */}
      <div className="mt-10 flex justify-center gap-4">
        <a href={CONFIG.BUY_NOW_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-300 border border-cyan-300 rounded-full px-8 py-3 text-lg hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:scale-105">
            Buy Now
        </a>
      </div>

      {/* --- SOCIALS --- */}
      <div className="mt-10 flex justify-center">
        <a href={CONFIG.X_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Follow on X">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
        </a>
      </div>
    </div>
  );
};

export default InfoPanel;