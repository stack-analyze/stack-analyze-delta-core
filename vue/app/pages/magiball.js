const { ref, defineComponent } = require('vue')

const localeKeyword = {
  en: "magic ball say:",
  es: "la bola magic te dice:"
}

module.exports = defineComponent({
  name: 'Magic Ball',
  setup() {
    const locale = [
      {
        value: '',
        description: 'Select a question'
      },
      {
        value: 'en',
        description: 'English'
      },
      {
        value: 'es',
        description: 'Spanish'
      },
    ]

    const currentLocale = ref('')
    const question = ref('')
    const anwser = ref('')

    const getAnwser = async () => {
      try {
        const data = await (
          await fetch(`https://eightballapi.com/api/biased?question=${question.value}&locale=${currentLocale.value}`)
        ).json()

        anwser.value = `${localeKeyword[currentLocale.value]}: ${data.reading}`
      } catch (err) {
        anwser.value = err.message
      }

      currentLocale.value = ''
      question.value = ''
    }

    const clearAnwser = () => {
      anwser.value = ''
    }

    return {
      locale, currentLocale, question, anwser, getAnwser
    }
  },
  template: `
    <main>
      <section>
        <div>
          <select v-model="currentLocale">
            <option v-for="({value, description}) of locale" :value>
              {{description}}
            </option>
          </select>
        </div>

        <div>
          <input type="text" v-model="question" :disabled="localeSelect.value === ''">
        </div>

        <button @click="getAnwser" :disabled="question.length >=8">start magic ball</button>
        <button @click="clearAnwser" :disabled="anwser !== ''">clear anwser</button>
      </section>

      <p>{{anwser}}</p>

    </main>
  `
})
