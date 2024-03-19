import styles from "./FirstProject.module.css";

export default function FirstProject() {
  return (
    <div style={{ position: "relative" }} className="mt-36 ">
      <div className={`${styles.waves}  `}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#4dabf7"
          ></path>
        </svg>
      </div>

      <section
        className=" h-96
        "
        style={{
          backgroundColor: " #4dabf7",
        }}
      >
        <div
          style={{ fontFamily: "Inter" }}
          className="flex ml-40 justify-between   gap-20  "
        >
          <div className="w-1/2">
            <div className="text-6xl font-bold mb-5 mt-14">
              Charlie Glass Admin
            </div>
            <div className="text-lg mb-5">
              My collaborator and I worked closely with the customer to design
              and develop a web application that allows a company to gain
              insights such as tracking profits in a dashboard. Users can also
              create, view, download, and print quotes and invoices.
            </div>
            <div className="mb-2 underline text-xl">
              <a
                href="https://charlie-glass-admin.vercel.app/login"
                target="_blank"
              >
                Visit Live Site &rarr;
              </a>
            </div>
            <div className="underline text-xl">
              <a href="https://github.com/nsikan-na/charlie-glass-admin">
                View Code &rarr;
              </a>
            </div>
          </div>
          <div className=" justify-self-end mt-14  ">
            <video className=" h-3/4 rounded-lg shadow-2xl " controls>
              <source src="/actualnewcharlieglass.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
