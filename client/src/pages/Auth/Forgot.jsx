import React from 'react'
import { NavLink } from 'react-router-dom'
import GIF from "../../images/otp.gif"
import IMG from "../../images/newPs.png"
import { useState } from 'react'
import { resetPassword, sendResetPassword } from '../../redux/Auth/authActions'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'



const Forgot = () => {
  const dispatch = useDispatch()
  const [emailFormData, setEmailFormData] = useState({
    email: '',
  });

  const [otpSent, setOtpSent] = useState(
    false
  )

  const [otpFormData, setOtpFormData] = useState({
    otp: '',
    password: ''
  })


  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(sendResetPassword(emailFormData.email))
    if (res) {
      setOtpSent(true)
    }
    else {
      toast.error('error sending the reset email')
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setEmailFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const otpFormDataSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(resetPassword({ email: emailFormData.email, otpFormData }))
    if (res) {
      toast.success('Password reset successful')
    }
    else {
      toast.error('error resetting the password')
    }
  }

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setOtpFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
      {
        !otpSent ?

          (

            <div className="bg-gray-100">
              <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow p-6 rounded-lg">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mb-3 animate_animated animate_fadeIn">
                      <img src={IMG} alt="New Password" className="w-96 animate" />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-center">
                      <div className="mb-3 w-full">
                        <h2 className="text-3xl font-extrabold">Ok no problem</h2>
                        <p className="text-lg font-semibold">just enter the details below!</p>
                      </div>
                      <form onSubmit={handleEmailSubmit} >
                        <div className="w-3/4 mb-3 border-black border rounded-lg mt-5 ">
                          <input type="email" className="w-full border p-2 rounded-lg" placeholder="email"
                            name='email'
                            onChange={onChange}
                            required />
                        </div>

                        <div className="flex w-3/4 items-center mt-4">
                          <button
                            className="bg-blue-500  hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg w-80"
                            type="submit" >Submit Email</button>
                        </div>
                      </form>


                    </div>
                  </div>
                </div>
              </div>
            </div>

          ) : (

            <div className="bg-gray-100">
              <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow p-6 rounded-lg">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mb-3 animate_animated animate_fadeIn">
                      <img src={GIF} alt="OTP" className="w-96 animate" />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-center">
                      <div className="mb-3 w-full">
                        <h2 className="text-3xl font-extrabold">Ok no problem</h2>
                        <p className="text-lg font-semibold">just enter the details below!</p>
                      </div>
                      <form onSubmit={otpFormDataSubmit} >
                        <div className="w-3/4 mb-3 border-black border rounded-lg mt-5 ">
                          <input type="number" className="w-full border p-2 rounded-lg" placeholder="OTP"
                            name='otp'
                            onChange={onFormChange}
                            required />
                        </div>
                        <div className="w-3/4 mb-3 border-black border rounded-lg mt-5 ">
                          <input type="password" className="w-full border p-2 rounded-lg" placeholder=" Password"
                            name='password'
                            onChange={onFormChange}
                            required />
                        </div>

                        <div className="flex w-3/4 items-center mt-4">
                          <button
                            className="bg-blue-500  hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg w-80"
                            type="submit" >Change Password</button>
                        </div>
                      </form>


                    </div>
                  </div>
                </div>
              </div>
            </div>


          )
      }
    </>
  )
}

export default Forgot