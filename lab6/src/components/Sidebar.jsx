import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", to: "/", icon: "/src/assets/Squares four 1.png" },
  { name: "Projects", to: "/projects", icon: "/src/assets/Folder.png" },
  { name: "Teams", to: "/teams", icon: "/src/assets/Groups.png" },
  { name: "Analytics", to: "/analytics", icon: "/src/assets/Pie chart.png" },
  { name: "Messages", to: "/messages", icon: "/src/assets/Chat.png" },
  { name: "Integrations", to: "/integrations", icon: "/src/assets/Code.png" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 h-16 px-6 ">
          <img src="/src/assets/Image 1858.png" alt="Logo Icon" className="h-8" />

        </div>

        {/* Navigation */}
        <nav className="mt-4 px-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-800"
                }`
              }
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
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
