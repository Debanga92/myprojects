import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Tyler from './assets/images/Tyler.jpg';
import './App.css';
import strange from './assets/images/strange.jpg';
import inception from './assets/images/inception.jpg';
import inter from './assets/images/inter.jpg';
import CarouselNew from './CarouselNew';
import Footer from './Footer';
function App() {
  const [show,setShow] = useState(true);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  return (
    <>
    <div className="header">
      <h4><a href="index.html">Welcome</a></h4>
    </div>
    {
      show1?<div className="myForm">
      <form action="#">
      <input type="text" placeholder="Search..."/>
      </form>
      <div className="items" id="animate">
        <h5>Movie 1 &nbsp; &nbsp;</h5>
        <h5 style={{color: "black"}}>Fight Club 1999 Movie starring Brad Pitt</h5>
        <div className="expand" id="expand"><ExpandMoreIcon style={{fontSize: "50px", position: "absolute", right: "0px", cursor:"pointer"}} onClick = {() =>{ let ani = document.getElementById("animate"); let ani2 = document.getElementById("animate2"); let ani3 = document.getElementById("animate3");
      ani.style.height = (ani.offsetHeight + 300) + "px"; ani2.style.top = (ani2.offsetTop + 300) + "px"; ani3.style.top = (ani3.offsetTop + 300) + "px"; document.getElementById("expand").style.display = "none"; document.getElementById("expand2").style.display = "block"; setShow2(true);}}/>
      </div>
      <div className="expand2" id="expand2" style={{display: "none"}}><ExpandLessIcon style={{fontSize: "50px", position: "absolute", right: "0px", cursor:"pointer"}} onClick = {() =>{ let ani = document.getElementById("animate"); let ani2 = document.getElementById("animate2"); let ani3 = document.getElementById("animate3");
    ani.style.height = (ani.offsetHeight - 300) + "px"; ani2.style.top = (ani2.offsetTop - 300) + "px"; ani3.style.top = (ani3.offsetTop - 300) + "px"; document.getElementById("expand").style.display = "block"; document.getElementById("expand2").style.display = "none"; setShow2(false);}}/></div>
      {show2?<div className="fightclub">
        <div className="about">
          <div className="about2">
          <p>Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).</p>
          </div>
            <img className="img" src={Tyler} alt=""/>
        </div>
      </div>:null
      }
      </div>
      <div className="items2" id="animate2">
        <h5>Movie 2 &nbsp; &nbsp;</h5>
        <h5 style={{color: "black"}}>Fight Club 1999 Movie starring Brad Pitt</h5>
        <div><ExpandMoreIcon style={{fontSize: "50px", position: "absolute", right: "0px", cursor:"pointer"}}/></div>
      </div>
      <div className="items3" id="animate3">
        <h5>Movie 3 &nbsp; &nbsp;</h5>
        <h5 style={{color: "black"}}>Fight Club 1999 Movie starring Brad Pitt</h5>
        <div><ExpandMoreIcon style={{fontSize: "50px", position: "absolute", right: "0px", cursor:"pointer"}}/></div>
      </div>
      </div>:null
    }
    <div className="list">
    <button type="button" className="btn btn-success" onClick = {()=>{setShow(false); setShow1(true);}}>List Items</button>
    </div>
    {
    show?<div className="bg">
        <img src={strange} className="bg-img" alt="" />
    </div>:null}
    {show?<div className="intro">
        <p className="intro-msg"><em>Hey I'm Doctor Strange. Nice to meet you</em>!!</p>
    </div>:null}
    <div className="container1">
      <img src={inception} className="container-img1" alt=""/>
    </div>
    <div className="details1">
      <p className="inception">Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine. </p>
    </div>
    <div className="explore">
      <h3 className="xplr">Explore movies</h3>
    </div>
      <CarouselNew />
      <div className="container2">
        <img src={inter} className="container-img2" alt=""/>
      </div>
      <div className="details2">
        <p className="interstellar">Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael Caine, and Matt Damon. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
