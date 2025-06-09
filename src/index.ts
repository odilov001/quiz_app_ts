import "../public/main.css";
type QUESTIONS = {
	quizId: number;
	question: string;
	variants: string[];
	answer: string;
};

const questions_list: QUESTIONS[] = [
	{
		quizId: 1,
		question: "Dunyodagi eng katta okean qaysi?",
		variants: ["Tinch okeani", "Atlantika okeani", "Hind okeani", "Shimoliy muz okeani"],
		answer: "Tinch okeani",
	},
	{
		quizId: 2,
		question: "Dunyodagi eng katta cho'l qaysi?",
		variants: ["Gobi", "Kalahari", "Saxroyi Kabir", "Arab cho'li"],
		answer: "Saxroyi Kabir",
	},
	{
		quizId: 3,
		question: "Dunyodagi eng baland tog' qaysi?",
		variants: ["K2", "Kangchenjunga", "Lhotse", "Everest"],
		answer: "Everest",
	},
	{
		quizId: 4,
		question: "Dunyodagi eng katta daryo qaysi?",
		variants: ["Nil", "Amazonka", "Yangtze", "Mississippi"],
		answer: "Amazonka",
	},
	{
		quizId: 5,
		question: "Quyosh tizimida eng katta sayyora qaysi?",
		variants: ["Saturn", "Uran", "Yupiter", "Neptun"],
		answer: "Yupiter",
	},
	{
		quizId: 6,
		question: "Dunyodagi eng katta orol qaysi?",
		variants: ["Grinlandiya", "Borneo", "Madagaskar", "Sumatra"],
		answer: "Grinlandiya",
	},
	{
		quizId: 7,
		question: "Quyosh tizimida eng kichik sayyora qaysi?",
		variants: ["Merkuriy", "Mars", "Venus", "Pluton"],
		answer: "Merkuriy",
	},
	{
		quizId: 8,
		question: "O'zbekistonning poytaxti qaysi shahar?",
		variants: ["Samarqand", "Buxoro", "Toshkent", "Andijon"],
		answer: "Toshkent",
	},
	{
		quizId: 9,
		question: "O'zbekistonning umumiy yer maydoni qancha	?",
		variants: ["535,350 km²", "547,400 km²", "447,400 km²", "390,450 km²"],
		answer: "447,400 km²",
	},
	{
		quizId: 10,
		question: "O'zbekistonning eng baland nuqtasi qaysi tog'?",
		variants: ["Chimyon", "Hissar", "Pskem", "Kuksaroy"],
		answer: "Chimyon",
	},
];

/**     DOM VARIABLES */

const quizApp: HTMLDivElement = document.querySelector("#quiz_app")!;
const btnNext: HTMLButtonElement = document.querySelector("#btn_next")!;
const resultBox: HTMLDivElement = document.querySelector("#result_box")!;

/**     LOGICAL VARIABLES */

let current = 0;
let score = 0;

/**     LOGICAL FUNCTIONS */

function showQuestion(): void {
	const q = questions_list[current];
	let optionsHtml = "";
	for (let i = 0; i < q.variants.length; i++) {
		optionsHtml += `
		     <label>
            <input type="radio" name="answer" value="${q.variants[i]}" />
             ${q.variants[i]}
      </label>
		`;
	}
	quizApp.innerHTML = `
	<h1>${q.question}</h1>
	${optionsHtml}
	`;
}

function handleNextBtn(): void {
	const selectedVariant: HTMLInputElement = document.querySelector('input[name="answer"]:checked')!;
	if (!selectedVariant) {
		alert("Iltimos, variantlardan birini tanlang! ❌ ❌ ❌");
		return;
	}

	if (selectedVariant.value === questions_list[current].answer) score++;

	current++;

	if (current < questions_list.length) {
		showQuestion();
	} else {
		quizApp.innerHTML = "";
		btnNext.style.display = "none";
		alert(`Siz ${score} ta savolga to'g'ri javob berdingiz! 🎉`);
		resultBox.innerHTML = `
			<button id="btn_restart">Qayta boshlash</button>
		`;
		quizApp.style.display = "none";
		const btnRestart: HTMLButtonElement = document.querySelector("#btn_restart")!;
		btnRestart.addEventListener("click", () => {
			current = 0;
			score = 0;
			btnNext.style.display = "block";
			resultBox.innerHTML = "";
			quizApp.style.display = "block";
			init();
		});
	}
}

btnNext.addEventListener("click", handleNextBtn);

function init() {
	showQuestion();
}
init();
