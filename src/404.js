import {Link} from "react-router-dom";

const Four0Four = () => {
    return ( 
        <div className="four0four">
            <h3>404!</h3>
            <p>This page is not exist</p>
            <Link to='/'>Go Home...</Link>
        </div>
    );
}
 
export default Four0Four;