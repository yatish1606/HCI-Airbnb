const isEmail = email => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

const isName = name => /^[A-Z]+$/i.test(name)

const isMobileNumber = number => /^\d{10}$/.test(number)
  
const form = document.getElementById('contact-form')

window.onload = function runOnLoad () {
    form.onsubmit = function handleSubmit (e) {
        
        let email = document.querySelector('#emailForm').value
        let name = document.querySelector('#nameForm').value
        let number = document.querySelector('#numberForm').value
        let errors = []

        e.preventDefault()
            
        isName(name) ? null : errors.push({message: "Please enter valid name"})  
        isMobileNumber(number) ? null : errors.push({message: "Please enter valid mobile number"})
        isEmail(email) ? null : errors.push({message: 'Please enter valid email'})

        errors.forEach(e => alert(e.message))
    }
}
