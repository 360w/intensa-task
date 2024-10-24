import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import MainBP from '..//shared/assets/icons/mainBP.svg';
import MainLogo from '..//shared/assets/icons/mainLogo.svg';
import OpenArrow from '..//shared/assets/icons/openArrow.svg';
import MacaroniPlanet from '..//shared/assets/icons/macaroniPlanet.svg';
import Heart from '..//shared/assets/icons/heart.svg';
import Award from '..//shared/assets/icons/award.svg';





const App: FC = () => {

    return (
        <div className={classNames('app', {}, ['cls1', 'cls2'])}>
            <div className='app__topBlock'>
                <div className='topBlock__content'>
                    <MainLogo className='content__mainLogo' />
                    <div className='content__openBP'>
                        <p className='openBP__text'>Открой меня</p>
                        <OpenArrow className='openBP__arrow' />
                    </div>
                    <MainBP className='content__mainBP' />
                </div>
            </div>
            <div className='app__sliderBlock'>
                <p style={{ color: 'rgba(251, 217, 39, 1)' }} className='sliderBlock__title'>
                    <span style={{ color: 'rgba(223, 35, 29, 1)' }}>ИСТОРИЯ</span> РОЛЛТОН</p>
            </div>
            <div className='app__macaroniPlanet'>
                <div className='macaroniPlanet__leftsideText'>
                    <span className='leftsideText__1'>ТЕПЛЫЕ МОМЕНТЫ<br />С РОЛЛТОН</span><br />
                    <span className='leftsideText__2'>ПРОДАЛИ<br />2 МЛН КМ<br />ЛАПШИ</span><br />
                    <span className='leftsideText__3'>что равно 50-ти обхватам<br />Земли</span>
                </div>
                <MacaroniPlanet className='macaroniPlanet__image' />
            </div>
            <div className='app__childs'>
                <Heart className='childs__image' />
                <div className='childs__rightsideText'>
                    <span className='rightsideText__1'>НА ПОМОЩЬ<br />ДЕТКАМ</span><br />
                    <span className='rightsideText__2'>пожертвования детским домам</span>
                </div>
            </div>
            <div className='app__award'>
                <div className='award__leftsideText'>
                    <span className='leftsideText__1'>ПОЛУЧИЛИ<br />20 НАГРАД</span><br />
                    <span className='leftsideText__2'>в различных номинациях</span>
                </div>
                <Award className='award__image' />
            </div>
            <footer>
                <p className='footer__leftside'>© 2023, Mareven. Все права защищены</p>
                <p className='footer__rightside'>Сделано дома :з</p>
            </footer>
        </div>
    );
};

export default App;