import React, { useState } from 'react';
import { BsAlignBottom } from 'react-icons/bs';

const Chatbot = () => {
    const handleInput = () => {
        const botMessage = document.querySelector('.chatbot-message');
        const customerMessage = document.querySelector('.customer-message');

        let badwords = ['useless|bad|stupid|crazy'];
        let words = new RegExp(badwords);
        if(words.test(document.querySelector('#input').value)) {
            // If the input contains bad words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'Please do not use bad words';
                document.querySelector('#input').value = '';
            }, 1000);
        }

        let welcome = ['hello|hi|anyone|hey'];
        let words2 = new RegExp(welcome);
        if(words2.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'Hi. Welcome to YOUTH Support. What can I help you?';
                document.querySelector('#input').value = '';
            }, 2000);
        }

        let question1 = ['what do you sell|what do you have'];
        let words3 = new RegExp(question1);
        if(words3.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'We sell clothes with YOUTH design';
                document.querySelector('#input').value = '';
            }, 2000);
        }

        let question2 = ['do you accept mastercard|do you accept visa|do you accept credit cards|are you cash only'];
        let words4 = new RegExp(question2);
        if(words4.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'We accept credit cards for online payment, including VISA and Mastercard';
                document.querySelector('#input').value = '';
            }, 2000);
        }

        let question3 = ['how long does delivery take|how long does shipping take'];
        let words5 = new RegExp(question3);
        if(words5.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'After placing the order, the delivery should take 3-5 days';
                document.querySelector('#input').value = '';
            }, 2000);
        }

        let question4 = ['thank you|thanks'];
        let words6 = new RegExp(question4);
        if(words6.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'It is a pleasure to help you!';
                document.querySelector('#input').value = '';
            }, 2000);
        }

        let question5 = ['good bye|bye|see you'];
        let words7 = new RegExp(question5);
        if(words7.test(document.querySelector('#input').value)) {
            // If the input contains welcome words
            botMessage.innerHTML = 'Typing...';
            setTimeout(() => {
                botMessage.innerHTML = 'Thank for visiting YOUTH. See you later!';
                document.querySelector('#input').value = '';
            }, 2000);
        }
        customerMessage.innerHTML = document.querySelector('#input').value;
    }

    return (
    <div className="chatbot-page-chatbot">
        <div className="chatbot-page-wrapper">
            <div className="chatbot-page-content">
                <div className="chatbot-page-header">
                    <div className="chatbot-page-right">
                        <div className="chatbot-name">YOUTH Chatbot Support</div>
                        <div className="chatbot-status">Good day. What can I help you?</div>
                    </div>
                </div>
                <div className="chatbot-page-main">
                    <div className="chatbot-main_content">
                        <div className="chatbot-main-messages">
                            <div className="chatbot-message" id="message1">Hi. Please ask...</div>
                            <div className="customer-message" id="message2"></div>
                        </div>
                    </div>
                </div>
                <div className="chatbot-page-bottom">
                    <div className="chatbot-btm">
                        <div className="chatbot-input">
                            <input type="text" id="input" placeholder="Please enter your message..." />
                        </div>
                        <div className="chatbot-btn">
                            <button type="button" onClick={handleInput}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatbot