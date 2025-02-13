
export default function WineSearch() {
  return <section className="flex flex-col items-center justify-between gap-5 text-white bg-[#b02c24] p-7 absolute -bottom-18 left-[26%] lg:left-[33%] xl:left-[36%]">
        <div className="font-semibold">We're here to help you make the most of cocktail hour.</div>
        <input type="text" placeholder="Search for..." className="bg-white py-3 px-5 rounded-3xl text-black placeholder-black font-semibold outline-none" />
        <div className=" text-[0.65rem]">Browse our curated cocktails by cocktail name, occasian or key ingredient</div>
    </section>
  
}
