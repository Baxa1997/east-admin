import {useLocation, useNavigate} from "react-router-dom";
import React, {ReactNode} from "react";
import {useFormContext} from "./FormProvider";
import {Button} from "@/components/ui/button";

interface LayoutPros {
  children: ReactNode;
}

function Layout({children}: LayoutPros) {
  const navigate = useNavigate();
  const location = useLocation();
  const {form} = useFormContext();
  const {handleSubmit} = form;
  const showLogo =
    location.pathname === "/" ||
    location.pathname === "/id-scanner" ||
    location.pathname === "/camera-verification" ||
    location.pathname === "/paper-sign" ||
    location.pathname === "/finish" ||
    location.pathname === "/operator_view_1" ||
    location.pathname === "/passport-details" ||
    location.pathname === "/form-accept" ||
    location.pathname === "/operator-options" ||
    location.pathname === "/login" ||
    location.pathname === "/operator-fill" ||
    location.pathname === "/final-process";
  const onSubmit = () => {
    console.log("worked");
  };

  return (
    <>
      <div className={"layout"}>
        <Button onClick={() => navigate("/operator")} className="operator_view">
          <img width={"25px"} height={"25px"} src="/user-solid.svg" alt="" />
        </Button>
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
