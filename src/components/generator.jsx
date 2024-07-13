import { useState } from "react";
import "./generator.css";

let arr = [
  "Aliqua sit irure minim ea et non aliquip adipisicing eiusmod voluptate sint adipisicing nisi. Cupidatat velit aute consectetur ut ullamco in. Deserunt dolore aliquip commodo nulla incididunt mollit ipsum nulla amet minim qui qui.",
  "Consequat nulla aliqua exercitation cupidatat proident minim velit duis nulla ut in. Lorem nulla in voluptate ea adipisicing cupidatat est aliquip eiusmod elit cillum. Adipisicing ex quis dolor sit quis tempor do mollit in minim. Est veniam reprehenderit eu dolore. Sunt pariatur adipisicing id qui veniam qui.",
  "Veniam cillum aliquip aliquip proident eiusmod adipisicing qui deserunt magna incididunt ea velit incididunt. Qui esse exercitation pariatur elit culpa cillum. Aliquip ullamco reprehenderit ex dolore eiusmod reprehenderit minim pariatur ad aliquip id velit enim. Mollit magna esse tempor qui. Non deserunt eiusmod ad culpa proident do adipisicing exercitation excepteur sit sint in deserunt excepteur. Consequat ea incididunt ipsum voluptate do dolore adipisicing fugiat.",
  "Enim cupidatat laborum nulla nisi aute dolor qui sit culpa voluptate do sit. Sit enim anim officia veniam dolor enim. Consectetur proident magna voluptate tempor anim voluptate. Laboris sunt esse occaecat voluptate do. Voluptate quis commodo reprehenderit ut tempor laborum velit. Cillum aliquip irure fugiat in ut in minim irure sint.",
  "Commodo labore ullamco voluptate sunt mollit Lorem mollit qui culpa eu incididunt. Sint occaecat labore in ex consequat. Officia duis in est nisi eu dolore occaecat voluptate cillum. Voluptate quis voluptate ex in consectetur dolor non ex. Magna in ullamco esse minim proident adipisicing nisi non veniam sunt do duis et ut. Eu pariatur amet excepteur officia eu nulla anim aliquip magna excepteur do incididunt. Mollit eu consectetur excepteur labore.",
  "Consectetur cillum et Lorem incididunt consectetur labore pariatur aliqua voluptate incididunt exercitation. Sint cillum ea et enim ex adipisicing cillum. Laboris excepteur ut id laboris elit laborum laborum irure eiusmod irure. Aliquip tempor nulla esse consectetur nostrud commodo adipisicing ullamco cupidatat sunt. Adipisicing nostrud elit exercitation cillum labore proident esse adipisicing irure qui. Non pariatur consectetur cillum nulla adipisicing id aliqua proident aliqua deserunt aliquip.",
  "Enim exercitation et excepteur officia anim irure sit reprehenderit ullamco sint aute. Consequat officia ad laborum voluptate anim sunt voluptate minim velit Lorem. Ea sint proident amet aliquip id aliquip pariatur aliquip nostrud amet proident. Veniam Lorem nostrud elit duis in cillum laborum aliqua pariatur id do irure. Magna voluptate Lorem voluptate in ut occaecat nostrud incididunt duis proident dolore exercitation.",
  "Aliquip commodo Lorem ex incididunt amet tempor laborum excepteur aliqua. Mollit anim adipisicing tempor irure cupidatat minim laborum in in cupidatat nisi veniam nostrud. Ex qui et nulla ullamco.",
  "Deserunt sint do minim deserunt consequat Lorem ipsum ut. Enim cupidatat incididunt excepteur eu laborum deserunt id et adipisicing Lorem do. Do irure aliquip exercitation ad in ipsum id. Proident ex enim voluptate qui ut ipsum qui enim eiusmod elit qui ex. Amet elit laboris sunt duis Lorem aliqua enim mollit irure in. Deserunt do laboris exercitation enim culpa elit fugiat aute nostrud ut officia ad enim.",
  "Nisi dolore qui irure ea est est sunt anim veniam. Ex exercitation ea anim do eu. Deserunt minim enim duis aliquip duis ex.",
  "Ea sunt do dolor fugiat excepteur. Adipisicing nostrud fugiat veniam duis sint et sint ad incididunt aute excepteur. Esse cillum deserunt dolore minim sit ipsum amet pariatur non cupidatat ea mollit duis irure. Pariatur voluptate aliquip mollit labore enim consectetur eiusmod aliquip eu. Pariatur ad eu duis veniam labore consequat in mollit esse sunt veniam laboris et. Deserunt excepteur voluptate exercitation duis anim magna.",
  "Fugiat dolor incididunt consectetur ex exercitation nisi qui excepteur cupidatat excepteur quis Lorem id. Laborum id id incididunt exercitation cillum esse. Laboris laboris aliqua aliqua anim culpa ullamco veniam.",
];
// console.log(arr.length);

function Generator() {
  let [number, setNumber] = useState(1);
  let [article, setArticle] = useState([]);

  function generateArticle() {
    if (number == "") {
      alert("Enter a Number, will you?");
      return;
    } else if (number > 12) {
      alert("Trying to act smart, huh? Enter a smaller number.");
      return;
    }
    setArticle(arr.slice(0, number));
  }

  return (
    <main>
      <section className="generateContainer">
        <div className="subContainer">
          <span>Paragraphs: </span>
          <input
            type="number"
            min={1}
            max={12}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={generateArticle}>Get</button>
        </div>
      </section>
      <section
        className="articleStorage"
        style={{ display: number == "" ? "none" : "flex" }}
      >
        {article.map((item) => {
          return (
            <div key={"test"} className="articleCard">
              <p>{item}</p>
              <div className="btns">
                <button
                  title="Copy to Clipboard"
                  onClick={() => {
                    navigator.clipboard.writeText(item);
                    alert("Copied to Clipboard!");
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      stroke="#000000"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <path
                        stroke-linecap="round"
                        d="M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.188 35h-4.672"
                      />
                      <path
                        fill="#000000"
                        d="M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.188V15.811A2.813 2.813 0 0 0 32.188 13Z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Generator;
