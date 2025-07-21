import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { User, Users, Gamepad2, Gift } from "lucide-react";
import { useEffect, useState } from "react";

function AppLayout() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<string>("games");

  useEffect(() => {
    const pathName = window.location.pathname;
    const pathSegment = pathName.split("/")[1];
    setCurrentPage(pathSegment);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-slate-50 ">
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
          className={`flex flex-col justify-center items-center px-3 w-20 ${
            currentPage == "games" && "bg-slate-800 text-white rounded-lg"
          }`}
        >
          <Users />
          <p className="font-semibold text-xs mt-2">{t("menu.games")}</p>
        </Link>
        <Link
          to="/roulette"
          onClick={() => setCurrentPage("roulette")}
          className={`flex flex-col justify-center items-center px-3 w-20 
            ${currentPage == "roulette" && "bg-slate-800 text-white rounded-lg"}
            `}
        >
          <Gamepad2 />
          <p className="font-semibold text-xs mt-2">{t("menu.roulette")}</p>
        </Link>
        <Link
          to="/inventory"
          onClick={() => setCurrentPage("inventory")}
          className={`flex flex-col justify-center items-center px-3 w-20 ${
            currentPage == "inventory" && "bg-slate-800 text-white rounded-lg"
          }`}
        >
          <Gift />
          <p className="font-semibold text-xs mt-2">{t("menu.inventory")}</p>
        </Link>
        <Link
          to="/profile"
          onClick={() => setCurrentPage("profile")}
          className={`flex flex-col justify-center items-center px-3 w-20 ${
            currentPage == "profile" && "bg-slate-800 text-white rounded-lg"
          }`}
        >
          <User />
          <p className="font-semibold text-xs mt-2">{t("menu.profile")}</p>
        </Link>
      </aside>
    </div>
  );
}

export default AppLayout;
