import CardStat from "../components/CardStat";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardStat title="Total User" value="1248" />
            <CardStat title="Online Now" value="346" />
            <CardStat title="Traffic" value="512 Mbps" />
        </div>
    );
}
