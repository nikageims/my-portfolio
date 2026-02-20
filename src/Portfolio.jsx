import React from 'react';

const Portfolio = () => {
  // შენი სკილები
  const skills = ["HTML", "CSS", "JS", "React", "JSON", "Python"];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600">
      {/* ნავიგაცია */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-2xl font-bold tracking-tighter">Nika<span className="text-red-600">.</span></div>
        <ul className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <li className="hover:text-red-600 cursor-pointer transition">Home</li>
          <li className="hover:text-red-600 cursor-pointer transition">About</li>
          <li className="hover:text-red-600 cursor-pointer transition">Services</li>
          <li className="hover:text-red-600 cursor-pointer transition">Portfolio</li>
          <li className="hover:text-red-600 cursor-pointer transition">Contact</li>
        </ul>
      </nav>

      {/* მთავარი სექცია */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-10 mt-12">
        
        {/* მარცხენა მხარე - ტექსტი */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-red-600 text-xl font-medium">გამარჯობა, მე ვარ</h2>
          <h1 className="text-7xl font-extrabold tracking-tight">
            ნიკა <span className="text-red-600">დეველოპერი</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            მე ვარ 18 წლის ენთუზიასტი დეველოპერი. ვქმნი თანამედროვე, სწრაფ და 
            კრეატიულ ვებ-აპლიკაციებს. ჩემი მიზანია კოდი ვაქციო ხელოვნებად.
          </p>

          {/* სკილების სექცია */}
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-1 border border-red-600 text-red-600 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>

          {/* ღილაკები */}
          <div className="flex gap-4 pt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition duration-300">
              დამიქირავე
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-md font-bold transition duration-300">
              ვისაუბროთ
            </button>
          </div>
        </div>

        {/* მარჯვენა მხარე - ლოგო (კაცის ნაცვლად) */}
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <div className="relative">
            {/* აქ ჩასვი შენი ლოგოს ფაილი pr_nikageims.png */}
            <img 
              src="./pr_nikageims.png" 
              alt="Logo" 
              className="w-80 h-80 object-contain drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]"
            />
            {/* დეკორატიული წითელი ხაზები/ეფექტი */}
            <div className="absolute -inset-4 border-2 border-red-600 opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* სოციალური ქსელები */}
      <div className="fixed bottom-10 left-10 flex gap-6 text-xl text-gray-500">
        <i className="fab fa-facebook hover:text-red-600 cursor-pointer transition"></i>
        <i className="fab fa-twitter hover:text-red-600 cursor-pointer transition"></i>
        <i className="fab fa-linkedin hover:text-red-600 cursor-pointer transition"></i>
      </div>
    </div>
  );
};

export default Portfolio;