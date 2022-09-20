import React, {useEffect, useState} from "react";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {category: 'all', count: '100'},
    headers: {
      'X-RapidAPI-Key': '197e579ef5mshc28836411801682p13825ajsnda2858b3c2e9',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };



   
  const Quote = () => {
    const [Quotiti, setQuotiti]= useState([])
    const [Num, setNum]= useState(0)
    useEffect(() => {

       

  axios.request(options).then(function (response) {


    setQuotiti(response.data)
console.log(response.data.text);
  }).catch(function (error) {
    console.error(error);
  });



    }, [])
    function next() {
      setNum(Num + 1);
    }
  
    return (
        <div>
          <p className="text-7xl">{Quotiti[Num] &&  Quotiti[Num].text}</p>
          <p className="text-base	">{Quotiti[Num] && Quotiti[Num].author}</p>
          <button className=" text-red-50 button button--aylen px-5 py-3 bg-gray-800 hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden " onClick={next}>Give my all your knownledge you jolly boy</button>
        </div>
    );
}

export default Quote