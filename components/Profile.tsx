import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <Avatar>
      <AvatarImage src="image-avatar.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
