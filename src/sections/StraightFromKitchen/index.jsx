import React from 'react'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import StraightFromKitchenCard from './StraightFromKitchenCard';
// images
import image1 from '../../assets/images/StraightFromKitchen/card1.png';
import image2 from '../../assets/images/StraightFromKitchen/card2.png';
import image3 from '../../assets/images/StraightFromKitchen/card3.png';
import image4 from '../../assets/images/StraightFromKitchen/card4.png';
import image5 from '../../assets/images/StraightFromKitchen/card5.png';
import image6 from '../../assets/images/StraightFromKitchen/card6.png';
import image7 from '../../assets/images/StraightFromKitchen/card7.png';
import image8 from '../../assets/images/StraightFromKitchen/card8.png';
import image9 from '../../assets/images/StraightFromKitchen/card9.png';
import image10 from '../../assets/images/StraightFromKitchen/card10.png';
import image11 from '../../assets/images/StraightFromKitchen/card11.png';
import image12 from '../../assets/images/StraightFromKitchen/card12.png';

import "./style.css"
const StraightFromKitchen = () => {
    return (
        <div className='straight-from-kitchen'>
            <SectionTitle
                title="Straight From Kitchen"
                subTitle="Our Menu"
                isCentered
            />

            <Container>
                <div className="straight-from-kitchen__content">
                    <StraightFromKitchenCard
                        img={image1}
                        text1={"Lorem ipsum dolor sit amet"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 222"
                    />

                    <StraightFromKitchenCard
                        img={image2}
                        text1={"Phasellus convallis maximus"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 148"
                    />

                    <StraightFromKitchenCard
                        img={image3}
                        text1={"Vivamus sodales augue vita"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 590"
                    />

                    <StraightFromKitchenCard
                        img={image4}
                        text1={"Vestibulum est turpis"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 135"
                    />

                    <StraightFromKitchenCard
                        img={image5}
                        text1={"Pellentesque semper semper"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 130"
                    />

                    <StraightFromKitchenCard
                        img={image6}
                        text1={"Vivamus sodales augue vita"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 590"
                    />

                    <StraightFromKitchenCard
                        img={image7}
                        text1={"Vestibulum est turpis"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 135"
                    />

                    <StraightFromKitchenCard
                        img={image8}
                        text1={"Lorem ipsum dolor sit amet"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 222"
                    />

                    <StraightFromKitchenCard
                        img={image9}
                        text1={"Phasellus convallis maximus"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 148"
                    />

                    <StraightFromKitchenCard
                        img={image10}
                        text1={"Nullam elementum magna"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 200"
                    />

                    <StraightFromKitchenCard
                        img={image11}
                        text1={"Nullam elementum magna"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 200"
                    />

                    <StraightFromKitchenCard
                        img={image12}
                        text1={"Pellentesque semper semper"}
                        text2={"Lorem ipsum dolor sit amet"}
                        num="Rs 130"
                    />
                </div>
            </Container>
        </div>
    )
}

export default StraightFromKitchen