import axios from "axios"
import style from "board/style/board-form.module.css"
import Head from "next/head"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBoard } from "../../redux/reducers/boardReducer.ts"

export default function AddArticle(){
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    return (<>
        <Head>
        <title>게시판| 게시글 입력</title>
        </Head>
        <h1>게시판</h1>
        <form onSubmit={ e => {
            e.preventDefault()
            alert('게시글 value :' + value)
            if(value) dispatch(addBoard({title: value}))
        }}>
        <div className={style.container}>
        <div className={style.row}>
            <div className={style.col25}>
            <label className={style.label} htmlFor="passengerId">게시글 제목</label>
            </div>
            <div className={style.col75}>
            <input
            type="text"
            id="new-board-input"
            name="title"
            autoComplete="off"
            onChange={ e => {
                e.preventDefault()
                setValue(e.target.value)}} className={style.inputText}
            placeholder="게시글 제목 입력"/>
            </div>
        </div>
        </div>
            <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
        
        {/**
        <div className={style.row}>
            <div className={style.col25}>
            <label htmlFor="name">게시글 작성자 이름</label>
            </div>
            <div className={style.col75}>
            <input type="text" className={style.inputText}
            id="name" name="name" placeholder="게시글 작성자 이름 입력" onChange={handleChange}/>
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col25}>
            <label htmlFor="team">응원팀</label>
            </div>
            <div className={style.col75}>
            <select id="teamId" name="teamId" onChange={handleChange}>
                <option value="">응원팀 선택</option>
                <option value="K09">Fc seoul</option>
                <option value="K02">Suwon Samseong blue wings</option>
                <option value="K04">Incheon United</option>
            </select>
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col25}>
            <label htmlFor="subject">게시글 내용</label>
            </div>
            <div className={style.col75}>
            <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={handleChange}></input>
            </div>
        </div>
        
        <br/>
        <div className={style.row}>
            <input type="submit" className={style.inputSubmit}
            value="Submit" onClick={handleSubmit}/>
        </div>
        </htmlForm>
        </div> */}
        
    </>)
    }