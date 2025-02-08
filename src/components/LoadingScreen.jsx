import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(circle, #BCC9FF, #FEF9FF)",
        color: "#22272A",
      }}
    >
      {/* Spinning Loader */}
      <div className="w-16 h-16 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
