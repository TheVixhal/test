
export default function VideoPlayer() {
    return (
      <video
        src="https://cdn.pixabay.com/video/2024/03/03/202844-919000222_large.mp4"
        className="z-0 relative top-0 left-0 w-full h-full object-cover object-left"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    );
  }
  