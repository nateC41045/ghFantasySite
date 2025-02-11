

import YouTube from "react-youtube";

export default function YouTubePlayer() {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1, // Auto-play the video
        },
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <YouTube videoId="MUVo20q6tx8?si=D1FptB6ye7s6cKmA" opts={opts} />
        </div>
    );
}