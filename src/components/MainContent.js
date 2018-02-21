import React from "react";
import Burger from "./SVG/Burger";
import House from "./SVG/House";
import Gift from "./SVG/Gift";

const MainContent = () => (
  <section className="maincontent">
    <div>
      <House />
      <h3>HOUSE FOR RENT</h3>
      <p>We recomend to stay in a real motel, just like in movies!</p>
    </div>
    <div>
      <Gift />
      <h3>SOUVENIERS</h3>
      <p>Not only chineese, but also local production!</p>
    </div>
    <div>
      <Burger />
      <h3>FOOD</h3>
      <p>Always order СHIEF BURGER, and you WON'T BE dissapointed!</p>
    </div>
    <div className="maincontent-bridge">
      <h4>
        ТАМ ЕСТЬ Мост дьявола
        <br />
        <br />
      </h4>
      <h3>
        — №2 —
        <br />
        <br />
        Да, по нему можно пройти! Если вы осмелитесь, конечно
      </h3>
    </div>
    <div className="maincontent-image" />
    <div className="maincontent-features">
      <ul>
        <li>
          <div>
            <h4>
              НЕБОЛЬШАЯ ПЛОЩАДЬ
              <br />
              <br />
            </h4>
            <h3>
              — №3 —
              <br />
              <br />
              ВСЕ интересные места находятся очень близко{" "}
            </h3>
          </div>
        </li>
        <li>
          <div>
            <h4>
              КРАСИВАЯ ДОРОГА <br />
              <br />
            </h4>

            <h3>
              — №4 —
              <br />
              <br />
              ЕХАТЬ В СЕДОНУ ИЗ ЛАС-ВЕГАСА совсем НЕ СКУЧНО!{" "}
            </h3>
          </div>
        </li>
        <li>
          <div>
            <h4>
              МАЛО ТУРИСТОВ
              <br />
              <br />
            </h4>
            <h3>
              — №5 —
              <br />
              <br />
              Большинство едет в гранд каньон и толпится там{" "}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </section>
);
export default MainContent;
