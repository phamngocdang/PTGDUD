export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 h-16 px-6 ">
          <img src="/src/assets/Image 1858.png" alt="Logo Icon" className="h-8" />
        </div>
      </div>

      {/* Footer V2 Card */}
      <div className="p-4">
        <div className="bg-[#f1f5ff] rounded-xl p-4 text-center">
          <img
            src="/src/assets/Group.png"
            alt=""
            className="w-full h-auto mb-4"
          />
          <p className="text-sm font-medium text-gray-900">V2.0 is available</p>
          <button className="mt-2 w-full text-sm border border-blue-500 text-blue-500 py-1 rounded-md hover:bg-blue-50">
            Try now
          </button>
        </div>
      </div>
    </aside>
  );
}
