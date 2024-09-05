import Image from "next/image";
import card1 from "../public/Songs/MalangSajna.png";
import card2 from "../public/Songs/Khwab.png";
import card3 from "../public/Songs/HasiBanGaye.png";
import card4 from "../public/Songs/VeHaaniyan.png";
import card5 from "../public/Songs/TuHaiKahan.png";
import card6 from "../public/Songs/Shikayat.png";
import card7 from "../public/Songs/Heeriye.jpg";
import card8 from "../public/Songs/MeraSafar.png";
import card9 from "../public/Songs/TuneJoNaKaha.png";
import card10 from "../public/Songs/TuHiYarMera.png";
import card11 from "../public/Songs/Safar.png";
import card12 from "../public/Songs/TootaJoKabhiTara.png";
import card13 from "../public/Songs/DekhaTenu.png";

export const imageItems = (
  handleImageClick: (title: string, youtubeId: string) => void
) => [
  <Image
    key="card1"
    src={card1}
    alt="Song 01"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_01", "UbMgcdmYC70")}
  />,
  <Image
    src={card2}
    alt="Song 02"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_02", "K1Uc52jzFIQ")}
  />,
  <Image
    src={card3}
    alt="Song 03"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_03", "Q9So1rz5Asc")}
  />,

  <Image
    src={card4}
    alt="Song 04"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_04", "E_SbwSe15y0")}
  />,
  <Image
    src={card5}
    alt="Song 05"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_05", "AX6OrbgS8lI")}
  />,
  <Image
    src={card6}
    alt="Song 06"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_06", "QxddU3sjVRY")}
  />,
  <Image
    src={card7}
    alt="Song 07"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_07", "RLzC55ai0eo")}
  />,
  <Image
    src={card8}
    alt="Song 08"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_08", "aYLJnasivzI")}
  />,
  <Image
    src={card9}
    alt="Song 09"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_09", "HRSxyUM5L9s")}
  />,
  <Image
    src={card10}
    alt="Song 10"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_10", "BTRPBiE_1lA")}
  />,
  <Image
    src={card11}
    alt="Song 11"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_11", "LsUdoy7EH7M")}
  />,
  <Image
    src={card12}
    alt="Song 12"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_12", "EYr9z7uVlLQ")}
  />,
  <Image
    src={card13}
    alt="Song 13"
    className="h-full w-full"
    onClick={() => handleImageClick("Song_13", "rMfugUZD2dA")}
  />,
];
