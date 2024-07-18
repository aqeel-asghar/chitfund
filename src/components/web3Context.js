import React, { createContext, useEffect, useState } from "react";
import Web3 from "web3";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [isConnectedd, setIsConnectedd] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");
  const [chainId, setChainId] = useState("");

  async function connectToMetaMask() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        console.log("connectToMetaMask called");
        setWeb3(web3);
        const metaMaskAccount = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setIsConnectedd(true);
        let splitedMetaMaskAddress;
        if (metaMaskAccount) {
          splitedMetaMaskAddress =
            metaMaskAccount[0].substring(0, 6) +
            "......" +
            metaMaskAccount[0].substring(
              metaMaskAccount[0].length - 4,
              metaMaskAccount[0].length
            );
        }
        //plesese review it
        // setConnectedAddress(splitedMetaMaskAddress);
        console.log(metaMaskAccount[0]);
        setConnectedAddress(metaMaskAccount[0]);
        // setConnectedAddress("0x3f74eAFb7f5212E08Fa31ceeFb61D1Ca0b1a7f09");
        // setConnectedAddress("0xf8939Ebea5dfA10985F2399dd725Ae4F79db0991");
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isConnectedd === true) {
      console.log(isConnectedd);
      console.log("Already connected to MetaMask11");
    }
    connectToMetaMask();
  }, [isConnectedd]);

  useEffect(() => {
    registerEvents();
    console.log("registered events called");
  }, []);

  function registerEvents() {
    window.ethereum.on("accountsChanged", (a) => {
      setConnectedAddress(a[0]);
    });

    window.ethereum.on("chainChanged", (c) => {
      setChainId(c);
      console.log(chainId);
    });

    window.ethereum.on("disconnect", (c) => {
      console.log("MetaMask discconnected", c);
      setIsConnectedd(false);
    });
  }

  return (
    <Web3Context.Provider
      value={{
        web3,
        isConnectedd,
        connectedAddress,
        connectToMetaMask,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
