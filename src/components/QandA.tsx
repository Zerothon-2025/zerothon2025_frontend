import { useState } from "react";

interface QandAItemProps {
    question: string;
    answer: string;
}

function QandAItem({ question, answer }: QandAItemProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full max-w-[1000px] h-auto">
            <div 
                className="flex ml-1 mt-5 items-center cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xs">{isOpen ? "▼" : "▶"}</span>
                <div className="pl-1">
                    <span className="font-light text-light">{question}</span>
                </div>
            </div>
            
            {isOpen && (
                <span className="font-light text-light pl-5">{answer}</span>
            )}
        </div>
    );
}

function QandA() {
    const questions: QandAItemProps[] = [
        { question: "참가비는 얼마인가요?", answer: "참가비는 '무료'입니다." },
        { question: "참가 신청은 어떻게 하나요?", answer: "사이트 하단에 지원하기 버튼 눌러주세요!" },
        { question: "개인으로 참가할 수 있나요?", answer: "네, 개인의 경우 랜덤으로 팀이 매칭됩니다." },
        { question: "당일 늦참 가능한가요?", answer: "불가능합니다. 10시 전에 체크인이 모두 마감됩니다." },
        { question: "점심 저녁 다 제공되나요?", answer: "네, 제공됩니다." },
        { question: "개발이 처음인데 신청해도 될까요?", answer: "환영입니다! 제로톤은 처음 시작하는 분들에게도 경험을 제공하기 위한 행사입니다😊" },
        { question: "준비물이 따로 있을까요?", answer: "팀별 멀티탭, 개인 노트북, 추가 간식(물 제공, 정수기 O), 즐길 마음, 체력, 열정⚡" },
    ];

    return (
        <div className="w-full max-w-[1000px] h-auto mb-20">
            <span className="font-bold text-bold">🤔 자주 묻는 질문</span>
            {questions.map((item, index) => (
                <QandAItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
  }

  
  export default QandA;
  