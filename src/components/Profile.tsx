// components/Layout/Sidebar/Profile.tsx
import React from "react";

interface Profile {
  name: string;
  role: string;
  avatar: string;
}

const Profile: React.FC<Profile> = ({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) => {
  return (
    <div className="px-4 py-6 border-b border-gray-200">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={avatar}
          alt="Profile avatar"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-[#002868]">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
