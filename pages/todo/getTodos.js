import tableStyles from "common/style/table.module.css"
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";


export default function TodoList(){
    const columns = ["userid", "task", "completed"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/list').then(res=>{
            setData(res.data.todos)
        }).catch(err=>{})
    },[])
    return(<>
        <Head>
            <title>Todo| 할일목록</title>
        </Head>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={3}>할 일 목록</th>
                </tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td key={column} >{column}</td>
                ))}
            </tr>
            {data.length == 0 ? <tr>
                                <td colSpan={3} >일정이 없습니다</td>
                </tr>
                :data.map((todo) => (
                    <tr key={todo.userid}>
                        <td>{todo.userid}</td>
                        <td>{todo.task}</td>
                        <td>{todo.completed}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    
        </>)
    }