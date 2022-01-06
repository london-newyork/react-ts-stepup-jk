// import { ChildArea } from "./ChildArea";
// import Emotion from './components/Emotion'
// import CssModules from "./components/CssModules";
// import InlineStyle from "./components/InlineStyle";
// import StyledComponents from "./components/StyledComponents";
// import styles from "./styles.module.css"

// import { useState, useCallback, useMemo } from "react"
import Router from './router/Router'
import { BrowserRouter, Link } from 'react-router-dom';


export default function App() {
  console.log('App');
  // const [text, setText] = useState('')
  // const [open, setOpen] = useState(false)

  // const onChangeText = (e) => setText(e.target.value)
  // const onCLickOpen = () => setOpen(!open)
  // const onClickClose = useCallback(() => setOpen(false), [setOpen])
  // const temp = useMemo(() => 1 + 3,[] )
  // console.log(temp)

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Router />

        {/* <InlineStyle />
        <CssModules />
        <StyledComponents />
        <Emotion />

        <div className={styles.container}>
          <input value={text} onChange={onChangeText}/>
          <br />
          <button onClick={onCLickOpen} className={styles.btn}>表示</button>
          <ChildArea open={open} onClickClose={onClickClose}/>
        </div> */}
      </div>
    </BrowserRouter>

  );
}

