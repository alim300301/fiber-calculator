import { useState } from "react";
import InputSection from "./components/InputSection";
import ResultAsymmetric from "./components/ResultAsymmetric";
import ResultSymmetric from "./components/ResultSymmetric";

export default function App() {
  const [asymmetricResult, setAsymmetricResult] = useState(null);
  const [symmetricResult, setSymmetricResult] = useState(null);

  const calculate = ({
    inputPower,
    ratio,
    connectionLoss,
    threshold,
    useSymmetric,
    symmetricKey,
    symmetricLoss
  }) => {
    const bigPort = inputPower - connectionLoss - ratio.big;
    const smallPort = inputPower - connectionLoss - ratio.small;

    setAsymmetricResult({ bigPort, smallPort, threshold });

    if (useSymmetric) {
      const finalSym = smallPort - symmetricLoss;
      setSymmetricResult({
        symmetricKey,
        symmetricLoss,
        smallPort,
        finalSym,
        threshold,
      });
    } else {
      setSymmetricResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Fiber Optic Splitter Calculator
      </h1>

      <InputSection onCalculate={calculate} />
      <ResultAsymmetric result={asymmetricResult} />
      <ResultSymmetric result={symmetricResult} />
      {/* Footer */}
      <footer className="mt-10 text-center text-gray-400 border-t border-white/10 pt-6">
        <p className="text-sm opacity-80">
          Developer: <span className="font-semibold text-blue-400">Alim Sujito</span> <br />
          <span className="opacity-90">ACS Multi Technology © 2025</span>
        </p>

        <div className="flex justify-center gap-4 mt-3 text-lg">
          <span className="hover:text-blue-400 transition cursor-pointer">⚡</span>
          <span className="hover:text-green-400 transition cursor-pointer">📡</span>
          <span className="hover:text-yellow-400 transition cursor-pointer">💡</span>
          <span className="hover:text-red-400 transition cursor-pointer">🔧</span>
        </div>

        <p className="text-xs mt-3 text-gray-500 italic">
          "Semua Beres Kalau Ada Koneksi."
        </p>
      </footer>
    </div>
  );
}
