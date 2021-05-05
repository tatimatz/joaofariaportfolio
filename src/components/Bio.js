import React from "react";
import Profile from "../assets/img/profile.jpeg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Bio = () => {
  return (
    <div className="bio-main">
      <div className="bio-content">
        <h1>joão faria</h1>
        <p className="bio-text">
                João Faria nasceu em Bagé, em 1958, onde cresceu, estudou e
                começou, desde muito pequeno, mais longe do que a memória
                registra, a desenhar e a pintar, porque era assim mais fácil de
                se expressar do que por meio das palavras. Deixou o Brasil em
                91, quando veio para Paris, e trouxe o único atributo inerente à
                sua própria identidade: o desejo (e a necessidade) de criar. Até
                que um dia compreendeu essa necessidade e o bem que ela lhe
                traz. E assim o faz sem pretensões, natural e espontaneamente,
                no refúgio de seu atelier, que é também sua própria casa e seu
                universo particular. <br /> <br/>
                Suas séries falam de espírito. Daquilo que não é necessariamente
                racional e congruente mas que aflora inconscientemente e que faz
                parte da complexidade e da inexatidão da matéria humana. Suas
                obras são assim, o retrato do sincero.
              </p>
        </div>
        <div className="img-bio-content">
          <div className="img-bio-container hover">
            <img src={Profile} alt={"João Faria"} className="bio-img" />
          </div>
        </div>
        <div className="contact-infos">
          <div>
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0665544332" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié");
                  }}
                >
                  06 65 54 43 32
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div>
              <div className="content">
                  <h4>email</h4>
                  <CopyToClipboard text="jbage@hotmail.fr" className="hover">
                      <p style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié");
                  }}>jbage@hotmail.fr</p>
                  </CopyToClipboard>
              </div>
          </div>
          <div>
          <div className="content">
          <SocialNetwork />
          </div>
          </div>
    </div>
    </div>
  );
};

export default Bio;
