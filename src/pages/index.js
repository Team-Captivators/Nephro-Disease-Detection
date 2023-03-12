import React from "react";
import theme from "theme";
import { Theme, Link, Image, Strong, Box, Section, Text, Icon, LinkBox, Input, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdArrowForward } from "react-icons/md";
import { FaCloudUploadAlt, FaBrain, FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import "bootstrap/dist/css/bootstrap.min.css";
import FilesUpload from "components/FilesUpload";

import RCTMain from "images/main.jpeg";

export default (() => {
	return <Theme theme={theme}>
		<GlobalPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Nephro AI — Discovering Health
			</title>
			<meta name={"description"} content={"Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology."} />
			<meta property={"og:title"} content={"Nephro AI — Discovering Health"} />
			<meta property={"og:description"} content={"Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology."} />
			<meta property={"og:image"} content="url(../images/logo.png)" />
		</Helmet>
		<Section padding="36px 0 36px 0" quarkly-title="Header" id="nephro-nav">
			<Override slot="SectionContent" flex-direction="row" margin="0px 64px 0px 64px" />
			<Image src={require ("../images/logo.png")} display="block" width="10%" />
			<Components.MobileSidePanel md-z-index="9" animDuration="0s">
				<Override
					slot="Content"
					align-items="center"
					padding="16px 0px 16px 16px"
					md-background="--color-light"
					md-z-index="9"
					md-justify-content="flex-start"
					background="rgba(255, 255, 255, 0)"
					justify-content="center"
				/>
				<Override
					slot="Children"
					justify-content="center"
					display="flex"
					align-items="center"
					flex="0 1 auto"
				/>
				<Override slot="Button Text" md-display="none" />
				<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
				<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
				<Override slot="Wrapper" md-z-index="9" />
				<Box
					display="flex"
					align-items="center"
					justify-content="flex-end"
					md-flex-direction="column"
					md-margin="40px 0px 13px 0px"
					md-font="--headline4"
				>
					<Link
						transition="opacity 0.3s ease 0s"
						md-margin="0px 0px 13px 0px"
						href="/index#nephro-detect"
						font="--base"
						text-decoration-line="initial"
						hover-opacity="1"
						md-font="--lead"
						md-color="--indigo"
						color="--darkL2"
						margin="0px 20px 0px 20px"
						opacity="0.8"
						text-transform="uppercase"
						border-color="--color-darkL2"
						hover-text-decoration="none"
						target="_self"
					>
						<Strong>
							DETECTION
						</Strong>
					</Link>
					<Link
						color="--darkL2"
						margin="0px 20px 0px 20px"
						transition="opacity 0.3s ease 0s"
						md-margin="0px 0px 13px 0px"
						md-font="--lead"
						font="--base"
						text-decoration-line="initial"
						opacity="0.8"
						hover-opacity="1"
						md-color="--indigo"
						text-transform="uppercase"
						border-color="--color-darkL2"
						hover-text-decoration="none"
						target="_self"
						href="/index#nephro-stage"
					>
						<Strong>
							SYMPTOMS
						</Strong>
					</Link>
					<Link
						hover-opacity="1"
						md-font="--lead"
						md-color="--indigo"
						font="--base"
						color="--darkL2"
						opacity="0.8"
						transition="opacity 0.3s ease 0s"
						md-margin="0px 0px 13px 0px"
						href="/index#nephro-faq"
						text-decoration-line="initial"
						margin="0px 8px 0px 20px"
						text-transform="uppercase"
						border-color="--color-darkL2"
						hover-text-decoration="none"
						target="_self"
					>
						<Strong>
							FAQ
						</Strong>
					</Link>
					<Link
						hover-opacity="1"
						md-font="--lead"
						md-color="--indigo"
						font="--base"
						color="--darkL2"
						opacity="0.8"
						transition="opacity 0.3s ease 0s"
						md-margin="0px 0px 13px 0px"
						href="/index#nephro-contact"
						text-decoration-line="initial"
						margin="0px 8px 0px 20px"
						text-transform="uppercase"
						border-color="--color-darkL2"
						hover-text-decoration="none"
						target="_self"
					>
						<Strong>
							CONTACT US
						</Strong>
					</Link>
				</Box>
			</Components.MobileSidePanel>
		</Section>
		<Section
			padding="30px 0 64px 0"
			quarkly-title="HeroBlock"
			md-padding="36px 0 60px 0"
			color="#ffffff"
			background={`rgba(0, 0, 0, 0) url(${RCTMain}) 100% 0% / contain no-repeat scroll content-box`}
			background-position="right center"
			background-size="58%"
			id="nephro-home"
			sm-background="rgba(0, 0, 0, 0)"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
				margin="0px 64px 0px 64px"
				sm-display="flex"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="#3D64EC"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
					border-width={0}
					text-shadow="0 0 20px #cdcadf"
				>
					NEPHROLOGICAL
				</Text>
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="#D74357"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
					text-shadow="0 0 20px #ddcacd"
				>
					DISEASE
					<br />
					DETECTION
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="#191E22"
					opacity="1"
					width="90%"
				>
					Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology. Our deep learning algorithms accurately detect multiple diseases in real-time, providing you with fast and reliable results. Experience the future of medicine with our AI-powered solution, and give your patients the care they deserve.
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="30px 0px 0px 0px"
				>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="30px"
						border-width="5px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="10px 13px 10px 13px"
						text-decoration-line="initial"
						color="--white"
						margin="0px 30px 0px 0px"
						sm-font="normal 500 12px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
						background="#D74357"
						border-color="#7aa3d3"
						target="_self"
						href="/index#nephro-intro"
						hover-text-decoration="none"
						sm-width="45%"
						sm-height="80%"
					>
						Get Started
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="30px"
						border-width="5px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						margin="0px 0px 0px 0px"
						sm-font="normal 500 13px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						href="/index#nephro-workflow"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
						background="rgba(61, 100, 236)"
						border-color="#7aa3d3"
						hover-text-decoration="none"
						target="_self"
					>
						Read More
					</Link>
				</Box>
			</Box>
			<Box
				empty-border-style="none"
				width="100%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				align-items="center"
				md-width="100%"
				md-order="-1"
				empty-min-width="64px"
				height="50% content-box"
			/>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  transform="rotate(180, 600, 60)"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section
			lg-padding="60px 0 40px 0"
			padding="64px 0 64px 0"
			md-padding="30px 0 30px 0"
			background="#5250BE"
			id="nephro-intro"
		>
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--light"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
			>
				A New Way of Getting Healthcare
			</Text>
			<Box
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				padding="0px 0px 0px 0px"
				border-style="solid"
				display="flex"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				md-border-color="rgba(66, 82, 207, 0.1)"
			>
				<Box
					display="flex"
					lg-width="50%"
					md-width="100%"
					width="30%"
					box-shadow="2px 2px 15px 2px --color-darkL2"
					border-radius="10px"
				>
					<Image
						margin="-1px 0px -1px -1px"
						src={require ("../images/S001.png")}
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					justify-content="space-between"
					md-width="100%"
					md-padding="32px 30px 32px 0px"
					display="flex"
					flex-direction="column"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
				>
					<Icon
						bottom="auto"
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="23px"
						top="20px"
						left="50px"
						border-color="--color-light"
						color="--light"
						height="64px"
						width="64px"
						sm-bottom="auto"
						sm-left="auto"
						sm-right="33px"
						sm-top="30px"
						category="md"
						icon={MdArrowForward}
						size="64px" />
					<Text
						color="--light"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 60px"
						font="--headline4"
					>
						Check your symptoms online
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--light">
						Don't want to be sick and tired any more? 
Our symptom checker uses an advanced AI technology to analyze your symptoms and determine their likelihood of being related to diseases detected by our CT scan tool. With just a few clicks, you can get a percentage of possibility for each disease, providing you with an unprecedented level of insight into your health. Say goodbye to guesswork and hello to accurate health assessments with our online symptom checker, designed to empower you with the knowledge you need to manage your health with confidence.
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				md-border-width="0px 0px 2px 0px"
				margin="0px 0px 20px 0px"
				width="100%"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				border-radius="10px"
				flex-wrap="wrap"
				min-height="284px"
				md-border-radius="0px"
			>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					display="flex"
					position="relative"
					md-padding="32px 30px 32px 0px"
					flex-direction="column"
					justify-content="space-between"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="20px"
						left="50px"
						bottom="auto"
						sm-top="16px"
						sm-right="14px"
						sm-bottom="auto"
						sm-left="auto"
						sm-width="64px"
						sm-height="64px"
						height="64px"
						width="64px"
						category="md"
						icon={MdArrowForward}
						size="64px"
						color="--light"
						border-color="--color-light"
					/>
					<Text
						margin="0px 0px 8px 60px"
						font="--headline4"
						color="--light"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Manage your health easily
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--light">
						Manage your health with ease and peace of mind. Our AI-powered system approach revolutionizes healthcare, providing you with fast and accurate diagnostic results. Take control of your health today with our user-friendly technology, designed to make managing your well-being simple and stress-free. Join the future of medicine and experience the benefits of seamless health management.
					</Text>
				</Box>
				<Box
					md-order="-1"
					width="30%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Image
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						margin="-1px -1px -1px 0px"
						src={require ("../images/S002.png")}
						height="100%"
						box-shadow="2px 2px 15px 2px --color-darkL2"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="100%"
				border-style="solid"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
			>
				<Box md-width="100%" width="30%" display="flex" lg-width="50%">
					<Image
						margin="-1px 0px -1px -1px"
						src={require ("../images/S003.png")}
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						height="100%"
						box-shadow="2px 2px 15px 2px --color-darkL2"
					/>
				</Box>
				<Box
					md-width="100%"
					padding="32px 17% 32px 62px"
					display="flex"
					lg-width="50%"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					md-padding="32px 30px 32px 0px"
					width="70%"
					flex-direction="column"
					justify-content="space-between"
				>
					<Icon
						position="absolute"
						right="21px"
						top="20px"
						bottom="auto"
						left="50px"
						lg-top="49px"
						height="64px"
						width="64px"
						category="md"
						icon={MdArrowForward}
						size="64px"
						color="--light"
						border-color="--color-light"
					/>
					<Text
						margin="0px 0px 8px 60px"
						font="--headline4"
						color="--light"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Free of cost
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--light" width="90%">
						Experience the future of healthcare with absolute freedom. Our innovative AI technology is completely free of cost, providing you with world-class nephrological disease diagnosis tools. Empower your medical practice with cutting-edge technology that's always improving and becoming more accessible. Our deep learning techniques deliver fast, accurate results, giving your patients the highest quality of care. Take the first step towards a better future in healthcare with our absolute free of cost tools.
					</Text>
				</Box>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section padding="64px 0 64px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0" id="nephro-stage">
			<Override
				slot="SectionContent"
				flex-direction="row"
				md-flex-wrap="wrap"
				border-radius="30px"
				width="85%"
			/>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
				border-color="#dee0ec"
				border-width="15px"
				border-radius="30px"
				border-style="solid"
				background="#ffffff"
				min-width="48%"
				margin="0px 30px 0px 0px"
				box-shadow="2px 2px 15px 2px --color-darkL2"
			>
				<Box
					display="flex"
					margin="0px 0px 20px 0px"
					align-items="center"
					sm-width="100%"
					border-color="#f3b9b9"
				>
					<Image width="24px" src={require ("../images/IC001.svg")} height="24px"  margin="0px 15px 0px 0px" />
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					>
						Stage 1
					</Text>
				</Box>
				<Text
					width="100%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 20px 0px"
					font="--headline2"
					color="#3D64EC"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					DISEASE{" "}
					<br />
					DETECTION
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--darkL2"
					text-align="center"
				>
					Our disease detection tool is based on advanced AI techniques, including deep learning algorithms that analyze CT scans for nephrological diseases. The tool processes large amounts of medical data and uses complex mathematical models to identify the underlying patterns and make predictions on the report using deep learning.
					<br />
					{" "}
					<br />
					The result is a highly accurate and fast disease detection tool that provides you with valuable insights into your patients' health. Our commitment to using the latest AI technology ensures that our tool is always at the forefront of medical advancements, providing you with the best possible results. However, it is recommended to consult a medical specialists for treatments. Since the technology is under the research stage, there may be circumstances of innacurate results.
				</Text>
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
				border-color="#dee0ec"
				border-width="15px"
				border-radius="30px"
				border-style="solid"
				background="#ffffff"
				min-width="48%"
				margin="0px 10px 0px 30px"
				box-shadow="2px 2px 15px 2px --color-darkL2"
			>
				<Box
					display="flex"
					margin="0px 0px 20px 0px"
					align-items="center"
					sm-width="100%"
					border-color="#f3b9b9"
				>
					<Image width="24px" height="24px" src={require ("../images/IC001.svg")} margin="0px 15px 0px 0px" />
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					>
						Stage 2
					</Text>
				</Box>
				<Text
					width="100%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 20px 0px"
					font="--headline2"
					color="#3D64EC"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="center"
				>
					SYMPTOMS
					<br />
					ANALYSIS
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--darkL2"
					text-align="center"
				>
					Our symptoms analysis tool is designed to provide a comprehensive understanding of your patients' health. The tool collects and analyzes symptoms, using deep learning algorithms to identify patterns and make predictions on the same. The tool is accurate up-to the standards to provide valuable insights and a percentage of possibility for each disease. {" "}
					<br />
					<br />
					With our symptoms analysis tool, you can make informed decisions about your patients' care and provide them with the best possible outcomes. Our commitment to using the latest AI technology ensures that our tool is always at the forefront of medical advancements, providing you with the best possible results. Likewise, it is recommended to consult a medical specialist with the report and it is recommended not to take decisions for yourself.
				</Text>
			</Box>
		</Section>
		<Section padding="30px 0 64px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					99%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--greyD2" text-align="center">
					Accuracy rate
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					10k+
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--greyD2" text-align="center">
					Downloads
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					1k+
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--greyD2" text-align="center">
					Active users per hour
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					100%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--greyD2" text-align="center">
					Satisfaction{" "}
				</Text>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  transform="rotate(180, 600, 60)"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section padding="64px 0 64px 0" background="#5250BE" id="nephro-detect">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" display="flex" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 33px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="#ffffff"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Experience Now
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Precise Diagnosis for Optimal Health
					</Strong>
				</Text>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				width="100%"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				justify-items="center"
				align-items="stretch"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					border-width="2px"
					border-style="solid"
					border-color="--color-secondary"
					lg-padding="48px 35px 56px 35px"
					position="relative"
				>

					<div className="container" >
						<FilesUpload />
					</div>
				</Box>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section md-padding="60px 0 60px 0" padding="30px 0 30px 0" sm-padding="60px 0 60px 0" id="nephro-workflow">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Box
				border-radius="10px"
				flex-direction="column"
				width="33.333%"
				md-padding="0px 0px 0px 0px"
				sm-padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				md-width="100%"
				sm-width="100%"
				padding="16px 16px 16px 16px"
				lg-width="50%"
			>
				<Text color="--primary" lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif" margin="0px 0px 0px 0px" font="--lead">
					Verified
				</Text>
				<Text
					lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--indigo"
					font="--headline4"
					margin="15px 0px 0px 0px"
					sm-font="700 25px/1.3 &quot;Inter&quot;, sans-serif"
				>
					Medical Report from Home
				</Text>
				<Text margin="20px 0px 10px 0px" color="--dark" font="--base" opacity=".9">
					Explore our disease detection workflow that delivers reliable reports using Deep Learning techniques.
				</Text>
				<Image height="48px" src={require ("../images/icons_arrow-right.svg")} width="48px" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
					hover-text-decoration="none"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaCloudUploadAlt}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Upload CT Scan
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Despite the traditional workflow, CT reports are accepted one-per-session with an unlimited attempts.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					hover-text-decoration="none"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaBrain}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Deep Learning
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						The uploaded file would be processed using various types of Deep Learning techniques.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
					hover-text-decoration="none"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaQuestionCircle}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Answer Questions
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						An effective way to draw conclusions regarding the detected disease is by answering symptoms related queries.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
					hover-text-decoration="none"
				>
					<Icon
						font="48px sans-serif"
						category="go"
						icon={GoSearch}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Unsupervised Learning
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Our systems were trained using a large amount of data samples to classify diseases from symptoms.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
					hover-text-decoration="none"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaLightbulb}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Conclusion
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Evaluate both CT scan report and symptoms report and draw the final conclusion regarding diseases.
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  transform="rotate(180, 600, 60)"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section
			padding="64px 0 64px 0"
			sm-padding="40px 0"
			color="--dark"
			background="#5250BE"
			id="nephro-faq"
		>
			<Text as="h1" font="--headline1" margin="0 0 24px 0" color="--light">
				FAQs
			</Text>
			<Box margin="-16px -16px 16px -16px" display="flex" flex-wrap="wrap" color="--light">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							Is a CT scan safe for everyone?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							While CT scans are generally considered safe, there are some precautions that need to be taken for certain individuals. Pregnant women and individuals with kidney problems should consult with their doctor before undergoing a CT scan.
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							How long does the system take?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							The time it takes to receive the report from the CT scan tool may vary based on the volume of submissions. However, our goal is to provide the report as quickly as possible while maintaining the highest level of accuracy
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							What file formats are accepted for CT?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							Our tool accepts JPEG, JPG, and PNG file formats for the CT scan results. However, it is inevitable to mention that do not upload an invalid file which may cause the system to predict an invalid result.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" color="--light">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							Is a prescription from a doctor required for the CT scan?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							Yes, your doctor must give you a referral (prescription) in order for you to receive a computed tomography (CT) imaging examination. However, symptoms analysis does not require any pre-requisites to undergo the analysis. Please make sure the file is in the acceptable format.
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							Can the system detect all types of nephrological diseases?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							The CT scan tool is designed to detect a variety of nephrological diseases, including Polycystic Kidney Disease (PKD), Renal Adenoma, and Nephrolithiasis. However, the accuracy of the tool may be limited in detecting some rare or complex nephrological diseases.
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline4" margin="12px 0">
							Do you suggest any treatment options to undergo?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="--lightD2">
							No. 
