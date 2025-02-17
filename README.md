<p align="center">
<img src="https://github.com/user-attachments/assets/88b65ae8-ec59-4c8e-97ba-5125981839e2">
</img>
</p>

  ## Live Project
  

 https://reels-tawny.vercel.app/
  
## Assignment creating Instagram Reel Section, Added Controller, pause, mute.
  
## Demo


https://github.com/user-attachments/assets/6f58beee-b710-401c-b0df-ff448a2545e7



## Run Locally

Clone the project

```bash
  git clone https://github.com/bisht-xp/reels
```

Go to the project directory

```bash
  cd reels
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Tech Stack (Frontend)
- Next.js
- Tailwindcss
- Lucid-react icons



## Features
- **Auto-Play & Auto-Pause**: Videos start playing when they come into view and pause when they go out of view using the IntersectionObserver API.
- **Tap to Play/Pause**: Users can manually control video playback by tapping the screen.
- **Mute/Unmute**: A mute button toggles sound on and off.
- **Like Feature**: Users can like a video, updating the UI accordingly.
- **Copy Share Link**: Clicking the share button temporarily displays a "Copied!" message.
- **Responsiveness**: The UI adapts across different screen sizes, with a focus on mobile.

## Thought Process
- **Performance Optimization**: Implemented IntersectionObserver to reduce unnecessary autoplay events and improve performance.
- **User Interaction**: Ensured an intuitive experience by adding visual feedback (e.g., the play button appearing when paused).
- **Accessibility**: Videos include controls for pausing and muting to cater to different user preferences.
- **Reusability**: The Reels component is designed to be reusable, with props (src, title, subtitle) allowing for dynamic content.
- **Customization**: The Tailwind CSS approach ensures easy modifications to styling and layout.

## Caveats & Known Issues
- **Aspect Ratio Constraint**: Videos should follow a 9:16 aspect ratio for an optimal mobile viewing experience.
- **Autoplay Limitations**: Some browsers may block autoplay without user interaction (muted autoplay is recommended).
- **Limited Video Controls**: No seek bar or volume slider is included (future improvements may add these features).


## Future Improvements
- **Add API Fetching**: Use apis to fetch scroll video instead of using static videos.
- **Refactor and Optimize CSS**: Improve the CSS by refactoring and creating reusable classes for styles that are used multiple times throughout the application. This will help reduce redundancy, maintain consistency, and make the app more maintainable.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bishtkamal)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/bisht_xp)
