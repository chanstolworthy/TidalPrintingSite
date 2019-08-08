import React, {useState} from 'react'

const totalPages = 3
const ContactForm = () => {
    const [page, setPage] = useState(0)
    const incrementPage = () => setPage(page + 1)
    const decrementPage = () => setPage(page - 1)
    const disableBack = !page;
    const formCompleted = page === totalPages

    const renderQuestion = () => {
        switch (page) {
            case 0:
                return <input type="text" name="first name" placeholder="First Name"/>
            case 1:
                return <input type="text" name="last name" placeholder="Last Name"/>
            case 2:
                return <input type="email" name="email" placeholder="Your email"/>
            case 3:
                return <input type="text" name="phone number" placeholder="Phone Number"/>
            default:
                return null
        }
    }
    return (
        <div>
            <form method="POST" action="https://formspree.io/chansignup@gmail.com">
                {renderQuestion()}
                {
                    formCompleted && (
                        <button type="submit">Send Test</button>
                    )
                }
            </form>
            {
                !formCompleted && <button onClick={incrementPage}>next</button>
            }
            {
                !disableBack && <button onClick={decrementPage}>back</button>
            }

        </div>
    )
}

export default ContactForm