import {useLocation} from "react-router-dom";
import {ReactNode} from "react";

function Layout({children}: {children: ReactNode}) {
  const location = useLocation();

  const showLogo =
    location.pathname === "/" ||
    location.pathname === "/id-scanner" ||
    location.pathname === "/camera-verification" ||
    location.pathname === "/paper-sign";

  return (
    <>
      <div className={"layout"}>
        {showLogo && (
          <div className={"logo"}>
            <img src="/logo2.svg" alt="logo" />
          </div>
        )}
        {children}
      </div>
    </>
  );
}

export default Layout;
