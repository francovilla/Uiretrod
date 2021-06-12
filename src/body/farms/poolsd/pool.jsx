
import info from '../../../assets/svg/info-primary.svg'
import $ from 'jquery'
import getBalance from '../../../utils/tokenUtils'
import { useState, useEffect } from 'react'
import Web3 from 'web3'



export default function Pool(props) {
    var [balance, setBalance] = useState(0)
    var [depositState, setDepositState] = useState(0)
    var [withdrawState, setWithdrawState] = useState(0)

    const loadall = async ()=>{
        let balanced = await getBalance(props.token_address,'0x7448d69060C8D6c75223c6286e889EFBd44a6a26')
        setBalance(balanced)
    }

    const maxButton = async (param)=>{
        if(param == 'deposit'){
            setDepositState(balance)
            
            console.log(depositState)
        } else if(param == 'withdraw') {
            setWithdrawState(balance)
        }
        
    }

    const handdleInput = async (param, event)=>{
        event.preventDefault()
        if(param == 'withdraw' && event.target.value < 9999999999){
            if(event.target.value){
                setWithdrawState(Web3.utils.toWei(event.target.value, 'ether'))
            } else {
                setWithdrawState(0)
            }
        } else {
            if(event.target.value){
                setDepositState(Web3.utils.toWei(event.target.value, 'ether'))
            } else {
                setDepositState(0)
            }
        }
        
        
    }
    const wasca = ()=>{
        console.log(withdrawState, depositState)
    }
    useEffect( ()=>{
        loadall()
    })
    
    
    let sd = ()=>{
        $(`div.details.id${props.id}`).slideToggle(1500)
        $(`div.pool-card.id${props.id}`).toggleClass('expanded', true)    
    }
    
  return(<div className={`pool-card  highlighted id${props.id}`} data-pid="1" data-pool-type="1" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-platform-zap-enabled="true" data-currencies="[3, -1, 3]" data-pool-title="RCUBE" data-pool-subtitle="" data-currency-id="3" data-currency-name="RCube" data-currency-ticker="RCUBE" data-currency-contract="0x0000000000000000000000000000000000000000" data-strategy-contract-address="0x0000000000000000000000000000000000000000" data-custom-swap-url="false" data-is-lp="false" data-token0-ticker="qbert" data-token0-contract="0x0000000000000000000000000000000000000000" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="284.29231967" data-daily="0.7788830675890410958904109589" data-tvl="4746112.42832821" data-gas-limit-tx="1">
  <div className="tag-container"></div>
  <div className="info">
      <div className="symbols">
          <img src={window.location.href + '/images/' + props.image_name}/>
      </div>
      <div className="pool">
          <div className="ttl">
              {props.name}
<div className="sub-ttl"></div>
          </div>
          <div className="bottom">
              <div className="tag multiplier">50x</div>
              <div className="provider ml-10">QBert</div>
          </div>
      </div>
      <div className="key-value balance">
          <div className="val">0</div>
          <div className="key">Balance</div>
      </div>
      <div className="key-value deposited">
          <div className="val">0</div>
          <div className="key">Deposited</div>
      </div>
      <div className="key-value apy shorter">
          <div className="val primary">284.29%
</div>
          <div className="key">Yearly</div>
      </div>
      <div className="key-value daily shorter">
          <div className="val">0.78%
</div>
          <div className="key">Daily</div>
      </div>
      <div className="key-value tvl shorter">
          <div className="val">$4.75M
</div>
          <div className="key">TVL</div>
      </div>
      <div className="btn outlined loading ml-auto get">Get {name}</div>
      <div onClick={()=>{sd()}} className="btn expand ml-10"></div>
  </div>
  <div className={`details id${props.id}`}>
      <div className="line"></div>
      <div className="transactions">
          <div className="transaction deposit no-bg">
              <div className="amount">
                  <span className="ttl">Wallet:</span>
                  <span className="val" data-display-decimals="6">
                      {balance / 10 ** props.decimals} <span className="estimate"></span>
                  </span>
              </div>
              <div className="swap">
                  <a href={props.buy_url}>Get {props.name}</a>
              </div>
              <div className="input-container number with-max">
                  <input className="depositInput" onChange={(e) => handdleInput("deposit", e)} type="number" data-humanize="false" data-decimal-places="18" value={Number(depositState/10**18).toString()}/>
                  <div onClick={()=>{maxButton('deposit')}} className="max">MAX</div>
                  
              </div>
              <div className="btn secondary mt-20 deposit" data-currency-contract="0x0000000000000000000000000000000000000000">Deposit to Vault
</div>
          </div>
          <div className="transaction withdraw">
              <div className="amount">
                  <span className="ttl">Vault:</span>
                  <span className="val" data-display-decimals="6">
                      0.00 <span className="estimate"></span>
                  </span>
              </div>
              <div className="input-container number with-max">
                  <input className="withdrawInput" onChange={(e) => handdleInput('withdraw', e)} type="number" data-humanize="false" data-decimal-places="18" value={Number(withdrawState/10**18).toString()}/>
                  <div onClick={()=>{maxButton('withdraw')}} className="max">MAX</div>
              </div>
              <div className="btn secondary mt-20 withdraw">Withdraw to Wallet
</div>
          </div>
          <div className="transaction harvest">
              <div className="ttl">Pending :</div>
              <div className="val">
                  <span className="amount">0.0</span>
                  <span className="value">($0.0)</span>
              </div>
              <div className="btn primary harvest">Harvest</div>
          </div>
      </div>
      <div className="farm-info">
          <div className="information">
              <div className="info">
                  <div className="itm head">
                      <span className="ttl">Annual</span>
                  </div>
                  <div className="itm qbert-apy">
                      <span className="ttl">QBert APR:&nbsp;</span>
                      <span className="val">284.29%</span>
                      <img className="tooltip" src={info}></img>
                      
                  </div>
                  <div className="itm total-apy">
                      <span className="ttl">Total Returns:&nbsp;</span>
                      <span className="val highlight">284.29%</span>
                  </div>
              </div>
              <div className="info">
                  <div className="itm head">
                      <span className="ttl">Daily</span>
                  </div>
                  <div className="itm qbert-daily-apy">
                      <span className="ttl">QBert Daily:&nbsp;</span>
                      <span className="val">0.78%</span>
                  </div>
                  <div className="itm total-daily-apy">
                      <span className="ttl">Total Daily:&nbsp;</span>
                      <span className="val highlight">0.78%</span>
                  </div>
              </div>
              <div className="info">
                  <div className="itm head">
                      <span className="ttl">Farm</span>
                  </div>
                  <div className="itm pond-daily-apy">
                      <span className="ttl">Weight:&nbsp;</span>
                      <span className="val">50x</span>
                  </div>
                  <div className="itm qbert-daily-apy">
                      <span className="ttl">RCUBE TVL:&nbsp;</span>
                      <span className="val">$4,746,112</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
)
}