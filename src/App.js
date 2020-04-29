import React, { useState, useEffect } from "react";

import { Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		maxWidth: 1200,
		margin: "0 auto",
	},
	button: {
		marginTop: 200,
		height: 80,
		maxWidth: 200,
		margin: "0 auto",
	},
});

function App() {
	const classes = useStyles();
	const [letter, setLetter] = useState("");
	const [word, setWord] = useState("");
	const [time, setTime] = useState(30);

	const target = [
		"Boynames",
		"Girlnames",
		"Animals",
		"Birds",
		"Trees",
		"Celebrity",
		"Countries",
		"Cities",
		"Insects",
		"Capitals",
		"Singers",
		"Politicians",
		"Flowers",
		"Fruits",
		"Rivers",
		"Actors",
		"Actresses",
		"Airlines",
		"Inventions",
		"Scientists",
		"Movies",
		"Discoveries",
		"Body Parts",
		"Car Brands",
		"Smartphone brands *",
		"Laptop brands *",
		"Sports",
		"Atheletes",
		"Watch brands",
		"Luxary Brands",
		"Clothe makers",
		"Drinks",
		"Food dishes",
		"TV channels",
	];
	const generateLater = () => {
		const a = String.fromCharCode(65 + Math.floor(Math.random() * 26));

		const b = target[Math.floor(Math.random() * target.length)];
		setWord(b);
		b.includes("*") ? setLetter(" ") : setLetter(a);
		setTime(30);

		// for (let i = 30; i > 0; i--) {
		// 	console.log(i);
		// 	// 	setInterval(countdown(i), 1000);
		// 	// }
		// 	setTimeout(function () {
		// 		setTime(i);
		// 	}, 1000);
		// }
	};

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
		return () => clearInterval(timer);
	}, [time]);

	// const countdown = (a) => {
	// 	// let a = time;
	// 	// a--;
	// 	setTime(a);
	// 	console.log(time);
	// };
	const backgroundColor = time > 0 ? "#ff" : "red";
	return (
		<div className="App">
			<Paper
				className={classes.root}
				style={{ backgroundColor: backgroundColor }}>
				<Typography variant="h1">The letter is: {letter}</Typography>
				<Typography variant="h1">The word is: {word}</Typography>

				<Button
					className={classes.button}
					color="primary"
					variant="contained"
					onClick={generateLater}>
					Generate
				</Button>
				<Typography variant="h1">{time}</Typography>
			</Paper>
		</div>
	);
}

export default App;
