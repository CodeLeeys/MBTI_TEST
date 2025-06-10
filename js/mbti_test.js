// 퀴즈 데이터 이미지와 성향 구별 퀴즈와 선택지
const quizData = [
    {
        img: "../image/I vs E_1.png",
        question: " 쉬는날 침대에서 눈을 떴을때, 당신은? ",
        options: [
            { text: " A. 여러 사람과 약속을 잡고 외출하거나 파티에 참석해서 활기를 얻는다. ", value: "E" },
            { text: " B. 집에서 편히 쉬거나 조용한 카페에서 혼자 시간을 보내는 것이 좋다. ", value: "I" }
        ]
    },
    {
        img: "../image/I vs E_2.png",
        question: "사람이 많은 모임에 참석해야 할 때, 당신은?",
        options: [
            { text: " A. 끝까지 남아서 사람들과 대화하며 분위기를 즐기는 편이다. ", value: "E" },
            { text: " B. 가능한 한 일찍 자리를 뜨고 혼자 있는 시간을 가지는 편이다. ", value: "I" }
        ]
    },
    {
        img: "../image/I vs E_3.png",
        question: "하루 일과가 끝난 후 집에 들어왔을때, 당신은?",
        options: [
            { text: "A. 아직도 에너지가 남아 더 활동하고 싶다.", value: "E" },
            { text: "B. 온종일 사람들과 어울리느라 매우 지치고 휴식이 필요하다.", value: "I" }
        ]
    },
    {
        img: "../image/I vs E_4.png",
        question: "낯선 환경에서 새로운 사람을 만날때, 당신은?",
        options: [
            { text: "A. 그렇다. 자연스럽게 대화를 시작한다.", value: "E" },
            { text: "B. 아니다. 상대방이 먼저 말을 걸어주길 기다린다.", value: "I" }
        ]
    },
    {
        img: "../image/I vs E_5.png", 
        question: "새로운 사람들과 모임에서 대화할 때, 당신은?",
        options: [
            { text: "A. 적극적으로 대화를 주도하며 에너지를 얻는다.", value: "E" },
            { text: "B. 대화에 참여하긴 하지만 에너지가 빨리 소모된다.", value: "I" }
            ]
        },
    {
        img: "../image/N vs S_1.png",
        question: "새로운 정보를 접할 때, 당신은?",
        options: [
            { text: "A. 구체적인 사실과 세부사항에 더 집중한다.", value: "S" },
            { text: "B. 전체적인 의미와 가능성에 더 관심이 간다.", value: "N" }
        ]
    },
    {
        img: "../image/N vs S_2.png",
        question: "문제를 해결할 때, 당신은?",
        options: [
            { text: "A. 실제 경험과 사례를 중시하며 검증된 방법을 따른다.", value: "S" },
            { text: "B. 창의적인 아이디어와 새로운 접근법을 먼저 고민한다.", value: "N" }
        ]
    },
    {
        img: "../image/N vs S_3.png",
        question: "친구와 대화할 때, 당신은?",
        options: [
            { text: "A. 현재의 현실적인 상황과 구체적인 사실에 집중한다.", value: "S" },
            { text: "B. 미래의 가능성이나 추상적인 주제를 더 즐긴다.", value: "N" }
        ]
    },
    {
        img: "../image/N vs S_4.png",
        question: "계획을 세울 때, 당신은?",
        options: [
            { text: "A. 구체적이고 실용적인 단계를 먼저 정리한다.", value: "S" },
            { text: "B. 큰 그림과 장기적인 목표를 먼저 구상한다.", value: "N" }
        ]
    },
    {
        img: "../image/N vs S_5.png",
        question: "새로운 환경에 적응할 때, 당신은?",
        options: [
            { text: "A. 익숙한 방법을 따르는 것이 더 편하다.", value: "S" },
            { text: "B. 새로운 방법을 시도하는 것이 더 흥미롭다.", value: "N" }
        ]
    },
    {
        img: "../image/T vs F_1.png",
        question: "친구가 회사에서 혼이 났다고 하소연할 때, 당신은?",
        options: [
            { text: "A. 상황을 논리적으로 분석해서 친구에게 현실적인 조언을 해준다.", value: "T" },
            { text: "B. 친구의 감정에 공감하고 먼저 위로와 공감을 건넨다.", value: "F" }
        ]
    },
    {
        img: "../image/T vs F_2.png",
        question: "팀 프로젝트에서 의견 충돌이 생겼을 때, 당신은?",
        options: [
            { text: "A. 가장 합리적이고 효율적인 의견에 힘을 보탠다.", value: "T" },
            { text: "B. 모든 팀원이 상처받지 않고 화합할 수 있는 방법을 고민한다.", value: "F" }
        ]
    },
    {   
        img: "../image/T vs F_3.png",
        question: "누군가 실수를 했을 때, 당신은?",
        options: [
            { text: "A. 실수의 원인과 해결 방법을 중심으로 이야기한다.", value: "T" },
            { text: "B. 먼저 그 사람의 기분이나 상황을 이해하려고 한다.", value: "F" }
        ]
    },
    {
        img: "../image/T vs F_4.png",
        question: "중요한 결정을 앞두고 있을 때, 당신은?",
        options: [
            { text: "A. 논리적 근거와 데이터, 객관적 사실을 바탕으로 결정한다.", value: "T" },
            { text: "B. 자신의 가치관이나 주변 사람들의 감정을 고려해 결정한다.", value: "F" }
        ]
    },
    {
        img: "../image/T vs F_5.png",
        question: "친구가 약속을 잊어버려 실망했을 때, 당신은?",
        options: [
            { text: "A. 왜 약속을 잊었는지 이유를 묻고 다음엔 어떻게 할지 논의한다.", value: "T" },
            { text: "B. 친구가 미안해하는 마음을 이해하고 감정을 먼저 받아준다.", value: "F" }
        ]
    },
    {
        img: "../image/P vs J_1.png",
        question: "여행을 준비할 때, 당신은?",
        options: [
            { text: "A. 미리 일정표를 꼼꼼하게 짜고 숙소와 교통편을 모두 예약해둔다.", value: "J" },
            { text: "B. 대략적인 계획만 세우고 현지에서 즉흥적으로 움직이는 걸 즐긴다.", value: "P" }
        ]
    },
    {
        img: "../image/P vs J_2.png",
        question: "주말에 할 일이 생겼을 때, 당신은?",
        options: [
            { text: "A. 우선순위를 정해서 시간 계획을 세우고 차근차근 처리한다.", value: "J" },
            { text: "B. 그때그때 기분에 따라 하고 싶은 일부터 시작한다.", value: "P" }
        ]
    },
    {
        img: "../image/P vs J_3.png",
        question: "친구와 약속을 잡을 때, 당신의 스타일은?",
        options: [
            { text: "A. 날짜, 시간, 장소를 미리 정하고 확정된 계획을 선호한다.", value: "J" },
            { text: "B. 그날 상황에 따라 유동적으로 약속을 잡는다.", value: "P" }
        ]
    },
    {
        img: "../image/P vs J_4.png",
        question: "새로운 프로젝트를 시작할 때, 당신은?",
        options: [
            { text: "A. 전체 일정과 마감일, 세부 단계까지 미리 계획을 세운다.", value: "J" },
            { text: "B. 일단 시작하고 진행하면서 필요한 부분을 그때그때 정한다.", value: "P" }
    ]
    },
    {
        img: "../image/P vs J_5.png",
        question: "예상치 못한 일이 생겼을 때, 당신은?",
        options: [
            { text: "A. 계획이 틀어지면 당황하거나 스트레스를 받는다.", value: "J" },
            { text: "B. 즉흥적으로 대처하며 변화 자체를 즐기는 편이다.", value: "P" }
        ]
    }
];

