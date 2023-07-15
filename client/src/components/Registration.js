import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e) {
        e.preventDefault
        try {
            await axios.post("http://localhost:30000/signup", {
                email, password
            })
        }
        catch (e) {
            console.log(e)

        }
    }

    return (
        <>
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="d-flex flex-column justify-content-between">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="card card-default mb-0">

                                <div className="card-body px-5  p-5">
                                    <h4 className="text-dark mb-6 text-center pb-5">Sign up </h4>
                                    <form >
                                        <div className="row">
                                            {/* NAME */}
                                            <div className="form-group col-md-12 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control input-lg"
                                                    id="patientName"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            {/* LASTNAME */}
                                            <div className="form-group col-md-12 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control input-lg"
                                                    id="patientLastName"
                                                    placeholder="name"
                                                />
                                            </div>
                                            {/* GENDER */}
                                            <div className="form-group col-md-12 mb-4">
                                                <select className="form-select"  >
                                                    <option selected>Gender</option>
                                                    <option value={1}>Female</option>
                                                    <option value={2}>Male</option>
                                                    <option value={3}>Other</option>
                                                </select>
                                            </div>
                                            {/* BIRTHDATE */}
                                            <div className="form-group col-md-12 mb-4">
                                                <p>Birthdate:</p>
                                                <input
                                                    type="date"
                                                    className="form-control input-lg"
                                                    id="patientBirthdate"
                                                    placeholder="birthdate"
                                                />
                                            </div>
                                            {/* PHONENUMBER */}
                                            <div className="form-group col-md-12 mb-4">
                                            <p>Phone number:</p>

                                            <input data-validation="number" id="phoneNumber"
                                             type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required="required" placeholder="999-999-9999"/>

                                            </div>

                                            {/* EMAIL */}
                                            <div className="form-group col-md-12 mb-4">
                                                <input
                                                    onChange={(e) => { setEmail(e.target.value) }}                                                
                                                    type="email"
                                                    className="form-control input-lg"
                                                    id="email"
                                                    placeholder="email"
                                                />
                                            </div>
                                            {/* PASSWORD */}
                                            <div className="form-group col-md-12 ">
                                                <input
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                    type="password"
                                                    className="form-control input-lg"
                                                    id="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            {/* CONFIRM PASSWORD **not sure if needed yet*/}
                                            {/* <div className="form-group col-md-12 ">
                                                <input
                                                    type="password"
                                                    className="form-control input-lg"
                                                    id="confirmPassword"
                                                    placeholder="Confirm Password"
                                                />
                                            </div> */}
                                            <div className="col-md-12 p-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-pill mb-4"
                                                >
                                                    Sign up
                                                </button>
                                                <p>
                                                   Already have an account?
                                                   <Link className="text-blue" to="/"> Sign IN</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};
