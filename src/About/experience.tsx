export function Experience() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Experience
      </h1>

      <div className="space-y-8 w-full max-w-3xl">
        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Founder Associate Intern, Codavatar
          </span>
          <div className="text-md text-gray-600">
            <p className="mt-2 text-gray-500">
              As a Founder Associate Intern, I'm actively engaged with the
              technical team, contributing to both frontend and backend
              development. This dynamic role allows me to gain valuable hands-on
              experience in the full software development lifecycle, from
              designing user interfaces to implementing robust server-side
              logic.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            College Representative of IEEE, Pulchowk
          </span>
          <div className="text-md text-gray-600">
            <p className="mt-2 text-gray-500">
              As a college representative, I promote IEEE activities, share
              event information, and collaborate with others to grow the student
              network.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            College Representative of Code For Change
          </span>
          <div className="text-md text-gray-600">
            <p className="mt-2 text-gray-500">
              As a representative, I disseminated information about events
              organized by Code For Change and encouraged participation among
              students.
            </p>
            <p className="mt-4 text-gray-500">
              Recently, we organized an IT Mela at Thapathali Campus. I was part
              of the documentation team, responsible for creating captions and
              Memorandums of Understanding (MOUs) for companies and colleges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
