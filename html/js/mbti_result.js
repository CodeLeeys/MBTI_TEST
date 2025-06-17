const resultData = {
    INTJ: {
    img: "image/INTJ.전략가.png",
    info: "전략가",
    desc: "모든 일에 대해 계획을 세우는 상상력이 풍부한 전략가입니다."
    },
    INTP: {
    img: "image/INTP.논리술사.png",
    info: "논리술사",
    desc: "지식을 끝없이 갈망하는 혁신적인 발명가입니다."
    },
    ENTJ: {
    img: "image/ENTJ.통솔자.png",
    info: "통솔자",
    desc: "항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다."
    },
    ENTP: {
    img: "image/ENTP.변론가.png",
    info: "변론가",
    desc: "지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다."
    },
    INFJ: {
    img: "image/INFJ.옹호자.png",
    info: "옹호자",
    desc: "차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람들에게 의욕을 불어넣는 이상주의자입니다."
    },
    INFP: {
    img: "image/INFP.중재자.png",
    info: "중재자",
    desc: "항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다."
    },
    ENFJ: {
    img: "image/ENFJ.선도자.png",
    info: "선도자",
    desc: "청중을 사로잡고 의욕을 불어넣는 카리스마가 넘치는 지도자입니다."
    },
    ENFP: {
    img: "image/ENFP.활동가.png",
    info: "활동가", 
    desc: "열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다."
    },
    ISTJ: {
    img: "image/ISTJ.현실주의자.png",
    info: "현실주의자",
    desc: "사실을 중시하고 실용적인 성향을 지닌 믿음직한 현실주의자입니다."
    },
    ISFJ: {
    img: "image/ISFJ.수호자.png",
    info: "수호자",
    desc: "주변 사람들은 보호할 준비가 되어 있는 헌신적이고 따뜻한 보호자입니다."
    },
    ESTJ: {
    img: "image/ESTJ.경영자.png",
    info: "경영자", 
    desc: "사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다."
    },
    ESFJ: {
    img: "image/ESFJ.집정관.png",
    info: "집정관",
    desc: "배려심이 넘치고 항상 다른 사람들을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성이 뛰어난 성격입니다."
    },
    ISTP: {
    img: "image/ISTP.장인.png",
    info: "장인",
    desc: "대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다."
    },
    ISFP: {
    img: "image/ISFP.모험가.png",
    info: "모험가", 
    desc: "항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다."
    },
    ESTP: {
    img: "image/ESTP.사업가.png",
    info: "사업가",
    desc: "영리하고 에너지 넘치며 관찰력이 뛰어난 성격으로, 스릴 넘치는 삶을 진정으로 즐기는 성격입니다."
    },
    ESFP: {
    img: "image/ESFP.연예인.png",
    info: "연예인",
    desc: "즉흥적이고 넘치는 에너지와 열정으로 주변 사람들을 즐겁게 하는 성격입니다."
    },
};

//mbti_test.js.html에서 저장된 로컬스토리지 불러오기
window.onload = function() {
    // localStorage에서 MBTI 결과 읽기
    const mbtiType = localStorage.getItem("mbtiResult");
    // 결과 데이터에서 이미지와 설명 찾기
    const resultInfo = resultData[mbtiType];
    // 결과값이 없거나 데이터가 없으면 실패 페이지로 이동
    if (!mbtiType || !resultInfo) {
        window.location.replace("mbti_result_fail_js.html");
        return;
    }
    // 이미지와 설명 표시
    document.getElementById("result-img").src = resultInfo.img;
    document.getElementById("result-detail").innerHTML = `
        <h1>${mbtiType}</h1><h3>${resultInfo.info}</h3>
        <p>${resultInfo.desc}</p>
    `;
};

//navbar about mbti는 미구현 - 업데이트 예정임을 알려주기
document.getElementById('update_yet').addEventListener('click', (e) => {
    e.preventDefault(); // 링크 이동 방지
    alert('About MBTI 는 업데이트 예정입니다! 추후에 기대해주세요. :)');
}); 