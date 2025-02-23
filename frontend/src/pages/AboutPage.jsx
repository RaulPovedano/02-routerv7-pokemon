const AboutPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-blue-500 shadow-lg min-h-[150px] flex justify-center items-center">
        <h1 className="font-extrabold text-center text-5xl text-white py-12">ABOUT US</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img
          src="../public/logo.png"
          alt="pokemon logo"
          className="w-40 md:w-52 lg:w-64 rounded-xl shadow-xl"
        />
        <p className="mt-6 text-xl font-semibold text-gray-800">Raul Povedano Ruiz</p>
      </div>
    </div>
  );
}

export default AboutPage;
