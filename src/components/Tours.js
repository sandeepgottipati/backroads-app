import Title from './Title'
import { tourData } from '../data'
const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title={'Featured'} subTitle={'Tours'}></Title>

            <div className="section-center featured-center">
                {
                    tourData.map((item) => {
                        return (
                            <article className="tour-card" key={item.id}>
                                <div className="tour-img-container">
                                    <img src={item.imgSrc} className="tour-img" alt="" />
                                    <p className="tour-date">{item.date}</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <p>
                                        {item.text}
                                    </p>
                                    <div className="tour-footer">
                                        <p>
                                            <span><i className={item.icon}></i></span> china
                                        </p>
                                        <p>{item.days}</p>
                                        <p>{item.amount}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }



            </div>
        </section>

    )
}
export default Tours