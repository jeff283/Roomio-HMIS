import { ReactNode } from "react";
import "./PortalContentHolder.css";

interface Props {
  width: string;
  height: string;
  marginBottom?: number;
  children: ReactNode;
}

const PortalContentHolder = ({
  children,
  width,
  height,
  marginBottom = 0,
}: Props) => {
  const styles = {
    width: `${width}`, // Use template literals for dynamic values
    height: `${height}`,
    marginBottom: `${marginBottom}px`,
  };
  return (
    <div style={styles} className="PortalContentHolder">
      {children}
    </div>
  );
};

export default PortalContentHolder;
