import { Link, useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

function MainPage(){
    const navigate = useNavigate()

    return(
        <>
        
        <div className="flex flex-col justify-center items-center w-screen mt-50">
            <h1 className="font-extrabold text-7xl">
                <span className="">How readers find their next </span> 
                <span className="text-orange-500">favorite book</span>
            </h1>
            <button className=" px-8 py-4 mt-3.5 shadow-sm hover:shadow-lg transition duration-300 text-1xl text-black font-semibold rounded-lg 
             bg-orange-200" onClick={() => navigate("/recommender")}>
                get started</button> 
        </div>

        </>
    )
}

function MainPageView(){

    return(
        <>
    <div class="relative h-screen bg-white overflow-hidden">
  <svg class="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 800 400" fill="none" preserveAspectRatio='none'> 
    <path fill="#ffb74d" d="M0,100 C200,200 600,0 800,100 L800,400 L0,400 Z" />
  </svg>
  <div className='relative z-10'>
  <MainHeader></MainHeader>
  <MainPage></MainPage>
  </div>
  

    </div>


    </>
    )
}

export default MainPageView;