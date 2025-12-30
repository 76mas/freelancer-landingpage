import BasicAccordion from "@/components/acording";
import Container from "@/components/Continor";
import { IoSettingsOutline } from "react-icons/io5";
const Service = () => {
  return (
    <section className="min-h-screen text-black w-full flex justify-center pb-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <IoSettingsOutline />
              <h1>Our Services</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-6xl font-bold">What We Do</h1>
            </div>

            <div className="flex items-center w-[600px] justify-center">
              <p className="text-center text-gray-500">
                From kitchens to patios, we transform every space in your home
                with expert craftsmanship and creative designs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-20  gap-20 p-20 items-center text-white w-full bg-black rounded-2xl justify-center">
            <div className="w-full h-[500px] rounded-2xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bedroom Makeover"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="w-full">
              <BasicAccordion />
            </div>
          </div>
        </div>

        {/*  */}
      </Container>
    </section>
  );
};

export default Service;
