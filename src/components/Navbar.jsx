import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  }

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 5){
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    })
  })

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return <div className={`navbar fixed w-full z-50 transition-all ${scrollActive}`}>
    <div className="container mx-auto px-4">
      <div className="navbar-box flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">Portofolio.</h1>
        </div>
        <ul className={`flex lg:gap-12 lg:static lg:flex-row lg:p-0 lg:m-0 lg:transition-none lg:shadow-none lg:bg-transparent 
        lg:w-auto lg:h-full lg:translate-y-0 lg:text-black 
        gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 
        rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
          <li className="flex items-center gap-3">
            <i className="ri-home-4-line text-3xl lg:hidden block"></i>
            <a href="#home" className="font-medium opacity-75">Beranda</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-briefcase-line text-3xl lg:hidden block"></i>
            <a href="#pengalaman" className="font-medium opacity-75">Pengalaman</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-macbook-line text-3xl lg:hidden block"></i>
            <a href="#proyek" className="font-medium opacity-75">Proyek</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-file-line text-3xl lg:hidden block"></i>
            <a href="#sertifikat" className="font-medium opacity-75">Sertifikat</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-tools-fill text-3xl lg:hidden block"></i>
            <a href="#tools" className="font-medium opacity-75">Tools</a>
          </li>
        </ul>
        <div className="social flex items-center gap-2">
          <a href="#social" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Social Media</a>
          <i className="ri-menu-3-line text-3xl lg:hidden block" onClick={handleClick}></i>
        </div>

      </div>
    </div>
  </div>
}

export default Navbar