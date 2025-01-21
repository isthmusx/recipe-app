import Image from "next/image";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";

export default function Home() {
  return (
    <div className="m-auto">
      <Navbar />
      {/* Main container with padding to prevent overlap with navbar */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen pt-16 p-5">
        <div className="flex flex-col items-left justify-center gap-10 pl-0 md:pl-16 sm:pl-16 mx-10 w-4/5">
          {/* Left Side Content */}
          <h1 className="text-4xl font-semibold font-libre-baskerville text-center md:text-left mb-4 sm:text-6xl">
            Discover, cook, and savor your favorite recipes <span className="text-accent">– all in one place.</span> 
          </h1>

          <h2 className="text-2xl text-left md:text-left mb-6">
            Whether you&apos;re looking for quick meals, healthy options, or indulgent treats, Crave has something for every craving. 
            Get inspired with new flavors, step-by-step guides, and creative twists on classic dishes.
          </h2>

          {/* Stats Section */}
          <div className="flex justify-between w-full text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">5000+</h3>
              <p className="text-xl">Recipes</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">1000+</h3>
              <p className="text-xl">Ingredients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">10+</h3>
              <p className="text-lg">Cusines</p>
            </div>
          </div>
        </div>

        {/* Right Side Content (image only on larger screens) */}
        <div className="relative w-full h-full hidden md:block">
          {/* Right side content image */}
          <Image
            aria-hidden
            src="/foodHero.png"
            alt="Food hero image"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-5/6 object-contain"
          />
        </div>

      </main>
      <section className="min-h-screen p-6 md:p-20">
        <h5 className="text-2xl sm:text-6xl font-libre-baskerville text-center mb-6 md:mb-10">
          Try Some <span className="text-accent">Popular Recipes</span>
        </h5>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 overflow-x-auto p-4 md:p-10">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </section>

    </div>
  );
}
