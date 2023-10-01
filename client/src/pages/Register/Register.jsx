import React, { useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import axios from "axios";
import { toast, Toaster } from "react-hot-toast"
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/v1/register", { name, phone, email, password }).then((res) => {
            toast.success("Register Successfully!")
            setInterval(() => {
                navigate("/login")
            }, 700)
        }).catch((err) => {
            toast.error(err.response.data.error)
        })
    }
    return (
        <>
            <div className="signup-container">
                <Navbar />
                <div className="main-container">
                    <h1>Register</h1>
                </div>
            </div>
            <div className='signup'>
                <form onSubmit={(e) => handleSubmit(e)} className="form-container">
                    <h1>Create Your Account</h1>
                    <div className="input-label">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" placeholder='Enter Phone' minLength={10} maxLength={10} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p>
                        Have an account ?
                        <Link to="/login"> Login</Link>
                    </p>
                    <button >SignUp</button>
                </form>
            </div>
            <Footer />
            <Toaster className="toast" />
        </>
    )
}

export default Register
