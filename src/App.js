import { useState, useCallback, useMemo } from "react"
import { ChildArea } from "./ChildArea";
import Emotion from './components/Emotion'
import CssModules from "./components/CssModules";
import InlineStyle from "./components/InlineStyle";
import StyledComponents from "./components/StyledComponents";
import styles from "./styles.module.css"
import Home from "./Home"
import Page1 from './Page1'
import Page2 from './Page2'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Page1DetailA from "./Page1DetailA";
import Page1DetailB from "./Page1DetailB";

export default function App() {
  console.log('App');
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChangeText = (e) => setText(e.target.value)
  const onCLickOpen = () => setOpen(!open)
  const onClickClose = useCallback(() => setOpen(false), [setOpen])
  const temp = useMemo(() => 1 + 3,[] )
  console.log(temp)

  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <br />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/page1'
          render={({ match: { url }}) => (
          <Switch>
            <Route exact path={ url }>
              <Page1 />
            </Route>
            <Route path={`${url}/page1/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/page1/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )} />
        <Route path='/page2'>
          <Page2 />
        </Route>
      </Switch>

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

