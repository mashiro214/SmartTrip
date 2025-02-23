// import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Place from "../components/Places";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import React from "react";

function mapStateToProps(state) {
	return { action: state.action };
}

function mapDispatchToProps(dispatch) {
	return {
		openMenu: () =>
			dispatch({
				type: "OPEN_MENU",
			}),
	};
}

class HomeScreen extends React.Component {
	render() {
		return (
			<Container>
				<Menu />
				<SafeAreaView>
					<ScrollView>
						<TitleBar>
							<Avatar source={require("../assets/avatar.png")} />
							<Title>Welcome back,</Title>
							<Name>Mashiro</Name>
							<NotificationIcon style={{ position: "absolute", right: 20, top: 5 }}></NotificationIcon>
						</TitleBar>
						<ScrollView
							style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							{logos.map((logo, index) => (
								<TouchableOpacity key={index} onPress={this.props.openMenu}>
									<Logo image={logo.image} text={logo.text} />
								</TouchableOpacity>
							))}
						</ScrollView>
						<Subtitle>Recent Places</Subtitle>
						<ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
							{cards.map((card, index) => (
								<Card
									key={index}
									title={card.title}
									image={card.image}
									caption={card.caption}
									logo={card.logo}
									subtitle={card.subtitle}
								></Card>
							))}
						</ScrollView>
						<Subtitle>Recommended Places</Subtitle>
						{places.map((place, index) => (
							<Place
								key={index}
								image={place.image}
								title={place.title}
								subtitle={place.subtitle}
								logo={place.logo}
								author={place.author}
								avatar={place.avatar}
								caption={place.caption}
							/>
						))}
					</ScrollView>
				</SafeAreaView>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 20px;
	text-transform: uppercase;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const logos = [
	{
		image: require("../assets/restaurant.png"),
		text: "Restaurants",
	},
	{
		image: require("../assets/mall.png"),
		text: "Malls",
	},
	{
		image: require("../assets/theme-park.png"),
		text: "Theme Parks",
	},
	{
		image: require("../assets/cafe.png"),
		text: "Cafe",
	},
	{
		image: require("../assets/bar.png"),
		text: "Bars",
	},
	{
		image: require("../assets/zoo.png"),
		text: "Zoos",
	},
	{
		image: require("../assets/store.png"),
		text: "Stores",
	},
];

const cards = [
	{
		caption: "3 days ago",
		image: require("../assets/background11.jpg"),
		title: "J.Boroski",
		subtitle: "Bars",
		logo: require("../assets/bar.png"),
	},
	{
		caption: "5 days ago",
		image: require("../assets/background12.jpg"),
		title: "Shake Shack",
		subtitle: "Restaurants",
		logo: require("../assets/restaurant.png"),
	},
	{
		caption: "8 days ago",
		image: require("../assets/background13.jpg"),
		title: "Hong Kong Disneyland",
		subtitle: "Theme Parks",
		logo: require("../assets/theme-park.png"),
	},
	{
		caption: "10 days ago",
		image: require("../assets/background14.jpg"),
		title: "K11 Musea",
		subtitle: "Malls",
		logo: require("../assets/mall.png"),
	},
];

const places = [
	{
		title: "Recommended Place 1",
		subtitle: "0.5km",
		image: require("../assets/background6.jpg"),
		logo: require("../assets/cafe.png"),
		author: "Cafe",
		caption: "This is a recommended place",
	},
	{
		title: "Recommended Place 2",
		subtitle: "0.8km",
		image: require("../assets/background13.jpg"),
		logo: require("../assets/zoo.png"),
		author: "Zoos",
		caption: "This is a recommended place",
	},
	{
		title: "Recommended Place 3",
		subtitle: "1.2km",
		image: require("../assets/background11.jpg"),
		logo: require("../assets/mall.png"),
		author: "Malls",
		caption: "Is this a recommended place? This is a recommended place!",
	},
	{
		title: "Recommended Place 4",
		subtitle: "1.5km",
		image: require("../assets/background14.jpg"),
		logo: require("../assets/store.png"),
		author: "Stores",
		caption: "This is a recommended place",
	},
];
