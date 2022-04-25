import style from "common/style/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }){
  return (<div>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
      <Footer/>
      </div>);
};