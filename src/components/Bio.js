import React from "react";
import Profile from "../assets/profile.jpeg";

const Bio = () => {
  return (
    <div className="bio-main">
      <div className="bio-content">
        <h1>joão faria</h1>
        </div>
        <div className="img-bio-content">
          <div className="img-bio-container hover">
            <span>
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
            </span>
            <img src={Profile} alt={"João Faria"} />
          </div>
        </div>
      
    </div>
  );
};

export default Bio;
