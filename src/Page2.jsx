import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Page2</h1>
            <Link to="/page2/999">URL Parameter</Link>
            <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
        </div>
    )
}
