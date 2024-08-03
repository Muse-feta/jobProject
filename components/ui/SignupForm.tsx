import Link from 'next/link';
import React from 'react'

type Props = {}

const SignupForm = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Input"
            className="h-15 md:w-96 px-6 py-2 text-lg text-black border-gray-200 border-2 rounded-lg  outline-none focus:border-gray-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-sm text-black text-opacity-80 bg-white absolute left-5 top-3 px-1 transition duration-200 input-text">
            Email Adress
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-3">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Password"
            className="h-15 md:w-96 px-6 py-2 text-lg text-black border-gray-200 border-2 rounded-lg  outline-none focus:border-gray-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-sm text-black text-opacity-80 bg-white absolute left-5 top-3 px-1 transition duration-200 input-text">
            Password
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-3">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Confirm Password"
            className="h-15 md:w-96 px-6 py-2 text-lg text-black border-gray-200 border-2 rounded-lg  outline-none focus:border-gray-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-sm text-black text-opacity-80 bg-white absolute left-5 top-3 px-1 transition duration-200 input-text">
            Confirm Password
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-3">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Location"
            className="h-15 md:w-96 px-6 py-2 text-lg text-black border-gray-200 border-2 rounded-lg  outline-none focus:border-gray-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-sm text-black text-opacity-80 bg-white absolute left-5 top-3 px-1 transition duration-200 input-text">
            Location
          </span>
        </label>
      </div>

      <div className="flex justify-center items-center mt-4">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Phone Number"
            className="h-15 md:w-96 px-6 py-2 text-lg text-black border-gray-200 border-2 rounded-lg  outline-none focus:border-gray-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-sm text-black text-opacity-80 bg-white absolute left-5 top-3 px-1 transition duration-200 input-text">
            Phone Number
          </span>
        </label>
      </div>

      <div className="ml-4 mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500"
          />
          <span className="ml-2 text-gray-700">Remember me</span>
        </label>

        <div className="ml-[-20px] mt-2">
          <button
            className="bg-[#00abff] hover:bg-[#13709f] text-white font-medium py-2  rounded-md w-full"
            type="submit"
          >
            LOGIN
          </button>

          <div className="text-center mt-4">
            <Link href="/auth/login">
              Alredy Have an account?
              <span className="text-blue-500 hover:text-blue-600">Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;