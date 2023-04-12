import "./App.css";

function App() {
  return (
    <div>
      <header className="p-4 flex justify-between">
        <a href="" className="flex item-center gap-1">
          <img
            src="https://nashvilleluggagestorage.com/wp-content/uploads/2022/06/LuggageDrop_DuoTone_Logo_500x200.svg"
            alt="logo"
            width="100"
            height="300"
          />
          <span className="font-bold text-xl">Luggage Drop</span>
        </a>
        <div className="gap-2 flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-300">
          <div>Location</div>
          <div className="border-l border-gray-300"></div>
          <div>Day</div>
          <div className="border-l border-gray-300"></div>
          <div>Items</div>
          <button className="bg-primary text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
