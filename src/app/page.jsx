import Image from "next/image";
import Title from "./components/layouts/title/Title";
import Button from "./components/layouts/button/Button";

export default function Home() {
  return (
    <div className= "relative min-h-screen">
      <Image
        src="/背景画像.png"
        fill
        quality={100}
        style={ { objectFit: 'cover' }}
        alt="Background"
      />
      <div className="relative z-10">
      <Title />
      <Button />
      </div>
    </div>
  );
}
