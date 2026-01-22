export default function Output() {
  return (
    <div className="w-1/2 flex flex-col bg-[#020617]">

      {/* Output Header */}
      <div className="h-10 flex items-center justify-between px-4 border-b border-gray-700">
        <span className="font-semibold text-sm">Output</span>
        <button className="text-sm text-red-400 hover:text-red-500">
          Clear
        </button>
      </div>

      {/* Output Body */}
      <div className="flex-1 p-4 text-green-400">
        Output will appear here...
      </div>
    </div>
  );
}
