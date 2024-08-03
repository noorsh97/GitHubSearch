interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;
}

const SearchBar = ({ onSearch, query }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      className="bg-[#0d1117] border-2 border-[#e6edf3] rounded-lg text-white outline-none px-6 py-3 text-base hover:border-[#4493f8] cursor-pointer transition w-full md:max-w-[500px]"
    />
  );
};

export default SearchBar;
