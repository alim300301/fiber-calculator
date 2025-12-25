export default function Topbar({ page }) {
    return (
        <div className="bg-gray-800 p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold capitalize">{page.replace("-", " ")}</h2>
            <div className="flex items-center gap-3">
                <span>Admin</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
}
