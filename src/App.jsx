import React from 'react'
import Nav from "./Nav/nav.jsx";
import Background from "./body/background";
import Farms from "./body/farms/index.tsx";
import Footer from './Footer/footer.tsx'
import Wb3 from 'web3'
import getWeb3 from './hooks/utils.js';
import util from './utils/aprLib/index.js';

export default class App extends React.Component{

  componentDidMount = async()=>{
    await getWeb3()
  }


  render (){
    return(<div className="App">
      <main className="app preload">
        <Nav />
        <Background />
        <Farms />
        <Footer />
      </main>
    </div>)
  }
  
  }
