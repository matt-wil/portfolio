import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, // from
      { opacity: 1, duration: 1.5 }, // to
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/** LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                className=""
                src="/images/project1.png"
                alt="Anker Website"
              />
            </div>
            <div className="text-content">
              <h2>
                Business Website with a Simple yet Elegant Design and Focussed
                on Ease of Use.
              </h2>
              <p className="text-white-50 text-xl">
                A Website Built with Next.js, TypeScript, Tailwind CSS, GSAP,
                next-intl. (Test Phase Deployment)
              </p>
              <p>
                <a
                  href="https://anker-tattoo-piercing-freiburg.onrender.com/en"
                  target="_blank"
                >
                  Check it out!
                </a>
              </p>
            </div>
          </div>
          {/** RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[rgb(23,23,25)]">
                <img
                  className="rounded-lg"
                  src="/images/project2.png"
                  alt="Popcorn Picker App"
                />
              </div>
              <h2>Movie Rating App</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[rgb(23,23,25)]">
                <img
                  className=""
                  src="/images/project3.png"
                  alt="Chef Ollama App"
                />
              </div>
              <h2>AI Gen Recipes</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
