import Web3 from 'web3';

const getWeb3 = async () => {
      // Modern dapp browsers...
      if (window.ethereum) {        
        try {
          if(window.ethereum.isMetaMask){
          const provider = window.ethereum  
          if(provider){
          await provider.request({
            method: 'wallet_addEthereumChain',
            params:PROVIDER[56],
          })
        }
      }
        window.web3 = new Web3(window.ethereum);
        let accounts = await window.web3.eth.getAccounts();      
        await window.ethereum.enable();
        console.log('nice')
        
        } catch (error) {
          console.log(error)
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
};


export default getWeb3;
