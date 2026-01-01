"use client";
import Container from "@/components/Continor";
import CustomShapeImage from "@/components/CustomShapeImage";
import AcordingFq from "@/components/acordingFq";
import MainButton from "@/components/mainbutton";

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M 17.004 2.095 L 19.555 7.241 C 19.903 7.957 20.831 8.644 21.614 8.775 L 26.238 9.55 C 29.196 10.048 29.892 12.211 27.761 14.344 L 24.165 17.969 C 23.556 18.583 23.222 19.766 23.411 20.616 L 24.44 25.104 C 25.252 28.656 23.382 30.029 20.264 28.173 L 15.929 25.585 C 15.146 25.118 13.856 25.118 13.058 25.585 L 8.726 28.173 C 5.623 30.029 3.738 28.64 4.55 25.104 L 5.58 20.616 C 5.768 19.768 5.435 18.583 4.826 17.97 L 1.23 14.345 C -0.886 12.209 -0.204 10.046 2.752 9.549 L 7.378 8.773 C 8.146 8.643 9.074 7.955 9.422 7.239 L 11.974 2.093 C 13.366 -0.698 15.628 -0.698 17.005 2.093 Z"
        fill="transparent"
        strokeWidth="1.5"
        stroke="rgb(0, 0, 0)"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Fqa = () => {
  const { lang } = useLanguage();
  const t = translations[lang].faq;

  return (
    <section
      id="faq"
      data-bg="white"
      className="w-full text-black bg-white flex items-center justify-center py-24"
    >
      <Container>
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto w-full px-4">
            <div className="flex items-center text-[#4e4e4e] font-bold justify-center gap-2 w-full">
              <Star />
              <h1 className="text-xl md:text-2xl font-black">{t.badge}</h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              {t.title1} <br className="hidden md:block" /> {t.title2}
            </h2>
            <p className="text-neutral-500 text-base md:text-lg">
              {t.description}
            </p>
          </div>

          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start lg:items-center ">
            <div className="relative w-full flex justify-center lg:block">
              <div className="w-full max-w-[500px]">
                <CustomShapeImage
                  width={500}
                  height={400}
                  src="https://plus.unsplash.com/premium_photo-1733760124949-7d15ff2f677e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-6">
              <AcordingFq />
              <div className="mt-4 p-6 bg-[#f6f5fa] rounded-3xl flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 text-center sm:text-left">
                <div>
                  <h4 className="font-bold text-xl">{t.footer}</h4>
                  <p className="text-sm text-neutral-500">{t.footerSub}</p>
                </div>

                <MainButton
                  text={t.cta}
                  href="whatsapp://send?phone=+9647727488537"
                  textcolor="text-black"
                  texthovercolor="text-white"
                  buttoncolor="bg-[#fff]"
                  buttonhovercolor="bg-[#000]"
                  iconcolor="text-white"
                  backgroundcolor="bg-[#000]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fqa;
