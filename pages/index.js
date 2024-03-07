import Link from "next/link";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.textarea}>
        <h1 className={Styles.text}>취미모음 사이트</h1>
      </div>
      <section className={Styles.slideshow}>
        <div className={Styles.slide}>
          <figure>
            <Link href="https://www.op.gg/">
              <img src="images/img12.jpg"></img>
            </Link>
            <p className={Styles.textb}>롤 전적보러가기</p>
          </figure>
          <figure>
            <Link href="https://comic.naver.com/index">
              <img src="images/img17.jpg"></img>
            </Link>
            <p className={Styles.textb}>웹툰 보러가기</p>
          </figure>
          <figure>
            <Link href="https://semantle-ko.newsjel.ly/">
              <img src="images/img18.png"></img>
              <p className={Styles.textb}>유튜브 시청하기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.todomate.net/">
              <img src="images/img15.png"></img>
              <p className={Styles.textb}>투두리스트 작성하기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://github.com/hurhyeon">
              <img src="images/img14.png"></img>
              <p className={Styles.textb}>내 깃허브 보러가기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.manutd.com/ko">
              <img src="images/img13.jpg"></img>
              <p className={Styles.textb}>맨유 보러가기</p>
            </Link>
          </figure>
        </div>
      </section>
    </div>
  );
}
