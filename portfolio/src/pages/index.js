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

/*
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
*/

const IndexPage = () => (
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
			<h1 className="text-xl mb-4">Contact Details:</h1>
			<div class="flex items-center">
				<div className="rounded-2xl hover:bg-purple-700 hover:cursor-pointer">
					<a className="block p-8 hover:scale-125 transition ease-linear delay-150" rel="external"
						href="mailto:admin@shaun420.eu.org" title="Email">
						<MdEmail className="text-6xl" />
					</a>
				</div>
				<div className="rounded-2xl hover:bg-purple-700 hover:cursor-pointer">
					<a className="block p-8 hover:scale-125 transition ease-linear delay-150" rel="external"
						href="https://github.com/Shaun420" title="GitHub">
						<DiGithubBadge className="text-7xl" />
					</a>
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
