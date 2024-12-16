import './title.css';
import Back from './../back/Back';

const Title = () => {
    return (
        <div className="relative flex justify-center h-screen ">
            <Back />
            <h1 className="relative top-[4vh] sm:top-[6vh] md:top-[8vh] lg:top-[10vh] xl:top-[12vh] font-inter italic font-black text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] leading-[100px] text-white shadow-text">
                ランチランナーズ
            </h1>
        </div>
    )
};

export default Title;