If the CT scan tool and symptoms analysis tool detects a potential nephrological disease, the patient will be informed through the generated report. The patient should then follow up with their doctor to discuss further steps and potential treatment options.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section padding="64px 0 0 0" id="/index#nephro-review">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" display="grid" />
			<Box
				display="flex"
				align-items="flex-start"
				flex-direction="column"
				justify-content="flex-start"
				margin="0px 0px 40px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
				align-content="flex-start"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="#3D64EC"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews
				</Text>
			</Box>
			<Box
				display="flex"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				color="--indigo"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="90%"
					min-height="100%"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 80px 0px"
						color="--darkL2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						I was diagnosed with Polycystic Kidney Disease and was afraid of the long and complicated process of finding the right treatment. The CT scan tool made it so easy for me to get a clear diagnosis and move forward with my treatment plan. I am so grateful for this tool and highly recommend it to anyone with nephrological concerns.
						<br />
						<br />
						<Strong>
							-
						</Strong>
						{" "}Jacob Brown
						<br />
					</Text>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					flex-direction="column"
					height="100%"
					min-height="100%"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--darkL2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						I was experiencing long-lasting pain in my back and loss of appetite, and wasn't sure what was causing it. The CT scan tool quickly identified Renal Adenoma, and I was able to receive a comprehensive report that helped me understand my condition and the next steps I need to take. I am so thankful for this tool.
						<br />
						<br />
						<Strong>
							-
						</Strong>
						{" \n\t\t\t\t"}Adriana Williams
					</Text>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="100%"
					min-height="100%"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--darkL2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						I was skeptical about using an online CT scan tool at first, but I am so glad I did. The results were just as accurate as if I had gone to the doctor, and I was able to receive my report within a matter of minutes. I highly recommend this tool to anyone looking for a convenient and reliable way to diagnose nephrological diseases.
						<br />
						<br />
						<Strong>
							-{" "}
						</Strong>
						Ethan Tremblay
					</Text>
				</Box>
			</Box>
		</Section>
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
			<path fill="#5250BE"
				  transform="rotate(180, 600, 60)"
				  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
			</path>
		</svg>
		<Section background="#5250BE" color="--dark" padding="64px 0 64px 0" id="nephro-contact">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--light"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0" color="--light">
							Email us, we would love to hear form you
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%" min-height="100%">
					<Box color="--light">
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="normal 400 18px/1.5 --fontFamily-googleInter" margin="0 0 4px 0">
										Name *
									</Text>
									<Input width="100%" name="name" type="text" border-radius="10px" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Email *
									</Text>
									<Input width="100%" type="email" name="email" border-radius="10px" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Message *
									</Text>
									<Input
										as="textarea"
										rows="4"
										width="100%"
										name="message"
										border-radius="10px"
										min-height="200px"
										padding="6px 16px 10px 16px"
										margin="0px 0px 15px 0px"
									/>
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2" />
							</Box>
						</Formspree>
					</Box>
					<Link
						padding="15px 30px 15px 30px"
						font="normal 500 18px/1.6 --fontFamily-googleInter"
						border-radius="25px"
						border-width="5px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						margin="0px 30px 0px 0px"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
						border-color="#7aa3d3"
						hover-text-decoration="none"
						background="#2da586"
					>
						Send
					</Link>
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Override slot="SectionContent" margin="0px 64px 0px 64px" width="100%" min-width="91%" />
			<Box min-width="100px" min-height="100px" display="flex">
				<Box min-width="10%" min-height="100px" width="25%">
					<Box
						empty-border-color="LightGray"
						flex-direction="column"
						md-justify-content="center"
						display="flex"
						padding="16px 16px 16px 16px"
						md-width="100%"
						empty-min-width="64px"
						empty-min-height="64px"
						empty-border-width="1px"
						empty-border-style="solid"
						width="80%"
						md-align-items="center"
					>
						<Image src={require ("../images/logo.png")} margin="0px 0px 0px 4px" max-width="171px" />
						<Strong
							text-decoration-line="initial"
							margin="0px 0px 10px 0px"
							font="normal 800 18px/1.5 --fontFamily-mono"
							opacity=".8"
							color="#11485F"
							text-align="left"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							DISCOVERING HEALTH
						</Strong>
					</Box>
				</Box>
				<Box min-width="75%" min-height="100px">
					<Box
						min-width="100px"
						min-height="100px"
						width="100%"
						height="80%"
						display="flex"
					>
						<Box
							empty-min-width="64px"
							empty-min-height="64px"
							empty-border-color="LightGray"
							width="95%"
							md-width="100%"
							md-justify-content="center"
							empty-border-width="1px"
							empty-border-style="solid"
							flex-direction="column"
							padding="16px 16px 16px 16px"
							md-align-items="center"
							display="inline"
							height="60%"
							text-align="left"
						>
							<Text color="--white" font="--lead" margin="0px 0px 20px 0px" text-align="left">
								SHORT LINKS
							</Text>
							<Link
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-nav"
								color="--white"
								opacity=".8"
								target="_self"
								text-align="left"
								hover-text-decoration="none"
							>
								Home
							</Link>
							<Link
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-detect"
								color="--white"
								target="_self"
								text-align="left"
								hover-text-decoration="none"
							>
								Detection
							</Link>
							<Link
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-stage"
								color="--white"
								target="_self"
								hover-text-decoration="none"
							>
								Symptoms
							</Link>
							<Link
								color="--white"
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 0px 0px"
								font="--base"
								href="/index#nephro-faq"
								target="_self"
								hover-text-decoration="none"
							>
								FAQ
							</Link>
							<Link
								color="--white"
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 0px 0px 0px"
								font="--base"
								href="/index#nephro-contact"
								target="_self"
								hover-text-decoration="none"
							>
								Contact Us
							</Link>
						</Box>
						<Box
							empty-min-width="64px"
							empty-min-height="64px"
							empty-border-color="LightGray"
							width="70%"
							display="inline"
							md-width="100%"
							md-justify-content="center"
							empty-border-width="1px"
							empty-border-style="solid"
							flex-direction="column"
							padding="16px 16px 16px 16px"
							md-align-items="center"
							height="60%"
							text-align="left"
						>
							<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
								QUICK REFERENCES
							</Text>
							<Link
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-intro"
								color="--white"
								opacity=".8"
								target="_self"
								hover-text-decoration="none"
							>
								Advantages
							</Link>
							<Link
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-workflow"
								color="--white"
								target="_self"
								hover-text-decoration="none"
							>
								Workflow
							</Link>
							<Link
								opacity=".8"
								text-decoration-line="initial"
								transition="opacity 0.3s ease 0s"
								hover-opacity="1"
								margin="0px 20px 10px 0px"
								font="--base"
								href="/index#nephro-review"
								color="--white"
								target="_self"
								hover-text-decoration="none"
							>
								Reviews
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Span
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				user-select="auto"
				pointer-events="auto"
				color="--white"
			>
				Copyright © 2023 Nephro AI. All rights reserved.
			</Span>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});