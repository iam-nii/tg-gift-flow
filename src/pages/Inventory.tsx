import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import { Star, TrendingDown, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { gift } from "../types";
import Button from "@mui/material/Button";

const GIFTS = [
  {
    id: 1,
    name: "Golden Star",
    value: 50,
    image: "⭐",
  },
  {
    id: 2,
    name: "Diamond Gift",
    value: 100,
    image: "💎",
  },
  {
    id: 3,
    name: "Ruby Heart",
    value: 75,
    image: "❤️",
  },
];
function Inventory() {
  const { t } = useTranslation();
  const [totalValue, setTotalValue] = useState(0);
  const [totalSellValue, setTotalSellValue] = useState<number | null>(null);
  const [selectedGift, setSelectedGift] = useState<gift[] | null>(null);

  useEffect(() => {
    let total = 0;
    GIFTS.forEach((gift) => {
      total += gift.value;
    });
    setTotalValue(total);
  }, []);
  useEffect(() => {
    console.log(selectedGift);
    const total_sell_value = selectedGift?.reduce(
      (total, gift) => total + gift.value,
      0
    );
    setTotalSellValue(total_sell_value ?? null);
  }, [selectedGift]);
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const giftId = Number(e.target.value);
    const foundItem = GIFTS?.find((gift) => gift.id === giftId);
    if (!foundItem) return;
    setSelectedGift((prev) => {
      if (!prev) return [foundItem];
      return prev.some((gift) => gift.id === giftId)
        ? prev.filter((gift) => gift.id !== giftId)
        : [...prev, foundItem];
    });
  };
  return (
    <div className="h-[170vh]">
      <div className="flex flex-col items-center mt-16">
        <h1 className="font-bold text-4xl ">{t("inventory.h1")}</h1>
        <h2>{t("inventory.h2")}</h2>
      </div>
      <div className="border-purple-300 border-[1px] mx-auto mt-5 p-5 rounded-lg bg-purple-50 w-xs flex justify-between">
        <div>
          <h1>{t("inventory.div1_p1")}</h1>
          <h2 className="text-purple-600 font-bold text-4xl">{totalValue}</h2>
          <p>{t("inventory.div1_p2")}</p>
        </div>
        <Star className="text-yellow-500 my-auto" size={50} />
      </div>
      <div id="gifts" className="items-center flex flex-col gap-5 mt-10">
        {GIFTS.slice()
          .sort((a, b) => a.value - b.value)
          .map((gift) => (
            <div className="w-xs border-[1px] shadow-sm border-slate-400 rounded-lg p-7">
              <div className="flex items-center gap-4">
                <Checkbox
                  size="large"
                  value={gift.id}
                  onChange={handleCheckBoxChange}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#000000",
                    },
                  }}
                />
                <p className="text-3xl">{gift.image}</p>
                <div className="flex flex-col gap-2 font-semibold">
                  <h1>{gift.name}</h1>
                  <Chip
                    label={`${gift.value} ${t("inventory.div1_p2")}`}
                    className="w-28"
                    sx={{
                      fontSize: 16,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {selectedGift && selectedGift?.length > 0 && (
        <div
          id="sellGifts"
          className="w-xs bg-blue-100 border-blue-200 border-3 flex flex-col items-center 
          gap-4 mt-5 mx-auto rounded-lg p-4"
        >
          <h1 className="text-left w-full text-xl font-semibold">
            {t("inventory.sellGifts_h1")} : {selectedGift.length}
          </h1>
          <h2 className="text-left w-full text-xl font-semibold">
            {t("inventory.sellGifts_h2")} : {totalSellValue}
          </h2>

          <Button
            startIcon={<TrendingDown />}
            className="w-[95%]"
            sx={{
              background: "#039e00",
              textTransform: "none",
              color: "white",
              fontSize: 18,
              padding: 1,
              "& .MuiButton-startIcon": {
                marginLeft: "0px", // or your desired value
                // you can use px as well: marginRight: "12px",
                // or negative: marginRight: "-4px",
              },
            }}
          >
            {`${t("inventory.sellGifts_btn1")} ${Math.floor(
              totalSellValue! * 0.9
            )} ${t("stars")} (-10%)`}
          </Button>
          <Button
            startIcon={<Upload />}
            className="w-[95%]"
            sx={{
              textTransform: "none",
              background: "transparent",
              border: "2px solid blue",
              color: "blue",
              fontSize: 16,
              fontWeight: 100,
              padding: 1,
            }}
          >
            {`${t("inventory.sellGifts_btn2")} ${Math.floor(
              totalSellValue! * 0.95
            )} ${t("stars")} (-5%)`}
          </Button>
          <div className="w-full">
            <div className="flex w-full space-y-1">
              <p className="text-gray-600 text-sm">
                • {t("inventory.sellGifts_p1")}
              </p>
            </div>
            <div className="flex w-full">
              <p className="text-gray-600 text-sm">
                • {t("inventory.sellGifts_p2")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
