export function Project() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Fake News Detection System Using Deep Learning",
            description:
              "Used Bi-LSTM and LSTM along with Word2Vec and one-hot encoding. Among the four models tested, Bi-LSTM with Word2Vec achieved the best performance on the ISOT dataset.",
          },
          {
            title: "Nanogpt",
            description:
              "Utilized the decoder-only transformer to form a nano Generative Pretrained Transformer consisting of 0.236948 million parameters, trained on small datasets.",
          },
          {
            title: "TRIPZY: Monetize Your Luggage Space On the Go",
            description:
              "Developed for Hacking for Empowered Nepal, enabling users to monetize unused luggage space for storage or material transfer. Utilized HTML, CSS, JavaScript, Flask, and MySQL.",
          },
          {
            title: "SahaYatri: A Ride Pooling Platform",
            description:
              "Built for KathCode: Code For Sustainability to reduce single-occupancy vehicle use. Developed with PHP, HTML, CSS, and JavaScript.",
          },
          {
            title: "Movie Recommendation System",
            description:
              "Created an end-to-end recommendation system using content-based filtering with cosine similarity to measure movie similarities.",
          },
          {
            title: "Handwritten Digit Recognition Using ANN and CNN",
            description:
              "Implemented both ANN and CNN for digit recognition. CNN outperformed ANN.",
          },
          {
            title: "Parkinson Disease Detection Using Logistic Regression",
            description:
              "Used Logistic Regression for detection based on voice measurement data.",
          },
          {
            title: "Sentiment Analysis Of Restaurant Reviews",
            description:
              "Classified reviews as positive or negative using Bernoulli Naive Bayes, Multinomial Naive Bayes, and Logistic Regression. Multinomial Naive Bayes achieved the highest accuracy.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 h-48 bg-white rounded-lg shadow-md border border-gray-300"
          >
            <span className="font-semibold text-lg text-gray-800">
              {project.title}
            </span>
            <span className="text-sm text-gray-500 mt-2">
              {project.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
