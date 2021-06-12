import Web3 from 'web3';
import PROVIDER from './provider'

const getWeb3 = () => {
  return new Promise(async(resolve, reject) => {    
      // Modern dapp browsers...
      if (window.ethereum) {        
        try {
          if(window.ethereum.isMetaMask){
          const provider = window.ethereum  
          if(provider){
          await provider.request({
            method: 'wallet_addEthereumChain',
            params:PROVIDER[BSCTest],
          })
        }
      }
        window.web3 = new Web3(window.ethereum);
        console.log('Web3 enabled in window.web3')
        let accounts = await window.web3.eth.getAccounts();      
        await window.ethereum.enable();
        
        resolve(true);
        } catch (error) {
          reject(undefined);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        window.web3 = web3
        console.log("Injected web3 detected.");
        resolve(true);
      }
      // Fallback to localhost; use dev console port by default...
      else {
       /* const provider = new Web3.providers.HttpProvider(
          "http://localhost:9545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");*/
        resolve(undefined);
      }    
  });
};

export default getWeb3;