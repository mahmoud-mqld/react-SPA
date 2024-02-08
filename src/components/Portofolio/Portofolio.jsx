import { Modal } from "bootstrap";
import p from "../../assets/images/1.jpg";
import p2 from '../../assets/images/2.png'
import p3 from '../../assets/images/3.jpg'
import p4 from '../../assets/images/4.jpg'
import p5 from '../../assets/images/5.jpg'
import p6 from '../../assets/images/6.jpg'
import "./Portofolio.css";
import '../title.css'


export default function Portofolio() {
    
  function Show(src) {
    {
        console.log(src);
      document.querySelector("dialog").setAttribute("open", "");
      document.querySelector('.modalImg').setAttribute('src',`${src}`)

    }
  }
function closeModal(){
    document.querySelector("dialog").removeAttribute("open");

}
  return (
    <>
<section>

      <div className="container">
      <dialog>
        <div className="modalInner" onClick={closeModal}>
          <img className="modalImg" src='' alt="" />
        </div>
      </dialog>

      <h2 className="header mb-5">PORTFOLIO COMPONENT</h2>
    
        <div className="row g-2 mt-5">

          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p} alt="" />
              <div className="hover"></div>
            </div>
          </div>
          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p2} alt="" />
            </div>
          </div>
          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p3} alt="" />
            </div>
          </div>
          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p4} alt="" />
            </div>
          </div>
          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p5} alt="" />
            </div>
          </div>
          <div onClick={(e)=>{Show(e.target.firstElementChild.getAttribute('src'));}} className="col-md-4  p-2">
            <div className="pic overflow-hidden rounded-4">
              <img onClick={(e)=>{Show(e.target.getAttribute('src'))}} className=" " src={p6} alt="" />
            </div>
          </div>

          
        </div>
      </div>
</section>
    </>
  );
}
