import React,{useState} from 'react'
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "./style/Nav.module.css"
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
export default function Nav(){
  const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/modify","/user/withdraw","/user/getUsers"]
  const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  const todoUrls = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const boardUrls = ["/board/addArticle","/board/getArticles","/board/modifyArticle","/board/removeArticle"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  
  return (
    <table className={tableStyles.table}>
      <thead>
      <tr>
        <th>
          <a href={"/"}><Image src={"/images/토토로.gif"} width={80} height={80} alt="나는노홍주"/></a>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
        <SubMenu title={"투두"} urls={todoUrls} subTitles={todoSubTitle}/>
        <SubMenu title={"게시판"} urls={boardUrls} subTitles={boardSubTitle}/>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
  <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
           return <MenuItem onClick={handleClose}><Link href={url} key={i} >{props.subTitles[i]}</Link></MenuItem>
        })}
      </Menu></>
}