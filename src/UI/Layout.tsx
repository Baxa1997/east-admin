import {useLocation} from "react-router-dom";
import React, {ReactNode} from "react";
import {useFormContext} from "./FormProvider";

interface LayoutPros {
  children: ReactNode;
}

function Layout({children}: LayoutPros) {
  const location = useLocation();
  const {form} = useFormContext();
  const {handleSubmit} = form;
  const showLogo =
    location.pathname === "/" ||
    location.pathname === "/id-scanner" ||
    location.pathname === "/camera-verification" ||
    location.pathname === "/paper-sign";

  const onSubmit = () => {
    console.log("worked");
  };

  return (
    <>
      <div className={"layout"}>
        {showLogo && (
          <div className={"logo"}>
            <img src="/logo2.svg" alt="logo" />
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <>{React.cloneElement(children as React.ReactElement, {onSubmit})}</>
        </form>
      </div>
    </>
  );
}

export default Layout;
