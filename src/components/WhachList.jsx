import react from "react";
import WhachListMini_item from "./WhachListMini_item";
import WhachList_item from "./WhachList_item";

const WhachList = function  () {

    return (
        <div className="WhachLists-wrp">
            <div className="WhachList">
                <h2 className="title">Двигаются</h2>
                <div className="WhachList-item-wrp">
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                    <WhachList_item/>
                </div>
            </div>
            <div className="WhachList-mini">
                <h2 className="title">24 час.</h2>
                <div className="WhachList-mini-item-wrp">
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                    <WhachListMini_item/>
                </div>
            </div>
        </div>
    )
}

export default WhachList;