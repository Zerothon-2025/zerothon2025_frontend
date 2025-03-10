import bannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="w-full max-w-[1000px] h-auto mb-3">
        <img
      src={bannerImage}
      alt="Hackathon Banner"
      className="rounded-xl object-cover"
    />
    </div>
    
  );
}

export default Banner;
