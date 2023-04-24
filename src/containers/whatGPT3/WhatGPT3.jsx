import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is an advanced language model developed by OpenAI. It is currently one of the most powerful language models available, with 175 billion parameters.GPT-3 uses deep learning techniques to analyze and generate natural language text, which means it can perform a wide range of language tasks, such as language translation, summarization, and question-answering." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 can be fine-tuned on specific datasets to create chatbots that can engage in natural, human-like conversations with users." />
      <Feature title="Knowledgebase" text="GPT-3 can be trained on a large corpus of text data related to a specific domain or topic, such as medicine, finance, or technology, to create a knowledgebase. " />
      <Feature title="Education" text="GPT-3 has many potential applications in education, such as language learning, personalized learning, content creation, and chatbots/virtual assistants. " />
    </div>
  </div>
);

export default WhatGPT3;