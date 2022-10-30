import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from "../firebase";
import { ScrollView } from "react-native-gesture-handler";

const OrderCompleted = () => {
	const [lastOrder, setLastOrder] = useState({
		items: [
			{
				title: "food a",
				description: "food a desc",
				price: "$12.30",
				image: "https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
			},
		],
	});
	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItems
	);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const totalUSD = total.toLocaleString("en", {
		style: "currency",
		currency: "USD",
	});

	useEffect(() => {
		const db = firebase.firestore();
		const unsubscribe = db
			.collection("orders")
			.orderBy("createdAt", "desc")
			.limit(1)
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doc) => {
					setLastOrder(doc.data());
				});
			});

		return () => unsubscribe();
	}, [lastOrder]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<View style={{ margin: 15, alignItems: "center", height: "100%" }}>
				<LottieView
					style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
					source={require("../assets/animations/check-mark.json")}
					autoPlay
					speed={0.5}
					loop={false}
				/>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Your order at {restaurantName} has been placed for {totalUSD}
				</Text>
				<ScrollView>
					<MenuItems foods={lastOrder.items} hideCheckbox={true} />
					<LottieView
						style={{ height: 200, alignSelf: "center" }}
						source={require("../assets/animations/cooking.json")}
						autoPlay
						speed={0.5}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default OrderCompleted;
