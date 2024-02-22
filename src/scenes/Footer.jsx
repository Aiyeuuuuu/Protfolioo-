import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-21 bg-red pt-0.5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-button md:justify-between text-centre ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
          </p>
          <p className="font-playfair font-semibold text-2xl text-yellow"> 
            L B 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
