import qrCodeImg from "../assets/img/image-qr-code.png";

const qrcode = () => {
  return (
    <div className="qrcode">
      <img src={qrCodeImg} alt="QR Code" />
    </div>
  );
};

export default qrcode;
