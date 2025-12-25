import { useState } from "react";
import plcValues from "../data/plcValues";

export default function SplitterOptions({ onChange }) {
    const [splitters, setSplitters] = useState([{ id: Date.now(), type: "1:2" }]);

    const updateSplitter = (id, value) => {
        const updated = splitters.map(s =>
            s.id === id ? { ...s, type: value } : s
        );
        setSplitters(updated);
        onChange(updated);
    };

    const addSplitter = () => {
        setSplitters([...splitters, { id: Date.now(), type: "1:2" }]);
    };

    const removeSplitter = (id) => {
        const updated = splitters.filter(s => s.id !== id);
        setSplitters(updated);
        onChange(updated);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-bold mb-3">Splitter Symmetric</h2>

            {splitters.map((s) => (
                <div key={s.id} className="flex gap-3 mb-2">
                    <select
                        className="p-2 rounded bg-gray-700 text-white w-full"
                        value={s.type}
                        onChange={(e) => updateSplitter(s.id, e.target.value)}
                    >
                        {Object.keys(plcValues).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>

                    <button
                        onClick={() => removeSplitter(s.id)}
                        className="px-3 bg-red-600 rounded hover:bg-red-700"
                    >
                        ✕
                    </button>
                </div>
            ))}

            <button
                onClick={addSplitter}
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
                + Tambah Splitter
            </button>
        </div>
    );
}
