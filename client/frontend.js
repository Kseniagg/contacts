import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'


new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: []
        }
    },
    methods: {
        createContact() {
            // write the contact to an object
            const { ...contact } = this.form
            // adds the contact to the array and assign an id to the object
            this.contacts.push({ ...contact, id: Date.now() })
            console.log(contact)

            this.form.name = this.form.value = ''
        }
    }
})

console.log(Vue);