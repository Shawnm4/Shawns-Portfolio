export default function SecondProject() {
  return (
    <div>
      <div>
        <div className="custom-shape-divider-bottom-1710879281">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#4dabf7"
            ></path>
          </svg>
        </div>
        <section
          className=" h-96
        "
          style={{
            backgroundColor: " white",
          }}
        >
          <div
            style={{ fontFamily: "Inter" }}
            className="flex ml-40 justify-between   gap-20  "
          >
            <div className=" justify-self-end mt-14  ">
              <video className=" h-3/4 rounded-lg shadow-2xl " controls>
                <source src="/salemportfolio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-1/2">
              <div className="text-6xl font-bold mb-5 mt-14">
                Salem Union RZUA Church
              </div>
              <div className="text-lg mb-5">
                A modern, responsive website for Salem Union RZUA designed to
                foster community engagement and spiritual growth. This site
                features service schedules, sermon archives, event information,
                and contact details, all built with Primary Technologies, e.g.,
                HTML, CSS, JavaScript/React. Aimed at connecting the church
                community online, the project emphasizes accessibility and ease
                of navigation to ensure that members and visitors alike can find
                the information they need.
              </div>
              <div className="mb-2 underline text-xl">
                <a
                  href="https://salemunionrzuachurch.vercel.app/"
                  target="_blank"
                >
                  &larr; Visit Live Site
                </a>
              </div>
              <div className="underline text-xl">
                <a href=" https://github.com/Shawnm4/salemunion">
                  &larr; View Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
