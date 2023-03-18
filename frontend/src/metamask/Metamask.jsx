import React, {useState} from 'react';
import  {ethers} from "ethers";

function Metamask() {


    const [selectedAddress, setSelectedAddress] = useState(null);
    const [balance, setBalance] = useState(null);

    const connectToMetamask = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const balance = await provider.getBalance(accounts[0]);
      const balanceInEther = ethers.utils.formatEther(balance);
      setSelectedAddress(accounts[0]);
      setBalance(balanceInEther);
    }
  
    const renderMetamask = () => {
      if (!selectedAddress) {
        return (
          <button onClick={connectToMetamask}>Connect to Metamask</button>
        )
      } else {
        return (
            <div>
                <p>Welcome {selectedAddress}</p>
                <p>Your ETH Balance is: {balance}</p>
            </div>

        );
      }
    }
  
    return(
      <div>
        {renderMetamask()}
      </div>
    )
}

export default Metamask;