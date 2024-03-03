<template>
    <div class="subject-area">
        <h1>Math Test</h1>
        <div class="sidebar-container">
            <sidebarMenu :items="menuItems" />
        </div>
        <div class="question-container">
            <div v-for="(question, index) in questions" :key="index" class="question">
                <h3 class="equation">{{ question.equation }}</h3>
                <input v-model="userAnswers[index]" id="userInput" :class="{
                    'wrong-answer': isAnswerWrong(index),
                    'correct-answer': isAnswerCorrect(index),
                }" type="text" placeholder="Your Answer" />
            </div>
        </div>
        <button @click="checkAnswers" class="correction-button">Check Answers</button>
        <button @click="showNewQuestion" class="correction-button">Show New Question</button>
    </div>
</template>
  
  
<script>
import sidebarMenu from '@/components/sidebarMenu.vue';

export default {
    components: {
        sidebarMenu: sidebarMenu,
    },
    data() {
        return {
            menuItems: [
                { text: '1. Vektorbegreppet', link: '/Vektorbegreppet' },
                { text: '2. Linjer och plan i rummet', link: '/Linjer-och-plan-i-rummet' },
                { text: '3. Linjära ekvationssystem', link: '/Linjara-ekvationssystem' },
                { text: '4. Gauss-Jordan', link: '/Gauss-Jordan' },
                { text: '5. Matrisaritmetik', link: '/Matrisaritmetik' },
                { text: '6. Inversa matriser', link: '/Inversa-matriser' },
                { text: '7. Linjärt beroende', link: '/Linjart-beroende' },
                { text: '8. Lösningsrum', link: '/Losningsrum' },
                { text: '9. Matriser med specialformer', link: '/Matriser-med-specialformer' },
                { text: '10. Determinanter', link: '/Determinanter' },
                { text: '11. Kryssprodukt, area och volym', link: '/Kryssprodukt-area-och-volym' },
                { text: '12. Egenvärden och egenvektorer', link: '/Egenvärden-och-egenvektorer' },
                { text: '13. Linjära avbildningar', link: '/Linjara-avbildningar' },
                { text: '14. Kärnan och bildrummet', link: '/Karnan-och-bildrummet' },
                { text: '15. Sammansättning av linjära avbildningar', link: '/Sammansättning-av-linjara-avbildningar' },
                { text: '16. Baser och dimension', link: '/Baser-och-dimension' },
                { text: 'Test', link: '/TATA24-test' },

            ],
            questions: [
                { equation: '2 + 2 =', correctAnswer: '4' },
                { equation: '5 * 3 =', correctAnswer: '15' },
                { equation: '10 - 7 =', correctAnswer: '3' },
                { equation: '8 / 2 =', correctAnswer: '4' },
                { equation: '12 * 4 =', correctAnswer: '48' },
                { equation: '9 - 5 =', correctAnswer: '4' },
                { equation: '6 + 6 =', correctAnswer: '12' }, // New question
            ],
            userAnswers: [],
        };
    },
    methods: {
        checkAnswers() {
            // Compare user answers with correct answers
            for (let i = 0; i < this.questions.length; i++) {
                if (this.userAnswers[i] === this.questions[i].correctAnswer) {
                    // Answer is correct
                    this.questions[i].isCorrect = true;
                } else {
                    // Answer is wrong
                    this.questions[i].isCorrect = false;
                }
            }

            //this.showNewQuestion(); // Adjust the difficulty level based on the user's performance
        },
        isAnswerCorrect(index) {
            return this.questions[index].isCorrect === true;
        },
        isAnswerWrong(index) {
            return this.questions[index].isCorrect === false;
        },
        showNewQuestion() {
            const correctAnswers = this.questions.filter((question, index) => {
                return this.userAnswers[index] === question.correctAnswer;
            }).length;
            if (correctAnswers >= 4) {

                this.questions.splice(0, 2);
                this.questions.splice(2, 2);

            } else if (correctAnswers >= 2) {

                this.questions.splice(0, 2);
                this.questions.splice(-2, 2);
            } else {

                this.questions.splice(2, 4);
            }
        },

    },
};
</script>
  
<style>
.subject-area {
    margin-left: 17%;
    margin-top: 3%;
    margin-right: 5%;
}

.question-container {
    margin-top: 20px;
}

.question {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.equation {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

.wrong-answer {
    border: 1px solid red;
}

.correct-answer {
    border: 1px solid green;
}

.correction-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-weight: bold;
    background-color: brown;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.correction-button:hover {
    background-color: black;
}

#userInput {
    width: 100%;
    height: 30px;
}
</style>
  