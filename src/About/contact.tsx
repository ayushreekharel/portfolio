"use client";

import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Track loading state
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [errorMessage, setErrorMessage] = useState(""); // Error message

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Start loading when the request is sent

    try {
      const response = await fetch(
        "https://portfolio-backend-ucco.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Reset the form and show success message
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Your message was sent successfully!");
        setErrorMessage(""); // Clear any previous error message
      } else {
        // Show error message if the response is not ok
        setErrorMessage("Failed to send the message. Please try again.");
        setSuccessMessage(""); // Clear any previous success message
      }
    } catch (error) {
      setErrorMessage("There was an error sending your message.");
      setSuccessMessage(""); // Clear any previous success message
    } finally {
      setLoading(false); // Stop loading once the request is finished
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Contact
      </h1>
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-lg font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              rows={5}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              required
            ></textarea>
          </div>

          {loading ? (
            <p className="text-center text-blue-600">Sending...</p>
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            >
              Send Message
            </button>
          )}

          {successMessage && (
            <p className="text-center text-green-600 mt-4">{successMessage}</p>
          )}

          {errorMessage && (
            <p className="text-center text-red-600 mt-4">{errorMessage}</p>
          )}
        </form>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 pt-0">
          Follow Me
        </h2>
        <div className="flex flex-row align-corner space-x-4">
          <a
            href="https://np.linkedin.com/in/ayushree-kharel-754782188"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-3xl transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ayushreekharel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 text-3xl transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://medium.com/@ayushreekharel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-3xl transition-all duration-300"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
}
