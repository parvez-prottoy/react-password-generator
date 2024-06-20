import useGeneratePass from "./hooks/useGeneratePass";

const App = () => {
  const {
    password,
    length,
    setLength,
    setNumberAllowed,
    setCharAllowed,
    copy,
    copyPassword,
    passwordGenerate,
  } = useGeneratePass();
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center text-xl font-bold my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-2 px-3"
          placeholder="Password"
          value={password}
          readOnly
        />
        <button
          onClick={copyPassword}
          className={`outline-none text-white px-3 py-0.5 shrink-0 ${
            copy ? "bg-green-700" : "bg-blue-700"
          }`}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={8}
            max={32}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:({length})</label>
        </div>
        <div
          onChange={() => setNumberAllowed((prev) => !prev)}
          className="flex items-center gap-x-1"
        >
          <input type="checkbox" id="numberInput" />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div
          onChange={() => setCharAllowed((prev) => !prev)}
          className="flex items-center gap-x-1"
        >
          <input type="checkbox" id="characterInput" />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      <button
        onClick={passwordGenerate}
        className="outline-none w-full bg-blue-700 text-white px-3 py-1 shrink-0 mt-2"
      >
        Generate
      </button>
    </div>
  );
};

export default App;
