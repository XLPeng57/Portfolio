import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LaptopIcon from '@material-ui/icons/Laptop';
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeLine = ({ experiences }) => {
	return (
	   <Jumbotron fluid id="experience" className="bg-light m-0">
		   <Container className="p-7">
				<h2 className="display-4 pb-5 text-center">{experiences.heading}</h2>
				
				<VerticalTimeline>
				{
				experiences.data.map((data, index) => {
					return <ExperienceCard key={index} data={data} />
				})
				}

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
                    date="2018 - 2022"
					iconStyle={{ background: 'rgb(230, 230, 230)', color: 'black' }}
					icon={<LaptopIcon />}
				  >
					<h3 className="vertical-timeline-element-title">College of William and Mary</h3>
					<h5 className="vertical-timeline-element-subsubtitle">Bachelor of Science</h5>
					<p>Major: Computer Science, Mathematics
					<br></br>Honors: <i>summa cum laude</i>, Phi Beta Kappa
					</p>
				  </VerticalTimelineElement>
			   
			   </VerticalTimeline>

		   </Container>
	   </Jumbotron>
   
   )
};
// const ExperienceTimeLine = () => {
//  return (
//     <Jumbotron fluid id="experience" className="bg-light m-0">
// 		<Container className="p-7">
// 			<h2 className="display-4 pb-5 text-center">Experience</h2>
// 			 <VerticalTimeline>
// 				  <VerticalTimelineElement
// 					className="vertical-timeline-element--work"
//                     date="Apr.2022 - Jun.2022"
// 					iconStyle={{ background: 'rgb(230, 230, 230)', color: 'black' }}
// 					icon={<LaptopIcon />}
// 				  >
// 					<h3 className="vertical-timeline-element-title">Wave Wisdom Co., Ltd.</h3>
// 					<h5 className="vertical-timeline-element-subsubtitle">Software Engineering Intern</h5>
// 					<p>
//                     Implemented 10+ core features for a Windows desktop video surveillance system.
// 					</p>
// 				  </VerticalTimelineElement>
				  
// 				  <VerticalTimelineElement
// 					className="vertical-timeline-element--work"
//                     date="Nov.2020 - Dec.2021"
// 					iconStyle={{ background: 'rgb(230, 230, 230)', color: 'black' }}
// 					icon={<LaptopIcon />}
// 				  >
// 					<h3 className="vertical-timeline-element-title">AidData</h3>
// 					<h5 className="vertical-timeline-element-subsubtitle">Software Engineering Assistant</h5>
// 					<p>
// 					Developed and maintained the <a href="https://china-dashboard.aiddata.org/" target="_blank">Dashboard</a> of AidData with React.js and Express.js.
// 					</p>
// 				  </VerticalTimelineElement>
// 			</VerticalTimeline>
// 		</Container>
//     </Jumbotron>

// )
// };

export default ExperienceTimeLine;