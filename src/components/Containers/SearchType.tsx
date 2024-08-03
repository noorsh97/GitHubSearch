import { SearchType } from "@/types";
import { SEARCH_TYPES } from "@/utils";

interface SearchTypeProps {
  onSelectType: (type: SearchType) => void;
  type: SearchType;
}

const SearchTypeSelector = ({ onSelectType, type }: SearchTypeProps) => {
  return (
    <select
      value={type}
      onChange={(e) => onSelectType(e.target.value as SearchType)}
      className="bg-[#0d1117] border-2 border-[#e6edf3] rounded-lg text-white outline-none px-6 py-3 text-base hover:border-[#4493f8] cursor-pointer transition w-full md:max-w-[250px]"
    >
      <option value={SEARCH_TYPES?.USERS}>Users</option>
      <option value={SEARCH_TYPES?.REPOSITORIES}>Repositories</option>
    </select>
  );
};

export default SearchTypeSelector;
