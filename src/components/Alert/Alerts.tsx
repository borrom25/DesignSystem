import { memo } from "react";
import { Alert } from "./Alert";
import {
  mapAlertTypeToColor,
  useAlerts,
  useAlertStore,
} from "./model/alert-store";
import { alertStyles } from "./styles";

export const Alerts = memo(function Alerts() {
  const alerts = useAlerts();
  const { closeAlert } = useAlertStore();

  return (
    <div className={alertStyles.programmaticStack}>
      {alerts.map((alertEntry) => (
        <Alert
          key={alertEntry.id}
          type={mapAlertTypeToColor(alertEntry.type)}
          title={alertEntry.message}
          description={alertEntry.description}
          actions={alertEntry.actions}
          closable={alertEntry.closable}
          onClose={() => closeAlert(alertEntry.id)}
          className={
            alertEntry.isOpen
              ? alertStyles.programmaticOpen
              : alertStyles.programmaticClosed
          }
        />
      ))}
    </div>
  );
});
