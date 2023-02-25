import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import LaptopIcon from '@material-ui/icons/Laptop';
import '../../editable-stuff/VerticalTimelineElement.css';

// import {
//   Col,
// } from "react-bootstrap";

// const ExperienceCard = ({ data }) => {
//   return (
//     <Col lg="6">
//       <div className="pb-5 text-center">
//         <img className=" bg-white mb-3" src={data.companylogo} alt="" />
//         <p className="lead">
//           {data.role}
//           <br />
//           {data.date}
//         </p>

//       </div>
//     </Col>
//   );
// }

const ExperienceCard = ({ data }) => {
  return (
    
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={data.date}
      iconStyle={{ background: 'rgb(230, 230, 230)', color: 'black' }}
      icon={<LaptopIcon/>}
    >
      <h3 className="vertical-timeline-element-title">{data.company}</h3>
      <h5 className="vertical-timeline-element-subsubtitle">{data.title}</h5>
      <p>
      {data.message}
      </p>
    </VerticalTimelineElement>
  );
}


export default ExperienceCard;