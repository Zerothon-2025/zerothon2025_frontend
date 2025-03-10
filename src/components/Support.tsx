function Support() {
  return (
    <div className="flex-col w-full max-w-[1000px] h-auto">
      <span className="font-bold text-bold">
        💸 후원
        <br />
      </span>

      <div className="flex bg-white border border-gray-400 rounded-lg mt-4">
        <div className="flex-1 flex justify-center">
          <img
            src="/logos/crycheese.png"
            alt="Crycheese"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/logos/easyspub.png"
            alt="Easyspub"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/logos/jpub.png"
            alt="Jpub"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/logos/hanbitmedia.png"
            alt="Hanbitmedia"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
