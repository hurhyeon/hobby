import Link from "next/link";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.textarea}>
        <h1 className={Styles.text}>박진형의 사이트</h1>
      </div>
      <section className={Styles.slideshow}>
        <div className={Styles.slide}>
          <figure>
            <Link href="https://www.op.gg/summoners/kr/%ED%8F%B4%EB%A3%A9%EC%8A%A4">
              <img src="images/img1.jpg"></img>
            </Link>
            <p className={Styles.textb}>진형이랑 폴룩스 전적보러가기</p>
          </figure>
          <figure>
            <Link href="https://comic.naver.com/webtoon/list?titleId=183559">
              <img src="images/img2.png"></img>
            </Link>
            <p className={Styles.textb}>진형이랑 신의탑 보러가기</p>
          </figure>
          <figure>
            <Link href="https://semantle-ko.newsjel.ly/">
              <img src="images/img3.jpg"></img>
              <p className={Styles.textb}>진형이랑 꼬맨틀 하러가기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.youtube.com/watch?v=f_3caTjO6yE">
              <img src="images/img5.jpg"></img>
              <p className={Styles.textb}>진형이랑 아이린 보러가기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.youtube.com/@Dopagod">
              <img src="images/img4.jpg"></img>
              <p className={Styles.textb}>진형이랑 도파 보러가기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.manutd.com/ko">
              <img src="images/img7.jpg"></img>
              <p className={Styles.textb}>진형이랑 맨유 보러가기</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://www.youtube.com/shorts/hjyRdIR4sPo">
              <img src="images/img6.jpg"></img>
              <p className={Styles.textb}>누르지마세요</p>
            </Link>
          </figure>
        </div>
      </section>
    </div>
  );
}
