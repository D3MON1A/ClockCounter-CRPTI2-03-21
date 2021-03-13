import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faCloudShowersHeavy
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.scss";
import Home from "./home";

//include images into your bundle

//create your first component
let colors = ["purple", "blue", "orange", "yellow", "red", "green", "orange"];

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const ranColor = () => {
			let index = Math.floor(Math.random() * colors.length);
			let colOutput = colors[index];

			return colOutput;
		};
		return (
			<>
				<div className="text-center mt-5 d-flex clock-container }">
					<div style={{ background: ranColor() }}>
						<FontAwesomeIcon icon={faClock} />
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char1}
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char2}
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char3}
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char4}
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char5}
					</div>
					<div style={{ background: ranColor() }}>
						{this.props.char6}
					</div>
				</div>

				<Home
					char1={this.props.char1}
					char2={this.props.char2}
					char3={this.props.char3}
					char4={this.props.char4}
					char5={this.props.char5}
					char6={this.props.char6}
				/>
			</>
		);
	}
}

Counter.propTypes = {
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string,
	char4: PropTypes.string,
	char5: PropTypes.string,
	char6: PropTypes.string
};
