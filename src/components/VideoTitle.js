const VideoTitle = (props) => {

    const { title, overview } = props;

    return (
        <div className="w-screen aspect-video pt-[15%] px-24 absolute top-0 text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-sm py-6 w-1/3">{overview}</p>
            <div className="py-4">
                <button className="bg-white text-black px-16 py-4 rounded-lg mr-4 hover:bg-opacity-80"> Play</button>
                <button className="bg-gray-700 text-white px-16 py-4 rounded-lg hover:bg-opacity-80">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
