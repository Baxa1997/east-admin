import React, {ReactNode} from "react";
import {useFormContext} from "./FormProvider";
import {useLocation} from "react-router-dom";

interface LayoutPros {
  children: ReactNode;
}

function Layout({children}: LayoutPros) {
  const {form} = useFormContext();
  const location = useLocation();
  const {handleSubmit} = form;
  const showLogo =
    !location.pathname?.includes("checking-info") &&
    !location.pathname?.includes("rates") &&
    !location.pathname?.includes("service-rate") &&
    !location.pathname?.includes("address");
  const onSubmit = () => {
    console.log("worked");
  };

  return (
    <>
      <div className={"layout"}>
        <div className="leftSideBackground"></div>
        <div className="rightSideBackground"></div>
        <div className="bottomSideBackground"></div>
        {showLogo && (
          <a href="/" className={"logo"}>
            <img src="/logo2.svg" alt="logo" />
          </a>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <>{React.cloneElement(children as React.ReactElement, {onSubmit})}</>
        </form>
      </div>
    </>
  );
}

export default Layout;
