import { useHistory } from 'react-router-dom'

const Form = () => {

const history = useHistory(); 

    const patientClickHandler = () =>{
        history.push("/addPatient")
        
    }

    const administerClickHandler = () => {
        history.push("/addVaccinations")
        
    }

    return(
        <div className="container">
            <div className="text-left">
          <div className="card-header">
          <h1>Welcome To Vaccination App</h1>
          </div>
          <br/>
            <div className="text-left">
                <div className="card-body">
                <div className="text-color=red">
                    <button className="btn btn-block btn-primary" onClick={patientClickHandler}>Add Patient</button>
                </div>
                </div>
                <hr/>
                <div className="card-body">
                    <button className="btn btn-block btn-primary" onClick={administerClickHandler}>Administer Vaccinations</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Form;