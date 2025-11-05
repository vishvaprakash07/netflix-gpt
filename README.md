# Netflix GPT
- Create React APP
- Configured Tailwind CSS
- Header
- Routing of App
- Login form
- Sign Up form
- useRef hook
- Firebase Setup
- Deploying our app to production
- Create SignUp user account
- Implement Sign In User Api
- Created Redux Store with userSlice
- Implemented Sign Out
- Update profile
- Bugfix: Update user profile with display name and profile picture
- Bugfix: redirect user from /browse page to / login page if not logged in.
- Unsubscribed to onAuthStateChanged call back.
- Add hardcoded values to constants file.
- Register TMDB API & create an app & get access token
- Get Data from TMDB now Playing movies list API
- Custom hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for Main container & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind classes to make main container look awesome
- Build Secondary Component
- Build movie List
- Build Movie Card
- Created Custom Hooks for movie lists to display them in secondary container
- GPT Search Page
- GPT Search Bar
- Multi Language Feature
- Fetched gptMovieSuggestions from TMDB
- Created gptSlice added data
- Reused Movie List component to make movie suggestions container
- Memoization
- Added .env file and included it in gitignore
- Made our app responsive




# Features
- Login/Sign Up
    - Sign In/Sign Up Form
    - Redirect to Browse Page
- Browse (after authentication)
    - Header
    - main Movie
        - trailer in the background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
    - Search bar
    - Movie Suggestions