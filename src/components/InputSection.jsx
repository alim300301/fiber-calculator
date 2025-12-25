import { useState } from "react";
import asymmetricRatios from "../data/asymmetricRatios";
import plcValues from "../data/plcValues";

export default function InputSection({ onCalculate }) {
    const [inputPower, setInputPower] = useState("");
    const [ratioName, setRatioName] = useState("");
    const [connectionType, setConnectionType] = useState(""); // connector/splice
    const [threshold, setThreshold] = useState(-25);

    const [useSymmetric, setUseSymmetric] = useState(false);
    const [selectedPlc, setSelectedPlc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        onCalculate({
            inputPower: parseFloat(inputPower),
            ratio: asymmetricRatios.find((r) => r.name === ratioName),
            connectionLoss: connectionType === "connector" ? 0.6 : 0.3,
            threshold: parseFloat(threshold),
            useSymmetric,
            symmetricKey: selectedPlc,
            symmetricLoss: plcValues[selectedPlc] || 0
        });
    };

    return (
        <div className="bg-gray-800 p-5 rounded-xl text-white mb-6">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Input Parameter</h2>

            <form onSubmit={submit} className="space-y-3">

                <label>Power Input (dBm)</label>
                <input
                    type="number"
                    placeholder="contoh: -5"
                    className="w-full p-2 bg-gray-700 rounded"
                    value={inputPower}
                    onChange={(e) => setInputPower(e.target.value)}
                />

                <label>Pilih Splitter Ratio</label>
                <select
                    value={ratioName}
                    onChange={(e) => setRatioName(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded"
                >
                    <option value="">-- pilih --</option>
                    {asymmetricRatios.map((r) => (
                        <option key={r.name} value={r.name}>
                            {r.name} (Big {r.big} dB / Small {r.small} dB)
                        </option>
                    ))}
                </select>

                <label>Jenis Sambungan</label>
                <select
                    value={connectionType}
                    onChange={(e) => setConnectionType(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded"
                >
                    <option value="">-- pilih --</option>
                    <option value="splice">Non-Connector / Splicing (-0.3 dB)</option>
                    <option value="connector">Connector + Adapter (-0.6 dB)</option>
                </select>

                <label>Ambang Treshold (default -25dB)</label>
                <input
                    type="number"
                    className="w-full p-2 bg-gray-700 rounded"
                    value={threshold}
                    onChange={(e) => setThreshold(e.target.value)}
                />

                <label
                    className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all duration-200
  ${useSymmetric
                            ? "bg-blue-600/20 border border-blue-500 text-blue-400 shadow shadow-blue-500/30"
                            : "bg-gray-700/40 border border-gray-600 hover:border-blue-500/50"
                        }`}
                >
                    <input
                        type="checkbox"
                        checked={useSymmetric}
                        onChange={(e) => setUseSymmetric(e.target.checked)}
                        className="w-4 h-4 accent-blue-500 cursor-pointer"
                    />
                    <span className="font-semibold">Tambahkan Splitter PLC</span>
                </label>

                {useSymmetric && (
                    <select
                        value={selectedPlc}
                        onChange={(e) => setSelectedPlc(e.target.value)}
                        className="w-full p-2 bg-gray-700 rounded"
                    >
                        <option value="">-- pilih PLC --</option>
                        {Object.keys(plcValues).map((key) => (
                            <option key={key} value={key}>
                                {key} — Loss {plcValues[key]} dB
                            </option>
                        ))}
                    </select>
                )}

                <button className="w-full bg-blue-600 py-2 rounded font-bold mt-3">
                    Hitung
                </button>
            </form>
        </div>
    );
}
