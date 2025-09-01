// src/App.tsx
import { useState } from "react";

type IntroProps = {
  name: string;
  funFact: string;
};

function Intro({ name, funFact }: IntroProps) {
  const [liked, setLiked] = useState(false);
  return (
    <main style={{ fontFamily: "system-ui", padding: 24, lineHeight: 1.5 }}>
      <h1>Hei, jeg heter {name} 👋</h1>
      <p><strong>Fun fact:</strong> {funFact}</p>

      <button
        onClick={() => setLiked((v) => !v)}
        style={{ padding: "8px 12px", marginTop: 12, cursor: "pointer" }}
      >
        {liked ? "❤️ Likt" : "🤍 Lik dette"}
      </button>
    </main> 
  );
}

export default function App() {
  return (  
    <Intro
      name="Jørgen"
      funFact="Jeg holdt på å bli blind i det ene øyet fordi jeg hoppet baklengs mot en badering"
    />
  );
}
