import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import HeyMinnaleCover from './Hey minnale cover.webp'
import ManasilayoCover from './Manasilayo cover.jpg'
import BadassCover from './Badasscover.jpg'
import MattaCover from './Matta Cover.jpg'
import WhistlePoduCover from './Whistlepodu cover.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import HunterCover from './Hunter-Vantaar-From-Vettaiyan-.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import HunterVantaar from './Hunter Vantaar.mp3'
import HeyMinnale from './Hey Minnale.mp3'
import Manasalayo from './Manasilaayo.mp3'
import Badass from './Badass.mp3'
import Matta from './Matta.mp3'
import WhistlePodu from './Whistle Podu.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Hunter Vantaar",
        image: HunterCover , 
        file: HunterVantaar, 
        desc:"Hunter Vantaar Song From Vettaiyan",
        duration:"3;12"
    },
    {
        id:1,
        name: "Hey Minnale",
        image: HeyMinnaleCover,
        file: HeyMinnale,
        desc:"Hey Minnale From Amaran Tamil",
        duration:"3:49"
    },
    {
        id:2,
        name: "Manasilayo",
        image: ManasilayoCover,
        file: Manasalayo,
        desc:"Manasilayo Song From Vettaiyan",
        duration:"3:55"
    },
    {
        id:3,
        name: "BadAss",
        image: BadassCover,
        file: Badass,
        desc:"Badass Song from LEO",
        duration:"3:49"
    },
    {
        id:4,
        name: "Matta",
        image: MattaCover,
        file: Matta,
        desc:"Matta Song from GOAT",
        duration:"3:32"
    },
    {
        id:5,
        name: "Whistle podu",
        image: WhistlePoduCover,
        file:WhistlePodu,
        desc:"Whistle podu song from GOAT",
        duration:"4:41"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]