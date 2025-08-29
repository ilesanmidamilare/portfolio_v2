<div className="flex transition-transform duration-500 h-full"
            style={{ transform: 'translateX(-100%)' }}
        >
          {homeData.map(({ id, img, title }) => {
              return (
                <div
                  className="w-full h-full flex-shrink-0 flex flex-col gap-2"
                  key={id}
                >
                  {/* Video/Image */}
                  <div className="bg-brand-light-gray w-full overflow-hidden p-2">
                    {/* <Image
                      src={img}
                      alt={title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover rounded-xl"
                    /> */}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4 place-items-center">
                    <div className="text-xl font-semibold">
                      See more{" "}
                      <span className="text-brand-orange font-black capitalize">
                        {title}
                      </span>
                    </div>

                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <MoveRight className="text-brand-orange" size={32} />
                    </motion.div>
                  </div>
                </div>
              );
            })
          }

          
          </div>