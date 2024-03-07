import defaultAvatar from "@/assets/defaultAvatar.png";
import styles from "./UserProfile.module.css";

type UserProfileProps = {
  userImage?: string;
  userName: string;
};

export const UserProfile = ({ userImage, userName }: UserProfileProps) => {
  const imageUrl = userImage || defaultAvatar.src;
  return (
    <div className="flex w-[212px] h-[60px] px-2 bg-[#393D5E] rounded-lg items-center">
      <div className="h-11 justify-start items-center gap-2 inline-flex">
        <div className={styles.hexagon}>
          <img src={imageUrl} alt="userImage" />
        </div>
        <div className="text-white text-md font-normal leading-[7px]">{userName}</div>
      </div>
    </div>
  );
};
