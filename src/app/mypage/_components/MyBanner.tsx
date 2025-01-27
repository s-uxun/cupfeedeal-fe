import Link from "next/link";
import Image from "next/image";

// icons
import { Information, LevelBannerBg, MyBannerBg } from "@assets/icons";
// types
import { MyInfo } from "src/types/mypage";

interface BannerProps {
  userInfo: MyInfo;
  isLevel: boolean;
}

const MyBanner = ({ isLevel, userInfo }: BannerProps) => {
  const { user_level, cupcatImgUrl, cafe_name, birth_date } = userInfo;

  return (
    <div className="w-full overflow-hidden relative z-5">
      {isLevel ? <LevelBannerBg /> : <MyBannerBg />}

      {/* 내 정보 */}
      <div className="absolute top-0 left-0 py-6 px-5 flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <span
            className={`flex flex-row flex-grow-0  items-center justify-center py-0.5 ${
              isLevel ? "w-[72px]" : "w-[84px] pl-5 pr-3"
            } gap-1 bg-Dark_Blue mb-3 rounded-[38px]`}
          >
            <div className="Body_1_bold text-white">Lv.{user_level}</div>
            {!isLevel && (
              <Link href={"/mypage/level"}>
                <Information
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </Link>
            )}
          </span>

          {isLevel ? (
            <div className="flex shrink-0 flex-col w-44">
              <div className="Headline_3">
                {cafe_name} 옆의
                <br />
                컵캣
              </div>
              <div className="Body_1_med text-Grey-700 mt-2">
                {birth_date} 만남
              </div>
            </div>
          ) : (
            <div className="Headline_3">
              컵캣이 무럭무럭
              <br />
              자라고 있어요!
            </div>
          )}
        </div>
        <div className="relative w-[54%] aspect-[198/289]">
          <Image
            alt={cupcatImgUrl}
            src={cupcatImgUrl}
            fill
            style={{ objectFit: "contain" }}
            className="p-2"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MyBanner;
