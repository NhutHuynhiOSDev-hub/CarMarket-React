import React from "react";

function Info() {
  return (
    <section className="w-full bg-black my-20 px-10 md:px-20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-3">
            <img
              src="https://wallpapercat.com/w/full/8/6/c/1647841-3840x2160-desktop-4k-land-rover-defender-background.jpg"
              className="rounded-xl"
              alt="image"
            />
          </div>

          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
