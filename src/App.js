import React, { useState, useEffect } from "react";

import { Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "./App.css";

function App() {
	const [letter, setLetter] = useState(" ");
	const [word, setWord] = useState("");
	const [time, setTime] = useState(30);
	const [bg, setBg] = useState("#ff");
	const [value, setValue] = React.useState("English");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const useStyles = makeStyles({
		root: {
			minWidth: 275,
			maxWidth: 1200,
			margin: "0 auto",
			backgroundColor: bg,
			marginTop: 20,
		},
		button: {
			marginTop: 80,
			height: 80,
			maxWidth: 200,
			margin: "0 auto",
			marginLeft: "25vw",
		},
		form: {
			marginTop: 30,
			marginLeft: 30,
		},
		timer: {
			marginLeft: "25vw",
		},
		text: {
			color: "#3F51B5",
			display: "inline",
		},
		text2: {
			color: "#4CAF50",
			display: "inline",
		},
		text3: {
			display: "inline",
			visibility: letter === " " ? "hidden" : "visible",
		},
	});

	const target = [
		"Boy names",
		"Girl names",
		"Animals",
		"Birds",
		"Trees",
		"Celebrity",
		"Countries",
		"Cities",
		"Insects *",
		"Capitals *",
		"Singers",
		"Politicians",
		"Flowers",
		"Fruits",
		"Rivers",
		"Actors",
		"Actresses",
		"Airlines *",
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
		"Luxary Brands *",
		"Clothe makers *",
		"Drinks",
		"Food dishes",
		"TV channels",
		"Bathroom items *",
		"House Items",
		"Kitchen item *",
		"Building materials *",
		"Furnitures *",
		"Diseases *",
		"Meena cartoon characters *",
		"Tool names *",
		"Famous Cartoon *",
		"Fast foods *",
		"Muslim Countries *",
		"Oscar winning movies *",
		"Meat types *",
		"Religions *",
		"Famous buildings *",
		"Poets",
		"Dictators *",
		"Queens *",
		"Kings *",
		"Chips *",
		"Mobile phone operators *",
		"Festivals *",
		"Breakfast foods *",
		"Dance types *",
		"Song types *",
		"Football players *",
		"Vaccines/ টিকা *",
		"Examinations *",
		"Bald celebrities *",
		"Famous movie villains *",
		"Red animals *",
		"Blue flowers *",
		"Yellow flowers *",
		"Computer parts *",
		"Small tress *",
		"Water animals *",
		"Television brands *",
		"Hot day items *",
		"Food for cold days *",
		"Car parts *",
		"Surah names *",
		"Social networks *",
		"Chatting apps *",
		"Alcoholic drinks *",
		"Cola drink names *",
		"Card game types *",
		"Board games *",
		"Foreign street foods *",
		"Cosmetics *",
		"Organs",
		"Expensive foods (2000tk+) *",
		"Children songs *",
	];
	const banglaTarget = [];
	const banglaLetters = [
		"অ",
		"আ",
		"ই",
		"ঈ",
		"উ",
		"ঊ",
		"ঋ",
		"এ",
		"ঐ",
		"ও",
		"ঔ",
		"ক",
		"খ",
		"গ",
		"ঘ",
		"ঙ",
		"চ",
		"ছ",
		"জ",
		"ঝ",
		"ঞ",
		"ট",
		"ঠ",
		"ড",
		"ঢ",
		"ণ",
		"ত",
		"থ",
		"দ",
		"ধ",
		"ন",
		"প",
		"ফ",
		"ব",
		"ভ",
		"ম,",
		"য",
		"র",
		"ল",
		"শ",
		"ষ",
		"স",
		"হ",
		"ড়",
		"ঢ়",
		"য়",
	];

	const generateLater = () => {
		let a;
		if (value === "English") {
			a = String.fromCharCode(65 + Math.floor(Math.random() * 26));
		}
		if (value === "Bangla") {
			a = banglaLetters[Math.floor(Math.random() * banglaLetters.length)];
		}

		const b = target[Math.floor(Math.random() * target.length)];
		// const c = banglaLetters[Math.floor(Math.random() * target.length)];
		const d = b.replace("*", "");
		setWord(d);
		b.includes("*") ? setLetter(" ") : setLetter(a);
		setTime(30);
	};

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
		if (time === 30) {
			setBg("#ff");
		}
		if (time === 0 && word !== "") {
			setBg("#F44336");
		}
		return () => clearInterval(timer);
	}, [time]);

	const classes = useStyles();

	return (
		<div className="App">
			<Paper className={classes.root}>
				<FormControl component="fieldset" className={classes.form}>
					<FormLabel component="legend">Select Language:</FormLabel>
					<RadioGroup
						aria-label="LangSwitch"
						name="lang"
						value={value}
						onChange={handleChange}>
						<FormControlLabel
							value="English"
							control={<Radio />}
							label="English"
						/>
						<FormControlLabel
							value="Bangla"
							control={<Radio />}
							label="Bangla"
						/>
					</RadioGroup>
				</FormControl>
				<Typography variant="h2" className={classes.form}>
					<div className={classes.text}>{word}</div>{" "}
					<div className={classes.text3}>with the letter </div>
					<div className={classes.text2}>{letter}</div>
				</Typography>
				{/* <Typography variant="h2">The word is: {word}</Typography> */}

				<Button
					className={classes.button}
					color="primary"
					variant="contained"
					onClick={generateLater}>
					Generate
				</Button>
				<Typography variant="h1" className={classes.timer}>
					{time}
				</Typography>
			</Paper>
		</div>
	);
}

export default App;
