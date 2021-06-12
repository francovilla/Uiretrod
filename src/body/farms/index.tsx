
import Stats from './stats'
import Pools from './poolsd/pools'

export default function Farms() {

  

  return(
    <div className="content">
    <div className="title">
        <div className="txt ttl">RetroDEFI <br></br> QBERT Optimized Farms</div>
        <div className="txt tvl ml-auto">TVL $0</div>
    </div>

    <div className="options app-version index-0">
        <div className="option active" data-value="#" data-index="0">Active</div>
        <div className="option retired" data-value="#" data-index="1">Retired</div>
    </div>

    <Stats/>   
    <Pools/>
    </div>)
}