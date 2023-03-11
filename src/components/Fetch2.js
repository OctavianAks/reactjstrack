import { useEffect, useState } from "react"; 
import Axios from "axios";
import '../App.css';



export function Fetch2() {
const[cryptoList, setCryptoList] = useState([]);

useEffect(() => { 
 Axios.get('https://api.coinlore.net/api/tickers/?start0&limit=20')
      .then((response) => {
        setCryptoList(response.data["data"]);
    }  
    );
  },[]);

return (
<div classname="crypto"> <h2> CRYPTO </h2> 
        {cryptoList.map((coin) => {
          return ( <div> {" "}
<p> {coin.symbol} </p>
<h3> {coin.price_usd} </h3>
</div>
); 
})}
</div>

);}
export default Fetch2;

