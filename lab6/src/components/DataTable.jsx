import React, { useEffect, useState } from "react";

const statusColor = {
  "New": "bg-blue-100 text-blue-600",
  "In-progress": "bg-yellow-100 text-yellow-600",
  "Completed": "bg-green-100 text-green-600",
};



export default function DataTable() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setIsEdit(true);
    setSelected(user);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setIsEdit(false);
    setSelected({ name: "", company: "", value: "", date: "", status: "New" });
    setModalOpen(true);
  };

  const handleSave = async () => {
    if (isEdit) {
      await fetch(`${API_URL}/${selected.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selected),
      });
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selected),
      });
    }
    setModalOpen(false);
    fetchData();
  };

  return (
    <div className="p-6 space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/src/assets/File text 1.png" alt="" />
        <h2 className="text-lg font-bold">Detailed report</h2>
      </div>
  
      <div className="flex items-center space-x-2">
        <button className="flex items-center gap-1 text-sm border border-pink-500 text-pink-500 px-4 py-2 rounded-md">
          <img src="/src/assets/Download.png" alt="Import" className="w-4 h-4" />
          Import
        </button>
  
        <button className="flex items-center gap-1 text-sm border border-pink-500 text-pink-500 px-4 py-2 rounded-md">
          <img src="/src/assets/Move up.png" alt="Export" className="w-4 h-4" />
          Export
        </button>
  
        <button
          onClick={handleAdd}
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
        >
          + Add User
        </button>
      </div>
    </div>
  

      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-500 uppercase">
            <tr>
                <th className="p-3">
                    <input type="checkbox" />
                </th>
              <th className="p-3">Customer Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Order Value</th>
              <th className="p-3">Order Date</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {data.map((user, index) => (
                <tr key={user.id}>
                <td className="p-3">
                    <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center gap-2">
                    <img
                    src={`/src/assets/Avatar${index % 6 === 0 ? "" : ` (${index % 6})`}.png`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                </td>
                <td className="p-3">{user.company}</td>
                <td className="p-3">${user.value}</td>
                <td className="p-3">{user.date}</td>
                <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[user.status]}`}>
                    {user.status}
                    </span>
                </td>
                <td className="p-3">
                    <button onClick={() => handleEdit(user)}>
                    <img src="/src/assets/create.png" alt="edit" className="w-5 h-5" />
                    </button>
                </td>
                </tr>
            ))}
            </tbody>

        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold">{isEdit ? "Edit User" : "Add User"}</h3>
            <input type="text" placeholder="Name" className="input w-full" value={selected.name} onChange={(e) => setSelected({ ...selected, name: e.target.value })} />
            <input type="text" placeholder="Company" className="input w-full" value={selected.company} onChange={(e) => setSelected({ ...selected, company: e.target.value })} />
            <input type="number" placeholder="Value" className="input w-full" value={selected.value} onChange={(e) => setSelected({ ...selected, value: e.target.value })} />
            <input type="text" placeholder="Date" className="input w-full" value={selected.date} onChange={(e) => setSelected({ ...selected, date: e.target.value })} />
            <select value={selected.status} className="input w-full" onChange={(e) => setSelected({ ...selected, status: e.target.value })}>
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded bg-gray-200">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded bg-pink-500 text-white">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
