import qrCodeImg from "../assets/img/image-qr-code.png";
import Headline from "./headline";
import Text from "./text";

const Qrcode = () => {
  return (
    <div className="qrcode">
      <div className="qrcode__img-wrap">
        <img src={qrCodeImg} alt="QR Code" />
      </div>
      <div className="qrcode__text-wrap">
        <Headline
          hlText="Improve your front-end
skills by building projects"
        />
        <Text
          textContent="Scan the QR code to visit Frontend
Mentor and take your coding skills to
the next level "
        />
      </div>
    </div>
  );
};

export default Qrcode;
