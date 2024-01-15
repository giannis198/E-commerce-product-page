import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <Avatar className="ring-Orange hover:ring-2">
      <AvatarImage
        className="cursor-pointer "
        src="/image-avatar.png"
        alt="avatar"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
