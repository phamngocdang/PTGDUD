export default function Navbar() {
    return (
      <header className="h-16 flex items-center justify-between bg-white px-6 shadow-sm">
        <h1 className="text-xl font-bold text-pink-500">Dashboard</h1>
  
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="/src/assets/Search.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-200 bg-gray-100 text-sm placeholder:text-gray-400 w-64"
            />
          </div>

          <button>
            <img
              src="/src/assets/Bell 1.png"
              alt="Notification"
              className="w-5 h-5"
            />
          </button>
  
          <button>
            <img
              src="/src/assets/Question 1.png"
              alt="Help"
              className="w-5 h-5"
            />
          </button>
          <img
            src="/src/assets/Avatar 313.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </header>
    );
  }
  