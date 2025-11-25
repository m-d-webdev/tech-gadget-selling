"use client";

import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";

const product = {
  id: "red-gaming-chair-001",
  title: "Red Gaming Chair from china is good and new",
  price: 90.00,
  oldPrice: 100.00,
  rating: 4.9,
  reviewsCount: 215,
  inStock: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  colors: ["#000000", "#6B7280", "#EF4444", "#10B981", "#3B82F6"],

  images: [
    "/media/showenImage.png",
    "https://i.pinimg.com/736x/87/8c/ee/878ceee47d8794274ed6ba8f44a34c6b.jpg",
    "https://i.pinimg.com/736x/3e/fb/ed/3efbed8d9160c71bbdb8b9ae6e3c8af6.jpg",
  ],
  sku: "FNB476E6-A0BC",
  tags: ["Furniture", "Office", "Gaming Chair", "Chair"],

  additionalInformation: {
    "Seat Material": "Leather",
    "Color": "Black, Brown, Grey, Green, Blue",
    "Item Weight": "25 Kilograms",
    "Dimensions": '27" × 31" × 46"',
    "Brand": "KTI Design"
  }
};



const ImagesContainer = ({ setShowZoom, images = [], setZoomPosition, setZoomedimageUrl }) => {
  const [Indx, setIndx] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage position for zoom
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    // setCursorPosition({ x, y });
    setZoomPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div className="flex flex-col-reverse  md:flex-row  gap-2 justify-center items-center md:items-start w-full md:w-6/12">
      <div className="md:grid flex md:grid-cols-1    md:w-[100] gap-2">
        {
          images.map((m, i) => <img onClick={() => setIndx(i)} key={m} src={m} className={`md:w-full border ${Indx == i ? "border-chart-1/20 opacity-100" : "opacity-70 border-foreground/20"}  rounded-md object-top md:h-[100] h-[100] object-cover`} />)
        }
      </div>
      <div className="md:h-[500] h-[400]  border border-foreground/15 rounded-xl  md:max-w-[450] max-w-[400] relative overflow-hidden group w-full  ">
        <div
          style={{
            width: `${images?.length * 100}%`,
            transform: `translateX(-${Indx * (100 / images?.length)}%)`,
            gridTemplateColumns: `repeat(${images?.length} ,1fr)`,

          }}
          className={` grid  h-full   duration-600 ease-out `}>

          {
            images.map(i =>
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {
                  setZoomedimageUrl(i);
                  setShowZoom(true)
                }}
                onMouseLeave={() => {
                  setShowZoom(false)
                }}
                className="  w-full   cursor-zoom-in flex flex-col items-center gap-3 justify-center" key={i}>
                <img src={i} alt="" className="max-w-full  max-h-[500] object-cover " />
              </div>
            )
          }
        </div>
        <div className="w-full absolute px-2 flex justify-between top-[45%] left-0 group-hover:opacity-100 opacity-10">

          <button
            onClick={() => setIndx(pv => pv > 0 ? pv - 1 : 0)}
            className="p-1 opacity-70 hover:opacity-100 rounded-md bg-foreground text-background px-[7] border border-foreground/20">
            <i class="bi text-xl bi-arrow-left-short"></i>
          </button>

          <button
            onClick={() => setIndx(pv => pv < images.length - 1 ? pv + 1 : images.length - 1)}
            className="p-1 opacity-70 hover:opacity-100 rounded-md bg-foreground text-background px-[7] border border-foreground/20">
            <i class="bi text-xl bi-arrow-right-short"></i>
          </button>
        </div>
        <div className="w-full absolute gap-1 px-3 flex justify-center items-center bottom-2 left-0">
          {
            Array(images.length).fill().map((n, i) =>
              <div key={i} className={`${Indx == i ? "w-[20] bg-foreground" : "w-[10]"}  h-[10] duration-200 border border-foreground/20 rounded-full`}></div>
            )
          }
        </div>
      </div>
    </div>

  )
}



