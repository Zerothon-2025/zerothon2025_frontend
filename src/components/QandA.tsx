import { useState, useEffect } from "react";

interface QandAItemProps {
    question: string;
    answer: string;
}

function QandAItem({ question, answer }: QandAItemProps) {


    return (
        <div className="w-full mt-5">
                <div className="flex items-center">
                    <img src="/icons/qicon.png" className="w-5 h-5"/>
                    <span className="font-light text-light ml-1">{question}</span>
                </div>
           
            <div className="flex mt-1">
                <img src="/icons/aicon.png" className="w-5 h-5"/>
                <span className="font-light text-light ml-1">{answer}</span>
            </div>
            
        </div>
    );
}

function QandA() {
    const questions: QandAItemProps[] = [
        { question: "참가비는 얼마인가요?", answer: "참가비는 '무료'입니다." },
        { question: "참가 신청은 어떻게 하나요?", answer: "사이트 하단에 지원하기 버튼 눌러주세요!" },
        { question: "개인으로 참가할 수 있나요?", answer: "네, 개인의 경우 포지션, 프로젝트 경험 기반으로 팀이 매칭됩니다. 시작 4일 전 팀 빌딩 결과를 전송해드릴 예정입니다." },
        { question: "당일 늦참 가능한가요?", answer: "불가능합니다. 10시 전에 체크인이 모두 마감됩니다." },
        { question: "점심 저녁 다 제공되나요?", answer: "네, 제공됩니다." },
        { question: "주제는 언제 어디서 공개되나요?", answer: "해당 공식 홈페이지에서 행사 시작 100시간 전 공개됩니다." },
        { question: "휴학생도 참여가능한가요? ", answer: "네, 제로톤은 휴학생, 졸업생, 타대생 모든 제한없이 개발에 관심있는 누구나 참여 가능합니다!" },
        { question: "개발이 처음인데 신청해도 될까요?", answer: "환영입니다! 제로톤은 처음 시작하는 분들에게도 경험을 제공하기 위한 행사입니다😊" },
        { question: "준비물이 따로 있을까요?", answer: "팀별 멀티탭, 개인 노트북, 추가 간식(물 제공, 정수기 O), 즐길 마음, 체력, 열정⚡" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.ceil(questions.length / 3);

    return (
        <div className="relative w-full max-w-[1000px] overflow-hidden mx-auto mb-20">
            <span className="font-bold text-bold">🤔 자주 묻는 질문</span>
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* 질문 3개씩 그룹화 */}
                {Array.from({ length: totalSlides }, (_, i) => (
                    <div key={i} className="min-w-full flex flex-col p-4">
                        {questions.slice(i * 3, i * 3 + 3).map((item, index) => (
                            <QandAItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                ))}
            </div>

            {/* 페이지 버튼 */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`mx-1 h-[6px] w-[30px] rounded-xl text-sm ${
                            currentIndex === i ? "bg-blue-500 text-white" : "bg-gray-600 text-black"
                        }`}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
  }

  
  export default QandA;
  