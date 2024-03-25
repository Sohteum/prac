// 3가지 hook관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. 서로다른 훅들의 순서가 엉망이 될 수 있기때문에...(?)
// 3. 나만의 훅을 직접 만들 수 있다.

import useInput from "../hooks/useInput.jsx";

const HookExam =()=>{

    const [input, onChange] = useInput();
    return(
        <div>
            <input value={input} onChange={onChange}/>{input}
        </div>
    )
}

export default HookExam;