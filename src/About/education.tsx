export function Education() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Education
      </h1>
      <div className="flex flex-col w-full max-w-3xl space-y-8">
        <div className="flex flex-col bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            Khwopa College of Engineering
          </span>
          <span className="mt-2 text-gray-500">
            Bachelor&apos;s in Computer Engineering
          </span>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <span className="font-semibold text-xl text-gray-900 mb-2">
            SOS Hermann Gmeiner High School
          </span>
          <span className="mt-2 text-gray-500">High School</span>
        </div>
      </div>
    </div>
  );
}
