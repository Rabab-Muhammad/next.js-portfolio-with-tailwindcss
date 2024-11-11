import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="texl-4xl md:text-5xl">Tecnologies I work with</h2>
          <p className="text-gray-500 pt-2">
            I have strong skills in HTML, CSS, and Tailwind CSS, which help me
            create web pages that look good and work well on any device. I also
            know how to use React and Next.js to build websites that load
            quickly and give users a smooth experience. These skills allow me to
            make modern websites that work reliably and meet today is web
            standards.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-teal-500 text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                Typescript
              </h2>
              <h2
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Next.js
              </h2>
              <h2
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              >
                React
              </h2>
            </div>
            <div className="space-y-2">
              <h2
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              >
                Tailwind
              </h2>
              <h2
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              >
                Css
              </h2>
              <h2
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Node
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
