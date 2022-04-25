import { useSelector, useDispatch } from 'react-redux'
// import styles from '/basic/style/counter.module.css'
import { useState } from 'react';
import Head from 'next/head';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (<>
    <Head>
    <title>비트캠프 Counter</title>
    </Head>
    
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}