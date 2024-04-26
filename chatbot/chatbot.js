// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
        "Hello, how can I help you today? 😊",
        "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
        "I'm here to assist you with any questions or concerns you may have. 📩",
        "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
        "What would you like to know? 🤔",
        "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
        "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
        "Is there anything specific you'd like to talk about? 💬",
        "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
        "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
        "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
        "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
    ];

    // Questions and Responses
    const hardcodedQuestions = [
        {
            question: "Would it be wise to buy a $150 pair of shoes today?",
            response: "Let me check your account balance... Based on your current balance of $37, it might not be advisable to make that purchase right now."
        },
        {
            question: "Can I afford to go out for dinner tonight?",
            response: "Let me check your recent transactions and account balance... With your current balance and recent spending, dining out might not be within your budget at the moment."
        },
        {
            question: "How much money do I have left until my next paycheck?",
            response: "Let me calculate that for you based on your upcoming expenses and current balance... It looks like you have approximately $200 left until your next paycheck."
        },
        {
            question: "I'm thinking of booking a vacation. Can I afford it?",
            response: "Let me analyze your recent spending habits and account balance... Based on your current financial situation, it might be better to save up a bit more before booking a vacation."
        },
        {
            question: "Should I make a large purchase today?",
            response: "Let me review your account... Considering your current balance and upcoming expenses, it might be best to hold off on making a large purchase right now."
        }
    ];

    // Check if the input matches any hardcoded question
    const matchedQuestion = hardcodedQuestions.find(q => input.toLowerCase().includes(q.question.toLowerCase()));

    // If the input matches, return the corresponding response
    if (matchedQuestion) {
        return matchedQuestion.response;
    }

    // Return a random response if no match found
    return responses[Math.floor(Math.random() * responses.length)];
}

  
  
