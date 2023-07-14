import { AiOutlineLoading3Quarters } from "react-icons/ai";
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full mt-4">
      <AiOutlineLoading3Quarters
        className="mr-2 font-bold animate-spin fill-blue-600"
        size={45}
      />
    </div>
  );
}

export default LoadingSpinner;
