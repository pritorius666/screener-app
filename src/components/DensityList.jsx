import react from "react";
import DensityList_item from "./DensityList_item";

const DensityList = function  () {

    return (
        <div className="DensityList">
            <h2 className="title">Плотности</h2>
            <div className="DensityList-item-wrp">
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
                <DensityList_item/>
            </div>
        </div>
    )
}

export default DensityList;