import React, {ReactNode} from "react";
import {useFormContext} from "./FormProvider";

interface LayoutPros {
  children: ReactNode;
}

function Layout({children}: LayoutPros) {
  const {form} = useFormContext();
  const {handleSubmit} = form;
  const showLogo = true;
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
