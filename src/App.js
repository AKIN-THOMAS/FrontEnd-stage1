import React from "react";
import profile_pic from './photo/profile_pic.png';
import hub_icon from './photo/hub_icon.png';
import internship from './photo/internship.svg';
import I4G from './photo/I4G.png';
import icon from './photo/icon.svg';
import slack from './photo/slack.png';
import hover from './photo/profile_hover.svg';
import icon_hover from './photo/icon_hover.svg';
import mobile_share from './photo/mobile_share.svg';


import './App.css'

const App = () => {
    return(
        <body className="main">
            <section className="profile">
                <div>
                    <div className="icon__1">
                        <div className="icon">
                            <img  classname="one" src={icon} alt ="icon"/>
                            <img className="two" src={icon_hover} alt="share"/>
                            <img  className="mobile" src={mobile_share} alt="share"/>
                        </div>
                        
                    </div>
                   <div className="profile">
                        <img className="profile_id"  src={profile_pic} alt="profile " />
                        <img className="profile_hover" src={hover} alt="profile "/>
                   </div>
                    <p className="twitter">Akin-Thomas Bishop</p>
                    <p className="slack">ABIMBOLA</p>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="container">
                    <div className="linksection">
                        <div className="a-button">
                            <a href="https://twitter.com/Bishopakint/" id="twitter" className="button" target= 'blank'>Twitter</a>
                        </div>
                        <div className="a-button">
                            <a href="https://training.zuri.team/" id="btn__zuri" className="button" target= 'blank'>Zuri Team <sub>This is where you find books about design and coding</sub></a>
                            
                        </div>
                        <div className="a-button">
                            <a href="https://books.zuri.team/" id="books" className="button" target= 'blank'>Zuri Books <sub>
                            Greatest and best explained python books for beginners</sub></a>

                        </div>
                       <div className="a-button">
                            <a href="https://books.zuri.team/" id="books__python" className="button" target= 'blank'>Python Books <sub>My company, is developing a defined software to help do a background check on coders</sub></a>
                       </div>
                       <div className="a-button">
                            <a href="https://background.zuri.team/" id="pitch" className="button" target= 'blank'>Background Check for Coders <sub>Find out how other programmers solved their code issues  </sub></a>
                       </div>
                        <div className="a-button">
                            <a href="https://books.zuri.team/design-rules" id="book__design" className="button" target= 'blank'>Design Books <sub>
                            Top books for designers, easy to learn and understand. Offered by zuri</sub></a>
                        </div>
                </div>
               
                    </div>
                </div>
               
                    <div className="social-icons">
                        <img  src= {slack} alt="slack icon"/>
                        <a href="https://github.com/AKIN-THOMAS"><img  src= {hub_icon} alt =" github icon"/></a>
                    </div>
            </section>
            <footer>
                {/* <hr size= "100px" width="80%" color="grey" />   */}
                

                <div className="main_footer">
                    <span></span>
                    <div className="sub_footer">
                        <img className="internship" src= {internship} alt="zuri internship"/>
                        <p className="text">HNG Internship 9 Frontend task</p>
                        <img className="I4G" src={I4G} alt="ingressive for good"/>
                    </div>
                </div>
            </footer>
        </body>
    );
}
export default App;