import { useContext } from 'react';
import { UserContext } from '../../../context/user';
import Header from '../Header/Header';
import './main.css'

const Main = () => {

    let logado = localStorage.getItem('user_login');

    const { login } = useContext(UserContext);
    return (
        <div>
            {!logado ? <main>
                <Header home={true} />
                <div>
                    <div className="animated-title">
                        <div className="text-top">
                            <div>
                                <span>The best</span>
                                <span>Forex Trading</span>
                            </div>
                        </div>
                        <div className="text-bottom">
                            <div>Application</div>
                        </div>
                    </div>
                </div>
            </main> : <main>
                <Header home={false} />
                <div>
                    <div className="animated-title">
                        <div className="text-top">
                            <div>
                                <span>The best</span>
                                <span>Forex Trading</span>
                            </div>
                        </div>
                        <div className="text-bottom">
                            <div>Application</div>
                        </div>
                    </div>
                </div>
            </main>}
        </div>
    );
}

export default Main;