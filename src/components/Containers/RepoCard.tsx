import { useCallback, useState } from "react";

import { languagesColor } from "@/utils";
import { getRepoForks, getRepoContents } from "@/services";
import { Repository } from "@/types";
import { Badge, Loader } from "@/components";
import { ArrowDownIcon, EyeIcon, ForkIcon } from "@/assets";

interface RepoCardProps {
  repo: Repository;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const [forks, setForks] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);

  const getLanguageColor = (language: string) => {
    return language in languagesColor ? languagesColor[language] : "#60B5CC";
  };

  const showMore = useCallback(async () => {
    const fetchForksData = async () => {
      try {
        const data = await getRepoForks(repo?.owner?.login, repo?.name);
        const lastThreeForks = data?.length > 0 ? data?.slice(0, 3) : [];
        setForks(lastThreeForks ?? []);
      } catch (error) {
        setForks([]);
      }
    };

    const fetchFileTypes = async () => {
      try {
        const contents = await getRepoContents(repo?.owner?.login, repo?.name);
        setLanguages(contents);
      } catch (error) {
        setLanguages({});
      }
    };
    setLoading(true);
    await fetchForksData();
    await fetchFileTypes();
    setLoading(false);
  }, [repo?.owner?.login, repo?.name]);

  return (
    <div
      className="p-4 border border-gray-200 rounded-md flex flex-col gap-3 break-all justify-between"
      data-testid="repo-card"
    >
      <div className="flex gap-1 items-center">
        <img
          src={repo?.owner?.avatar_url}
          alt={`github avatar of ${repo?.name}`}
          className="w-12 h-12 rounded-full mr-4 bg-white"
        />
        <a
          href={repo?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4493f8] hover:underline text-md break-words font-bold"
        >
          {repo?.name}
        </a>
      </div>

      <p className="text-[#e6edf3] break-word text-sm max-w-[550px]">
        {repo?.description}
      </p>
      <div className="flex md:flex-row md:items-center flex flex-col items-start gap-2">
        {repo?.language && (
          <div className="flex items-center space-x-2">
            <span
              className="block w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo?.language) }}
            ></span>
            <span className="text-gray-300">{repo?.language}</span>
          </div>
        )}
        {repo?.language && (
          <span className="text-gray-300 hidden md:block">.</span>
        )}
        <div className="flex items-center gap-2">
          <ForkIcon />
          <div className="text-gray-300 text-sm">{repo?.forks_count}</div>
        </div>
        <span className="text-gray-300 hidden md:block">.</span>
        <div className="flex items-center gap-2">
          <EyeIcon />
          <div className="text-gray-300 text-sm">{repo?.watchers}</div>
        </div>
      </div>

      {!languages?.length && !forks?.length && (
        <div
          onClick={showMore}
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="text-[#4493f8] text-sm font-bold">Show more</div>
          <ArrowDownIcon />
        </div>
      )}
      {loading && <Loader />}

      <div className="flex flex-wrap gap-1">
        {languages &&
          Object.keys(languages).map((language) => (
            <Badge
              key={language}
              text={language}
              color={getLanguageColor(language)}
            />
          ))}
      </div>

      <div className="flex flex-wrap space-x-2 mt-2">
        {forks?.length > 0 && (
          <span className="text-gray-300 text-sm font-bold">Forks:</span>
        )}
        {forks?.map((fork) => (
          <a
            key={fork?.id}
            href={fork?.owner?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              src={fork?.owner?.avatar_url}
              alt={fork?.owner?.login}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-gray-300 text-sm">{fork?.owner?.login}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoCard;
