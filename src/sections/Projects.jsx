import BasicAccordion from "@/components/acording";
import Container from "@/components/Continor";
import CustomShapeImage from "@/components/CustomShapeImage";
import { IoSettingsOutline } from "react-icons/io5";

const BackSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
    >
      <g>
        <path
          d="M 7.8 4.278 C 7.8 2.562 7.8 1.703 8.204 1.087 C 8.38 0.82 8.605 0.59 8.867 0.412 C 9.472 0 10.315 0 12 0 C 13.686 0 14.528 0 15.133 0.412 C 15.395 0.59 15.62 0.82 15.796 1.087 C 16.2 1.703 16.2 2.562 16.2 4.278 M 24 13.444 L 24 12.833 C 24 8.8 24 6.783 22.77 5.531 C 21.54 4.278 19.56 4.278 15.6 4.278 L 8.4 4.278 C 4.44 4.278 2.46 4.278 1.23 5.531 C 0 6.783 0 8.8 0 12.833 L 0 13.444 C 0 17.478 0 19.494 1.23 20.747 C 2.46 22 4.44 22 8.4 22 L 15.6 22 C 19.56 22 21.54 22 22.77 20.747 C 24 19.494 24 17.478 24 13.444 Z"
          fill="transparent"
          stroke="rgb(71, 71, 71)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
        <path
          d="M 13.869 13.646 C 21.032 13.023 23.6 8.556 23.6 8.556 M 0.6 8.556 C 0.6 8.556 3.168 13.023 10.331 13.646 M 10.331 13.646 L 10.331 12.374 C 10.331 12.022 10.595 11.737 10.921 11.737 L 13.279 11.737 C 13.605 11.737 13.869 12.022 13.869 12.374 L 13.869 13.646 C 13.869 14.701 13.077 15.556 12.1 15.556 C 11.123 15.556 10.331 14.701 10.331 13.646 Z"
          fill="transparent"
          stroke="rgb(71, 71, 71)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
      </g>
    </svg>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Loft Renovation",
      description:
        "A complete transformation of an industrial loft into a warm, modern living space. Features include a custom kitchen island, open-concept layout, and smart home integration.",
      year: "2023",
      image:
        "https://plus.unsplash.com/premium_photo-1676968002777-879538ec5601?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Interior Design",
    },
    {
      id: 2,
      title: "Coastal Villa Landscape",
      description:
        "Designed a serene outdoor oasis for a luxury villa. Includes a custom pool deck, drought-resistant landscaping, and ambient lighting for evening entertainment.",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Landscaping",
    },
    {
      id: 3,
      title: "Urban Office Space",
      description:
        "Revamped a downtown corporate office to foster collaboration and productivity. Custom ergonomic furniture, acoustic solutions, and vibrant break areas.",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Commercial",
    },
    {
      id: 4,
      title: "Minimalist Kitchen",
      description:
        "A sleek, functional kitchen design maximizing storage and style. Matte black cabinetry, quartz countertops, and hidden appliances define this modern space.",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1716829094982-345e699674cd?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Renovation",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white w-full flex justify-center py-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center text-gray-200 justify-center gap-2">
              <BackSvg />
              <h1>Our Projects</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-6xl font-bold">Our Recent Projects</h1>
            </div>

            <div className="flex items-center w-[600px] justify-center">
              <p className="text-center text-gray-100">
                See how we transform spaces with our creative designs and expert
                craftsmanship. Let us bring your vision to life. The projects
                below showcase our commitment to quality and creativity.
              </p>
            </div>
          </div>

          <div className="flex items-center w-full flex-col gap-20 mt-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex items-center h-full w-full justify-between gap-10 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex items-center w-full justify-center">
                  <CustomShapeImage
                    src={project.image}
                    width={500}
                    height={400}
                  />
                </div>

                <div className="flex flex-col w-full border-t border-gray-700 p-5 h-full items-start justify-between min-h-[300px]">
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-[#cc8f00] px-4 py-1 rounded-full text-sm font-semibold text-black uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mt-4">
                    {project.description}
                  </p>

                  <div className="w-full flex items-center justify-between mt-8">
                    <div className="flex items-center justify-center w-[120px] h-[50px] rounded-lg bg-[#1d1d1d] border border-gray-800">
                      <span className="text-gray-400 font-mono">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-[#cc8f00]">
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
