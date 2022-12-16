import React from 'react'
import GridWithThreeColumns from '../../components/GridWithThreeColumns'
import Number from './Number'

// images
import dish from '../../assets/images/Numbers/dish.png'
import chef from '../../assets/images/Numbers/chef.png'
import team from '../../assets/images/Numbers/team.png'
import Container from '../../components/Container'

import './style.css'

const Numbers = () => {
    return (
        <div className="numbers">
            <Container>
                <GridWithThreeColumns>
                    <Number
                        img={dish}
                        number={"250+"}
                        title="Delicacy"
                    />
                    <Number
                        img={chef}
                        number={"10+"}
                        title="renowed chefs"
                    />
                    <Number
                        img={team}
                        number={"30+"}
                        title="Members"
                    />
                </GridWithThreeColumns>
            </Container>
        </div>
    )
}

export default Numbers