import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, User, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type SuggestedQuestion = {
  id: string;
  text: string;
};

const suggestedQuestions: SuggestedQuestion[] = [
  { id: '1', text: 'What are the latest developments in politics?' },
  { id: '2', text: 'Give me a summary of today\'s top stories' },
  { id: '3', text: 'What\'s happening in technology news?' },
  { id: '4', text: 'Tell me about recent scientific breakthroughs' }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add initial greeting message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: '0',
            text: "Hello! I'm FactVerse AI Assistant. Ask me about any news topic, and I'll provide you with the latest, fact-checked information. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [messages, isOpen]);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      generateBotResponse(text);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string) => {
    let botResponse = '';
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('politics') || lowerCaseMessage.includes('election')) {
      botResponse = "Recent political developments include ongoing debates about economic policies and international relations. According to reliable sources, the upcoming election is expected to focus on healthcare reform and climate initiatives.";
    } else if (lowerCaseMessage.includes('technology') || lowerCaseMessage.includes('tech')) {
      botResponse = "The technology sector is seeing significant advancements in artificial intelligence and quantum computing. Major tech companies have announced new initiatives to address privacy concerns and ethical AI development.";
    } else if (lowerCaseMessage.includes('science') || lowerCaseMessage.includes('research')) {
      botResponse = "Recent scientific breakthroughs include promising results in cancer treatment research and renewable energy technologies. A peer-reviewed study published last week revealed new insights into climate change mitigation strategies.";
    } else if (lowerCaseMessage.includes('health') || lowerCaseMessage.includes('medical')) {
      botResponse = "Health experts are reporting progress in vaccine development for several diseases. New public health guidelines emphasize preventative care and mental health awareness, based on extensive clinical research.";
    } else if (lowerCaseMessage.includes('today') || lowerCaseMessage.includes('latest')) {
      botResponse = "Today's top stories include diplomatic talks between major nations, breakthroughs in sustainable technology, and updates on global health initiatives. All information has been verified through multiple reliable sources.";
    } else {
      botResponse = "That's an interesting topic. Based on verified sources, this area has seen significant developments recently. Would you like me to provide more specific information or focus on particular aspects of this subject?";
    }
    
    const botMessage: Message = {
      id: Date.now().toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-20"
        aria-label="Open chat assistant"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="h-6 w-6" />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-6 right-6 w-full sm:w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden z-30 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                <h3 className="font-semibold">FactVerse Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 rounded-full p-2 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mx-2 ${
                        message.sender === 'user' 
                          ? 'bg-blue-100 dark:bg-blue-900' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                    <div 
                      className={`p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p 
                        className={`text-xs mt-1 ${
                          message.sender === 'user' 
                            ? 'text-blue-200' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Bot typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 flex justify-start"
                >
                  <div className="flex max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mx-2">
                      <Bot className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested questions (only show if no messages yet) */}
            {messages.length <= 1 && (
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleSuggestedQuestion(question.text)}
                      className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 transition-colors"
                    >
                      {question.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Input area */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about any news topic..."
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className={`px-4 py-2 rounded-r-lg ${
                    !inputText.trim() || isTyping
                      ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white transition-colors`}
                >
                  {isTyping ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;