import LinesUnderSection from "@/components/global/LinesUnderSection";

function page() {
  const name = "Mustapha";
  const popularQus = [
    "What are the best-selling gadgets right now?",
    "Do you have bundle offers if I buy more than one?",
    "What happens if the package arrives damaged?"
  ]
  return (
    <div className="flex relative flex-col min-h-[90vh] justify-center items-center  w-full">
      <LinesUnderSection
        yCount={50}
        yPersent={2.5}
        xCount={40}
        xPersent={5}
        w="w-[30%]"
        h="h-[30%]"
        lineClassName="bg-[#ef0cff31]"
      />
      <div className="w-full  relative max-w-[700]">

        <h1 className="text-4xl font-bold tracking-tighter IntorAssistant max-w-[500]">
          <i className="bi  bi-leaf"></i> Hi there {name},<br />
          How can I help you with your shopping today?
        </h1>
        <div className="grid mt-10 grid-cols-2 md:grid-cols-3 w-full max-w-[700]  gap-2">
          {
            popularQus.map(d =>

              <div key={d} className="p-2 opacity-80 hover:opacity-100 duration-100 cursor-pointer !py-1 flex flex-col rounded-lg !pb-3 border border-foreground/10 bg-primary-foreground font-medium tracking-tight">
                {/* <i className="text-end mb-4 text-xl text-chart-1 bi bi-patch-question"></i> */}
                <i className="text-end mb-4 text-xl text-chart-1 bi bi-question-octagon"></i>
                <p className="text-sm">{d}</p>
              </div>
            )
          }

        </div>
        <div className="w-full max-w-[700] border mt-5 p-2 bg-background rounded-md shadow-xs">
          <textarea className="resize-none tracking-tight w-full outline-none border-none p-2 h-[50]" name="" id="" placeholder="Ask the assistant anything about products, orders or deals ..."></textarea>
          {/* <div className="w-full px-3"><div className="w-full bg-foreground/10 h-[1]"></div></div> */}
          <div className="w-full flex px-1 mt-3 justify-between">
            <div className="">

            </div>
            <button className=" flex items-center px-2">

              <i className="bi text-lg bi-send"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default page
