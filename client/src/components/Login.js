import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e) {
        e.preventDefault
        try {
            await axios.post("http://localhost:3000/", {
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
                className="container d-flex align-items-center justify-content-center "
                style={{ minHeight: "100vh" }}>
                <div className="d-flex flex-column justify-content-between">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="card card-default mb-0">

                                <div className="card-body px-5  p-5">
                                    <h4 className="text-dark mb-6 text-center pb-5">Sign in </h4>
                                    <form action="POST" >
                                        <div className="row">
                                            <div className="form-group col-md-12 mb-4">
                                                <input
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    type="email"
                                                    className="form-control input-lg"
                                                    id="email"
                                                    placeholder="email"
                                                />
                                            </div>
                                            <div className="form-group col-md-12 ">
                                                <input
                                                    onChange={(e) => { setPassword(e.target.value) }}
                                                    type="password"
                                                    className="form-control input-lg"
                                                    id="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="col-md-12 p-3">
                                                <button
                                                    onClick={submit}
                                                    type="submit"
                                                    className="btn btn-primary mb-4 "
                                                >
                                                    Sign In
                                                </button>
                                                <p>
                                                    Don't have an account yet ?
                                                    <Link className="text-blue" to="/signup"> Sign Up</Link>
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
