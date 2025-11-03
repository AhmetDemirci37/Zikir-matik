import React, { useState, useCallback } from 'react';

const ResetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M5.523 13.523a7.5 7.5 0 0111.458-2.553M20 20v-5h-5m-1.477-6.477a7.5 7.5 0 00-11.458 2.553" />
  </svg>
);

const App: React.FC = () => {
  const [mainCount, setMainCount] = useState<number>(0);
  const [targetCount, setTargetCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    if (mainCount === 32) {
      setMainCount(0);
      setTargetCount(prevTarget => prevTarget + 1);
    } else {
      setMainCount(prevMain => prevMain + 1);
    }
    setTotalCount(prevTotal => prevTotal + 1);
  }, [mainCount]);

  const handleReset = useCallback(() => {
    setMainCount(0);
    setTargetCount(0);
    setTotalCount(0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 select-none">
      <div 
        className="font-orbitron text-2xl text-cyan-300 tracking-widest mb-6"
        style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 4px rgba(255, 255, 255, 0.8)' }}
      >
        @eylencebilgi
      </div>
      <div className="relative w-full max-w-sm mx-auto bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl shadow-cyan-500/10 border border-gray-700/50 overflow-hidden">
        
        {/* Main Display */}
        <div className="p-8 pb-4">
          <div className="bg-black/50 rounded-lg p-6 text-center border-2 border-gray-700 shadow-inner shadow-black">
            <h1 className="font-orbitron text-8xl md:text-9xl font-bold text-cyan-400 tracking-widest" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}>
              {String(mainCount).padStart(2, '0')}
            </h1>
          </div>
        </div>

        {/* Target & Total Display */}
        <div className="px-8 pb-4 space-y-3">
          <div className="flex items-center justify-between bg-black/30 rounded-lg p-3 border border-gray-700/80">
            <span className="text-lg font-semibold text-gray-300 uppercase tracking-wider">Hedef</span>
            <div className="bg-black/50 px-4 py-1 rounded-md border border-gray-600">
                <span className="font-orbitron text-3xl font-medium text-amber-400" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}>
                {targetCount}
                </span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-black/30 rounded-lg p-3 border border-gray-700/80">
            <span className="text-lg font-semibold text-gray-300 uppercase tracking-wider">Toplam</span>
            <div className="bg-black/50 px-4 py-1 rounded-md border border-gray-600">
                <span className="font-orbitron text-3xl font-medium text-amber-400" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}>
                {totalCount}
                </span>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col items-center justify-center px-8 pt-4 pb-16 space-y-8">
          {/* Main Increment Button */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <button
              onClick={handleIncrement}
              className="relative w-full h-full bg-gray-800 rounded-full border-4 border-gray-700 flex items-center justify-center text-cyan-400 text-6xl font-bold transition-all duration-200 ease-in-out
                         hover:bg-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30
                         active:scale-95 active:bg-cyan-900 active:border-cyan-400 active:text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Reset Button */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700 transition-colors
                       hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50"
            aria-label="Sıfırla"
          >
            <ResetIcon className="w-5 h-5" />
            <span className="font-semibold">Sıfırla</span>
          </button>
        </div>
      </div>
       <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Digital Zikirmatik</p>
        </footer>
    </div>
  );
};

export default App;
