import Logo from "../assets/cocktails-logo-inspiration-drink-glass-bar-restaurant_63578-164.jpg"

export default function Header() {
  return (
    <nav className="flex items-center justify-center py-2 px-5 bg-white cursor-pointer z-50 fixed top-0 left-0 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center gap-5 font-semibold text-sm flex-1 justify-start">
            <div>Home</div>
            <div>Products</div>
            <div>Cocktails</div>
            <div>Our Story</div>
            <div>Garnished with Good</div>
        </div>

        <div className="size-16 flex justify-center">
            <img src={Logo} alt="Winne Bottle" className="object-cover w-full h-full" />
        </div>

        <div className="flex items-center gap-5 font-semibold text-sm flex-1 justify-end">
            <div>Where To Find Us</div>
            <i className="far fa-circle-user text-2xl"></i>
        </div>
    </nav>
  )
}
