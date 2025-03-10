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
        { question: "참가 신청은 어떻게 하나요?", answer: "공식 웹사이트에서 신청할 수 있습니다." },
        { question: "개인으로 참가할 수 있나요?", answer: "네, 개인의 경우 랜덤으로 팀이 매칭됩니다." },
        { question: "당일 늦참 가능한가요?", answer: "불가능합니다. 10시 전에 체크인이 모두 마감됩니다." },
        { question: "점심 저녁 다 제공되나요?", answer: "네, 제공됩니다." },
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
  