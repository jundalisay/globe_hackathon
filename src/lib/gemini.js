// import { json } from '@sveltejs/kit';
// import { env } from '$env/dynamic/private'; 
// import Gemini from "gemini-ai";


// const gemini = new Gemini(env.PRIVATE_API_KEY);

// /**
//  * Sends a POST request to create a chat and return the result as JSON.
//  *
//  * @param {import('@sveltejs/kit').RequestEvent } request - The request object containing the query.
//  * @return {Promise<object>} The JSON response with the chat text or an error message.
//  */
// export async function POST({ request }) {
//   const { msg, chats } = await request.json();

//   console.log(msg, chats);

//   if (!msg) {
//     return json({ error: 'No message provided' }, { status: 400 });
//   }

  
//   try {
//     const chat = gemini.createChat({
//       messages: chats,
//       temperature: 0.7,
//       maxOutputTokens: 1000
//     });
    
//     let text = await gemini.ask(msg.text);


//     return json({ text }, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json', 
//       },
//     });
//   } 
//   catch (error) {
//     return json({ error: error.message }, { status: 500 });
//   }
// }





// import axios from "axios";
// import { messages } from "./store";
// import { formatChats } from "./utils";

// /**
//  * @typedef {Object} TextObject
//  * @property {string} text - The text property of type string
//  * @property {string} [error] - The error property of type string
//  */


// /**
//  * Asynchronously makes a request using axios to post a chat to "https://api.gemini.com/v1/chat".
//  *
//  * @param {Object} chat - the chat object to be posted
//  * @return {Promise<import('axios').AxiosResponse<any>>} A Promise object representing the response from the request
//  */
// const makeRequest = async (chat) => {


//     try {
//         let response = axios.post("/api/gemini", {
//             ...chat
//         })

//         return response;
//     } catch (/** @type {any}*/error) {
//         return error;
//     }
// }

// /**
//  * Asynchronously sends a new message and retrieves a response.
//  *
//  * @param {Object} newMessage - The new message to be sent
//  * @return {Promise<TextObject>} A Promise object representing the response from the request
//  */
// export const ask = async (newMessage) => {

//     /**
//     * @typedef {import('./types.js').formatedMessages}formatedMessages
//     * @type  {Array<[formatedMessages, formatedMessages]>}     
//     * */
//     let chats = [];
//     let unsubscribe = await messages.subscribe((value) => {
//         let formatted = formatChats(value);
//         chats = formatted;
//     })

//     let chat = { chats, msg: newMessage }

//     let response = await makeRequest(chat);

//     unsubscribe();
//     return response.data;
// }

