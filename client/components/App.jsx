import React from 'react'
import ASCII from 'react-rainbow-ascii'
import FireFont from 'figlet/importable-fonts/Fire Font-k'
import Acrobatic from 'figlet/importable-fonts/Acrobatic'
import Alligator from 'figlet/importable-fonts/Alligator'
import Bubble from 'figlet/importable-fonts/Bubble'

function App() {
  return (
    <>
      <div className="header">
        <img src="images/logo.jpg" className="logo" alt="logo" />
        <h1>/taylors_folder</h1>
      </div>

      <div className="ascii">
        <a
          href="https://github.com/localjo/react-rainbow-ascii/blob/master/examples.md"
          target="_blank"
          rel="noreferrer"
        >
          <ASCII
            text="https://github.com/localjo/react-rainbow-ascii/blob/master/examples.md"
            rainbow={false}
          />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <ASCII
            text="https://www.google.com/"
            rainbow={false}
            font={FireFont}
          />
        </a>

        <a
          href="https://www.npmjs.com/package/ascii-art"
          target="_blank"
          rel="noreferrer"
        >
          <ASCII
            text="https://www.npmjs.com/package/ascii-art"
            rainbow={false}
            font={Acrobatic}
          />
        </a>

        <a
          href="https://jakedowsmith.studio/wikipedia/"
          target="_blank"
          rel="noreferrer"
        >
          <ASCII
            text="https://jakedowsmith.studio/wikipedia/"
            rainbow={false}
            font={Alligator}
          />
        </a>

        <img src="images/meme.png" className="image" alt="meme" />

        <a href="https://decrypt.co/?" target="_blank" rel="noreferrer">
          <ASCII text="https://decrypt.co/?" rainbow={false} font={Bubble} />
        </a>
      </div>
    </>
  )
}

export default App
