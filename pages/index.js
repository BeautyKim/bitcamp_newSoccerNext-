import axios from "axios";
import React, { useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
// import { Nav } from "common";
// import animationStyle from 'basic/style/animation.module.css'

export default function Home() {

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    const user = JSON.parse(loginUser)
    if( loginUser === null){
      axios.get("http://localhost:5000/api/now").then((res) => {
        var data = res.data;
        document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
      });
    }else{
      document.getElementById("timeZone").innerHTML = '<h1>환영합니다: '+user.name+'<h1>'
    }
    
  },[]);
  return (
    <>
    <Head>
    <title>BeautyKim| HOME</title>
    </Head>
    <body>
    <div id="timeZone"></div>
    <Image src={"/images/해골.gif"} width={800} height={400} alt="아름이와아이들"/>
    </body>
    </>
  )
}