import './Header.css';

interface HeaderProps {
    titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    );
};

export default Header;
