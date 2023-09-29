import { AvatarContainer, Status, Image } from "./Avatar.styled";

export const Avatar = ({ avatarUrl, status }) => {
  return (
    <AvatarContainer>
      <Image src={avatarUrl} alt="User avatar" />
      <Status status={status} />
    </AvatarContainer>
  );
};
