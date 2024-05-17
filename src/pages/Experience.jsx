import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.scss";

export default function Experience() {
	return (
		<div className="experience">
			<h1 className="projectsH1">Experience</h1>
			<VerticalTimeline lineColor="rgb(206, 186, 71)">



				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">01.2024 - present</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Freelance front-end developer
					</h3>

				</VerticalTimelineElement>


				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">11.2023 - 03.2024</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Mentee - front-end (mentoring program)
					</h3>
					<h4 className="vertical-timeline-element-subtitle">DareIT</h4>
				</VerticalTimelineElement>




				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">08.2023 - 12.2023</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Complaint Specialist
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Fresenius Kabi</h4>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">05.2022 - 07.2023</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						**Learning programming
					</h3>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">07.2021 - 04.2022</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Deputy Complaint Department Manager
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Fresenius Kabi</h4>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">12.2020 - 06.2021</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Senior Complaint Specialist
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Fresenius Kabi</h4>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">12.2019 - 11.2020</span>
						</>
					}
					iconStyle={{ background: "rgb(206, 186, 71)", color: "#d4d4d1" }}
					icon={<WorkIcon />}
					contentStyle={{
						color: "#d4d4d1",
						backgroundColor: "black",
						boxShadow: "0px 0px 24px 0px rgb(33, 30, 30)",
					}}
				>
					<h3 className="vertical-timeline-element-title">
						Complaint Specialist
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Fresenius Kabi</h4>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}
