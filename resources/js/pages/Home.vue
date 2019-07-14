<template>
    <div>
        <div class="radial-gradient"></div>

        <main class="container px-5">
            <header class="w-auto text-center font-weight-bold mt-9">
                <p class="text-white font-weight-bold text-4xl text-uppercase" style="letter-spacing: 6px;">Show do
                    <br>Milhão</p>
            </header>
            <div class="mt-6">
                <div class="d-flex flex-column font-weight-bold mb-4 pb-2">
                    <label class="text-grey-dark text-sm ls-2">Quatindade De Questões</label>
                    <input type="number" v-model="quantidade" placeholder="Default: 10, Max: 50"
                        class="border-dark-grey text-grey-dark py-16p pl-3 text-sm font-weight-bold border-radius-3p bg-transparent">
                </div>
                <div class="d-flex flex-column font-weight-bold mb-4">
                    <label class="text-grey-dark text-sm ls-2">Tema</label>
                    <select v-model="category" placeholder="Works"
                        class="border-dark-grey text-grey-dark py-16p pl-3 text-sm font-weight-bold border-radius-3p bg-transparent">
                        <option value="">Any</option>
                        <option :value="category.id" v-for="category in categories" :key="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="w-auto d-flex justify-content-center mt-7">
                <div class="font-weight-bold text-sm ls-1 py-4p  text-white border-radius-3p w-50 text-center text-uppercase btn-success-enabled text-center"
                    @click="start">
                    Começar</div>
            </div>
        </main>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                quantidade: null,
                category: ""
            }
        },
        methods: {
            start() {
                this.quantidade > 50 ? this.quantidade = 50 : '';
                this.$store.dispatch('loadQuestions', {
                    'quantidade': this.quantidade ? this.quantidade : 10,
                    'category': this.category ? this.category : null
                })

                this.$router.push('quiz')
            }
        },
        computed: {
            categories() {
                return this.$store.getters.categories
            }
        },
        mounted() {
            this.$store.dispatch('loadCategories')
        }
    }

</script>
