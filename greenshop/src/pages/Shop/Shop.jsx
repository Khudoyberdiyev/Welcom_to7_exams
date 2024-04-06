import React from "react";
import CardCarousel from "../../components/Ui/Carousel/CardCarousel";

const Shop = () => {
  return (
    <>
      <section className="pt-[85px]">
        <div className="container mx-auto">
          <div className="flex justify-between pt-10">
            <div className="w-[600px] h-[440px] bg-slate-400">HUllas</div>
            <div className="w-[600px] h-[440px] bg-slate-400">HUllas</div>
          </div>
          <div>
            <div className="w-full pt-16">
              <div className="border-b-2 border-gray-400 pb-2">
                <ul className="flex items-center space-x-9">
                  <li className=" font-sans text-lg font-bold text-[#3D3D3D] hover:text-[#2e9b30]">
                    <a href="" className="nav">
                      Product
                    </a>
                  </li>
                  <li className=" font-sans text-lg text-[#3D3D3D] font-bold hover:text-[#2e9b30]">
                    <a href="" className="nav">
                      Reviews(19)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="font-sans text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam fringilla augue nec est tristique auctor.
                  Donec non est at libero vulputate rutrum. Morbi ornare lectus
                  quis justo gravida semper. Nulla tellus mi, vulputate
                  adipiscing cursus eu, suscipit id nulla. <br /> <br />{" "}
                  Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                  feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                  tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                  eget sagittis vulputate, sapien libero hendrerit est, sed
                  commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor, lorem et placerat
                  vestibulum, metus nisi posuere nisl, in accumsan elit odio
                  quis mi. Cras neque metus, consequat et blandit et, luctus a
                  nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                  euismod eget. The ceramic cylinder planters come with a wooden
                  stand to help elevate your plants off the ground.
                </p>
              </div>
              <div className="pt-8">
                <div>
                  <h1 className=" font-sans text-md font-bold text-[#3D3D3D]">
                    Living Room:
                  </h1>
                </div>
                <p className="font-sans text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
                <div className="pt-4">
                  <h1 className=" font-sans text-md font-bold text-[#3D3D3D]">
                    Dining Room:
                  </h1>
                </div>
                <p className="font-sans text-[#727272]">
                  The benefits of houseplants are endless. In addition to
                  cleaning the air of harmful toxins, they can help to improve
                  your mood, reduce stress and provide you with better sleep.
                  Fill every room of your home with houseplants and their
                  restorative qualities will improve your life.
                </p>
                <div className="pt-4">
                  <h1 className=" font-sans text-md font-bold text-[#3D3D3D]">
                    Office:
                  </h1>
                </div>
                <p className="font-sans text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-300 pt-7">
            <h1 className=" font-sans text-md font-bold text-[#53cf5c]">
              Releted Products
            </h1>
          </div>
          <CardCarousel />
        </div>
      </section>
    </>
  );
};

export default Shop;
