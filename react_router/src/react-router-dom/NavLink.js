
import {Link} from './'
function NavLink(props){
return <Link to={props.to}>{props.children}</Link>
}
export default NavLink;