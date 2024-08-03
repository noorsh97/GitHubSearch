import React from "react";
import { User } from "@/types";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md flex gap-1 break-all items-center" data-testid="user-card">
      <img
        src={user?.avatar_url}
        alt={`github avatar of ${user?.login}`}
        className="w-12 h-12 rounded-full mr-4 bg-white"
      />
      <a
        href={user?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4493f8] hover:underline text-md break-words font-bold hover:underline"
      >
        {user?.login}
      </a>
    </div>
  );
};

export default UserCard;
