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
    // disable the button Enregistrer if empty
    computed: {
        canCreate() {
            return this.form.value && this.form.name
        }
    },
    methods: {
        createContact() {
            // write the contact to an object
            const { ...contact } = this.form
            // adds the contact to the array and assign an id to the object
            this.contacts.push({ ...contact, id: Date.now(), marked: false });
            console.log(contact)

            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked === true
        },
        removeContact(id) {

        }
    }
})

console.log(Vue);