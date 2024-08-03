import React from 'react'
import Image from "next/image";
import bookImg from "@/assets/img/bookLogo2.png"

type Props = {}

const AuthSideBar = (props: Props) => {
  return <div className="w-full h-screen bg-[#171B36] md:w-1/2 flex justify-center items-center">
<Image width={400} src={bookImg} alt='book'/>
  </div>;
}

export default AuthSideBar