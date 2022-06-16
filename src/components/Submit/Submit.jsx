import { useState } from "react";
import "./Reservation.css";
let reservations = JSON.parse(localStorage.getItem("RESERVATIONS")) || [];
const Reservation = () => {
  const initialState = {
    username: "",
    email: "",
    pax: "",
    date: "",
  };
  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.username.length + 1 < 3) {
      setMessage(<span className="title">"Username must be at least 3 characters"</span>);
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    reservations.push(data);
    localStorage.setItem("RESERVATIONS", JSON.stringify(reservations));
    clearState();
    setMessage(<span className="title">Hemos recibido tu reserva. ¡Nos vemos en nada!</span>);
    // setTimeout(() => {
    //   setMessage("");
    // }, 4000);
  };
  return (
    <div className="form">
      <h2 className="title"> Haz tu reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="reservationInfo">
          <div className="rPax">
            <label for="pax" className="rTitle"> Comensales</label><br/>
            <select
              value={data.pax}
              onChange={handleInputChange}
              name="pax"
              className="inputPax"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div className="rDate">
            <label for="pax" className="rTitle"> Fecha</label><br/>
            <input
              type="date"
              placeholder="date"
              value={data.date}
              onChange={handleInputChange}
              name="date"
              className="inputDate"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div> 
        <div className="reservationContact">
        <div className="rName">
         
            <label for="pax" className="rTitle"> Nombre</label><br/>
            <input
              type="text"
              placeholder="name"
              value={data.username}
              onChange={handleInputChange}
              name="username"
              className="inputName"
            />
          </div>
          <div className="rEmail">
            <label for="pax" className="rTitle"> Email</label><br/>
            <input
              type="email"
              placeholder="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
              className="inputEmail"
            />
          </div>
        </div>
        <button type="submit" className="rButton">
          Enviar
        </button>
      </form>
      {message}
    </div>
  );
};
export default Reservation;
