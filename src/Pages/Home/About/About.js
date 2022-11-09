import React from "react";

const About = () => {
  return (
    <div className="mt-12  ">
      <h2 className="text-2xl text-center font-semibold lg:text-4xl lg:text-center lg:font-bold mb-8">
        Cook Spotlight
      </h2>
      <div>
        <div className="hero lg:min-h-screen  bg-base-200 rounded-2xl mb-12">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <div className="lg:relative relative lg:mb-20 mb-32 lg:w-1/2 ">
              <img
                src="https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Paste-2-3.jpg"
                className=" w-4/5 h-full rounded-lg shadow-2xl"
                alt=""
              />
              <img
                src="https://martfarmshop.co.uk/wp-content/uploads/2020/06/garofalo-penne-organic.jpg"
                className="absolute right-5   h-72 mask mask-circle top-1/2 h- w-3/5 rounded-lg shadow-2xl "
                alt=""
              />
            </div>

            <div className="lg:w-1/2  ml-20">
              <img
                src="https://i.pinimg.com/736x/51/e5/71/51e5718d9f61b4b84e1ead56102ace64.jpg"
                className="ml-20 h-52 rounded-lg shadow-2xl mask mask-circle "
                alt=""
              />
              <h1 className="text-5xl font-bold font-sans">KH Sultana</h1>
              <p className="py-6 w-3/4">
                From cooking casually for friends and family to establishing a
                full commercial kitchen, has broken all boundaries. Currently
                providing employment to 22 destitute women and fulfilling
                passion for cooking.
              </p>
              <p className="w-3/4 text-orange-600">
                A mother fleeing from her loneliness in a new city. exceptional
                cooking through Kh Sultana Kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
