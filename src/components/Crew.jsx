import './statichtml/crew.css';

const Crew = () => {


    return (
        <div>
            <div className="loading">
                <main>
                    <div className="frame"></div>
                    <div className="grid" data-effect="hover-1">
                        <h2 className="grid__title">
                            Executives <br />
                        </h2>
                        <div className="card">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/3.jpg)"
                                }}
                            />
                            <div className="card__box card__box--c">
                                <span className="card__box-number">02</span>
                                <span className="card__box-tags">#techno #rave</span>
                            </div>
                            <div className="card__box card__box--d">
                                <span className="card__box-category">Pulse Club</span>
                            </div>
                        </div>
                        <div className="card card--empty" />
                        <div className="card card--alt">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/22.jpg)"
                                }}
                            />
                            <div className="card__box card__box--a">
                                <span className="card__box-number">07</span>
                                <span className="card__box-tags">#house #deephouse</span>
                            </div>
                            <div className="card__box card__box--d">
                                <span className="card__box-category">Stellar Lounge</span>
                            </div>
                        </div>
                        <div className="card">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/2.jpg)"
                                }}
                            />
                            <div className="card__box card__box--b">
                                <span className="card__box-number">09</span>
                                <span className="card__box-tags">#dubstep #bass</span>
                            </div>
                            <div className="card__box card__box--c">
                                <span className="card__box-category">Bass Arena</span>
                            </div>
                        </div>
                        <div className="card card--empty" />
                        <div className="card card--alt">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/21.jpg)"
                                }}
                            />
                            <div className="card__box card__box--b">
                                <span className="card__box-number">13</span>
                                <span className="card__box-tags">#trance #progressive</span>
                            </div>
                            <div className="card__box card__box--c">
                                <span className="card__box-category">Euphoria Hall</span>
                            </div>
                        </div>
                        <div className="card card--alt">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/17.jpg)"
                                }}
                            />
                            <div className="card__box card__box--b">
                                <span className="card__box-number">17</span>
                                <span className="card__box-tags">#drumandbass #jungle</span>
                            </div>
                            <div className="card__box card__box--d">
                                <span className="card__box-category">Groove Hive</span>
                            </div>
                        </div>
                        <div className="card">
                            <div
                                className="card__img"
                                style={{
                                    backgroundImage: "url(src/components/statichtml/img/20.jpg)"
                                }}
                            />
                            <div className="card__box card__box--c">
                                <span className="card__box-number">19</span>
                                <span className="card__box-tags">#ambient #chillout</span>
                            </div>
                            <div className="card__box card__box--d">
                                <span className="card__box-category">Tranquil Gardens</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    );
};

export default Crew;