import { FC, useEffect } from "react";
import { wakeUpServer } from "../api/wake-up-server";

/**
 * ServerWakeup component
 *
 * This component is responsible for waking up the server on initial load.
 * It should be placed high in the component tree, preferably in the main App component.
 */
export const ServerWakeup: FC = () => {
  useEffect(() => {
    const checkIsServerAwake = async () => {
      try {
        await wakeUpServer();
      } catch (error) {
        console.error("Failed to wake up server:", error);
      }
    };

    checkIsServerAwake();
  }, []);

  return null;
};
