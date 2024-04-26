import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const Deck = () => {
  const [deck, setDeck] = useState();
  const [remaining, setRemaining] = useState(52);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getDeck() {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
      setDeck(res.data.deck_id);
      setRemaining(52);
    }
    getDeck();
  }, []); // Get deck only on initial render

  const handleClick = async () => {
    if (!deck || remaining === 0) {
      return;
    }

    if (remaining === 1) {
      // Handle last card draw, disable button and display message
      setRemaining(0);
      alert("This is the last card! You can now shuffle the deck.");
      return;
    }

    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
    if (!res.data.cards) {
      console.error("Error: No cards found in response data.");
      return;
    }
    // Update remaining count based on API response
    const newRemaining = res.data.remaining;

    const newCard = {
      img: res.data.cards[0]?.image,
      code: res.data.cards[0].code,
    };
    setCards((cards) => [...cards, newCard]);
    setRemaining(newRemaining);
  };

  const handleShuffle = async () => {
    if (!deck) {
      return;
    }
    await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`);
    setRemaining(52); // Reset remaining count to 52 after shuffle
    setCards([]); // Clear existing cards
  };

  return (
    <div>
      <h3>Draw a card.</h3>
      <p>You have {remaining} cards remaining.</p>
      {remaining === 0 ? (
        <p>No more cards left. Try shuffling the deck!</p>
      ) : (
        <button onClick={handleClick}>Draw a card</button>
      )}
      <button onClick={handleShuffle} disabled={!deck}>
        Shuffle deck
      </button>
      <div className="Deck-cards">
        {cards.map((cardInfo) => (
          <Card data={cardInfo.img} key={cardInfo.code} />
        ))}
      </div>
    </div>
  );
};

export default Deck;
