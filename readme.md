# SnapWeather

SnapWeather is a simple and efficient weather application that leverages the OpenWeatherMap API. The app is designed with a responsive and user-friendly interface using React for the frontend and Express for the backend.

## Features

- **Real-Time Updates**: Fetches and displays accurate weather data using the OpenWeatherMap API.
- **Country-Centric**: Allows users to enter the name of the country to obtain instant weather conditions.
- **Visual Appeal**: Enhances user experience with visually appealing images corresponding to the current weather and concise descriptions.

## Tech Stack

- **Frontend**: Developed with React for a responsive and interactive user interface.
- **Backend**: Powered by Express to handle API requests and communication with the OpenWeatherMap API.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Natnael-Yigzaw/snapWeather.git
```

2. Navigate to the project directory:

```bash
cd SnapWeather
```

3. Create a .env file based on the provided .env.example:

```bash
cp .env.example .env
```

Ensure to update the values in .env with your OpenWeatherMap API key.

4. Install dependencies for both frontend and backend:

```bash
cd frontend && npm install && cd / && npm install
```

5. Run the application separately:

```bash
Frontend: cd / && npm run client
```

```bash
Backend: cd / && npm run server
```

6. If you want to run concurently:

```bash
cd / && npm run dev
```

## Usage

1. Access the app in your browser at:

```bash
 http://localhost:3000
```

2. Enter the name of the country to fetch weather information instantly.

## License

This project is licensed under the [MIT License](LICENSE).
