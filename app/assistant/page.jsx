
function page() {
  const name = "Mustapha";
  const popularQus = [
    "What are the best-selling gadgets right now?",
    "Do you have bundle offers if I buy more than one?",
    "What happens if the package arrives damaged?"
  ]
  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center  w-full">
      <div className="w-full max-w-[800]">

        <h1 className="text-4xl font-bold tracking-tighter IntorAssistant max-w-[500]">Hi there {name},<br />
          How can I help you with your shopping today?
        </h1>
        <div className="grid mt-10 grid-cols-2 md:grid-cols-3 w-full max-w-[700]  gap-2">
          {
            popularQus.map(d =>

              <div key={d} className="p-2 opacity-80 hover:opacity-100 duration-100 cursor-pointer !py-1 flex flex-col rounded-lg !pb-3 border border-foreground/10 bg-background/40 font-medium tracking-tight">
                <i className="text-end mb-4 text-xl text-chart-1 bi bi-patch-question"></i>
                <p className="text-sm">{d}</p>
              </div>
            )
          }

        </div>
        <div className="w-full max-w-[700] border mt-5 p-2 bg-background rounded-md shadow-xs">
          <textarea className="resize-none tracking-tight w-full outline-none border-none p-2 min-h-[80]" name="" id="" placeholder="Ask the assistant anything about products, orders or deals ..."></textarea>
          <div className="w-full px-3"><div className="w-full bg-foreground/10 h-[1]"></div></div>
          <div className="w-full flex px-1 mt-3 justify-between">
            <div className="">

            </div>
            <button className="p-1 px-2 bg-chart-1 text-secondary font-semibold w-[100] justify-center tracking-tighter flex items-center gap-2   rounded-md">

              send
              <i className="bi text-lg bi-send"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default page
