import React from 'react'
import './HotelSkeleton.scss'
import SkeletonElement from './SkeletonElement/SkeletonElement'
import Shimmer from './Shimmer/Shimmer'

const HotelSceleton = ({theme}) => {
    const themeClass = theme || 'light'
    return (
        <div className={`skeletonWrapper ${themeClass} componentWrapper`}>
            <div className="skeletonHotel">
                <SkeletonElement type="image"/>
                <div className="skeletonText">
                    <SkeletonElement type="title"/>
                    <SkeletonElement type="thumbnail"/>
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}

export default HotelSceleton;