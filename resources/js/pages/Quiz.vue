<template>
    <main class="w-auto" >
        <div class="position-fixed svg-pos">
            <svg xmlns="http://www.w3.org/2000/svg" width="526.21" height="571.693" viewBox="0 0 526.21 571.693">
                <g transform="translate(-56.895 183.846)">
                    <rect style="fill: rgba(94, 114, 228, 0.05)" width="101" height="410" rx="50.5"
                        transform="translate(325.879 -183.846) rotate(41)" />
                    <rect style="fill: rgba(94, 114, 228, 0.05)" width="101" height="410" rx="50.5"
                        transform="translate(498.879 -183.846) rotate(41)" />
                    <rect style="fill: rgba(94, 114, 228, 0.05)" width="101" height="410" rx="50.5"
                        transform="translate(506.879 12.154) rotate(41)" />
                </g>
            </svg>
        </div>
        <div class="container px-4">
            <header class="h-18">
                <div class=" mt-6">
                    <p class="text-grey-dark mb-2">
                        <span class="font-weight-bold text-sm">Questão</span>
                        <span class="text-md">{{ currentQuestion + 1 }}</span> / <span class="text-sm">
                            {{ quiz.length }}
                        </span>
                    </p>
                    <hr class="bg-white mt-0 border-top-4">
                    <p class="text-white font-weight-bold">{{ quiz[currentQuestion].question }}</p>
                </div>
            </header>
            <div class="mt-6" v-if="quiz">
                <div v-for="(option, index) in quiz[currentQuestion].options" :key="index" class="w-auto">
                    <div class="border-dark-grey mb-2 text-grey-dark py-07 pl-3 text-sm font-weight-bold border-radius-3p"
                        @click="reply(option, currentQuestion)"
                        :class="quiz[currentQuestion].my_answer != null && quiz[currentQuestion].my_answer == option ? 'selected' :'' ">
                        {{ option }}</div>
                </div>
            </div>
            <div class="w-auto d-flex mt-10"
                :class="currentQuestion != 0 ? 'justify-content-between' : 'justify-content-center'">
                <div class="font-weight-bold text-sm ls-1 py-4p text-white  border border-white bg-transparent border-radius-3p w-50 text-center mr-2 text-uppercase"
                    v-if="currentQuestion != 0 " @click="back">anterior</div>

                <div class="font-weight-bold text-sm ls-1 py-4p  text-white border-radius-3p w-50  text-uppercase  text-center"
                    :class="this.quiz[this.currentQuestion].my_answer != null ? 'btn-blue-enabled' :  'btn-blue-disabled'"
                    v-if="currentQuestion + 1 < quiz.length" @click="next">
                    próximo</div>

                <!-- <div class="font-weight-bold text-sm ls-1 py-4p  text-white border-radius-3p w-50 text-center text-uppercase" -->
                <div class="font-weight-bold text-sm ls-1 py-4p  text-white border-radius-3p w-50 text-uppercase  text-center"
                    :class="this.quiz[this.currentQuestion].my_answer != null ? 'btn-success-enabled' :  'btn-success-disabled'"
                    v-else @click="finalizar">
                    Finalizar</div>

            </div>
        </div>
    </main>

</template>
<script>
    export default {
        data() {
            return {
                currentQuestion: 0,
            }
        },
        computed: {
            quiz() {
                return this.$store.getters.questions
            }
        },
        methods: {
            next() {
                if (this.currentQuestion + 1 < this.quiz.length && this.quiz[this.currentQuestion].my_answer != null) {
                    this.currentQuestion = this.currentQuestion + 1
                }
            },
            finalizar() {
                if (this.quiz[this.currentQuestion].my_answer != null) {
                    this.$store.dispatch('calculateScore')
                    this.$router.push('score')
                }
            },
            back() {
                if (this.currentQuestion - 1 >= 0) {
                    this.currentQuestion = this.currentQuestion - 1
                }
            },
            reply(answer, currentQuestion) {
                this.$store.dispatch('reply', {
                    'question': currentQuestion,
                    'answer': answer
                })
            }
        },
    }

</script>
