import { DepositModal } from '../Modal/Modal';
import './portifolio.css';
const Portifolio = () => {
    return (
        <main className="container__port">
            <h1>Portifolio Overview</h1>
            <div>
                <DepositModal />
            </div>
        </main>
    )
}

export default Portifolio;