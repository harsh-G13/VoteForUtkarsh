import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Utkarsh Pandey.</h4>
            <p>
              I am 3rd year IDD Electrical Engineering student.
            </p>
            <p>
            I'm that quiet friend of yours that you might not talk to very often, but you can always count on me to be there for you when things go tough. I am the change you want to see in Campus!!
            </p>
          </div>
          {/* <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
              course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a designer.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
              Lightroom or Xd are some kind of industry standards and I love working with them. I'm
              not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
              that I've been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I mentioned, creating
              pretty things is particularly important for me.
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
};

export default About;
