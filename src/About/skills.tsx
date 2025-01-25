export function Skills() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Skills
      </h1>

      <div className="space-y-8 w-full max-w-3xl">
        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Programming Languages:
          </span>
          <p className="text-md text-gray-600">Python, SQL, C/C++, HTML, CSS</p>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Domains:
          </span>
          <p className="text-md text-gray-600">
            AI, ML, Deep Learning, Natural Language Processing (NLP), Data
            Science
          </p>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Python Packages:
          </span>
          <p className="text-md text-gray-600">
            Pandas, Numpy, Matplotlib, Keras, TensorFlow, scikit-learn, Flask,
            PyTorch, FastAPI, BeautifulSoup
          </p>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Software & Tools:
          </span>
          <p className="text-md text-gray-600">
            GitHub, Google Colab, VS Code, Jupyter, LaTeX
          </p>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Others:
          </span>
          <p className="text-md text-gray-600">Slack, Asana</p>
        </div>
      </div>
    </div>
  );
}
