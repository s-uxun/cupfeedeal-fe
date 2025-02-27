"use client";

import { useEffect, useState } from "react";
// icons
import { BottomLine, Back } from "@assets/icons";
// store & hooks
import useSelectedCafeStore from "@store/useSelectedCafeStore";

interface HeaderProps {
  handleBackClick: () => void;
}

const BottomSheetHeader = ({ handleBackClick }: HeaderProps) => {
  const [showBackIcon, setShowBackIcon] = useState(false);
  const { showBottomSheet, isSheetOpen } = useSelectedCafeStore();

  // 헤더 아이콘 변경
  useEffect(() => {
    if (showBottomSheet) {
      const timer = setTimeout(() => {
        setShowBackIcon(isSheetOpen);
      }, 100);

      return () => {
        clearTimeout(timer); // 타이머 정리
      };
    }
  }, [isSheetOpen, showBottomSheet]);

  return (
    <div>
      {showBackIcon ? (
        <div className="bg-white">
          <Back className="-rotate-90 mt-3 ml-5" onClick={handleBackClick} />
        </div>
      ) : (
        <div className="bg-white h-8 px-5 pt-3 flex flex-col justify-start items-center rounded-t-2xl shadow-[0_0_17px_4px_rgba(116,116,128,0.21)]">
          <BottomLine width={30} height={4} />
        </div>
      )}
    </div>
  );
};

export default BottomSheetHeader;
