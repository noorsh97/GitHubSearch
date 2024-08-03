import Image from "next/image";
import { Empty } from "@/assets";

const NoResults = () => {
  return (
    <div className="w-full flex flex-col items-center mt-5 gap-3">
      <Image src={Empty} alt="No Results" height={350} width={350} />
      <div className="text-[#e6edf3] font-bold">No Results Found</div>
    </div>
  );
};

export default NoResults;
