# React Deck of Cards App

This is a React application that simulates a deck of cards. You can draw cards one by one and see their images. The app also allows shuffling the deck after all cards have been drawn.

## Features

- Draw cards from a virtual deck.
- Display the drawn cards with their images.
- Track the remaining cards in the deck.
- Shuffle the deck to draw again after all cards are gone.

## Getting Started

1. Clone the repository:

   ```bash
   git clone repo_url
   ```

2. Install dependencies:

   ```bash
   cd react-deck-of-cards
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   This will start the development server and open the app in your web browser (usually at http://localhost:3000/).

## Usage

The app is straightforward to use. Click the "Draw a card" button to draw a card from the deck. The drawn card's image will be displayed below the button.

When all cards have been drawn, a message will inform you, and the "Draw a card" button will be disabled. You can then click the "Shuffle deck" button to reset the deck and draw cards again.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- Deck of Cards API: Free API for simulating a deck of cards ([Deck of Cards API](https://www.deckofcardsapi.com/)).

## Contributing

Feel free to contribute to this project by forking the repository and submitting pull requests. Please ensure your code adheres to the existing code style and functionality.
