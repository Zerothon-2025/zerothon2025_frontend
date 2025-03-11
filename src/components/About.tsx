
function About() {
  return (
    <div className="w-full max-w-[1000px] h-auto mt-10 ">
        <span className="font-bold text-bold">모두를 위한 해커톤, 제로톤</span>
        <div className="font-medium text-medium w-full max-w-[1000px] h-auto mb-20 p-5">
            <span>🚀 단국대에서 개최되는 전국 해커톤 대회!! ‘제로톤(ZeroThon)’ 해커톤 참가자를 모집합니다! 🎉 <br/>
            💡 “0부터 시작하는 해커톤”, 개발 경험이 적어도 부담 없이 도전할 수 있는 열린 무대!<br/> 🔥 단 100시간! 
            창의적인 아이디어를 현실로 만들고, 실전 프로젝트 경험까지!<br/>
            다양한 이벤트와 상품이 마련되어 있어 참가자들이 더욱 즐겁게 몰입할 수 있습니다. <br/>
            도전과 성장, 그리고 즐거움이 함께하는 제로톤에서 여러분의 가능성을 펼쳐보세요! 🚀
            
            <br/><br/>
            </span>
            
            <div className="flex items-center content-center">
            <span>
            ▶️ 더 많은 정보는 인스타그램에서 확인하세요!  
            </span>
            <img src='/logos/instagram.png' className="w-4 h-4 ml-5 justify-content"/>
            <a 
  href="https://www.instagram.com/zerothon_0.0/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-500 hover:underline ml-1"
>
  @zerothon_0.0
</a>

              </div>  

            
        </div>
    </div>
    
  );
}

export default About;
