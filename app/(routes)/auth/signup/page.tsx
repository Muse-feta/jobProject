import Image from "next/image";
import React from "react";
import bookImg from "@/assets/img/bookLogo3.png";
import AuthTitle from "@/components/ui/AuthTitle";
import InputForm from "@/components/ui/InputForm";
import SignupForm from "@/components/ui/SignupForm";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex">
      <div className="pt-[20px] px-12">
        <div className="flex gap-1 ml-[-10px]">
          <Image width={90} src={bookImg} alt="book" />
          <h1 className="mt-7 text-xl">Book Rent</h1>
        </div>
        <div className=" mt-0 mb-[-10px]">
          <AuthTitle title="Signup" />
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
