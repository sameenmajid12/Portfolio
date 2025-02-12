import { useEffect } from "react";

function HeaderMenu({toggleVisibility}){
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return()=>{
      document.body.style.overflow='scroll';
    }
  },[])
  return(
    <div className="animate-slide-in bg-white w-[100dvw] h-[100dvh] z-200 fixed top-0 bottom-0 right-0 left-0">
        <i onClick={toggleVisibility} className="fa-solid fa-multiply absolute top-5 right-5 text-3xl cursor-pointer"></i>
    </div>
  )
}
export default HeaderMenu;