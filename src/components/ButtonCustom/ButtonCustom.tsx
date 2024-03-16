import { ReactNode } from "react";
import "./ButtonCustom.css";

interface Props {
  dark?: boolean;
  children: ReactNode;
  onBtnClick: () => void;
}

const ButtonCustom = ({ dark = false, children, onBtnClick }: Props) => {
  return (
    <div>
      <button
        className={dark ? "ButtonCustom ButtonCustomDark" : "ButtonCustom"}
        onClick={onBtnClick}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonCustom;
