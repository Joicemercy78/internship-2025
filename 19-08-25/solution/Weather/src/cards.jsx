import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
 
 const cards = [
    { time: "2 AM", icon: <WbSunnyIcon />, temperature: "22°C", condition: "Sunny" },
    { time: "5 AM", icon: <WbCloudyIcon />, temperature: "29°C", condition: "Cloudy" },
    { time: "8 AM", icon: <WbSunnyIcon />, temperature: "32°C", condition: "Sunny" },
    { time: "11 AM", icon: <CloudySnowingIcon />, temperature: "37°C", condition: "Rainy" },
    { time: "2 PM", icon: <WbCloudyIcon />, temperature: "30°C", condition: "Cloudy" },
    { time: "5 PM", icon: <CloudySnowingIcon />, temperature: "26°C", condition: "Rainy" },
    { time: "8 PM", icon: <WbSunnyIcon />, temperature: "33°C", condition: "Sunny" },
    { time: "11 PM", icon: <CloudySnowingIcon />, temperature: "31°C", condition: "Rainy" },
  ];

  export default cards;
  