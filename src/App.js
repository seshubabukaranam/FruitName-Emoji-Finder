import React, { useState } from "react";
import "./styles.css";

var emojiDisctionary = {
  "🍎": "Apple",
  "🍏": "Green Apple",
  "🍌": "Banana",
  "🍍": "PineApple",
  "🍇": "Grapes",
  "🍋": "Orange",
  "🍉": "Water Melon",
  "🍈": "Guava",
  "🍑": "Pomogranate",
  "🍓": "Straberry",
};

export default function App() {
  var emojiInDb = Object.keys(emojiDisctionary);
  const [emoji, setEmoji] = useState("");
  const [emojiMeaning, setemojiMeaning] = useState(
    "Fruit Name will be shown here"
  );
  function inputEmojiHandler(event) {
    var userInputEmoji = event.target.value;
    setEmoji(userInputEmoji);
    // var emojiMeaning = emojiDisctionary[userInputEmoji];
    if (userInputEmoji in emojiDisctionary) {
      setemojiMeaning(emojiDisctionary[userInputEmoji]);
    } else {
      setemojiMeaning(
        "Soory this emoji not recognised please try with another"
      );
    }
  }

  function emojiClickHandler(emoji) {
    setemojiMeaning(emojiDisctionary[emoji]);
    setEmoji(emoji);
  }
  return (
    <div className="App">
      <h2>Fruit Name Emoji Finder App</h2>
      <input
        onChange={inputEmojiHandler}
        placeholder={"🔍 Search Your Fruit Emoji"}
        style={{
          padding: "1rem",
          minwidth: "80%",
        }}
      />
      <div style={{ padding: "1rem", fontSize: "2rem" }}>{emoji}</div>

      <div style={{ padding: "0.5rem", fontSize: "1.5rem" }}>
        {emojiMeaning}
      </div>

      {emojiInDb.map(function (emoji) {
        return (
          <span
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
