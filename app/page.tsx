import Reels from "@/components/Reels";

const shortsVideos = [
  {
    src: "https://videos.pexels.com/video-files/6296290/6296290-hd_1080_1920_25fps.mp4",
    subtitle: "By Blender Foundation @FutureBlend @Foundational @skills",
    thumb: "images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
    id: "1",
  },
  {
    src: "https://videos.pexels.com/video-files/6536647/6536647-uhd_1440_2560_25fps.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/ElephantsDream.jpg",
    title: "Elephant Dream",
    id: "2",
  },
  {
    src: "https://videos.pexels.com/video-files/6254851/6254851-uhd_1440_2560_30fps.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
    id: "3",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/ElephantsDream.jpg",
    title: "Elephant Dream",
    id: "4",
  },
];

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black">
      <main className="w-full flex flex-col justify-center flex-grow">
        <div
          id="re"
          className="h-screen box-border overflow-y-auto snap-y snap-mandatory scroll-props md:scroll-pt-16 md:pt-8"
        >
          {shortsVideos.map((item) => (
            <Reels
              key={item.id}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
