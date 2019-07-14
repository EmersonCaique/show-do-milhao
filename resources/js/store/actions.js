export default {
    loadQuestions({
        commit
    }, payload) {
        fetch(`https://opentdb.com/api.php?amount=${payload.quantidade != null ? payload.quantidade : 10 }&type=multiple${payload.category ? '&category='+payload.category : '' }`)
            .then(res => res.json())
            .then(({ results }) => {
                results.forEach( data => {
                    let options = data.incorrect_answers;
                    options.push(data.correct_answer)

                    if(options.length > 2) {
                        commit('addQuestion', {
                            'question' : data.question,
                            'options' : options,
                            'correct_answer' : data.correct_answer,
                            'my_answer' : null
                        })
                    }
                });
            })


    },
    loadCategories({commit}) {
        fetch('https://opentdb.com/api_category.php')
            .then(res => res.json())
            .then(({ trivia_categories }) => commit('setCategories', trivia_categories))
    },
    reply({
        commit
    }, paylod) {
        commit('reply', paylod)
    },
    reset({ commit }) {
        commit('resetQuestions');
        commit('resetScore');
    },
    calculateScore({ commit, state }) {
        let score = 0
        state.questions.forEach( question => {
            if(question.correct_answer == question.my_answer) {
                score ++;
            }
        })

        commit('setScore', score)
    }
}
