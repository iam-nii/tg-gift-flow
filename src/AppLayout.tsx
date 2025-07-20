import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { User, Users, Gamepad2, Gift } from "lucide-react";
import { useState } from "react";

function AppLayout() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<string>("games");
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Fixed bottom nav bar */}
      <aside
        className="fixed bottom-0 left-0 right-0 bg-white border-slate-300 border-t-[1px]
      p-2 flex justify-around text-sm shadow-xl h-20"
      >
        <Link
          to="/games"
          onClick={() => setCurrentPage("games")}
          className={`flex flex-col justify-center items-center px-3 ${
            currentPage == "games" && "bg-slate-900 text-white rounded-lg"
          }`}
        >
          <Users />
          <p>{t("menu.games")}</p>
        </Link>
        <Link
          to="/roulette"
          onClick={() => setCurrentPage("roulette")}
          className={`flex flex-col justify-center items-center px-3
            ${currentPage == "roulette" && "bg-slate-900 text-white rounded-lg"}
            `}
        >
          <Gamepad2 />
          <p>{t("menu.roulette")}</p>
        </Link>
        <Link
          to="/inventory"
          onClick={() => setCurrentPage("inventory")}
          className={`flex flex-col justify-center items-center px-3 ${
            currentPage == "inventory" && "bg-slate-900 text-white rounded-lg"
          }`}
        >
          <Gift />
          <p>{t("menu.inventory")}</p>
        </Link>
        <Link
          to="/profile"
          onClick={() => setCurrentPage("profile")}
          className={`flex flex-col justify-center items-center px-3 ${
            currentPage == "profile" && "bg-slate-900 text-white rounded-lg"
          }`}
        >
          <User />
          <p>{t("menu.profile")}</p>
        </Link>
      </aside>
    </div>
  );
}

export default AppLayout;
