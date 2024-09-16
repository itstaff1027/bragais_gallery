import Image from "next/image";
import NavLinks from "@/app/ui/nav-links.js"
import Gallery from "@/app/ui/gallery.js"
import HowToOrder from "@/app/ui/how-to-order.js"

export default function ({children}) {
  
  return (
    <div className="container min-w-full">
    
    <div className="slides">
    <div className="slides-body rounded-xl">
    
    IMAGE SLIDES 
    
    </div>
    </div>
    
    <div className="p-4 flex bg-[#020E29] w-full justify-center items-center text-white shadow-xl shadow-slate-600/100 z-10">
    <h1 className="text-xl font-bold">Gallery</h1>
    </div>
    
    <div className="gallery_container">
    <div className="heelHeight-filter rounded-xl shadow-xl shadow-slate-600/100">
    
    <Gallery />
    
    </div>
    </div>
    
    <div className="p-4 flex bg-white w-full justify-center items-center text-[#020E29] shadow-xl shadow-slate-600/50 z-10">
    <h1 className="text-xl font-bold">How to Order</h1>
    </div>
    <div className="footer_container p-16 bg-white text-black"> 
      <HowToOrder />
    </div>
    </div>
  );
}
