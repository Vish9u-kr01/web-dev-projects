import './Card1.css';

const Card = () => {
  return (
    <div className="card-wrapper">
    <div className="card ">
      <div>
        <h1 className="card-heading text-gradient">HealthAI</h1>
        <p className="card-text text-gradient">
     HealthAI is a web-based application that uses machine learning to predict diseases based on user symptoms, providing quick,
      accessible, and data-driven health insights
        </p>
      </div>
      <a href="https://health-ai-frontend-vaqc.vercel.app/">
      <button className="card-button">  
        <p>Visit</p>     
        <svg
          className="card-icon"
          stroke="currentColor"
          strokeWidth={1}
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
      </a>      
    </div>
    </div>
  );
};

export default Card;
