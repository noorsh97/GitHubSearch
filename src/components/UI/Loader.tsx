const Loading = () => {
  return (
    <div role="presentation" className="relative flex items-center justify-center w-[50px] h-[50px]" data-testid="loader">
      <div className="relative flex items-center h-full w-[25%] origin-top">
        <div className="w-full h-[25%] bg-[#e6edf3] rounded-full"></div>
      </div>
      <div className="relative flex items-center h-full w-[25%] origin-top">
        <div className="w-full h-[25%] bg-[#e6edf3] rounded-full"></div>
      </div>
      <div className="relative flex items-center h-full w-[25%] origin-top">
        <div className="w-full h-[25%] bg-[#e6edf3] rounded-full"></div>
      </div>
      <div className="relative flex items-center h-full w-[25%] origin-top animate-swing2">
        <div className="w-full h-[25%] bg-[#e6edf3] rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
