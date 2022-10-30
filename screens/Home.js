import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components//home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
	localRestaurants,
} from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
	"BoRRkIwQ4Xcqjnxq-Gpia20Xj5ImbJbHsRCFnt5CJcB0juJsI8xOnUaF8yeEyeoK5BybYzVZPD4olI-H-eo07XPWSkjpHAK-W7su_JoBsdMeWpdEhSgYiBNR_WRBY3Yx";

const Home = ({ navigation }) => {
	const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
	const [city, setCity] = useState("NewYork");
	const [activeTab, setActiveTab] = useState("Delivery");

	const getRestaurantFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) => {
				setRestaurantsData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLocaleLowerCase())
					)
				);
			});
	};

	useEffect(() => {
		getRestaurantFromYelp();
	}, [city, activeTab]);
	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems
					restaurantsData={restaurantsData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
};

export default Home;
