import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Tech',
    text: 'GPT-3 has many potential applications in the tech sector. Its natural language processing capabilities can help improve virtual assistants, chatbots, and voice recognition systems, making them more accurate and effective.',
  },
  {
    title: 'Health',
    text: 'GPT-3 has many potential applications in the health sector. Its natural language processing capabilities can assist doctors in making diagnoses and treatment decisions by analyzing patient data and extracting relevant information from medical literature and electronic health records.',
  },
  {
    title: 'Retail',
    text: 'GPT-3 has the potential to transform the retail sector by providing new ways to process and generate natural language text, extract insights from large amounts of data, and provide personalized and efficient customer service and support.',
  },
  {
    title: 'Finance',
    text: 'GPT-3 can provide insights into a wide range of finance-related topics. For example, GPT-3 can help investors make better decisions by analyzing market data and identifying potential opportunities or risks.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;