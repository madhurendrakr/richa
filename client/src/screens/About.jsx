import React from "react";

const About = () => {
  const teamMembers = [
    { id: 1, name: "Madhurendra", role: " Frontend UI design" },
    { id: 2, name: "Ram Jee Pal", role: "Backend side" },
    { id: 3, name: "Sai Chaitanya", role: "Layout , CSS Design" },
    { id: 3, name: "Ramavath Praveen", role: "Working on Mobile Version app" },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
              About Our App
            </h1>
            <span className="text-gray-600 font-semibold text-2xl ">
              Welcome to our Community Share App and connect to our team members
              ,friends neighbors, facilitating resource and skill-sharing. Join
              us in creating a neighborhood where sharing is seamless, and
              collective well-being.
            </span>
            <p className="text-gray-600 mt-4  font-semibold  text-2xl">
              We are here as team dedicated to help each other by sharing and
              caring wherever required.
            </p>
          </div>
          <div>
            <img
              className="w-full md:w-2/3 h-auto rounded-md"
              src="https://community-share.org/wp-content/uploads/2020/08/Community-share_Main-logo-RGB-300x210.png" // Replace with the URL of your image
              alt="About Us"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex flex-row ">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
              Our Mission
            </h2>
            <div className="text-gray-600 font-semibold text-2xl ">
              Welcome to our Community Share App and connect to our team members
              ,friends neighbors, facilitating resource and skill-sharing. Join
              us in creating a neighborhood where sharing is seamless, and
              collective well-being.
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-8 md:mt-12 mb-4">
              Vision for the Future
            </h2>
            <div className="text-gray-600 font-semibold text-2xl ">
              Welcome to our Community Share App and connect to our team members
              ,friends neighbors, facilitating resource and skill-sharing. Join
              us in creating a neighborhood where sharing is seamless, and
              collective well-being.
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
            Contact Owner
          </h2>
          <p className=" font-semibold text-1xl">
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
