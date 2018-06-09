import React from 'react';
import Loading from './Loading'
import profilePic from '../profilePic.jpg'

class AboutMe extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading:false
    }
  }
  

  componentWillMount(){
    this.setState({isLoading: true});
  }
  componentDidMount(){
    this.setState({isLoading: false});
  }


  
  render() {

    if (this.state.isLoading === true) {
      return ( 
        <div>
          <Loading />
        </div>
      )
    }
  

    return ( 
    <div> 

      <br />


      <div className="textContainorAutoWidth">
        <h1> this is me </h1>
        <img src={profilePic} alt='profilePicture' width='100%' className='profilePic' />
        <p>My name is Omar Bitar, and I am a self-taught aspiring filmmaker. I was born in Jordan, Amman in 1997, 
          and moved to the united states in 2013. Ever since I did my first film project to this day, my ambition never 
          changed. Every time I see a movie no matter if it’s made by Tommy Wiseau or Christopher Nolan 
          (both filmmakers that I respect), I always say to myself that I can do better. My ambition sound naive but if I start putting low expectations and 
          “realistic goals”, then what’s the point? there is serious competition in this industry and I am excited to meet and 
          compete with all the rivals to come. Until then, I will work harder to realizing my goals”.  
        </p>


        <br />

        <p>
          So, how did it all start …
        </p>

        <br />

        <p> 
          it all started with the release of
          <a href='https://www.gsmarena.com/nokia_5310_xpressmusic-2087.php'> “Nokia 5310 XpressMusic” </a> phone, my father 
          got it for me for my birthday. Technically that phone was the first camera I had. A cool feature with that phone 
          was the fact that I could pause and continue while shooting for the same video. To me it was mind-blowing. 
          So, one day I and my cousins did a short 30-second skit with that feature in mind. So, what we did 
          is we had person A, stand behind person B, pause the camera, person A goes in front of person B, then hit continue. 
          So, the entire video would appear as if, person A teleported in front of person B.  And that 30-second skit is what 
          it took to jumpstart my obsession with filmmaking. 
      </p> 

        <br />

        <p>
          After that, I went on an adventure of learning all there is to learn about filmmaking from software to cinematography, 
          and anything I could learn from the internet. Back then, when I lived in Jordan, having an interest in 
          filmmaking at that time is something that is considered as ridiculous and unheard of. But thankfully I had my family 
          to help and support me, and act as my test subjects in my crazy film projects, and I am going to share some of the 
          projects here on this webpage.
        </p>
        <br />

      </div>


             <div className='videoContainor'>
       <h1> MOTORCYCLE LANDING </h1>
        <iframe src='https://www.youtube.com/embed/6noHIvrygLU'  title="Film Cave Intro Video"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <h3>My first VFX I ever did. It was in my building’s garage. The motorcycle you see was my father’s.</h3>
      </div>


      <br />

    <div className="textContainorAutoWidth">
        <p>
      After that I continued working on short films. I didn’t know any better back then, and used actual soundtracks 
      from live action movies. due to that fact I removed them from my main YouTube channel, and did not include them 
      in this website. Regardless of that fact, I am proud of them. I learned a lot creating them. To whomever is 
      interested in watching some of them, you can find them via this (
      <a href='https://www.youtube.com/channel/UCx8h1T8Wq1k7O-gfLXw7btA'>link</a>).
      </p>

        <br />

        <p>
          After I graduated high school I went on looking for a film school. The “Colorado Film School” seemed like a great choice.
          However, My main issue with that plan, was finding a job with that film degree, it’s one of the lowest paying degrees in the united
          states. And the tuition for it is not cheap. So that’s why I ended up doing a computer science degree. I enjoy programming because 
          it surprisingly requires a lot of creativity. Since i was given the chance to live in the united states, I had to make 
          the most out of it. Computer science degree is a lot of work, so that’s why I’m only able to produce one or two films 
          a year. My entire school semester I only write scripts (which is a good practice), and shoot them in the summer or winter break. 
          Just because I’m not in film school, it doesn’t mean that I cannot still pursue my passion. Christopher Nolan is a great inspiration 
          of mine, he is a self-taught filmmaker. He didn’t need to go to film school to be a great filmmaker. I will keep 
          pursuing this crazy passion of mine no matter if I still must do my film projects in my basement when I’m 90 years old. 
          And the second I find an opportunity in the film industry ill drop everything and latch on to it just like that scene with the 
          alien and Natalie Portman from the “Annihilation” movie.
        </p>

              <br />

        <p>
          If you have read all the way here, thank you for taking the time to read about me. And please feel free to contact me. 
          The purpose of this website is not only to share my films but to meet fellow filmmakers, and rivals, to collaborate  and compete with.
        </p>
      </div>

      <br />

    </div>
    );
  }
}

export default AboutMe;
