import { useEffect, useRef, useState } from "react";

const Bookingbus = () => {

    let [from,setFrom]=useState("Bengaluru")
    let[to,setTo]=useState("Mandya");
    let   date=useRef();
    
    let[searchedBus,setSearchedBus]=userState(null);
    let[startpoints, setstartpoints]=useState(null);
    let[endpoints,setendpoints]=useState(null);

    useEffect(()=>{
        fetch("")
        .then((res)=>{return res.json()})
        .then((allbus)=>{
          let s=  allbus.map((bus)=>{return bus.from});
          let sp=s.filter((v,i,a)=>{return (!a.includes(v,i+1))})
     

          let e=      allbus.map((bus)=>{return bus.to});
           e.filter((v,i,a)=>)
        })
    }


    return ( <>
    
    
    
    
    
    
    
    
    </> );
}
 
export default Bookingbus;