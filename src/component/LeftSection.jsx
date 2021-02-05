import React from "react";

function LeftSection() {
    return (
        <div className="sidebar col-lg-3">

            <div className="widget">
                <h4 className="widget-title">Prescreption</h4>
                <hr />
                <div className="embed-responsive embed-responsive-4by3" id="emb">
                    <embed className="embed-responsive-item"
                        src="/images/patient.png">
                    </embed>
                </div>


                <div className="widget clearfix widget-categories">
                    <h4 className="widget-title">Items</h4>
                    <ul className="list list-arrow-icons">
                        <li> <a title="Beauty" href="#">Beauty </a> </li>
                        <li> <a title="Medicines" href="#">Medicines </a> </li>
                    </ul>
                </div>


            </div>
        </div>


    );
}

export default LeftSection;
