import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Java from '../assets/images/java.png'
import Node from '../assets/images/nodejs.png'
import Mysql from '../assets/images/mysql.png'
import Postgresql from '../assets/images/postgresql.png'
import Git from '../assets/images/gitt.png'
import Tailwind from '../assets/images/tailwind.png'
import Figma from '../assets/images/figma.png'
import Angular from '../assets/images/angular.png'
import Vertx from '../assets/images/vertx.png'
import Quarkus from '../assets/images/quarkus.png'
import Kafka from '../assets/images/kafka.png'
import SonarQube from '../assets/images/sonarqube.png'

const Skills = () => {
  return (
    <>
        <div name='skills'>
            {/* Container */}
            <div className='md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <div className='mb-8 text-center'>
                        <p className='text-3xl font-semibold text-gray-700'>Skills</p>
                        <div className='w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded'></div>
                    </div>
                    <p className='py-4 text-[14px] text-gray-600'>There are some technologies I've worked with :</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-3 py-2 text-center md:grid-cols-5 sm:py-8'>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Html} alt="Html icon" />
                        <p className='my-4 font-semibold text-gray-600'>HTML 5</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Css} alt="Css icon" />
                        <p className='my-4 font-semibold text-gray-600'>CSS 3</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Angular} alt="Angular icon" />
                        <p className='my-4 font-semibold text-gray-600'>Angular</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Tailwind} alt="Bootstrap icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>TAILWIND</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Node} alt="Node icon" />
                        <p className='my-4 font-semibold text-gray-600'>NODE</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Vertx} alt="Vertx icon" />
                        <p className='my-4 mt-1 font-semibold text-gray-600'>Vert.x</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Java} alt="Java icon" />
                        <p className='my-4 font-semibold text-gray-600'>JAVA</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-6 mx-auto cursor-pointer' src={Quarkus} alt="Quarkus icon" />
                        <p className='my-4 font-semibold text-gray-600'>QUARKUS</p>
                    </div>
                        <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Kafka} alt="Kafka icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>KAFKA</p>
                    </div>
                    <div className="duration-500 shadow-md hover:scale-110 flex items-center justify-center">
                        <img
                            className="w-48 sm:w-52 md:w-60 cursor-pointer"
                            src={SonarQube}
                            alt="SonarQube icon"
                        />
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Mysql} alt="Mysql icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>MYSQL</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Postgresql} alt="Postgresql icon" />
                        <p className='my-4 font-semibold text-gray-600'>POSTGRESQL</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Git} alt="Git icon" />
                        <p className='my-4 font-semibold text-gray-600'>GIT</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Figma} alt="Figma icon" />
                        <p className='my-4 font-semibold text-gray-600'>FIGMA</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills