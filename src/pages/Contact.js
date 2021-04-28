import React from "react";
import Navigation from "../components/Navigation";
import Bio from "../components/Bio";

const Contact = () => {
  return (
    <main>
      <div className="contact">

        <Navigation />
        <Bio />

          <footer className="credits">
              <p id="name-credits">Tatiana Matzenbacher - 2021</p>
          </footer>
      </div>
    </main>
  );
};

export default Contact;
