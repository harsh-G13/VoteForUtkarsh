import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/1.svg';
import StockPriceImg from './Images/2.svg';
import PersonalLibraryImg from './Images/3.svg';
import IssueTrackerImg from './Images/4.svg';
import MIConverterImg from './Images/5.svg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Agendas</h3>
          <p className="separator" />
          
        </div>
        <div className="projects-wrapper">
          <Project
            title="Security & Transport"
            img={MsgBoardImg}
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <p>
            Security has been a pressing issue on our campus lately. I want to address this problem by increasing proctoring and ensuring that proper barricading is done at all vulnerable and necessary checkpoints.
I also want to address the ongoing transportation problem as many people must cover a large distance to reach their departments. I will ensure the availability of a common IIT BHU bus that provides a quick commute between the departments and hostels, ensuring an ease in commuting.
</p>
          </Project>
          <Project
            title="Cleanliness & Hygiene"
            img={StockPriceImg}
            tech="js node css"
            link="https://yagoestevez-stock-price-checker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-stock-price-checker"
          >
            <p>
            The issue of hygiene and cleanliness can never be more emphasized. There has been a sudden surge in the number of students getting sick. I will ensure that all the hostels will clean regularly and the water coolers will be cleaned monthly.
Washrooms are also one of the places that should be mandatorily cleaned and maintained.
There is always a shortage of soap in washrooms. I will ensure such a problem doesn’t persist and will work to maintain such facilities throughout my tenure.
</p>
          </Project>
          <Project
            title="Better Hostel Amenities"
            img={PersonalLibraryImg}
            tech="js node css"
            link="https://yagoestevez-personal-library.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-personal-library"
          >
            <p>
            A college student might live without food but won't survive without internet connectivity. Recently an issue has arisen regarding the disconnection of devices. Such problems create a standstill in a student's work. I assure everyone that upon coming to power, I will see that this problem never arises again and will also work to improve the connectivity. 
Purified water is an indispensable need of any student, and I’ll ensure it is fulfilled by getting an adequate number of RO water coolers installed on all floors of all hostels. I will also ensure that these water coolers are cleaned and maintained to ensure the proper working of these way=ter coolers.
 </p>
          </Project>
          <Project
            title="Canteens & Cafe's"
            img={IssueTrackerImg}
            tech="js node css"
            link="https://yagoestevez-issue-tracker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-issue-tracker"
          >
            
            <p>Cafes are meeting places for various groups and people of all hostels and departments such places should never go mundane. Such places should always be bustling with excitement.
I will diversify the menus of all the cafeterias and canteens and ensure multiple types of snacks are available to all the students who go to such cafeterias and canteens for refreshments. 
I will also see to the opening of other cafeterias on par with our beloved LC so that there is never too much crowd at a place and a variety of vibes so that all can enjoy and have a good time.
</p>
          </Project>
          <Project
            title="Common Room & Mess Refund"
            img={MIConverterImg}
            tech="js node css"
            link="https://yagoestevez-metric-imperial-converter.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-metric-imperial-converter/"
          >
            
            <p>
            One of the most wasted facilities given to us hostelites is a common room which is seldom used, and many of us haven't been inside our common rooms for a major part of our stay in the hostels. I want to turn unused common rooms and other such places into a more known area by turning them into study halls, activity centers, and lounges so that these resources are utilized and a community feeling is nurtured.
Mess refund has been a very ambiguous issue for most of us as none know when we will receive our refunds and whether we will receive them at all or not, I will make it my first task as soon as I get into power that the mess refund is processed as soon as possible and hence solve this confusing issue.

            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
