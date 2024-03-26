"use client";

import { site_config } from "@/constants";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { ReactNode, useEffect } from "react";
import dotenv from "dotenv";
import { useRouter } from "next/navigation";

dotenv.config();

const projectId = "af57408dd91d275d1204a02f6afa27fb";
// const projectId = process.env.NEXT_WALLET_CONNECT_PROJECT_ID!;

export const SUPPORTED_CHAIN = 11155111;

const sepolia = {
  chainId: SUPPORTED_CHAIN,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://sepolia.infura.io/v3/2ff61f594a6d4a83b3885bc2b464019f",
};

const metadata = {
  name: site_config.name,
  description: site_config.desc,
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepolia],
  projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    const redirectToHome = () => {
      router.push("/home");
    };

    if (!isConnected) {
      router.push("/");
    } else {
      const timeoutId = setTimeout(redirectToHome, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isConnected]);

  return children;
}
