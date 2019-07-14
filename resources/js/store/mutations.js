export default {
    addQuestion(state, payload) {
        state.questions.push(payload)
    },
    reply(state, payload) {
        state.questions[payload.question].my_answer = payload.answer
    },
    setCategories(state, payload) {
        state.categories = payload
    },
    setScore(state, payload) {
        state.score = payload
    },
    resetQuestions(state) {
        state.questions = []

    },
    resetScore(state) {
        state.score = 0
    }
}
