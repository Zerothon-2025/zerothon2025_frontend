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
        { question: "팀으로 참가할 수 있나요?", answer: "네, 개인 또는 팀으로 참가할 수 있습니다." }
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
  