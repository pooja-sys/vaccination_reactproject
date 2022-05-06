import axios from "axios";
import React, { useState } from "react";
const myFuction = () =>{
  alert("Patient added successfully!")
}
const AdminVaccinations = () => {
  let [name, setName] = useState("");
  let [DateOfBirth, setDateOfBirth] = useState("");
  let [Dose, setDose] = useState("");
  let [Brand, setBrand] = useState("");
  let [Vaccinated_at, setVaccinated_at] = useState("");

  let handleSubmit = async e => {
    e.preventDefault();
    console.log({
      name,
      DateOfBirth,
      Dose,
      Brand,
      Vaccinated_at,
    });
    try {
      let payload = {
        name,
        DateOfBirth,
        Brand,
        Dose,
        Vaccinated_at,
      };
      await axios.post("http://localhost:9000/patient/creation", payload);
    } catch (error) {
      console.log(error);
    }
  };
  const myFuction = () =>{
    alert("Patient added successfully!")
  };

  return (
    <section id="formBlock">
      <article>
        <form action="" onSubmit={handleSubmit}>
        <div><header>Admin Vaccinations</header></div>
        
          <div>
            <label htmlFor="name">Name of the Patient</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="DateOfBirth">DOB</label>
            <input
              type="date"
              name="DateOfBirth"
              id="DateOfBirth"
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Brand">Vaccine Brand</label>
            <select
              name="Brand"
              id="Brand"
              onChange={e => setBrand(e.target.value)}
            >
              <option value="-"> Select your Brand</option>
              <option value="covaxin">covaxin</option>
              <option value="sputnik V">sputnik V</option>
              <option value="covishield">covishield</option>
            </select>
          </div>
          
          <div>
            <label for="Dose">Blood Group </label>
            <select
              name="Dose"
              id="Dose"
              onChange={e => setDose(e.target.value)}
            >
              <option value="-">Select Dose</option>
              <option value="A+">First Dose</option>
              <option value="A-">Second Dose</option>
              
            </select>
          </div>
          <div>
            <label htmlFor="Vaccinated_at">Vaccinated_at </label>
            <input
              type="string"
              name="Vaccinated_at"
              id="Vaccinated_at"
              placeholder="Enter your Vaccinated_at"
              onChange={e => setVaccinated_at(e.target.value)}
            />
          </div>
          
          <br></br>
          <div>
          
            <button onClick={myFuction} >Submit</button>
          </div>
          
        </form>
      </article>
    </section>
  );
};

export default AdminVaccinations;