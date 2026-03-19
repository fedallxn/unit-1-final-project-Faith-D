import { useState } from 'react'

function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({
            name: '',
            email: '',
            category: '',
            message: ''
        })
    }
    
    return (
        <div>
            {submitted && (<p>Thank you for reaching out! We'll get back to you shortly!</p>)}
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange} required/>
                </label><br />
                <label>Email:
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
                </label><br />
                <label>Category:
                    <select name='category' value={formData.category} onChange={handleChange} required>
                        <option value=''>-- Select a Category --</option>
                        <option value='general'>General Question</option>
                        <option value='bug'>Report a Bug</option>
                        <option value='feature'>Feature Request</option>
                    </select>
                </label><br />
                <label>Message:
                    <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your thoughts here...' rows={6} required/>
                </label><br />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactPage;