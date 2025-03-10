
function Footer() {
    return (
      <div className="flex items-center w-full max-w-[1000px] h-auto mt-4">

            <span className="font-medium text-light">
            주관 </span>
            <div>
                    <img src="/logos/schoolLogo.png" alt="Crycheese" className="w-32 h-32 object-contain"/>
                </div>
                <div>
                    <img src="/logos/BBZlogo.png" alt="Easyspub" className="w-32 h-32 object-contain"/>
                 </div>

                 <div className="flex-grow"></div>
                 <span className="font-medium text-light">주최<br/></span>
            <div>
                    <img src="/logos/BBZlogo.png" alt="Crycheese" className="w-32 h-32 object-contain"/>
                </div>
            </div>
      
    );
  }
  
export default Footer;
