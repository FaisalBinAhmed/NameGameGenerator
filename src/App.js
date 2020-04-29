import React, { useState, useEffect } from "react";

import { Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

function App() {
	const [letter, setLetter] = useState("");
	const [word, setWord] = useState("");
	const [time, setTime] = useState(30);
	const [bg, setBg] = useState("#ff");

	const useStyles = makeStyles({
		root: {
			minWidth: 275,
			maxWidth: 1200,
			margin: "0 auto",
			backgroundColor: bg,
		},
		button: {
			marginTop: 200,
			height: 80,
			maxWidth: 200,
			margin: "0 auto",
		},
	});

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
	};

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
		if (time === 30) {
			setBg("#ff");
		}
		if (time === 0 && word !== "") {
			setBg("red");
		}
		return () => clearInterval(timer);
	}, [time]);

	const classes = useStyles();

	return (
		<div className="App">
			<Paper className={classes.root}>
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
