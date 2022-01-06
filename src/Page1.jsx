import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Page1</h1>
            <Link to='/page1/detailA'>DetailA</Link>
            <br />
            <Link to='/page1/detailB'>DetailB</Link>
        </div>
    )
}
