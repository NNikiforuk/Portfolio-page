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
			<VerticalTimeline lineColor="#e9d35b">

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">05.2022 - present</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<WorkIcon />}
					contentStyle={{ color: "#408fce" }}
				>
					<h3 className="vertical-timeline-element-title">
						Learning programming
					</h3>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span className="date">07.2021 - 04.2022</span>
						</>
					}
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<WorkIcon />}
					contentStyle={{ color: "#408fce" }}
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
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<WorkIcon />}
					contentStyle={{ color: "#408fce" }}
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
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<WorkIcon />}
					contentStyle={{ color: "#408fce" }}
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
