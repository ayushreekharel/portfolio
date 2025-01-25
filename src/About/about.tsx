/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function About() {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start px-6 py-16 space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto relative bg-white rounded-lg shadow-lg"
      css={css`
        @media (min-width: 768px) {
          .flex {
            justify-content: center;
          }
        }
        .relative {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-pink-500 mb-4">
          INNOVATING WITH
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-pink-500 mb-4">
          PASSION AND
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-pink-500">
          PURPOSE
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          Hi, I&apos;m Ayushree Kharel, a passionate learner and aspiring
          engineer, currently studying Computer Engineering at Khwopa College Of
          Engineering. With a love for leadership, technology, and creativity, I
          believe in turning challenges into opportunities and empowering others
          to achieve their best.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <img
            src="/profile.png"
            alt="Ayushree"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-pink-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
