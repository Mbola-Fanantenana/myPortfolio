import { React } from "react";

function Education() {
    return (
        <div name='education'>
                <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="mb-8 text-center">
                    <p className="text-3xl font-semibold text-gray-700">Education</p>
                    <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
                </div>
                
                {/* Master */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-700">Master's in Computer Science</h3>
                    <p className="text-gray-600">Ecole Nationale d'Informatique — 2023 - 2024</p>
                </div>
                {/* Licence */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-700">Bachelor's in Computer Science</h3>
                    <p className="text-gray-600">Ecole Nationale d'Informatique — 2019 - 2022</p>
                </div>
                </div>
        </div>
  );
}

export default Education;