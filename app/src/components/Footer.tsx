import style from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.bgAnimated}>
        <div className={style.moving}>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className={style.center}>
        <div className={style.content}>
          <img className={style.logo} src="/img/logo_white.png" alt="logo" />
          <img className={style.logo} src="/img/epfl.png" alt="epfl" />
          <p className={style.big}>
            Une association à but non-lucratif de l'Ecole Polytechnique Fédérale
            de Lausanne
          </p>
          <p className={style.coord}>
            CLIC, INN 132, Station 14, EPFL, CH-1015 Lausanne <br />
            <a href="mailto:clic@epfl.ch">clic@epfl.ch</a> <br />
            +41 21 693 81 28
          </p>

          {/* </br>{{ social.icons() }} */}

          <p className={style.design}>
            Original website design: Alexandre CHAU &amp; Loïc DROZ.
          </p>
          <p className={style.legal}>
            &copy; CLIC association 2024, all rights reserved. Any reproduction,
            even partial, is strictly prohibited
          </p>
        </div>
      </div>
    </div>
  );
}
