import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojipedian) {
  return (
    <Entry
      key={emojipedian.id}
      emoji={emojipedian.emoji}
      name={emojipedian.name}
      meaning={emojipedian.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
