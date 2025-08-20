import { useState } from "react";
import {
  FormControl,
  Select,
  Container,
  Box,
  Card,
  CardContent,
  MenuItem,
  Typography,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
import weatherData from "./weatherData"; 
import cards from "./cards"; 

const App = () => {
  const [city, setCity] = useState("Chennai, Tamilnadu");
  const [selectedForecast, setSelectedForecast] = useState(null);


  const renderIcon = (condition) => {
    if (condition === "Sunny") return <WbSunnyIcon style={{ fontSize: 150, color: "orange" }} />;
    if (condition === "Cloudy") return <WbCloudyIcon style={{ fontSize: 150, color: "gray" }} />;
    if (condition === "Rainy") return <CloudySnowingIcon style={{ fontSize: 150, color: "blue" }} />;
    return null;
  };

  const renderBg = (condition) => {
    if (condition === "Sunny") return "linear-gradient(to bottom, #FFD580, #FFB347)";
    if (condition === "Cloudy") return "linear-gradient(to bottom, #B0C4DE, #778899)";
    if (condition === "Rainy") return "linear-gradient(to bottom, #87CEFA, #4682B4)";
    return "#fff";
  };

  const selectedCity = weatherData.find((item) => item.city === city);

  return (
    <Container
      sx={{
        width: "40vw",
        height: "98vh",
        background: renderBg(selectedForecast ? selectedForecast.condition : selectedCity.condition),
      }}
    >

      <FormControl sx={{ minWidth: 300, m: 3 }}>
        <Select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setSelectedForecast(null);
          }}
        >
          {weatherData.map((item, index) => (
            <MenuItem key={index} value={item.city}>
              {item.city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {city && (
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "0px",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h6">{selectedCity.city}</Typography>
            </CardContent>

            <CardContent>
               {renderIcon(selectedForecast ? selectedForecast.condition : selectedCity.condition)}
            </CardContent>

            <CardContent sx={{ display: "flex", alignItems: "center", padding: "5px" }}>
              <Typography variant="h4">
                {selectedForecast ? selectedForecast.temperature : `${selectedCity.temperature}°C`}
              </Typography>
            </CardContent>

            <Typography variant="h6">
              {selectedForecast ? selectedForecast.condition : selectedCity.condition}
            </Typography>
          </Box>
        </Container>
      )}

      <Typography variant="h6" color="white" pt={8} pb={3}>
        Today's Forecast
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            onClick={() => setSelectedForecast(card)}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl: 1,
                width: "60px",
                height: "120px",
              }}
            >
              <Typography variant="body2">{card.time}</Typography>
              <CardContent>{card.icon}</CardContent>
              <Typography variant="h6">{card.temperature}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default App;
