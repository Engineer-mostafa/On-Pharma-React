import React from "react";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import MiddleSection from "./MiddleSection";

function App() {
    return (
                <div className="container" style={{ transform: "none"  }}>
                    <div className="row" style={{ transform: "none"   }}>
                        <LeftSection />
                        <MiddleSection />
                        <RightSection />
                    </div>
                </div>

    );
}

export default App;
