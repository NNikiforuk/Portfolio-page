import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Education.scss";

export default function Education() {
	return (
		<div className="education">
			<VerticalTimeline lineColor="#e9d35b">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date={
						<>
							<span className="date">10.2022 - 06.2023</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<SchoolIcon />}
					contentStyle={{ color: "#408fce", fontSize: "14px" }}
				>
					<h3 className="vertical-timeline-element-title">
						Front-end developer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Postgraduate degree
					</h4>
					<p>WSB Merito University</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date={
						<>
							<span className="date">10.2018 - 02.2019 (winter semester)</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<SchoolIcon />}
					contentStyle={{ color: "#408fce", fontSize: "14px" }}
				>
					<h3 className="vertical-timeline-element-title">Erasmus</h3>
					<h4 className="vertical-timeline-element-subtitle">Logistics</h4>
					<p>University of Zagreb</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date={
						<>
							<span className="date">03.2018 - 07.2019</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<SchoolIcon />}
					contentStyle={{ color: "#408fce", fontSize: "14px" }}
				>
					<h3 className="vertical-timeline-element-title">
						Management and production engineering
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Master of Engineering
					</h4>
					<p>Wrocław University of Science and Technology</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date={
						<>
							<span className="date">10.2014 - 02.2018</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<SchoolIcon />}
					contentStyle={{ color: "#408fce", fontSize: "14px" }}
				>
					<h3 className="vertical-timeline-element-title">
						Management and production engineering
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor of Engineering
					</h4>
					<p>Wrocław University of Science and Technology</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}
