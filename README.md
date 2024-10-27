![Capture](https://github.com/user-attachments/assets/88205036-55f9-471a-8d29-c9ba77423bd0)

Features
Search as you type: Filters out pokemons even in cases of typos using fuzzy-search
Keyboard Accessibility: Press / to quickly focus on the search bar.
Graceful Degradation: Shows a "Pokemon Not Found" card when an invalid Pokémon is entered.
Shuffle Pokémon: Randomizes Pokémon on every page load using array-shuffle.
Avoid Expensive DOM Computations: Making the input field debounce on keystroke
Bootstrap Components: Built with Bootstrap (because it’s still alive and kicking, lol).
Parcel for Builds: Using Parcel for fast builds and optimizations.
Setup
Ensure you have Node.js and npm installed. Run: npm install.
Start the local development server with: npm run dev.
For deployment, add: npm run build and set publish-directory: /dist.
