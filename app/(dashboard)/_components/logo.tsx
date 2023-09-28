import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2">
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <h2 className="text-2xl font-medium">SkillBlend</h2>
    </div>
  );
};

export default Logo;
