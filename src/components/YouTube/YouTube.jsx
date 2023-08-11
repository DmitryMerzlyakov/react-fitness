import YouTube from 'react-youtube'

export default function YouTubeVideo({ video }) {

    const opts = {
      height: '639',
      width: '1200',
      playerVars: {
        // Поместите здесь свои настройки плеера YouTube, если необходимо
      },
    };
    return (
        <YouTube videoId={video} opts={opts} />
      );
    }
   