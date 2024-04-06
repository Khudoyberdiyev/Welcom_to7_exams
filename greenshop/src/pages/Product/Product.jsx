// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePlantssApi from "../../service/Plants/usePlantsApi";
import Counter from "../../components/Ui/Counter/Counter";
import CardCarousel from "../../components/Ui/Carousel/CardCarousel";

const Product = () => {
  const { slug } = useParams();
  const [plant, setPlant] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    getData(slug);
  }, []);

  const getData = (slug) => {
    usePlantssApi
      .getOnePlant(slug)
      .then((res) => {
        setPlant(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="item" className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-20 pt-6">
          <img src={plant?.image_url} alt="Plant image" />
          <div className="w-[700px] px-8">
            <div className="w-full pb-[25px] border-b">
              <div className="flex items-center justify-between mb-3">
                <p>{plant?.year} ta sotuvda bor</p>
                <button
                  onClick={() => setLikeFun()}
                  className="flex items-center h-[24px] gap-[10px]"
                >
                </button>
              </div>
              <h1 className="text-xl font-bold mb-2">{plant?.common_name}</h1>

              <div className="w-[240px]">
                <p className="font-bold text-[22px] text-[#46A358]">
                  {plant?.year} rub
                </p>
              </div>
            </div>
            <div className="mb-6">
              <p className="mb-[10px] mt-[15px] font-bold">
                Short description:
              </p>
              <div className="flex items-center gap-x-[18px]">
                <div className="max-w-fit">
                  <p>
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground.
                  </p>
                </div>
                <p className="text-sm text-[#00C853]">
                  {/* Sotuvda {product.count} dona bor */}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-[10px]">Miqdor:</p>
              <div className="flex items-center gap-x-[18px]">
                <div className="max-w-fit">
                  <Counter setCount={setCount} count={count} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button className="px-[32px] py-[10px] rounded-md text-sm font-bold text-white bg-[#46A358]">
                    BUY NOW
                  </button>
                  <button className="px-[32px] py-[10px] rounded-md text-sm font-bold text-[#46A358] border border-[#46A358]">
                    ADD TO CART
                  </button>
                  <button>
                    <i className="bx bx-heart text-xl text-[#46A358] py-[6px] px-[10px] border border-[#46A358] rounded-md"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#727272] mb-[10px]">
                <span className="text-[#A5A5A5]">SKU:</span> 1995751877966
              </p>
              <p className="text-[#727272] mb-[10px]">
                <span className="text-[#A5A5A5]">Categories:</span> Potter
                Plants
              </p>
              <p className="text-[#727272] mb-[10px]">
                <span className="text-[#A5A5A5]">Tags:</span> Home, Garden,
                Plants
              </p>
            </div>
          </div>
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
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla. <br /> <br /> Pellentesque
                aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                quis fermentum turpis eros eget velit. Donec ac tempus ante.
                Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
                vulputate, sapien libero hendrerit est, sed commodo augue nisi
                non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed tempor, lorem et placerat vestibulum, metus nisi
                posuere nisl, in accumsan elit odio quis mi. Cras neque metus,
                consequat et blandit et, luctus a nunc. Etiam gravida vehicula
                tellus, in imperdiet ligula euismod eget. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
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
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
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
  );
};

export default Product;
