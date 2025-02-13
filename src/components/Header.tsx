import Logo from "../assets/Logo.webp"

export default function Header() {
  return (
    <nav className=" flex items-center justify-between p-6 bg-white cursor-pointer z-50 fixed top-0 left-0 w-[100%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center justify-between gap-5 font-semibold">
            <div>Home</div>
            <div>Products</div>
            <div>Cocktails</div>
            <div>Our Story</div>
            <div>Garnished with Good</div>
        </div>
       
       <div className=" size-12 mr-20 "><img src={Logo} alt="Winne Bottle" className=" object-cover w-full h-full" /></div>
    
        <div  className="flex items-center justify-between gap-5 font-semibold">
            <div>Where To Find Us</div>
            <i className="fa-regular fa-circle-user text-2xl"></i>
        </div>

    </nav>
  )
}
