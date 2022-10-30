import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
	{
		title: "food a",
		description: "food a desc",
		price: "$12.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food b",
		description: "food b desc",
		price: "$122.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food c",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food d",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food e",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
	{
		title: "food f",
		description: "food a desc",
		price: "$142.30",
		image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
	},
];

const RestaurantDetail = ({ route, navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={foods} />
			<ViewCart navigation={navigation} restaurantName={route.params.name} />
		</View>
	);
};

export default RestaurantDetail;
