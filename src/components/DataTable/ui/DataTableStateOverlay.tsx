import type { ReactNode } from "react";
import { tableStyles } from "../styles";

interface TableStateOverlayProps {
  colSpan: number;
  height: number;
  width: number;
  children: ReactNode;
}

export function TableStateOverlay({
  colSpan,
  height,
  width,
  children,
}: TableStateOverlayProps) {
  return (
    <tbody>
      <tr>
        <td
          className={tableStyles.stateCell}
          colSpan={Math.max(colSpan, 1)}
          style={{ height }}
        >
          <div
            className={tableStyles.stateOverlay}
            data-table-state-overlay="true"
            style={{ width: width || "100%", height: "100%" }}
          >
            <div className={tableStyles.stateOverlayContent}>{children}</div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
