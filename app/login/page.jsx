import LoginWithSlider from "@/Client/auth/LoginForm";
import Logo from "@/components/global/Logo";
import LinesUnderSection from "@/components/global/LinesUnderSection";
import { Gmail } from "@/Client/icons";

function page() {
  return (
    <div className="flex min-h-[90vh] justify-center items-center  w-full">
      <div className="w-full mt-4 max-w-5xl bg-background rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: Login form */}
        <div className="p-2 md:px-10 md:py-5">
          <div className="mb-5 flex flex-col items-start justify-start">
            <div className="items-center  mb-6">
              <Logo className={"text-2xl"} />
            </div>

            <h2 className="text-2xl font-bold mb-2">Log in to your Account</h2>
            <p className="text-sm text-gray-500">Welcome back! Select method to log in</p>

            <div className="mt-6 w-full flex ">
              <button className="flex-1 bg-primary-foreground border rounded-md flex font-semibold tracking-tight items-center justify-center gap-2 py-2 text-sm"><Gmail className="w-5" />  Google</button>
            </div>

            <div className="mt-6 px-4 w-full flex items-center gap-4 text-center text-xs text-gray-400 text-nowrap"><div className="w-[40%] h-[1] bg-foreground/10"></div>or continue with email<div className="w-[40%] h-[1] bg-foreground/10"></div></div>
          </div>

          <LoginWithSlider />
        </div>

        {/* RIGHT: Slider with 3 empty panels (no icons) */}
        <div className="h-full   flex items-center justify-center relative">

          <div className="w-full h-full p-3 relative flex flex-col justify-between items-center  ">
            <div className="rounded-lg h-[400]   w-full relative  flex items-center justify-center overflow-hidden">
              <LinesUnderSection
                xCount={20}
                xPersent={8}
                yCount={20}
                w="w-[200]"
                h="h-[200]"
                yPersent={8}
                from="from-background"
                className={"z-[1]"}
                lineClassName="bg-[#0098ea]"
              />
              <img src="/media/showenImage.png" className="max-h-full z-[3]" alt="" />

            </div>

            <div className="mt-6 !z-[2] bg-background  flex flex-col items-center justify-center text-center">
              <h3 className="text-lg tracking-tight font-semibold">Upgrade Your Life with Smart Tech</h3>
              <p className="text-sm tracking-tight max-w-[300] mt-2">Start by exploring our collection and picking what catches your eye.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default page
