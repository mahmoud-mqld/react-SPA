import "../title.css";
import "./Contact.css";

export default function Contact() {
  return (
    <>
    <h2 className="header">Contact Component</h2>
     <div className="container form text-center">
      <form className="" action="">
        <div className="input-group">
<input autoComplete="" id="name" type="text" />
<label htmlFor="name">User Name</label>
        </div>
        <div className="input-group">
<input autoComplete="" id="age" type="number" />
<label htmlFor="age"> User Age</label>
        </div>
        <div className="input-group">
<input autoComplete="" id="mail" type="email" />
<label htmlFor="mail">User E-mail</label>
        </div>
        <div className="input-group">
<input autoComplete="" id="pass" type="password" />
<label htmlFor="pass">User Password</label>
        </div>
        <button className="btn btn-outline-light">Send Message</button>
      </form>
     </div>
    </>
  );
}
