/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblue: "rgb(195, 220, 248)",
        pin: "orange",
        instagram_media: "pink",
        youtube_video: "red",
        article: "green",
        tweet: "lightblue",
        facebook_status: "blue",
        tiktok_video: "black",
        twitch_stream: "purple",
      },
    },
  },
  plugins: [],
};
