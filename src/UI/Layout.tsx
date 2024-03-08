import {useLocation} from "react-router-dom";
import React, {ReactNode} from "react";
import {useForm, UseFormReturn} from "react-hook-form";

interface LayoutProps {
  children: ReactNode;
}

function Layout({children}: LayoutProps) {
  const location = useLocation();

  const {control} = useForm();

  const showLogo =
    location.pathname === "/" ||
    location.pathname === "/id-scanner" ||
    location.pathname === "/camera-verification" ||
    location.pathname === "/paper-sign";

  return (
    <div className="layout">
      {showLogo && (
        <div className="logo">
          <img src="/logo2.svg" alt="logo" />
        </div>
      )}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = child.props;
          const hasRegisterProp = "register" in childProps;
          if (hasRegisterProp) {
            return React.cloneElement(child);
          }
        }
        return child;
      })}
    </div>
  );
}

export default Layout;
