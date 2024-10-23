import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import MainBP from '..//shared/assets/icons/mainBP.svg';
import MainLogo from '..//shared/assets/icons/mainLogo.svg';
import OpenArrow from '..//shared/assets/icons/openArrow.svg';





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
            <img src='..//shared/assets/icons/mainLogo.png' alt='' />
            <img src='..//shared/assets/icons/mainBP.png' alt='' />
            <div className='app__sliderBlock'>2</div>
            <div className='app__3rdBlock'>3</div>
            <div className='app__4thBlock'>4</div>
            <div className='app__5thBlock'>5</div>
            <footer>6</footer>
        </div>
    );
};

export default App;