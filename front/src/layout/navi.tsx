import { Link } from 'react-router-dom';
import '../style/layout.css';

function Navi() {
  return (
    <div id='navi'>
      <Link to='/'>simpleBBS</Link>
      <div>로그인/회원가입 버튼</div>
    </div>
  );
}
export default Navi;
