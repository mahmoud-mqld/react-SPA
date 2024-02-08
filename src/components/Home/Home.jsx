import "./Home.css";
import "./../title.css";
import cat from './../../assets/images/home.jpg'

export default function Home() {
  return (
    <>
      <section id="Home">
        <div className=" gap-4  vh-100 container text-cener d-flex flex-column justify-content-center  align-items-center">
            <picture>
                <img src={cat} alt="" />
            </picture>
          <h1 className="header">Start Frame Work</h1>

          <h4> Wed Developer - Web Designer - Illustrator </h4>

        </div> 
      </section>
    </>
  );
}
