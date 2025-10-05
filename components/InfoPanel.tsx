
import React, { useState } from 'react';

const InfoPanel: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x8fdbf33543799c2e4ccb6abd66a448365beae137';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mt-8 md:mt-12 px-4 select-none">
      <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
        Pointless Coin
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-mono">
        Embrace the void. In a universe of purpose, we offer a sanctuary of meaninglessness.
        There is no roadmap. There is no utility. There is only .&lt;
      </p>

      <div className="relative mt-10 font-mono text-sm md:text-base bg-black/30 border border-gray-700 rounded-lg p-3 flex items-center justify-between max-w-sm mx-auto backdrop-blur-sm">
        <span className="truncate text-gray-300 pr-4" aria-label="Contract Address">{contractAddress}</span>
        <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors flex-shrink-0" aria-label="Copy address">
          <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        {copied && (
            <div className="absolute -top-9 right-0 bg-green-600 text-white text-xs font-bold rounded-md px-2 py-1 transition-opacity duration-300">
                Copied!
            </div>
        )}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <a href="https://dexscreener.com/avalanche/0x8fdbf33543799c2e4ccb6abd66a448365beae137" target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-300 border border-cyan-300 rounded-full px-8 py-3 text-lg hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:scale-105">
            Buy Now
        </a>
      </div>

      <div className="mt-10 flex justify-center">
        <a href="https://x.com/pointlesscoin" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Follow on X">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
        </a>
      </div>
    </div>
  );
};

export default InfoPanel;
