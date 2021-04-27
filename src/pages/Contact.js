import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import Bio from "../components/Bio";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        <Bio />
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
          <SocialNetwork />
          <div className="credits">
              <p id="name-credits">Tatiana Matzenbacher - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"project-2"} />
      </div>
    </main>
  );
};

export default Contact;
