import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-4'>
      <h1 className='text-2xl font-bold mb-4'>Counter with Redux</h1>
      <div className='flex space-x-4'>
        <button
          onClick={() => handleIncrement(5)}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Increment
        </button>
        <div className='text-xl font-semibold'>{count}</div>
        <button
          onClick={() => handleDecrement()}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
