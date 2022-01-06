import { useParams, useLocation } from 'react-router-dom'

export default function UrlParameter() {
    const { id } = useParams()
    const { search } = useLocation()
    const query = new URLSearchParams(search)
    return (
        <div>
            <h1>UrlParameter</h1>
            <p>パラメーターは {id}です</p>
            <p>クエリパラメーターは {query.get('name')}です</p>
        </div>
    )
}
