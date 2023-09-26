import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import "./Login.css";
import Footer from "../Footer/Footer"
import axios from "axios";
import { toast, Toaster } from "react-hot-toast"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/v1/login", { email, password }).then((res) => {
            toast.success("Login Successfully!")
            setInterval(() => {
                navigate("/")
            }, 700)
        }).catch((err) => {
                toast.error(err.response.data.error)
        })
    }
    return (
        <>
            <div className="login-container">
                <Navbar />
                <div className="main-container">
                    <h1>Login </h1>
                </div>
            </div>
            <main>
                <form onSubmit={(e) => handleSubmit(e)} className="form-container">
                    <h1>Login Your Account</h1>
                    <div className="input-label">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p>
                        Dont have an account ?
                        <Link to="/register"> Sign Up</Link>
                    </p>
                    <button >Login</button>
                </form>
            </main>
            <Footer />
            <Toaster />
        </>
    )
}

export default Login
