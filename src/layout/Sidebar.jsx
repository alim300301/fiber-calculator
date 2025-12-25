import menus from "../data/menus";

export default function Sidebar({ setPage, page }) {
    return (
        <aside className="w-60 bg-gray-800 p-5 space-y-6 min-h-screen">
            <h1 className="text-xl font-bold mb-4">ISP Dashboard</h1>

            <ul className="space-y-3">
                {menus.map((m) => (
                    <li
                        key={m.id}
                        className={`p-2 rounded cursor-pointer ${page === m.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                            }`}
                        onClick={() => setPage(m.id)}
                    >
                        {m.label}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
