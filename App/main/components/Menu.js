import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

function mapStateToProps(state) {
	return { action: state.action };
}

function mapDispatchToProps(dispatch) {
	return {
		closeMenu: () =>
			dispatch({
				type: "CLOSE_MENU",
			}),
	};
}

const screenHeight = Dimensions.get("window").height;

// stateful component
class Menu extends React.Component {
	state = {
		top: new Animated.Value(screenHeight),
	};

	componentDidMount() {
		this.toggleMenu();
	}

	componentDidUpdate() {
		this.toggleMenu();
	}

	toggleMenu = () => {
		if (this.props.action == "openMenu") {
			Animated.spring(this.state.top, {
				useNativeDriver: false,
				toValue: 0,
			}).start();
		}
		if (this.props.action == "closeMenu") {
			Animated.spring(this.state.top, {
				useNativeDriver: false,
				toValue: screenHeight,
			}).start();
		}
	};

	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require("../assets/background2.jpg")} />
					<Title>Nearby</Title>
					<Subtitle>Found 1000 places nearby</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.props.closeMenu}
					style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}
				>
					<CloseView>
						<Ionicons name="ios-close" size={44} color="#546bfb" />
					</CloseView>
				</TouchableOpacity>
				<Content>
					{items.map((item, index) => (
						<MenuItem key={index} icon={item.icon} title={item.title} text={item.text} />
					))}
				</Content>
			</AnimatedContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 8px;
`;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background: black;
	justify-content: center;
	align-items: center;
`;

const Content = styled.View`
	height: ${screenHeight};
	background: #f0f3f5;
	padding: 50px;
`;

const items = [
	{
		icon: "american-football",
		title: "WHEN",
		text: "we all",
	},
	{
		icon: "ios-card",
		title: "FALL",
		text: "asleep",
	},
	{
		icon: "ios-compass",
		title: "WHERE",
		text: "do we",
	},
	{
		icon: "ios-exit",
		title: "GO",
		text: "?",
	},
];
