function ApplyButton() {


  const handleClick = () => {
    window.open("https://forms.gle/9dopKP1CVnecSQtx7", "_blank"); // 원하는 URL로 변경
  };

  return (
    <div 
      className="w-full max-w-[1000px] cursor-pointer mb-10" 
    >
      <button 
        onClick={handleClick} 
        className="w-full h-10 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg"
      >
        지원하기 
      </button>
    </div>
  );
}

export default ApplyButton;
