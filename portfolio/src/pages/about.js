import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.module.css"
import { MdEmail } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

const AboutPage = () => (
  <Layout>
    <div className="container columns-2">
      <div className="w-full text-center">
        <StaticImage
          src="../images/avatar.jpg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="avatar image"
          className="mb-12 rounded-full w-40 border-4 border-violet-600 drop-shadow-lg select-none
          transition ease-linear delay-150 dark:brightness-95 hover:scale-125"
        />
      </div>
      <div className="w-full text-start">
        <h1 className="text-4xl mb-6 font-semibold">
          Shaunak Hawaldar
        </h1>
        <h2 className="text-2xl mb-4 font-medium">
          Full-stack Developer
        </h2>
        <button type="button" className="bg-violet-500 accent-bg-violet-500 px-4 py-2 rounded-xl text-white
        	hover:bg-violet-600 focus:ring focus:ring-violet-300" onClick={() => {window.open("/resume.pdf")}}>
          Download Resume
        </button>
      </div>
    </div>
		<div className="my-4">
			<div class="flex items-start flex-col">
				<h1 className="text-xl font-medium mb-4">Co-Curricular Activities:</h1>
				<div className="text-lg">
					<p>Member of Google Developer Students Club AISSMS IOIT chapter</p>
					<p>Member of Web Development Team of IEEE Student Branch in AISSMS IOIT</p>
					<p>Helped in development of CESA 2024 website</p>
				</div>
				<h1 className="text-xl font-medium mb-4">Extra-Curricular Activities:</h1>
				<div className="text-lg">
					<p>Technical Executive of CESA 2024</p>
					<p>Member of Film club</p>
				</div>
				<div className="rounded-2xl hover:bg-purple-700 hover:cursor-pointer">
					<a className="block p-8 hover:scale-125 transition ease-linear delay-150" rel="external"
						href="https://www.linkedin.com/in/shaunakhawaldar" title="LinkedIn">
						<SiLinkedin className="text-5xl" />
					</a>
				</div>
				<div className="rounded-2xl hover:bg-purple-700 hover:cursor-pointer">
					<a className="block p-8 hover:scale-125 transition ease-linear delay-150" rel="external"
						href="https://www.instagram.com/shaunakhawaldar" title="Instagram">
						<AiOutlineInstagram className="text-6xl" />
					</a>
				</div>
			</div>
		</div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default AboutPage
