const Loading = () => {
    return (<div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto' }} width="217px" height="217px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g>
                <circle cx={60} cy={50} r={4} fill="#e46b43">
                    <animate attributeName="cx" repeatCount="indefinite" dur="0.641025641025641s" values="95;35" keyTimes="0;1" begin="-1.0452000000000001s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.641025641025641s" values="0;1;1" keyTimes="0;0.2;1" begin="-1.0452000000000001s" />
                </circle>
                <circle cx={60} cy={50} r={4} fill="#e46b43">
                    <animate attributeName="cx" repeatCount="indefinite" dur="0.641025641025641s" values="95;35" keyTimes="0;1" begin="-0.5148s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.641025641025641s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.5148s" />
                </circle>
                <circle cx={60} cy={50} r={4} fill="#e46b43">
                    <animate attributeName="cx" repeatCount="indefinite" dur="0.641025641025641s" values="95;35" keyTimes="0;1" begin="0s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.641025641025641s" values="0;1;1" keyTimes="0;0.2;1" begin="0s" />
                </circle>
            </g><g transform="translate(-15 0)">
                <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#06628d" transform="rotate(90 50 50)" />
                <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#06628d">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.641025641025641s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" />
                </path>
                <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#06628d">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.641025641025641s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" />
                </path>
            </g>
        </svg>
    </div>);
}

export default Loading;