// 상태 변수
let currentQuestion = 0; //현재 몇번째 질문인지 카운팅
let Useranswer= []; // quizData에서 value값 저장

// 3. HTML 요소 가져오기
const imgMBTI = document.getElementById("quiz-img");
const questionMBTI = document.getElementById("quiz-question");
const formMBTI = document.getElementById("quiz-form");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 4. 문제 표시 함수
function renderQuiz() {
    const q = quizData[currentQuestion];
    imgMBTI.src = q.img; // 이미지 바꾸기
    questionMBTI.innerHTML = `<p>${q.question}</p>`; // 질문 바꾸기
    formMBTI.innerHTML = ""; // 선택지 비우기
    // 줄바꿈을 넣고 싶은 인덱스 배열
    const brIndexList = [1, 2, 3, 4, 11, 10, 14];
    let questionText = q.question;
    if (brIndexList.includes(currentQuestion)){
        questionText = questionText.replace("당신은?", "<br>당신은?");
    }
    questionMBTI.innerHTML = `<p>${questionText}</p>`;
    q.options.forEach((opt,idx) => {
    // 고유 id 생성
    const inputId = `answer${currentQuestion},${idx}`;
    // input 생성
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = opt.value;
    input.id = inputId;
    if (Useranswer[currentQuestion] === opt.value) input.checked = true;
    // label 생성
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = opt.text;
    // 형제로 추가
    formMBTI.appendChild(input);
    formMBTI.appendChild(label);
    });// => 화살표함수 opt 지역변수에 다음 코드 값을 return
    prevBtn.disabled = currentQuestion === 0;
    // 답을 골라야 next가 활성화되게 하려면 아래 코드 추가
    nextBtn.disabled = !Useranswer[currentQuestion];
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? "Finish" : "Next";
}
// 선택지 클릭시 답 저장
formMBTI.addEventListener("change", (e) => {
    if (e.target.name === "answer") {
        Useranswer[currentQuestion] = e.target.value;
        nextBtn.disabled = false;
         // 이때만 상태 저장
        localStorage.setItem('mbtiQuizState', JSON.stringify({currentQuestion,Useranswer}));
    }
});

