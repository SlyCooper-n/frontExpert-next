import Image from "next/image";
import background from "../../../public/images/home/background.png";
import character from "../../../public/images/home/character.png";
import device from "../../../public/images/home/device.png";
import speechBubble from "../../../public/images/home/speech-bubble.png";

export function Character() {
  return (
    <picture className="relative mx-auto w-full text-center">
      <div className="absolute bottom-0 left-[27%] z-40">
        <Image src={character} alt="character" width={183} height={246} />
      </div>

      <div className="absolute top-[13%] left-[40%] z-30">
        <Image src={speechBubble} alt="speech bubble" width={64} height={71} />
      </div>

      <div className="absolute -top-4 left-[50%] z-20">
        <Image src={device} alt="device" width={145} height={283} />
      </div>

      <div>
        <Image src={background} alt="background" width={328} height={318} />
      </div>

      <hr className="mx-auto h-[2px] w-full max-w-7xl bg-gradient-to-r from-[#f5f5f5] via-slate-900 to-[#f5f5f5]" />
    </picture>
  );
}
