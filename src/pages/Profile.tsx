import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import { Star, Trophy } from "lucide-react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function Profile() {
  const { t } = useTranslation();
  const [startCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    setStarCount(150);
  }, []);

  const handleSentGift = () => {};
  return (
    <div className="h-[130vh]">
      <div className="flex flex-col items-center gap-4 mt-16">
        <h1 className="text-4xl font-bold">{t("profile.title")}</h1>
        <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
        <h1>{"@username"}</h1>
        <div
          className="border-2 border-yellow-400 rounded-lg  w-xs
         bg-amber-100 flex items-center gap-4 h-32 p-8"
        >
          <Star className="text-yellow-400" size={50} />
          <div className="items-center flex flex-col">
            <h1 className="font-bold text-4xl">{startCount}</h1>
            <p className="text-lg">{t("profile.stars")}</p>
          </div>
          <Button
            sx={{
              backgroundColor: "#1c2d41",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "semibold",
            }}
            onClick={handleSentGift}
          >
            Вывести
          </Button>
        </div>
        <div
          id="statistics"
          className="border-slate-100 border-[2px] shadow-sm rounded-lg p-7 w-xs"
        >
          <div className="flex items-center gap-2 font-bold">
            <Trophy className="w-8 h-8" />
            <h1 className="text-3xl font-semibold">Статистика</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div
              id="games_played"
              className="flex-col items-center justify-center flex bg-[#dfeeff] h-24 rounded-xl p-2"
            >
              <p className="text-4xl font-bold text-sky-600">{15}</p>
              <p className="font-light">{t("profile.games_played")}</p>
            </div>
            <div
              id="games_won"
              className="flex-col items-center justify-center flex bg-green-100 h-24 rounded-xl p-2"
            >
              <p className="text-4xl font-bold text-green-600">{8}</p>
              <p className="font-light">{t("profile.games_won")}</p>
            </div>
            <div
              id="winrate "
              className="flex-col items-center justify-center flex bg-purple-100 h-24 rounded-xl p-2"
            >
              <p className="text-4xl font-bold text text-purple-600">{53}%</p>
              <p className="font-light">{t("profile.winrate")}</p>
            </div>
            <div
              id="earned"
              className="flex-col items-center justify-center flex bg-amber-100 h-24 rounded-xl p-2"
            >
              <p className="text-4xl font-bold text-yellow-600">{450}</p>
              <p className="font-light">{t("profile.earned")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
