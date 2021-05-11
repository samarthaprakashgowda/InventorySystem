import {Link} from 'react-router-dom'

const NotFound = () => {
    return (  
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That Page cannot be found</p>
            <Link to = '/home'>Back to the homepage</Link>
        </div>
    );
}
 
export default NotFound;
<div className="notFound">
    <h2>Sorry</h2>
</div>