import React from "react"
import Image from "next/image"

const skills = [
  { skill: "MATLAB" },
  { skill: "GNU Octave" },
  { skill: "G-Suite Tools" },
  { skill: "Onshape" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "C++" },
  { skill: "Time Management"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Who am I!
            </h1>
            <p>
              Hi, my name is Krish and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> university student at University of California,
              Irvine.
            </p>
            <br />
            <p>
              Building upon my desire to create and build, a desire I enhanced during my time within my highschool FRC Robotics team, 
              I love tinkering with small projects that help me explore new sub-fields within the world on computers. 
              This is futher amplified by the vast amount of resources that I can call upon to built new and create projects!
            </p>
            <br />
            <p>
              Aside from working on programming related projects, I love to pull out a sheet of paper and start folding. 
              Origami has been one of my most prevalent hobbies since elementary school as it allows me to, once again, create 
              fascinating figurines that I can be proud of.
            </p>
            <br />
            <p>
              I strongly beleive that two core skills that are necessary to be succesful are hard work and dedication. 
              Working alonside multiple project teams at UCI and throughout highschool has solidified my work ethic 
              and allowed me to become a more resourceful and dependable resource within my teams.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
