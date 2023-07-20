import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Realsy",
    description:
      "Realsy is a web app that helps individuals find the perfect Real Estate Agent for their needs!",
    image: "/realsy.png",
    github: "https://github.com/bkim3164/realsy",
    link: "https://github.com/bkim3164/realsy",
  },
  {
    name: "Console Based Black Jack",
    description: "A simple console based blackjack game created using Python",
    image: "/blackjack.png",
    github: "https://github.com/krishjp/Console-BlackJack",
    link: "https://github.com/krishjp/Console-BlackJack",
  },
  {
    name: "Basic Tic Tac Toe w/ Sockets",
    description: "A simple two player version of Tic-Tac-Toe that can be run on seperate devices on the same network using Python's socket library!",
    image: "/tictactoe.png",
    github: "https://github.com/krishjp/TacTacToe-Sockets",
    link: "https://github.com/krishjp/TacTacToe-Sockets",
  },
  {
    name: "ZotBins",
    description: "A UCI Project on Smart Spaces focused on decreasing waste mis-classification on campus.",
    image: "/zotbins-logo-blinky-slow.png",
    github: "https://github.com/zotbins",
    link: "https://zotbins.github.io/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="Loading"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
