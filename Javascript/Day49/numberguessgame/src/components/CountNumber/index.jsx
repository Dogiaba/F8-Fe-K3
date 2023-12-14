import { useState } from "react";
import "../CountNumber/RangeNumber.css";
function RangeNumber({min, max}) {
  // const [minVal, setMinVal] = useState(min);
  // const [ranges, setRanges] = useState(0);
  // const minValRef = useRef(null);
  // const maxValRef = useRef(null);
  // const range = useRef(null);

  // const getPercent = useCallback(
  //   (value) => Math.round(((value - min) / (max - min)) * 100),
  //   [min, max]
  // );

  // useEffect(() => {
  //   if (minValRef.current) {
  //     const minPercent = getPercent(+minValRef.current.value);
  //     const maxPercent = getPercent(maxVal);

  //     if (range.current) {
  //       range.current.style.width = `${maxPercent - minPercent}%`;
  //     }
  //   }
  // }, [maxVal, getPercent]);

  //   // Get min and max values when their state changes
  //   useEffect(() => {
  //     onChange({ min: minVal, max: maxVal });
  //   }, [minVal, maxVal, onChange]);
  return (
    <div className="">
      <hr className="timeLine"></hr>
      <div className="content">
        <h2 className="title title_top">
          Chào mừng bạn đến với trò chơi đoán số!
        </h2>
        <h2 className="title title_mi">
          Còn <span>9</span>/<span>9</span> lần
        </h2>
        <h2 className="title title_bottom">
          Bạn cần tìm Kiếm một số từ 1 đến <span>6</span>
        </h2>
        <div className="range">
          <div className="progress-bar">
            <span className="present-time"></span>
            <div className="progress">
              <span></span>
            </div>
          </div>
          100 512 1024 1536 2048
        </div>
        <div className="from_input">
          <label>Hãy thử nhập một số</label>
          <input type="text" placeholder="Thử một số"></input>
        </div>
      </div>
    </div>
  );
}

export default RangeNumber;
