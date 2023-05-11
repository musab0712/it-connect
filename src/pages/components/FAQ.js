import { VscChevronRight } from 'react-icons/vsc'
import { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: 'Do we need to pay 100% before completion of the project?',
            answer: 'No, there is an option of EMI by which you can pay monthly even while earning through your product. It is very helpful for businesses as it is very much in their pockets.',
        },
        {
            question: 'What is the Annual Maintenance structure of a product which is delivered?',
            answer: 'One year maintenance will be included in the quotation that you will get and by next year it will be 40% of the product cost, Which you could also pay through EMI.',
        },
        {
            question: 'What is the maximum time to resolve any technical issue if it occurs?',
            answer: 'Usually small issues get resolved in an hour or two but if there is any big issue then our Support Team has a benchmark to resolve it within 48 hours. As we understand that if an App or any software stopped working then it will result in huge loss to customers.',
        },
        {
            question: 'Is there any opportunity for startups?',
            answer: 'Yes , we have introduced easy EMI options for our customers which help startups to dream big and create big.',
        },
        {
            question: 'What is the Annual Maintenance structure of a product which is delivered?',
            answer: 'Yes, Our experienced developers are capable of developing any kind of new features. Customers can build their own softwares, website or applications, Our developer team will help you to make your imagination into reality.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };



    return (
        <section id='faq'>
            <div className='faq-h1'>
                <h1>Frequently Asked Questions</h1>
            </div>
            {faqs.map((faq, index) => (
                <div key={index} className='card faq-content'>
                    <div className='faq-q card-body'>
                        <h4 onClick={() => toggleAnswer(index)}><VscChevronRight />{faq.question}</h4>
                    </div>
                    <div className='faq-a card-body'>
                        {activeIndex === index && <p>{faq.answer}</p>}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FAQ;
