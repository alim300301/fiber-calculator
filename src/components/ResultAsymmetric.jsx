export default function ResultAsymmetric({ result }) {
    if (!result) return null;

    const { bigPort, smallPort, threshold } = result;

    return (
        <div className="bg-gray-800 p-5 rounded-xl text-white mt-4">
            <h2 className="text-xl font-bold text-yellow-400">Hasil Splitter Ratio</h2>

            <p>Port Besar : <b>{bigPort.toFixed(2)} dBm</b></p>
            <p>Port Kecil : <b>{smallPort.toFixed(2)} dBm</b></p>

            <p className={`font-bold mt-2 ${smallPort >= threshold ? "text-green-400" : "text-red-400"
                }`}>
                Status Port Kecil : {smallPort >= threshold ? "OK" : "DROP"}
            </p>
        </div>
    );
}
