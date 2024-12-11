
export default function VideoPlayer() {
    return (
      <video
        src="https://cdn.pixabay.com/video/2019/04/11/22763-330176895_large.mp4"
        className="z-0 relative top-0 left-0 w-full h-full object-cover object-left"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    );
  }
  