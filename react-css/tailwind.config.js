/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //src폴더안에 *모든 디렉터리안에 있는 .확장자명에서 js,jsx,ts,tsx를 받아오겠다.(리액트만 쓰면 js, jsx | 타입스크립트 ts,tsx)
  theme: {
    extend: {},
  },
  plugins: [],
}