function ImageZoomComponent({ imageUrl, zoomPosition }) {



  return (
    <div
      className="absolute hidden md:block z-[10] overflow-hidden rounded-lg md:h-[500] md:w-[650] shadow-md border border-foreground/20"
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: '200%',
          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}

const ProductDetialSection = ({ data }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [countSelected, setcountSelected] = useState(1);
  const [ZoomedimageUrl, setZoomedimageUrl] = useState(data.images[0]);
  const link = "https://www.instagram.com/reels/DO6juujDL7V/"
  const whatAppmessage = `HHello, I’m interested in ordering this product. Product ID: ${product.id}. Could you provide more details?`
  return (
    <div className="w-full px-2 text-sm max-w-[1400] flex flex-col md:flex-row items-center gap-3 ">
      <ImagesContainer setShowZoom={setShowZoom} images={product.images} setZoomPosition={setZoomPosition} setZoomedimageUrl={setZoomedimageUrl} />
      <div className="gap-4 mt-5 md:mt-0 md:min-h-[500] flex flex-col  items-start  relative w-full md:w-6/12">
        {
          showZoom &&
          <ImageZoomComponent zoomPosition={zoomPosition} imageUrl={ZoomedimageUrl} />
        }

        <h1 className="text-2xl max-w-[400] font-semibold tracking-tight">{product.title}</h1>
        <div className="flex gap-2 items-center">
          <h1 className="flex gap-1 font-semibold"><Star className="fill-yellow-300 w-5 h-5 stroke-yellow-300" /> {product.rating}</h1>
          <p className="opacity-70">( {product.reviewsCount} Reviews )</p>
        </div>
        <div className="flex gap-4 mt-2 items-center">
          <h1 className="text-xl max-w-[400] font-semibold tracking-tighter">{product.price}.00  MAD</h1>
          <h1 className="text-base line-through text-destructive max-w-[400] font-medium tracking-tight">{product.oldPrice}.00 MAD</h1>
        </div>
        <p className="max-w-[500] mt-3 opacity-80">{product.description}</p>

        {/* -------------------- */}
        {/* <div className="flex  p-1 px-2 rounded-full text-sm font-medium tracking-tight items-center gap-1  border-2 border-[#00ed6f] bg-[#00ed6f25] text-[#009445]">
          <i className="bi bi-check-circle-fill"></i>
          In stock
        </div> */}
        {/* -------------------- */}


        {
          product.inStock
            ? <div className="flex  p-1 px-2 rounded-full text-sm font-medium tracking-tight items-center gap-2  border-2 border-yellow-400 bg-yellow-400/10 text-yellow-700">
              <i className="bi bi-graph-down-arrow"></i>
              Low stock !
            </div>
            : <div className="flex  items-center gap-6">

              <div className="flex  p-1 px-2 rounded-full text-sm font-medium tracking-tight items-center gap-1  border-2 border-[#ed0000] bg-[#ff1e1e1f] text-[#a70000]">
                <i className="bi bi-x-octagon-fill"></i>
                Out of stock
              </div>
              <button className="flex gap-2 p-2 tracking-tight rounded-md px-3 text-sm border border-foreground/20 bg-background text-[#000401] items-center">Notify Me When Available
                <i className="bi bi-bell-fill"></i>

              </button>
            </div>
        }

        <div className="">
          <h2 className="font-medium opacity-70">Colors</h2>
          <div className="flex gap-2 mt-2">

            {
              product.colors?.map(c => <div key={c} style={{ borderColor: c }} className="p-[1] border-[1] flex items-center justify-center rounded-full"><div style={{ backgroundColor: c }} className="w-[30] h-[30] rounded-full " /></div>)
            }
          </div>
        </div>

        <div className="flex mt-6 gap-2">
          <div className="flex items-center bg-accent border border-foreground/10 rounded-md gap-4">

            <button
              onClick={() => setcountSelected(pv => pv > 1 ? +pv - 1 : 1)}
              className="bg-primary-foreground  p-[4]  rounded-sm  border border-foreground/10">
              <Minus className="w-5 h-5" />
            </button>
            <input
              onKeyDown={k => {
                if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].includes(k.key)) { k.preventDefault() }
              }}
              onChange={e => {
                if (e.target.value == 0) {
                  setcountSelected(1)
                } else {
                  setcountSelected(e.target.value)
                }
              }}
              min={1}
              className="text-lg w-[30] text-center font-semibold" value={countSelected} />
            <button onClick={() => setcountSelected(pv => +pv + 1)}
              className="bg-primary-foreground  p-[4]  rounded-sm  border border-foreground/10">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <button className="flex ml-4 gap-2 p-2 px-7 bg-background rounded-sm  border border-foreground/15 font-medium">
            Add to cart
            <i className="bi bi-basket3"></i>
          </button>
          <button className="flex ml-4 gap-2 p-2 px-12  bg-chart-1 text-white rounded-sm  border border-foreground/10 font-semibold">
            Order now
            <i className="bi bi-send-check-fill"></i>
          </button>
        </div>

        {/* <a target="_blank" href={`hI%20want%20to%20order%20product%20ID:%${product.id}`}> */}
        <div className="flex mt-2 items-center gap-3">


          <div className="flex bg-accent border border-foreground/10 rounded-md">
            <p className="p-2 max-w-[155] opacity-70 overflow-hidden">
              {link}
            </p>
            <button onClick={() => { navigator?.clipboard.writeText(link) }}
              className="flex ml-4 gap-2 p-2 px-7 bg-background rounded-sm  border border-foreground/10 font-medium"
            >
              Copy link
              <i class="bi bi-copy"></i>
            </button>
          </div>
          <a target="_blank" href={`https://wa.me/212767310612?text=${encodeURIComponent(whatAppmessage)}`}
            className="p-2 px-4 text-green-500 bg-background border-2 border-green-500 font-semibold flex gap-2 rounded-md"
          >
            Order on WhatsApp
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetialSection
