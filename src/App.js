import "./App.css";
import Testimonial from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div class="container-main">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          name="Shawn Wang"
          country="Singapore"
          image="01"
          position="Software Engineer "
          enterprise="Amazon"
          testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonial
          name="Sarah Chima"
          country="Nigeria"
          image="02"
          position="Software Engineer "
          enterprise="ChatDesk"
          testimonial="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimonial
          name="Emma Bostian"
          country="Sweden"
          image="03"
          position="Software Engineer "
          enterprise="Spotify"
          testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
