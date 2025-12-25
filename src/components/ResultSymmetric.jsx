export default function ResultSymmetric({ result }) {
    if (!result) return null;

    const { symmetricKey, symmetricLoss, smallPort, finalSym, threshold } = result;
    const statusOK = finalSym >= threshold;

    return (
        <div className="bg-gray-800 p-5 rounded-xl text-white mt-4 border border-white/10">
            <h2 className="text-xl font-bold text-blue-400 mb-2">
                Hasil Splitter PLC ({symmetricKey})
            </h2>

            <p>Dari Port Kecil : <b>{smallPort.toFixed(2)} dBm</b></p>
            <p>Loss Splitter PLC : -{symmetricLoss} dB</p>

            <p className="mt-2">Power Akhir :</p>
            <p className="text-2xl font-bold">
                {finalSym.toFixed(2)} dBm
            </p>

            <p
                className={`font-bold mt-3 px-3 py-2 rounded-lg inline-block ${statusOK
                    ? "bg-green-900/40 text-green-400 border border-green-500"
                    : "bg-red-900/40 text-red-400 border border-red-500"
                    }`}
            >
                {statusOK
                    ? "OK Untuk masuk router pelanggan"
                    : "TIDAK LAYAK - Power terlalu rendah"}
            </p>
        </div>
    );
}
