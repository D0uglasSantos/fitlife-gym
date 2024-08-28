interface VideoSectionProps {}

const VideoSection = ({}: VideoSectionProps) => {
  return (
    <section className="bg-color-details h-max py-10 flex flex-col items-center justify-center space-y-6 md:bg-white">
      <div
        id="video"
        className="flex items-center justify-center md:w-3/4 md:-mt-20"
      >
        <iframe
          className="hidden md:block"
          width="700"
          height="400"
          src="https://www.youtube-nocookie.com/embed/Fuyhg4jsR_M?si=-HQ2e0QW2T8yfpIj&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="block md:hidden"
          width="350"
          height="250"
          src="https://www.youtube-nocookie.com/embed/Fuyhg4jsR_M?si=-HQ2e0QW2T8yfpIj&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-4/6 text-center md:w-5/12">
        <p className="text-white text-sm md:text-2xl md:text-black">
          Motivação para academia musculação é para os
          <span className="font-bold text-color-primary md:text-color-details">
            {" "}
            FORTES Nando Pinheiro
          </span>
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
