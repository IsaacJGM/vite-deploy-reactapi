const Anime = ({ animeInfo }) => {
  return (
    <article className="bg-white text-black rounded-md overflow-hidden w-[280px]">
      <div className="h-[400px]">
        <img
          className="h-full w-full object-cover"
          src={animeInfo.images.webp.large_image_url}
          alt=""
        />
      </div>
      <section className="p-2">
        <h3 className="font-bold text-2xl my-2 truncate">{animeInfo.title}</h3>
        <p className="text-sm h-[35px]">Synopsis: {animeInfo.synopsis}</p>
      </section>
    </article>
  );
};
export default Anime;
