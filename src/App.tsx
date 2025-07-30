function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-4">Counter with Redux</h1>
      <div className="flex space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Increment</button>
      <div className="text-xl font-semibold">0</div>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Decrement</button>
      </div>
    </div>
  );
}

export default App;
