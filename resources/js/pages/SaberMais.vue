<template>
    <main class="w-auto">
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
            <div v-for="(question, indexQuestion) in quiz" :key="indexQuestion">
                <header class="h-18">
                    <div class=" mt-6">
                        <p class="text-grey-dark mb-2">
                            <span class="font-weight-bold text-sm">Questão</span>
                            <span class="text-md">{{ indexQuestion + 1 }}</span> / <span class="text-sm">
                                {{ quiz.length }}
                            </span>
                        </p>
                        <hr class="bg-white mt-0 border-top-4">
                        <p class="text-white font-weight-bold">{{ question.question }}</p>
                    </div>
                </header>
                <div class="mt-6">
                    <div v-for="(opt, index) in question.options" :key="index" class="w-auto">
                        <div
                            class="border-dark-grey mb-2 text-grey-dark py-07 pl-3 text-sm font-weight-bold border-radius-3p"
                            :class="getClass(question, opt)">
                            {{ opt }}</div>
                    </div>
                </div>

            </div>
            <div class="w-auto d-flex my-5 justify-content-between">
                <div class="font-weight-bold text-sm ls-1 py-4p text-white  border border-white bg-transparent border-radius-3p w-50 text-center mr-2 text-uppercase"
                    @click="back">Voltar</div>
                <div class="font-weight-bold text-sm ls-1 py-4p  text-white border-radius-3p w-50 text-uppercase  text-center btn-success-enabled"
                    @click="reset">Refazer</div>
            </div>

        </div>
    </main>

</template>
<script>
    export default {
        computed: {
            quiz() {
                return this.$store.getters.questions
            },
        },
        methods: {
            reset() {
                this.$store.dispatch('reset')
                this.$router.push('/')
            },
            back(){
                this.$router.push('/score')
            },
            getClass(question, opt) {
                if(question.my_answer == opt && question.my_answer == question.correct_answer ) {
                    return 'selected-success'
                } else if( question.my_answer == opt && question.my_answer != question.correct_answer ) {
                    return 'selected-warning'
                } else if(question.my_answer != question.correct_answer && question.correct_answer == opt) {
                    return 'selected-success'

                } else {
                    return ''
                }
            }
        }
    }

</script>
