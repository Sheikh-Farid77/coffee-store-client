import bgImg from "../assets/images/more/15.jpg";
import Logo from "../assets/images/more/logo1.png";

export default function Nav() {
  return (
    <div
      className="w-full flex h-32 gap-2 items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div>
        <img
          src={Logo}
          alt="Coffee"
          className="w-20 h-20 rounded-full shadow-lg"
        />
      </div>
      <h2 className="mt-4 text-2xl font-bold drop-shadow-lg">
        Espresso Emporium
      </h2>
    </div>
  );
}
