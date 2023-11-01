import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://m.media-amazon.com/images/I/61j99uUfXNL._AC_UF894,1000_QL80_.jpg'
                    title='SmartPhones'
                    comment=''
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://rukminim2.flixcart.com/image/850/1000/l4ei1e80/smartwatch/9/0/q/-original-imagfarzawzpczcz.jpeg?q=90'
                    title='SmartWatches'
                    comment=''
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection