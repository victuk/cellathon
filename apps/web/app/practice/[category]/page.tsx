"use client";

import { useState, useEffect } from "react";
import { Button } from "components/ui/button";
import {
  ArrowLeft,
  Check,
  X,
  ChevronRight,
  Trophy,
  Clock,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// QUESTIONS DATABASE
// ==========================================

const categoryQuestions = {
  celo: [
    {
      id: 1,
      question: "What is Celo's native stablecoin pegged to the US Dollar?",
      options: ["cUSD", "CELO", "cEUR", "cREAL"],
      correctAnswer: 0,
      explanation:
        "cUSD (Celo Dollar) is Celo's native stablecoin pegged to the US Dollar.",
    },
    {
      id: 2,
      question: "What consensus mechanism does Celo use?",
      options: [
        "Proof of Work",
        "Proof of Stake",
        "Proof of Authority",
        "Delegated Proof of Stake",
      ],
      correctAnswer: 1,
      explanation:
        "Celo uses Proof of Stake (PoS) consensus mechanism for network security and validation.",
    },
    {
      id: 3,
      question: "What is Celo's main focus?",
      options: [
        "Gaming",
        "Mobile-first DeFi",
        "NFT marketplace",
        "Social media",
      ],
      correctAnswer: 1,
      explanation:
        "Celo focuses on mobile-first decentralized finance (DeFi) to increase financial inclusion.",
    },
    {
      id: 4,
      question: "Which of these is NOT a Celo stablecoin?",
      options: ["cUSD", "cEUR", "cBTC", "cREAL"],
      correctAnswer: 2,
      explanation:
        "cBTC is not a Celo stablecoin. Celo has cUSD, cEUR, and cREAL.",
    },
    {
      id: 5,
      question: "What is the CELO token primarily used for?",
      options: [
        "Only payments",
        "Governance and staking",
        "NFT minting",
        "Game rewards",
      ],
      correctAnswer: 1,
      explanation:
        "CELO token is used for governance, staking, and securing the network.",
    },
  ],

  ethereum: [
    {
      id: 1,
      question: "What is the name of Ethereum's native cryptocurrency?",
      options: ["Bitcoin", "Ether (ETH)", "Ethereum Coin", "ETC"],
      correctAnswer: 1,
      explanation:
        "Ether (ETH) is the native cryptocurrency of the Ethereum blockchain.",
    },
    {
      id: 2,
      question: "What are smart contracts?",
      options: [
        "Legal documents",
        "Self-executing code on blockchain",
        "Mining software",
        "Wallet apps",
      ],
      correctAnswer: 1,
      explanation:
        "Smart contracts are self-executing programs that run on the blockchain when conditions are met.",
    },
    {
      id: 3,
      question: "What is the EVM?",
      options: [
        "Ethereum Validation Method",
        "Ethereum Virtual Machine",
        "Electronic Voting Machine",
        "Ether Value Metric",
      ],
      correctAnswer: 1,
      explanation:
        "EVM (Ethereum Virtual Machine) is the runtime environment for executing smart contracts on Ethereum.",
    },
    {
      id: 4,
      question: "What consensus mechanism does Ethereum currently use?",
      options: [
        "Proof of Work",
        "Proof of Stake",
        "Proof of Authority",
        "Proof of History",
      ],
      correctAnswer: 1,
      explanation:
        "Ethereum transitioned to Proof of Stake (PoS) after The Merge in September 2022.",
    },
    {
      id: 5,
      question: "What is gas in Ethereum?",
      options: [
        "Fuel for cars",
        "Transaction fee unit",
        "A type of token",
        "Mining reward",
      ],
      correctAnswer: 1,
      explanation:
        "Gas is the unit that measures computational effort required to execute transactions on Ethereum.",
    },
  ],

  layer2: [
    {
      id: 1,
      question: "What is the main purpose of Layer 2 solutions?",
      options: [
        "Replace Layer 1",
        "Scale blockchain transactions",
        "Mine cryptocurrency",
        "Store files",
      ],
      correctAnswer: 1,
      explanation:
        "Layer 2 solutions scale blockchain by processing transactions off the main chain while maintaining security.",
    },
    {
      id: 2,
      question: "Which of these is a Layer 2 scaling solution?",
      options: ["Bitcoin", "Optimism", "Solana", "Cardano"],
      correctAnswer: 1,
      explanation:
        "Optimism is a Layer 2 scaling solution for Ethereum using Optimistic Rollups.",
    },
    {
      id: 3,
      question: "What are rollups?",
      options: [
        "A type of wallet",
        "L2 solutions that bundle transactions",
        "Mining pools",
        "Token standards",
      ],
      correctAnswer: 1,
      explanation:
        "Rollups bundle multiple transactions together and process them off-chain before submitting to Layer 1.",
    },
    {
      id: 4,
      question: "What is the main benefit of Layer 2 solutions?",
      options: [
        "Higher security",
        "Lower fees and faster transactions",
        "More decentralization",
        "Better marketing",
      ],
      correctAnswer: 1,
      explanation:
        "Layer 2 solutions primarily reduce transaction fees and increase transaction speed.",
    },
    {
      id: 5,
      question: "Which is an example of a zk-Rollup?",
      options: ["Polygon PoS", "zkSync", "Binance Chain", "Ethereum"],
      correctAnswer: 1,
      explanation:
        "zkSync is a Layer 2 protocol using zero-knowledge rollups (zk-Rollups) for scaling.",
    },
  ],

  defi: [
    {
      id: 1,
      question: "What does DeFi stand for?",
      options: [
        "Digital Finance",
        "Decentralized Finance",
        "Defined Finance",
        "Delegated Finance",
      ],
      correctAnswer: 1,
      explanation:
        "DeFi stands for Decentralized Finance - financial services without intermediaries.",
    },
    {
      id: 2,
      question: "What is a liquidity pool?",
      options: [
        "A swimming pool",
        "Funds locked in smart contracts for trading",
        "A mining pool",
        "A wallet type",
      ],
      correctAnswer: 1,
      explanation:
        "Liquidity pools are collections of funds locked in smart contracts to facilitate decentralized trading.",
    },
    {
      id: 3,
      question: "What is yield farming?",
      options: [
        "Growing crops",
        "Earning rewards by providing liquidity",
        "Mining crypto",
        "Buying NFTs",
      ],
      correctAnswer: 1,
      explanation:
        "Yield farming involves providing liquidity to DeFi protocols in exchange for rewards.",
    },
    {
      id: 4,
      question: "What is an AMM?",
      options: [
        "Automated Market Maker",
        "Advanced Mining Method",
        "Asset Management Module",
        "Anonymous Money Market",
      ],
      correctAnswer: 0,
      explanation:
        "AMM (Automated Market Maker) is a protocol that uses algorithms to price assets in liquidity pools.",
    },
    {
      id: 5,
      question: "What is impermanent loss?",
      options: [
        "Losing your wallet",
        "Temporary loss from providing liquidity",
        "Permanent token burn",
        "Transaction fee",
      ],
      correctAnswer: 1,
      explanation:
        "Impermanent loss occurs when the price of tokens in a liquidity pool changes compared to when deposited.",
    },
  ],

  blockchain: [
    {
      id: 1,
      question: "What is a blockchain?",
      options: [
        "A type of currency",
        "A distributed ledger",
        "A mining device",
        "A wallet app",
      ],
      correctAnswer: 1,
      explanation:
        "A blockchain is a distributed ledger that records transactions across multiple computers.",
    },
    {
      id: 2,
      question: "What is a block in blockchain?",
      options: [
        "A barrier",
        "A container of transactions",
        "A type of coin",
        "A mining tool",
      ],
      correctAnswer: 1,
      explanation:
        "A block is a container that holds a batch of validated transactions.",
    },
    {
      id: 3,
      question: "What is mining in blockchain?",
      options: [
        "Digging for gold",
        "Validating transactions and creating blocks",
        "Buying tokens",
        "Trading NFTs",
      ],
      correctAnswer: 1,
      explanation:
        "Mining is the process of validating transactions and adding new blocks to the blockchain.",
    },
    {
      id: 4,
      question: "What is a hash?",
      options: [
        "A type of food",
        "A unique digital fingerprint",
        "A wallet address",
        "A token name",
      ],
      correctAnswer: 1,
      explanation:
        "A hash is a unique cryptographic output that acts as a digital fingerprint for data.",
    },
    {
      id: 5,
      question: "What makes blockchain immutable?",
      options: [
        "Government laws",
        "Cryptographic linking of blocks",
        "Company policies",
        "User agreements",
      ],
      correctAnswer: 1,
      explanation:
        "Blockchain is immutable because each block is cryptographically linked to the previous one.",
    },
  ],

  web3: [
    {
      id: 1,
      question: "What is Web3?",
      options: [
        "Third version of internet",
        "Decentralized internet built on blockchain",
        "A web browser",
        "A programming language",
      ],
      correctAnswer: 1,
      explanation:
        "Web3 is the decentralized version of the internet built on blockchain technology.",
    },
    {
      id: 2,
      question: "What is a dApp?",
      options: [
        "A mobile app",
        "Decentralized application",
        "A development tool",
        "A data protocol",
      ],
      correctAnswer: 1,
      explanation:
        "dApp (decentralized application) is an application that runs on a decentralized network.",
    },
    {
      id: 3,
      question: "What is a Web3 wallet?",
      options: [
        "A physical wallet",
        "Software for managing crypto assets",
        "A mining device",
        "A token type",
      ],
      correctAnswer: 1,
      explanation:
        "A Web3 wallet is software that allows users to store and manage their cryptocurrency and digital assets.",
    },
    {
      id: 4,
      question: "What does 'permissionless' mean in Web3?",
      options: [
        "No rules",
        "Anyone can participate without approval",
        "Free to use",
        "Requires permission",
      ],
      correctAnswer: 1,
      explanation:
        "Permissionless means anyone can participate in the network without needing approval from a central authority.",
    },
    {
      id: 5,
      question: "What are Web3 domains used for?",
      options: [
        "Regular websites",
        "Blockchain-based identity and naming",
        "Email addresses",
        "Social media",
      ],
      correctAnswer: 1,
      explanation:
        "Web3 domains provide blockchain-based identity and human-readable names for crypto addresses.",
    },
  ],
};

const categoryNames: Record<string, string> = {
  celo: "Celo Blockchain",
  ethereum: "Ethereum",
  layer2: "Layer 2 Solutions",
  defi: "DeFi",
  blockchain: "Blockchain Basics",
  web3: "Web3 & dApps",
};

// ==========================================
// COMPONENT
// ==========================================

interface PracticeQuizProps {
  params: {
    category: string;
  };
}

export default function PracticeQuiz({ params }: PracticeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(8);

  const categoryKey = params.category as keyof typeof categoryQuestions;
  const questions = categoryQuestions[categoryKey] || categoryQuestions.celo;
  const totalQuestions = questions.length;

  // Global timer
  useEffect(() => {
    if (!isComplete) {
      const timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isComplete]);

  // Question timer (5 seconds countdown)
  useEffect(() => {
    if (!showExplanation && !isComplete) {
      setQuestionTimer(8);
      const timer = setInterval(() => {
        setQuestionTimer((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 8;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestion, showExplanation, isComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTimeUp = () => {
    // Time's up - move to next question automatically
    setAnsweredQuestions(answeredQuestions + 1);

    // Auto advance to next question
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer === null) return;
    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(0);
    setIsComplete(false);
    setTimeElapsed(0);
    setQuestionTimer(5);
  };

  if (isComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <main className="flex-1 min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Practice Complete!
            </h1>
            <p className="text-lg text-muted-foreground">
              Great job on completing the practice session
            </p>
          </div>

          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 mb-6 shadow-xl">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">
                  {score}/{totalQuestions}
                </div>
                <div className="text-sm text-muted-foreground">
                  Correct Answers
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">
                  {percentage}%
                </div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 p-4 rounded-lg bg-muted/50">
              <Clock className="h-4 w-4" />
              <span>
                Total Time:{" "}
                <span className="font-bold text-foreground">
                  {formatTime(timeElapsed)}
                </span>
              </span>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleRetry}
                className="w-full bg-gradient-to-r from-primary to-primary/80"
                size="lg"
              >
                Practice Again
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-2"
                size="lg"
              >
                <Link href="/practice">Choose Another Category</Link>
              </Button>
            </div>
          </div>

          <div className="text-center p-6 rounded-xl bg-muted/30 border border-border/50">
            <p className="text-lg font-semibold mb-1">
              {percentage >= 80
                ? "🎉 Excellent work!"
                : percentage >= 60
                ? "💪 Good effort! Keep practicing"
                : "📚 Keep learning! You'll improve"}
            </p>
            <p className="text-sm text-muted-foreground">
              {percentage >= 80
                ? "You're mastering blockchain concepts!"
                : percentage >= 60
                ? "You're on the right track"
                : "Practice makes perfect"}
            </p>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect =
    selectedAnswer !== null && selectedAnswer === question.correctAnswer;

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <section className="py-6 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/practice">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Exit Practice
              </Link>
            </Button>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono font-semibold">
                  {formatTime(timeElapsed)}
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold">
                {currentQuestion + 1} / {totalQuestions}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-muted-foreground">
                {categoryNames[categoryKey] || "Practice"}
              </div>
              <div
                className={`text-sm font-bold ${
                  questionTimer <= 2
                    ? "text-red-500 animate-pulse"
                    : "text-muted-foreground"
                }`}
              >
                {questionTimer}s
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              {question.question}
            </h2>
          </div>

          {/* Answer Options - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === question.correctAnswer;
              const showResult = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`p-6 rounded-xl text-left transition-all duration-200 border-2 min-h-[120px] flex flex-col justify-center ${
                    showResult
                      ? isCorrectAnswer
                        ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20"
                        : isSelected
                        ? "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20"
                        : "border-border/50 bg-background/50 opacity-60"
                      : isSelected
                      ? "border-primary bg-primary/10 shadow-xl shadow-primary/20 scale-[1.02]"
                      : "border-border bg-background hover:border-primary/50 hover:bg-muted/50 hover:shadow-md"
                  } ${!showExplanation && "cursor-pointer"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold flex-shrink-0 ${
                          showResult
                            ? isCorrectAnswer
                              ? "border-green-500 bg-green-500 text-white"
                              : isSelected
                              ? "border-red-500 bg-red-500 text-white"
                              : "border-border/50 text-muted-foreground"
                            : isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span
                        className={`text-base font-medium leading-relaxed ${
                          isSelected && !showResult ? "text-foreground" : ""
                        }`}
                      >
                        {option}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {showResult && isCorrectAnswer && (
                        <Check className="h-6 w-6 text-green-500" />
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <X className="h-6 w-6 text-red-500" />
                      )}
                      {isSelected && !showResult && (
                        <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Answer Indicator */}
          {selectedAnswer !== null && !showExplanation && (
            <div className="mb-6 p-4 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold">
                  Answer{" "}
                  <span className="text-primary">
                    {String.fromCharCode(65 + selectedAnswer)}
                  </span>{" "}
                  selected
                </p>
              </div>
              <button
                onClick={() => setSelectedAnswer(null)}
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                Change answer
              </button>
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div
              className={`p-6 rounded-xl mb-6 border-2 ${
                isCorrect
                  ? "bg-green-500/10 border-green-500/30"
                  : selectedAnswer === null
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-red-500/10 border-red-500/30"
              }`}
            >
              <div className="flex items-start gap-4">
                {selectedAnswer === null ? (
                  <AlertCircle className="h-7 w-7 text-yellow-500 flex-shrink-0 mt-1" />
                ) : isCorrect ? (
                  <Check className="h-7 w-7 text-green-500 flex-shrink-0 mt-1" />
                ) : (
                  <X className="h-7 w-7 text-red-500 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <div className="font-bold text-lg mb-2">
                    {selectedAnswer === null
                      ? "Time's Up!"
                      : isCorrect
                      ? "Correct! 🎉"
                      : "Incorrect"}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {!showExplanation ? (
              <Button
                onClick={handleConfirmAnswer}
                disabled={selectedAnswer === null}
                className="w-full bg-black text-white shadow-lg disabled:opacity-40"
                size="lg"
              >
                {selectedAnswer === null
                  ? "Select an answer"
                  : "Confirm Answer"}
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="w-full bg-green-600 text-white shadow-lg"
                size="lg"
              >
                {currentQuestion < totalQuestions - 1 ? (
                  <>
                    Next Question
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    View Results
                    <Trophy className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Score Display */}
          <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border/50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current Score:</span>
              <span className="font-bold text-lg text-primary">
                {score} / {answeredQuestions}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
