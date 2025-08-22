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


<div className="relative w-full h-full hidden lg:flex ">
             
    {/* <div className="w-full h-1/2 absolute bottom-0 left-0 flex gap-4">
      <div className="self-end mb-13 shrink-0 ">
        <Image
          src={Twitter}
          width={20}
          height={20}
          alt="Twitter logo"
          className="mb-4"
        />
        <Image
          src={Linkedin}
          width={20}
          height={20}
          alt="linkedin logo"
          className="mb-4"
        />
        <Image
          src={Instagram}
          width={20}
          height={20}
          alt="Instagram logo"
        />
      </div>

      <div className="flex-[2]  ml-10 relative">
        <div className="bg-gray-400 h-full w-5/7"></div>
        <div className="h-5/7 w-2/5 bg-black absolute top-1/2 right-0 -translate-y-1/2  z-20"></div>
      </div>

      <div className="self-end flex-1 flex flex-col gap-4
        md:
        lg:mb-15
      ">
        <div className="text-[16px]">
          Hi, My  name is <span className="font-black">Damilare Ilesanmi</span>. I am frontend developer, UX architect, and JavaScript engineer. I build scalable web and mobile application.
        </div>
        <div className="flex gap-6">
          <div className="text-[16px]">See more <span className="font-black">About Me</span> </div>
          <Image
            src={ForwardIcon}
            alt="Forward Icon"
            width={20}
            height={20}
          />
        </div>
      </div>

    </div> */}

    {/* <div className="
        w-full h-1/2 absolute 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-5/5
        z-20 
        sm:mt-4      /* adjust overlap on small */
        md:mt-8     /* adjust overlap on medium */
        lg:mt-8    /* adjust overlap on large */
      "
    >
      {/* <div className="font-black   
        flex
        flex-col
        text-nowrap
        absolute
        justify-end
        w-full
        h-full
        text-[clamp(28px,calc(28px+92*((100vw-320px)/(1280-320))),120px)]
        xl:text-[clamp(120px,calc(120px+64*((100vw-1280px)/(1920-1280))),184px)]
        leading-[0.8]
      ">
        <div className="">Software</div>
        <div className="">Engineer & Designer</div>
      </div> */}
    </div> */}
</div>
