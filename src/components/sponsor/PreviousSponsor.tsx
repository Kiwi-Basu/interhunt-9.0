const PreviousSponsor = () => {
const sponsors = [
  {
    img: "img",
    sponsorName: "name"
  },
  {
    img: "img2",
    sponsorName: "Alpha Corp"
  },
  {
    img: "img3",
    sponsorName: "Beta Solutions"
  },
  {
    img: "img4",
    sponsorName: "Gamma Tech"
  },
  {
    img: "img5",
    sponsorName: "Delta Innovations"
  },
  {
    img: "img6",
    sponsorName: "Epsilon Systems"
  },
  {
    img: "img7",
    sponsorName: "Zeta Enterprises"
  },
  {
    img: "img8",
    sponsorName: "Theta Labs"
  },
  {
    img: "img9",
    sponsorName: "Lambda Group"
  },
  {
    img: "img10",
    sponsorName: "Omega Corp"
  },
  {
    img: "img11",
    sponsorName: "Nova Industries"
  }
];
  return (
    <>
      <section id="Previous-Sponsor">
        <div className="min-h-screen p-20 flex flex-col items-center bg-[#f9f0f0]">
          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">Previous Sponsor</p>
          <div className="flex w-6xl flex-wrap gap-5">
            {sponsors.map((sponsor,idx) => {
              return (
                <div key={idx} className="h-50 w-40 border flex flex-col justify-between p-2 border-black/5 rounded-2xl shadow-2xl hover:-translate-y-2 duration-300 transition-all">
                  <img src="src\assets\react.svg" alt="" className="border p-3 border-black/10 rounded-2xl shadow-black/20  shadow-inner" />
                  <p className="text-center">{sponsor.sponsorName}</p>
                </div>

              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default PreviousSponsor