import { Coins, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function Games() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-16">{t("game_h1")}</h1>
      <h2 className="font-thin text-xl text-slate-700 mt-5">{t("game_h2")}</h2>

      <div className="flex flex-col gap-5">
        <div
          className="flex flex-col items-center  w-[350px] p-5
       bg-white rounded-lg relative top-10 gap-2 py-10 border-slate-400 shadow-sm"
        >
          <Users className="text-blue-400 w-20 h-20 " />
          <h1 className="font-semibold text-2xl">{t("pvp_fight_h")}</h1>
          <p className="font-light text-xl text-slate-700 text-center">
            {t("pvp_fight_p")}
          </p>
        </div>
        <div
          className="flex flex-col items-center  w-[350px] p-5 cursor-pointer
          bg-white rounded-lg relative top-10 gap-2 py-10 border-slate-400 shadow-sm"
        >
          <Coins className="text-yellow-400 w-20 h-20 " />
          <h1 className="font-semibold text-2xl">{t("coin_flip_h")}</h1>
          <p className="font-light text-xl text-slate-700 text-center">
            {t("coin_flip_p")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Games;