// result에서 퀴즈 페이지로 돌아오기를 선택할때 불러오기
const savedState = localStorage.getItem('mbtiQuizState');
if (savedState) {
    const quizState = JSON.parse(savedState);
    currentQuestion = quizState.currentQuestion; // 인덱스 사용
    Useranswer = quizState.Useranswer;
    // currentQuestion 인덱스를 활용해 해당 문제로 이동
    renderQuiz();
} else {
// 저장된 상태가 없으면 첫 문제부터 시작
    currentQuestion = 0;
    Useranswer = [];
    renderQuiz();
}

// mbti 결과값 출력 함수
function calculateMBTI(answer) {
    // 각 지표별 문제 인덱스 (0~4: E/I, 5~9: S/N, 10~14: T/F, 15~19: J/P)
    const indexMap = [
        { A: 'E', B: 'I', range: [0, 1, 2, 3, 4] },
        { A: 'S', B: 'N', range: [5, 6, 7, 8, 9] },
        { A: 'T', B: 'F', range: [10, 11, 12, 13, 14] },
        { A: 'J', B: 'P', range: [15, 16, 17, 18, 19] }
    ];
    let result = '';
    indexMap.forEach(item => {
        let A_Score = 0;
        let B_Score = 0;
        item.range.forEach(i => {
            if (answer[i] === item.A) A_Score = A_Score+1;
            else if (answer[i] === item.B) B_Score = B_Score+1;
        });
        //A와 B중 더 많은 점수를 받은쪽 성향 결정 
        if (A_Score > B_Score) {
            result += item.A;
        } else {
            result += item.B;
        }
    });
    return result;
}

// 버튼 이벤트
prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuiz();
    }
});
nextBtn.addEventListener("click", () => {
    if (!Useranswer[currentQuestion]) return;
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuiz();
    } else {
        // 퀴즈가 끝났을 때만 결과 계산 및 저장, 페이지 이동
        // mbti 결과값 로컬스토리지에 저장
        const mbtiType = calculateMBTI(Useranswer);
        localStorage.setItem("mbtiResult", mbtiType);
        // 결과 페이지로 이동
        window.location.href = "../html파일/mbti_result_js.html";
    }
    }
);

//navbar about mbti는 미구현 - 업데이트 예정임을 알려주기
document.getElementById('update_yet').addEventListener('click', function(event) {
    event.preventDefault(); // 링크 이동 방지
    alert('About MBTI 는 업데이트 예정입니다! 추후에 기대해주세요. :)');
}); 

// 퀴즈 도중 result를 누르면 실패 페이지로 이동
document.querySelector('.nav-menu li:nth-child(2) a').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 이동 막기
    const mbtiResult = localStorage.getItem('mbtiResult');
    if (mbtiResult) {
        window.location.href = '../html파일/mbti_result_js.html';
    } else {
        window.location.href = '../html파일/mbti_result_fail_js.html';
    }
});

window.onload = renderQuiz;