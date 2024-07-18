import React, { useContext } from "react";
import Metamask from "../Assets/metamask.svg";
import { Web3Context } from "./web3Context";

const Navbar = () => {
  const { web3, isConnectedd, connectedAddress, connectToMetaMask } =
    useContext(Web3Context);

  const handleConnect = async () => {
    if (isConnectedd === false) {
      await connectToMetaMask();
    }
  };
  return (
    <nav className="bg-[#f4faff] p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-#024180 font-bold ml-2 text-xl ">
          <span className="text-[#f15825]">Chit</span>Fund
        </span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-10">
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          Home
        </a>
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          Become a member
        </a>
        <a href="#" className="text-[#024180] hover:text-[#f15825]">
          About Us
        </a>
      </div>

      {/* Connect Wallet Button (MetaMask) */}
      <button
        type="button"
        onClick={handleConnect}
        className="bg-[#f15825] font-medium text-white flex items-center hover:text-[#f15825] hover:bg-gray-200 px-4 py-2 rounded-md"
      >
        <img class="mr-2" src={Metamask} alt="metamask" />
        {connectedAddress
          ? `${connectedAddress.slice(0, 4)}...${connectedAddress.slice(
              connectedAddress.length - 4
            )}`
          : "Connect Wallet"}

        {console.log(connectedAddress)}
        {console.log("isConnectedd", isConnectedd)}
      </button>
    </nav>
  );
};

export default Navbar;
