export const GreenCheck = ({ className }: { className?: string }) => {
  return (
    <span
      className={`inline-block flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-1 text-white ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4" // You can adjust the size as needed
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

export default GreenCheck;
