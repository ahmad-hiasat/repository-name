import React from "react";
import { memo, useState } from "react";
import img from "../img/me.png";
import style from "./css/Me.module.css";
let socialMedia = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    color: "#E1306C",
    link: "https://www.instagram.com/ahmad._.hyasat0/",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    color: "#188DF2",
    link: "https://www.facebook.com/profile.php?id=100069143982725",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    color: "#6e5494",
    link: "https://github.com/ahmad-hiasat",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    color: "#0A66C2",
    link: "https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%AD%D9%8A%D8%A7%D8%B5%D8%A7%D8%AA-102610332/",
  }
];
export default memo(function Me() {
  let [slide, setSlide] = useState(false);
  let [count, setCount] = useState(0);
  let [color, setColoe] = useState("white");
  return (
    <>
      <div className={style.theDiv}>
        <img src={img} className={style.theImg}></img>
      </div>
      <div>
        <p className={style.p1}>Ahmad Hiasat</p>
        <p className={style.p2}>software engineer</p>

        <div
          className={style.socialDiv}
          style={{ backgroundColor: color, boxShadow: "0 0 4px " + color }}
        >
          {socialMedia.map((so, index) => {
            return (
              <a key={index} href={so.link}>
                <img
                  src={so.img}
                  className={style.social}
                  onMouseLeave={() => setColoe("white")}
                  onMouseEnter={() => setColoe(so.color)}
                />
              </a>
            );
          })}
        </div>
        <button
          className={style.aboutMe}
          style={{ display: "inline" }}
          onClick={() => {
            setSlide(!slide), setCount(1);
          }}
        >
          About Me
        </button>
      </div>
      <div
        className={slide ? style.AnimateIt : style.DontAnimateIt}
        style={
          count == 0
            ? { display: "none" }
            : { borderRadius: "20px", width: "20%", display: "inline-block" }
        }
      >
        <p
          style={{
            marginLeft: "10px",
            fontFamily: '"Poppins", "serif"',
            fontSize: "13px",
            display: "inline",
          }}
        >
          Ahmad Hiasat is a software engineer with experience in web
          development. He specializes in JavaScript, React, and front-end
          technologies. Ahmad is passionate about building efficient and
          user-friendly applications.
        </p>
      </div>
    </>
  );
});
