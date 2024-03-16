import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../../modeSlice";

const About = () => {
  const darkMode = useSelector(selectMode);
  const teamMembers = [
    { id: 1, name: "Madhurendra", role: "Frontend UI design" },
    { id: 2, name: "Ram Jee Pal", role: "Backend side" },
    { id: 3, name: "Sai Chaitanya", role: "Layout, CSS Design" },
    { id: 4, name: "Ramavath Praveen", role: "Working on Mobile Version app" },
    // Add more team members as needed
  ];

  return (
    <div className={`bg-${darkMode ? "gray-800" : "gray-100"} min-h-screen text-${darkMode ? "white" : "gray-800"}`}>
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
              About Our App
            </h1>
            <p className="font-semibold text-2xl">
              Welcome to our Community Share App and connect to our team members, friends, neighbors, facilitating resource and skill-sharing. Join us in creating a neighborhood where sharing is seamless and collective well-being.
            </p>
            <p className="mt-4 font-semibold text-2xl">
              We are here as a team dedicated to helping each other by sharing and caring wherever required.
            </p>
          </div>
          <div>
            <img
              className="w-full md:w-2/3 h-auto rounded-md"
              src="https://community-share.org/wp-content/uploads/2020/08/Community-share_Main-logo-RGB-300x210.png"
              alt="About Us"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-${darkMode ? "gray-800" : "white"} p-4 md:p-6 rounded-lg shadow-md mb-4`}
              >
                <h3 className={`text-lg md:text-xl font-semibold mb-2`}>
                  {member.name}
                </h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row ">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Our Mission
            </h2>
            <p className="font-semibold text-2xl mb-4">
              Welcome to our Community Share App and connect to our team members, friends, neighbors, facilitating resource and skill-sharing. Join us in creating a neighborhood where sharing is seamless and collective well-being.
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Vision for the Future
            </h2>
            <p className="font-semibold text-2xl mb-4">
              Welcome to our Community Share App and connect to our team members, friends, neighbors, facilitating resource and skill-sharing. Join us in creating a neighborhood where sharing is seamless and collective well-being.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Contact Owner
          </h2>
          <p className="font-semibold text-2xl mb-4">
            For inquiries or to connect with the founder, please reach out to:
            <br />
            Email: aumashurendra30@gmail.com
            <br />
            Phone: +91 7464027142
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
