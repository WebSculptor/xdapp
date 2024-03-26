"use client";

import { site_config } from "@/constants";
// NetworkStatusProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useNetworkConnection } from "use-network-connection";

// Create the context
const NetworkStatusContext = createContext({});

// Custom hook to use the network status context
export const useNetworkStatusContext = () => useContext(NetworkStatusContext);

// Network status provider component
const NetworkStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<boolean>();
  const { isOnline } = useNetworkConnection();

  useEffect(() => {
    if (isOnline) {
      setStatus(true);
      toast("Connection restored", {
        description: `Welcome back, you can continue with ${site_config.name}`,
      });
    } else {
      setStatus(false);
      toast("No internet connection detected", {
        description: "Please restart your network and try again.",
        dismissible: false,
      });
    }

    return () => {};
  }, [isOnline]);

  return (
    <NetworkStatusContext.Provider value={{ status }}>
      {children}
    </NetworkStatusContext.Provider>
  );
};

export default NetworkStatusProvider;
