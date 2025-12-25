import { useState } from "react";
import InputSection from "../components/InputSection";
import SplitterOptions from "../components/SplitterOptions";
import ResultAsymmetric from "../components/ResultAsymmetric";
import ResultSymmetric from "../components/ResultSymmetric";
import { PLC_SYMMETRIC } from "../data/plcValues";
import { ASYMMETRIC_RATIOS } from "../data/asymmetricRatios";

export default function FiberCalculator() {
    const [fiber, setFiber] = useState(1);
    const [mode, setMode] = useState("plc");
    const [ratio, setRatio] = useState("2");

    const lossPerKm = 0.35;

    let result = null;

    if (mode === "plc") {
        const splitterLoss = PLC_SYMMETRIC[ratio];
        const total = fiber * lossPerKm + splitterLoss;
        result = <ResultSymmetric loss={total} />;
    } else {
        const item = ASYMMETRIC_RATIOS.find((x) => x.label === ratio);
        result = <ResultAsymmetric small={item.lossSmall} big={item.lossBig} />;
    }

    return (
        <div className="max-w-xl">
            <InputSection title="Panjang Fiber (km)" value={fiber} onChange={setFiber} />
            <SplitterOptions mode={mode} setMode={setMode} setRatio={setRatio} />
            {result}
        </div>
    );
}
