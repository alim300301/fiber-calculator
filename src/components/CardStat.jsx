export default function CardStat({ title, value }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
    );
}
