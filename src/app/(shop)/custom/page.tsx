"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CustomPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [activeStep, setActiveStep] = useState(1);
  const [width, setWidth] = useState(120); // cm
  const [height, setHeight] = useState(75); // cm
  const [depth, setDepth] = useState(60); // cm
  const [material, setMaterial] = useState("oak");
  const [finish, setFinish] = useState("matte");
  const [isAdding, setIsAdding] = useState(false);

  // Price Calculation Logic
  const price = useMemo(() => {
    let base = 25000;
    // Volume Factor
    const volumeFactor = (width * height * depth) / 5000; 
    base += volumeFactor * 50; 
    
    // Material Premium
    if (material === "teak") base += 8000;
    if (material === "walnut") base += 12000;
    
    // Finish Premium
    if (finish === "gloss") base += 2500;
    
    return Math.round(base / 100) * 100; // Round to nearest 100
  }, [width, height, depth, material, finish]);

  const handleAddToCart = () => {
    setIsAdding(true);
    // Simulate API call for custom order creation
    setTimeout(() => {
      addItem({
        id: `custom-${Date.now()}`,
        name: `Custom ${material.charAt(0).toUpperCase() + material.slice(1)} Desk`,
        price: price,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuXUXB4jKSD9eoIQW4Pd7OdejnDhkoIVSn47n10Gp_T2gjtpGapUATo8P0lvfuybpMGGYkzdo56xs-oa0-RqJEBzvYqirIxzkSyOqrLz0xKQ08t5RUsNCwarzcVnghVQabxe_0mX6D5bWS8HEJwYCbucAe0HeeH3OkgW2Vy1Ud9zI5RjW68oyJaOKTNVaGLLolrGYUmEJrsNSBlr-aOo2sx0cLcp2nOaKmW9SIMoPZPbTd_zY8CPMVsWXE7vfd0syHNMoxL5G8wR_t",
        options: {
          Format: `${width}cm x ${depth}cm x ${height}cm`,
          Material: material,
          Finish: finish
        }
      });
      setIsAdding(false);
      router.push("/cart");
    }, 800);
  };

  // Image scaling simulation based on dimensions relative to base
  const scaleX = 1 + (width - 120) / 400; // subtle scale
  const scaleY = 1 + (height - 75) / 400;

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen font-display pb-24 md:pb-0">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-30 bg-white/90 dark:bg-[#1C1917]/90 backdrop-blur border-b border-stone-200 dark:border-stone-800 px-4 py-3 flex justify-between items-center">
         <h1 className="font-bold text-stone-900 dark:text-white">Desk Configurator</h1>
         <span className="text-[#B48E43] font-bold">KSH {price.toLocaleString()}</span>
      </div>

      <div className="flex flex-col md:flex-row h-full md:h-[calc(100vh-80px)]">
        {/* Preview Area (Sticky on Desktop) */}
        <div className="md:w-3/5 lg:w-2/3 bg-stone-100 dark:bg-[#2A2622] relative overflow-hidden flex items-center justify-center min-h-[40vh] md:h-full">
           <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl"></div>
           </div>
           
           {/* Visualizer */}
           <div className="relative z-10 w-[80%] max-w-2xl aspect-square flex items-center justify-center transition-all duration-500 ease-out" 
                style={{ transform: `scale(${scaleX}, ${scaleY})` }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuXUXB4jKSD9eoIQW4Pd7OdejnDhkoIVSn47n10Gp_T2gjtpGapUATo8P0lvfuybpMGGYkzdo56xs-oa0-RqJEBzvYqirIxzkSyOqrLz0xKQ08t5RUsNCwarzcVnghVQabxe_0mX6D5bWS8HEJwYCbucAe0HeeH3OkgW2Vy1Ud9zI5RjW68oyJaOKTNVaGLLolrGYUmEJrsNSBlr-aOo2sx0cLcp2nOaKmW9SIMoPZPbTd_zY8CPMVsWXE7vfd0syHNMoxL5G8wR_t"
                alt="Customizable Desk Preview"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Dimension Labels (Overlay) */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-stone-500 bg-white/80 px-2 py-1 rounded shadow-sm whitespace-nowrap">
                 Width: {width}cm
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-xs font-bold text-stone-500 bg-white/80 px-2 py-1 rounded shadow-sm whitespace-nowrap rotate-90">
                 Height: {height}cm
              </div>
           </div>

           {/* Mobile Controls Overlay Hint */}
           <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 md:hidden animate-pulse">
              Scroll down to customize &darr;
           </div>
        </div>

        {/* Configuration Panel */}
        <div className="md:w-2/5 lg:w-1/3 bg-white dark:bg-[#1C1917] border-l border-stone-200 dark:border-stone-800 flex flex-col h-auto md:h-full md:overflow-y-auto">
           <div className="p-6 md:p-8 space-y-8 flex-grow">
              
              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-8 text-sm font-medium overflow-x-auto scrollbar-hide">
                 <button onClick={() => setActiveStep(1)} className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors ${activeStep === 1 ? 'bg-[#B48E43] text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'}`}>1. Size</button>
                 <div className="w-8 h-px bg-stone-200 dark:bg-stone-700"></div>
                 <button onClick={() => setActiveStep(2)} className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors ${activeStep === 2 ? 'bg-[#B48E43] text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'}`}>2. Material</button>
                 <div className="w-8 h-px bg-stone-200 dark:bg-stone-700"></div>
                 <button onClick={() => setActiveStep(3)} className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors ${activeStep === 3 ? 'bg-[#B48E43] text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'}`}>3. Finish</button>
              </div>

              {/* Step 1: Dimensions */}
              {activeStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-xl font-bold text-stone-900 dark:text-white">Adjust Dimensions</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Width (cm)</label>
                        <span className="text-sm font-bold text-[#B48E43]">{width}</span>
                      </div>
                      <input type="range" min="80" max="200" step="5" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B48E43]" />
                      <div className="flex justify-between text-xs text-stone-400 mt-1"><span>80cm</span><span>200cm</span></div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Height (cm)</label>
                        <span className="text-sm font-bold text-[#B48E43]">{height}</span>
                      </div>
                      <input type="range" min="60" max="120" step="1" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B48E43]" />
                      <div className="flex justify-between text-xs text-stone-400 mt-1"><span>60cm</span><span>120cm</span></div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Depth (cm)</label>
                        <span className="text-sm font-bold text-[#B48E43]">{depth}</span>
                      </div>
                      <input type="range" min="40" max="100" step="5" value={depth} onChange={(e) => setDepth(Number(e.target.value))} className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B48E43]" />
                      <div className="flex justify-between text-xs text-stone-400 mt-1"><span>40cm</span><span>100cm</span></div>
                    </div>
                  </div>
                  
                  <button onClick={() => setActiveStep(2)} className="w-full py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Next: Choose Material
                  </button>
                </div>
              )}

              {/* Step 2: Material */}
              {activeStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-xl font-bold text-stone-900 dark:text-white">Select Wood Type</h2>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {['oak', 'walnut', 'teak'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMaterial(m)}
                        className={`flex items-center gap-4 p-3 rounded-xl border-2 transition-all ${material === m ? 'border-[#B48E43] bg-[#B48E43]/5' : 'border-stone-200 dark:border-stone-700 hover:border-[#B48E43]/50'}`}
                      >
                        <div className={`w-12 h-12 rounded-lg ${m === 'oak' ? 'bg-[#D2B48C]' : m === 'walnut' ? 'bg-[#5D4037]' : 'bg-[#8D6E63]'}`}></div>
                        <div className="text-left flex-1">
                           <span className="block font-bold text-stone-900 dark:text-white capitalize">{m}</span>
                           <span className="block text-xs text-stone-500">
                             {m === 'oak' ? 'Standard' : m === 'walnut' ? '+ KSH 12,000' : '+ KSH 8,000'}
                           </span>
                        </div>
                        {material === m && <span className="material-icons text-[#B48E43]">check_circle</span>}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setActiveStep(1)} className="flex-1 py-3 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-bold rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                      Back
                    </button>
                    <button onClick={() => setActiveStep(3)} className="flex-[2] py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                      Next: Finish
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Finish */}
              {activeStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-xl font-bold text-stone-900 dark:text-white">Select Finish</h2>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setFinish("matte")}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${finish === "matte" ? 'border-[#B48E43] bg-[#B48E43]/5' : 'border-stone-200 dark:border-stone-700 hover:border-[#B48E43]/50'}`}
                      >
                        <span className="block font-bold text-stone-900 dark:text-white mb-1">Matte</span>
                        <span className="block text-xs text-stone-500">Natural look</span>
                    </button>
                    <button
                        onClick={() => setFinish("gloss")}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${finish === "gloss" ? 'border-[#B48E43] bg-[#B48E43]/5' : 'border-stone-200 dark:border-stone-700 hover:border-[#B48E43]/50'}`}
                      >
                        <span className="block font-bold text-stone-900 dark:text-white mb-1">Gloss</span>
                        <span className="block text-xs text-stone-500">+ KSH 2,500</span>
                    </button>
                  </div>

                  <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 mt-8">
                     <h3 className="font-bold text-stone-900 dark:text-white mb-2">Configuration Summary</h3>
                     <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                        <li className="flex justify-between"><span>Dimensions:</span> <span className="font-medium text-stone-900 dark:text-white">{width}x{depth}x{height} cm</span></li>
                        <li className="flex justify-between"><span>Material:</span> <span className="font-medium text-stone-900 dark:text-white capitalize">{material}</span></li>
                        <li className="flex justify-between"><span>Finish:</span> <span className="font-medium text-stone-900 dark:text-white capitalize">{finish}</span></li>
                     </ul>
                     <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700 flex justify-between items-center">
                        <span className="font-bold text-lg text-stone-900 dark:text-white">Total</span>
                        <span className="font-extrabold text-2xl text-[#B48E43]">KSH {price.toLocaleString()}</span>
                     </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setActiveStep(2)} className="flex-1 py-3 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-bold rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                      Back
                    </button>
                    <button onClick={handleAddToCart} disabled={isAdding} className="flex-[2] py-3 bg-[#B48E43] text-white font-bold rounded-lg hover:bg-[#96752E] transition-colors shadow-lg shadow-[#B48E43]/20 flex items-center justify-center gap-2">
                      {isAdding ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Add to Cart</span>
                          <span className="material-icons text-sm">shopping_bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
           </div>
        </div>
      </div>

      {/* Floating Action Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1C1917] border-t border-stone-200 dark:border-stone-800 p-4 shadow-xl z-40 transform transition-transform">
         <div className="flex gap-4 items-center">
            <div className="flex-1">
               <span className="block text-xs text-stone-500 uppercase">Total Price</span>
               <span className="block font-extrabold text-xl text-stone-900 dark:text-white">KSH {price.toLocaleString()}</span>
            </div>
            <button onClick={handleAddToCart} disabled={isAdding} className="flex-1 py-3 bg-[#B48E43] text-white font-bold rounded-lg hover:bg-[#96752E] shadow-lg flex justify-center items-center gap-2">
                 {isAdding ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : 'Add to Cart'}
            </button>
         </div>
      </div>
    </div>
  );
}
