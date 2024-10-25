export default function Worklog() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-[#000000]">Log Your Work Hours</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#000000]">Project</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#000000]">
                <option>Batu Project</option>
                <option>Malang Project</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#000000]">Hours Worked</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#000000]" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Worklog
            </button>
          </form>
        </div>
      </div>
    );
  }
  