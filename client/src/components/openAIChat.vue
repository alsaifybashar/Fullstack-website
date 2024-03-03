<template>
    <div id="openAI">
      <div class="input-container">
        <textarea v-model="localMessage" placeholder="Something unclear? Ask!"></textarea>
      </div>
      <div class="button-container">
        <button @click="sendText" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Ask OpenAI</span>
        </button>
      </div>
      <div v-if="responseData" class="response-container">
        <button @click="showResponseDialog = true" id="response-button">View Response</button>
      </div>
      <div v-if="showResponseDialog" class="modal">
        <div class="modal-content">
          <pre>{{ responseData }}</pre>
          <button @click="showResponseDialog = false">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['message'],
    data() {
      return {
        localMessage: this.message,
        responseData: null,
        showResponseDialog: false,
        loading: false,
      };
    },
    methods: {
      sendText() {
        this.$emit('sendText');
        this.loading = true;
        axios
          .post('http://localhost:3000/chatEndpoint', { text: this.localMessage })
          .then(response => {
            console.log(response.data);
            this.getOpenAIResponse();
          })
          .catch(error => {
            console.error(error);
            this.loading = false; 
          });
      },
  
      getOpenAIResponse() {
        axios
          .get('http://localhost:3000/getChatCompletion')
          .then(response => {
            this.responseData = response.data;
            console.log(response.data);
            this.$emit('getOpenAIResponse', response.data);
            this.loading = false; 
          })
          .catch(error => {
            console.error(error);
            this.loading = false; 
          });
      }
    },
  }
  </script>
  
  <style>
  #openAI {
    margin-top: 20px;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .input-container {
    margin-bottom: 10px;
  }
  
  .input-container textarea {
  width: 80vw;
  height: 5vh;
  resize: vertical;
  font-size: 18px;
  padding: 10px;
}

  
  .button-container {
    margin-top: 10px;
  }
  
  .button-container button {
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: lightskyblue;
  color: white; 
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-container button:hover {
  background-color: black;
  color: #fff; 
}

  
  .response-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    margin-left: 10%;
    background-color: #f8f8f8;
    width: 70%; 
    max-height: 80%;
    overflow-y: auto;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;
    word-wrap: break-word;
    resize: none; 
  }
  
  .modal-content pre {
    font-size: 18px; 
    font-family: Arial, sans-serif;
    line-height: 1.5; 
    margin: 0;
    padding: 10px;
    white-space: pre-wrap;
  }
  
  .modal-content button {
    margin-top: 20px;
    font-size: 16px; 
    padding: 10px 20px;
    border-radius: 4px;
    background-color: black;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
#response-button{
  margin-top: 20px;
    font-size: 16px; 
    padding: 10px 20px;
    border-radius: 4px;
    background-color: black;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}


  .modal-content button:hover {
    background-color: brown;
  }
  
  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid black;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 5px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  