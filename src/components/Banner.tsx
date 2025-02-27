import bannerImage from "../assets/banner.webp";

function Banner() {
  return (
    <div className="w-full max-w-[1000px] h-auto mb-20">
        <img
      src={bannerImage}
      alt="Hackathon Banner"
      className="rounded-xl object-cover"
    />
    </div>
    
  );
}

export default Banner;
