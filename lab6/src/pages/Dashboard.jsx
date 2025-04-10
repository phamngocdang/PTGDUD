

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <img src="/src/assets/Squares four 1.png" alt="" />
        <h2 className="text-xl font-bold text-gray-800">Overview</h2>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-pink-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">Turnover</h4>
            <img src="/src/assets/Button 1509.png" className="w-10 h-10" />
          </div>
          <p className="text-2xl font-bold">$92,405</p>
          <p className="text-green-600 text-sm mt-1">▲ 5.39% period of change</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">Profit</h4>
            <img src="/src/assets/Button 1529.png" className="w-10 h-10" />
          </div>
          <p className="text-2xl font-bold">$32,218</p>
          <p className="text-green-600 text-sm mt-1">▲ 5.39% period of change</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">New customer</h4>
            <img src="/src/assets/Button 1530.png" className="w-10 h-10" />
          </div>
          <p className="text-2xl font-bold">298</p>
          <p className="text-green-600 text-sm mt-1">▲ 6.84% period of change</p>
        </div>
      </section>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <span>63 results</span>

            <div className="flex items-center gap-2">
                <button className="px-2 text-gray-500 hover:text-black">&lt;</button>

                <button className="w-8 h-8 rounded-full bg-pink-500 text-white">1</button>
                <button className="w-8 h-8 text-gray-500 hover:text-black">2</button>
                <button className="w-8 h-8 text-gray-500 hover:text-black">3</button>
                <button className="w-8 h-8 text-gray-500 hover:text-black">4</button>

                <span className="text-gray-400">...</span>

                <button className="w-8 h-8 text-gray-500 hover:text-black">10</button>
                <button className="w-8 h-8 text-gray-500 hover:text-black">11</button>

                <button className="px-2 text-gray-500 hover:text-black">&gt;</button>
            </div>
        </div>

    </div>
  );
}
