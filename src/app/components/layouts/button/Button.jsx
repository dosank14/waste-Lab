import Link from "next/link";
import './button_red.css';
import './button_white.css';
import './button_green.css';
import './button_blue.css';

const Button = () => {
    return (
        <div>
            <Link href={{ pathname: '/game', query: { type: 'japanese' } }}>
                <button className="button1" type="button">
                    中華
                </button>
            </Link>

            <Link href={{ pathname: '/game', query: { type: 'western' } }}>
                <button className="button2" type="button">
                    和食
                </button>
            </Link>

            <Link href={{ pathname: '/game', query: { type: 'chinese' } }}>
                <button className="button3" type="button">
                    洋食
                </button>
            </Link>

            <Link href={{ pathname: '/game', query: { type: 'random' } }}>
                <button className="button4" type="button">
                    ランダム
                </button>
            </Link>
        </div>
    );
};

export default Button;