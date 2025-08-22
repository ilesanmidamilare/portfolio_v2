<div className="relative w-full h-[400px] bg-gray-100">
  {/* Background box */}
  <div className="w-2/3 h-2/3 bg-amber-400 absolute top-0 left-0"></div>

  {/* Overlapping box */}
  <div className="
      w-1/2 h-1/2 bg-black absolute 
      top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      z-20 
      sm:ml-4 sm:mt-4     /* adjust overlap on small */
      md:ml-8 md:mt-8     /* adjust overlap on medium */
      lg:ml-12 lg:mt-12   /* adjust overlap on large */
    ">
  </div>

  {/* Foreground text */}
  <div className="absolute bottom-4 right-4 z-30 text-white text-lg sm:text-xl lg:text-2xl">
    Overlap Example
  </div>
</div>


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
