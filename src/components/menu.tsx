import { Link } from 'react-router'

export const Menu = () => {
  return (
    <div className="w-1/6 h-full">
        <aside className="bg-gray-300 p-3 h-full">
            <h2 className="text-center font-bold">Navigation</h2>
            <ul className="list-group">
                <li className="list-group-item hover:font-bold"><Link to="/">Home</Link></li>
                <li className="list-group-item hover:font-bold"><Link to="/product/pending">Pending</Link></li>
                <li className="list-group-item hover:font-bold"><Link to="/product/review">Review</Link></li>
            </ul>
        </aside>
    </div>
  )
}
